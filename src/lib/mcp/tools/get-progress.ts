import { defineTool } from "@lovable.dev/mcp-js";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "get_progress",
  title: "Get my study progress",
  description:
    "Get the signed-in learner's saved study progress: where they left off and total time spent.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (_args, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("study_progress")
      .select("last_subject_id, last_chapter_id, last_section, time_spent_seconds, updated_at")
      .eq("user_id", ctx.getUserId())
      .maybeSingle();

    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    if (!data) {
      return { content: [{ type: "text", text: "No study progress recorded yet." }] };
    }
    const progress = {
      lastSubjectId: data.last_subject_id,
      lastChapterId: data.last_chapter_id,
      lastSection: data.last_section,
      timeSpentSeconds: data.time_spent_seconds,
      updatedAt: data.updated_at,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(progress) }],
      structuredContent: { progress },
    };
  },
});
