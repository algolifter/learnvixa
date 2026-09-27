import { cleanFakeMath } from "@/lib/cleanFakeMath";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { streamAI, Msg } from "@/lib/ai-stream";
import { Loader2, RefreshCw } from "lucide-react";

interface AIExplainerProps {
  subject: string;
  chapter: string;
  prompt: string;
  /** Unique cache key so content persists across tab switches */
  cacheKey: string;
}

// Simple in-memory cache so switching tabs doesn't re-fetch
const contentCache = new Map<string, string>();

export default function AIExplainer({ subject, chapter, prompt, cacheKey }: AIExplainerProps) {
  const [content, setContent] = useState(() => contentCache.get(cacheKey) || "");
  const [loading, setLoading] = useState(!contentCache.has(cacheKey));
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);
  const hasStarted = useRef(false);

  const generate = () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setContent("");
    setError("");
    setLoading(true);
    contentCache.delete(cacheKey);

    let accumulated = "";

    const messages: Msg[] = [{ role: "user", content: prompt }];

    streamAI({
      messages,
      mode: "teacher",
      subject,
      chapter,
      onDelta: (text) => {
        accumulated += text;
        setContent(accumulated);
        contentCache.set(cacheKey, accumulated);
      },
      onDone: () => setLoading(false),
      onError: (err) => {
        setError(err);
        setLoading(false);
      },
      signal: controller.signal,
    });
  };

  useEffect(() => {
    if (contentCache.has(cacheKey)) {
      setContent(contentCache.get(cacheKey)!);
      setLoading(false);
      return;
    }
    if (!hasStarted.current) {
      hasStarted.current = true;
      generate();
    }
    return () => abortRef.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey]);

  if (error) {
    return (
      <div className="glass rounded-xl p-6 text-center space-y-3">
        <p className="text-destructive text-sm">{error}</p>
        <button
          onClick={generate}
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <RefreshCw className="w-4 h-4" /> Try again
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-5 space-y-4">
      {loading && !content && (
        <div className="flex items-center gap-2 text-primary text-sm">
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating detailed explanation for <strong>{chapter}</strong>...
        </div>
      )}

      {content && (
        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed
          prose-headings:text-foreground prose-headings:font-display
          prose-h2:text-base prose-h2:mt-6 prose-h2:mb-2
          prose-h3:text-sm prose-h3:mt-4 prose-h3:mb-1
          prose-strong:text-foreground
          prose-li:my-0.5
          prose-p:my-2
          prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-code:text-xs
          prose-pre:bg-muted prose-pre:rounded-lg prose-pre:p-3
          prose-blockquote:border-primary prose-blockquote:text-muted-foreground
        ">
          <ReactMarkdown>{cleanFakeMath(content)}</ReactMarkdown>
        </div>
      )}

      {loading && content && (
        <div className="flex items-center gap-2 text-primary/60 text-xs">
          <Loader2 className="w-3 h-3 animate-spin" /> Still generating...
        </div>
      )}

      {!loading && content && (
        <button
          onClick={generate}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <RefreshCw className="w-3 h-3" /> Regenerate
        </button>
      )}
    </div>
  );
}
