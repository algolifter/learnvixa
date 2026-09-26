import { defineTool } from "@lovable.dev/mcp-js";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "get_profile",
  title: "Get my study profile",
  description:
    "Get the signed-in learner's study profile: name, email, and selected track (category, exam, class, stream).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (_args, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("user_profiles")
      .select("name, email, category, exam_id, class_level, stream")
      .eq("user_id", ctx.getUserId())
      .maybeSingle();

    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    if (!data) {
      return {
        content: [
          { type: "text", text: "No study profile yet. Finish onboarding in the app first." },
        ],
      };
    }
    const profile = {
      name: data.name,
      email: data.email,
      category: data.category,
      examId: data.exam_id,
      classLevel: data.class_level,
      stream: data.stream,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile) }],
      structuredContent: { profile },
    };
  },
});
