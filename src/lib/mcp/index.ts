import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listSubjectsTool from "./tools/list-subjects";
import listChaptersTool from "./tools/list-chapters";
import getProgressTool from "./tools/get-progress";
import saveProgressTool from "./tools/save-progress";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "ai-study-command",
  title: "AI Study Command",
  version: "0.1.0",
  instructions:
    "Tools for AI Study Command, an Indian education study platform (CBSE classes, entrance exams, government exams). Use `get_profile` for the learner's track, `list_subjects` and `list_chapters` to browse the curriculum, and `get_progress` / `save_progress` to read and update where the learner left off.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    getProfileTool,
    listSubjectsTool,
    listChaptersTool,
    getProgressTool,
    saveProgressTool,
  ],
});
