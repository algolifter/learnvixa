export type Msg = { role: "user" | "assistant"; content: string };

export const AI_CONTEXT_KEY = "learnvixa-ai-context";
const readContext = () => {
  try { const v = localStorage.getItem(AI_CONTEXT_KEY); return v ? JSON.parse(v) : undefined; } catch { return undefined; }
};

const AI_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-study`;

export async function streamAI({
  messages,
  mode,
  subject,
  chapter,
  onDelta,
  onDone,
  onError,
  signal,
}: {
  messages: Msg[];
  mode: "teacher" | "chatbot";
  subject?: string;
  chapter?: string;
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
  signal?: AbortSignal;
}) {
  try {
    const resp = await fetch(AI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages, mode, subject, chapter, context: readContext() }),
      signal,
    });

    if (!resp.ok) {
      const data = await resp.json().catch(() => ({ error: "Request failed" }));
      onError(data.error || `Error ${resp.status}`);
      return;
    }
    const contentType = resp.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await resp.json();
      if (data.error) {
        onError(data.error);
        return;
      }
      if (data.image) {
        // Display the image and any accompanying text
        onDelta(`![Generated Image](${data.image})`);
        if (data.text) {
          onDelta(`\n\n${data.text}`);
        }
      } else if (data.text) {
        onDelta(data.text);
      }
      onDone();
      return;
    }

    if (!resp.body) {
      onError("No response stream");
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let newlineIdx: number;
      while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, newlineIdx);
        buffer = buffer.slice(newlineIdx + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          onDone();
          return;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          buffer = line + "\n" + buffer;
          break;
        }
      }
    }

    // Final flush
    if (buffer.trim()) {
      for (let raw of buffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) onDelta(content);
        } catch { /* ignore */ }
      }
    }

    onDone();
  } catch (e: any) {
    if (e.name === "AbortError") { onDone(); return; }
    onError(e.message || "Connection failed");
  }
}
