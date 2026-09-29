import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, mode, subject, chapter, context } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const ctx = (context && typeof context === "object") ? context : {};
    const clean = (v: unknown) => typeof v === "string" ? v.slice(0, 80).replace(/[\n\r"`]/g, " ") : "";
    const cls = clean(ctx.classLevel).replace("class-", "Class ").replace("lkg", "LKG").replace("ukg", "UKG");
    const board = clean(ctx.board);
    const stream = clean(ctx.stream);
    const exam = clean(ctx.examId);
    const category = clean(ctx.category);
    const learner = category === "entrance" && exam
      ? `a student preparing for the ${exam.toUpperCase()} entrance exam`
      : category === "government" && exam
      ? `a candidate preparing for ${exam.toUpperCase()} government exams`
      : `a ${board || "CBSE"} ${cls || "school"} student${stream ? ` (${stream} stream)` : ""}`;

    const formatRules = `
Formatting and quality rules (follow strictly):
- Use markdown: ## for main sections, ### for sub-sections, bullet or numbered lists for steps.
- Match the depth and vocabulary to the student's level; be accurate to the ${board || "CBSE"} syllabus where relevant.
- Explain difficult ideas step by step and give at least one relevant example.
- Do NOT repeat the same point, heading or sentence. No filler, no generic motivational padding.
- Use LaTeX ONLY for genuine math/science: equations, variables, formulas, chemical equations, units. Inline: $...$, block: $$...$$.
- NEVER put ordinary words or ideas in LaTeX. Never write things like $\\text{Context} + \\text{Quotes} = \\text{Full Marks}$ — write "Understanding the context and using textual quotes help you score full marks." instead.
- Never use \\text{} to write whole sentences. For English, History and other theory subjects, normally use no LaTeX at all.
- Stay on the requested subject and chapter.`;

    let systemPrompt = "";
    if (mode === "teacher") {
      systemPrompt = `You are an expert, patient teacher explaining "${clean(chapter) || "this topic"}"${subject ? ` in ${clean(subject)}` : ""} to ${learner}.
Structure: a short real-world hook, core concepts step by step, key formulas or facts (in bold), solved examples where suitable, common mistakes, and a short exam-focused summary.
${formatRules}`;
    } else {
      systemPrompt = `You are a friendly AI study assistant helping ${learner}. Answer the student's question directly and clearly.
- For numericals: Given → Formula → Substitution → Answer (with units).
- For theory: definition, key points, and an example.
- Keep answers focused; longer only when the question needs it.
${formatRules}`;
    }
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    const isImageRequest = /generate.*image|create.*image|draw\s|show.*image|picture of/i.test(lastMessage);

    if (isImageRequest) {
      const imgResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-pro-image-preview",
          messages: [
            { role: "user", content: messages[messages.length - 1].content }
          ],
          modalities: ["image", "text"]
        }),
      });

      if (!imgResponse.ok) {
        const t = await imgResponse.text();
        console.error("Image gen error:", imgResponse.status, t);
        return new Response(JSON.stringify({ error: "Image generation failed." }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const data = await imgResponse.json();
      console.log("Image generation response:", JSON.stringify(data).substring(0, 500));
      const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      const text = data.choices?.[0]?.message?.content || "";

      if (!imageUrl) {
        console.error("No image URL in response");
        return new Response(JSON.stringify({ error: "No image generated" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ image: imageUrl, text }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }


    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait a moment and try again." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-study error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
