import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, mode, subject, chapter } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    let systemPrompt = "";

    if (mode === "teacher") {
      systemPrompt = `You are an expert CBSE Class 12 ${subject || ""} teacher explaining "${chapter || "this topic"}" to a student.

Your explanation style:
- Start with a simple analogy or real-world connection
- Break down the concept step-by-step like a patient teacher
- Use clear headings with markdown (## for sections)
- Include key formulas in bold
- Give solved examples with step-by-step working
- Highlight common mistakes students make
- End with a brief exam-focused summary
- Use bullet points for clarity
- Keep tone encouraging and exam-focused
- If the topic involves math/physics, show derivations step by step
- Use LaTeX for ALL mathematical equations, expressions, and symbols.
- ALWAYS wrap inline math with single $ signs (e.g., $E=mc^2$) and block math with double $$ signs.
- Mention mark weightage and question patterns from CBSE boards`;
    } else {
      // Chatbot / doubt solving mode
      systemPrompt = `You are an advanced AI study assistant for CBSE Class 12 students. You help with Mathematics, Physics, Chemistry, and English Core.

Your capabilities:
- Explain concepts clearly with examples
- Solve numerical problems step-by-step showing all working
- Provide CBSE exam-focused answers
- Help with derivations, proofs, and chemical reactions
- Answer in structured format with markdown
- Use LaTeX for ALL mathematical equations, expressions, and symbols.
- ALWAYS wrap inline math with single $ signs (e.g., $x^2 = 4$) and block math with double $$ signs.
- For numericals: show Given → Formula → Substitution → Answer (with units)
- For theory: use definitions, key points, and diagrams descriptions
- Be encouraging and supportive
- If asked about a specific chapter, provide board-exam relevant content
- Always mention if a topic is high-weightage for boards`;
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
