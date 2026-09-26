import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getCurriculumSubjects } from "@/data/curriculum";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_subjects",
  title: "List subjects",
  description:
    "List the subjects for a study track. Defaults to the signed-in learner's own track when no arguments are given.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Track category, e.g. 'school', 'entrance' or 'government'."),
    examId: z.string().optional().describe("Exam id, e.g. 'jee', 'neet', 'upsc'."),
    classLevel: z.string().optional().describe("Class level, e.g. 'class-1', 'class-12'."),
    stream: z.string().optional().describe("Stream for senior classes, e.g. 'science'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (args, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }

    let { category, examId, classLevel, stream } = args;
    if (!category) {
      const supabase = supabaseForUser(ctx);
      const { data, error } = await supabase
        .from("user_profiles")
        .select("category, exam_id, class_level, stream")
        .eq("user_id", ctx.getUserId())
        .maybeSingle();
      if (error) {
        return { content: [{ type: "text", text: error.message }], isError: true };
      }
      if (!data) {
        return {
          content: [
            {
              type: "text",
              text: "No study profile yet — pass a category (and exam or class) explicitly.",
            },
          ],
          isError: true,
        };
      }
      category = data.category ?? undefined;
      examId = examId ?? data.exam_id ?? undefined;
      classLevel = classLevel ?? data.class_level ?? undefined;
      stream = stream ?? data.stream ?? undefined;
    }

    if (!category) {
      return { content: [{ type: "text", text: "A category is required." }], isError: true };
    }

    const subjects = getCurriculumSubjects(category, examId, classLevel, stream);
    if (!subjects) {
      return {
        content: [
          {
            type: "text",
            text: "This track uses the fully authored in-app curriculum; browse it inside the app.",
          },
        ],
      };
    }

    const list = subjects.map((s) => ({
      id: s.id,
      name: s.name,
      chapterCount: s.chapters.length,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(list) }],
      structuredContent: { track: { category, examId, classLevel, stream }, subjects: list },
    };
  },
});
