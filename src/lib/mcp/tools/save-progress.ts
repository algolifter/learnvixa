import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "save_progress",
  title: "Save study progress",
  description:
    "Save where the signed-in learner left off (subject, chapter, section) and optionally add study time.",
  inputSchema: {
    subjectId: z.string().trim().min(1).describe("Subject id the learner is studying."),
    chapterId: z.string().trim().min(1).describe("Chapter id the learner is studying."),
    section: z
      .string()
      .trim()
      .optional()
      .describe("Section within the chapter, e.g. 'notes' or 'revision'."),
    addSeconds: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe("Seconds of study time to add to the total."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false },
  handler: async ({ subjectId, chapterId, section, addSeconds }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const userId = ctx.getUserId();
    const supabase = supabaseForUser(ctx);

    const { data: existing, error: readError } = await supabase
      .from("study_progress")
      .select("id, time_spent_seconds")
      .eq("user_id", userId)
      .maybeSingle();
    if (readError) {
      return { content: [{ type: "text", text: readError.message }], isError: true };
    }

    const timeSpent = (existing?.time_spent_seconds ?? 0) + (addSeconds ?? 0);
    const row = {
      user_id: userId,
      last_subject_id: subjectId,
      last_chapter_id: chapterId,
      last_section: section ?? null,
      time_spent_seconds: timeSpent,
      updated_at: new Date().toISOString(),
    };

    const query = existing
      ? supabase.from("study_progress").update(row).eq("id", existing.id).select().maybeSingle()
      : supabase.from("study_progress").insert(row).select().maybeSingle();

    const { data, error } = await query;
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }

    const progress = {
      lastSubjectId: data?.last_subject_id ?? subjectId,
      lastChapterId: data?.last_chapter_id ?? chapterId,
      lastSection: data?.last_section ?? null,
      timeSpentSeconds: data?.time_spent_seconds ?? timeSpent,
    };
    return {
      content: [{ type: "text", text: `Progress saved: ${JSON.stringify(progress)}` }],
      structuredContent: { progress },
    };
  },
});
