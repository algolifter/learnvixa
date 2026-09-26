import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getPlaceholderSubject } from "@/data/curriculum";

export default defineTool({
  name: "list_chapters",
  title: "List chapters",
  description: "List the chapters of a subject, with whether each chapter's content is ready yet.",
  inputSchema: {
    subjectId: z.string().trim().min(1).describe("Subject id returned by list_subjects."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ subjectId }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const subject = getPlaceholderSubject(subjectId);
    if (!subject) {
      return {
        content: [{ type: "text", text: `No subject found with id "${subjectId}".` }],
        isError: true,
      };
    }
    const chapters = subject.chapters.map((c) => ({
      id: c.id,
      name: c.name,
      comingSoon: c.comingSoon === true,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(chapters) }],
      structuredContent: {
        subject: { id: subject.id, name: subject.name },
        chapters,
      },
    };
  },
});
