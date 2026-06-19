import { Subject } from "@/data/subjects";
import { getCurriculumSubjects } from "@/data/curriculum";

// Re-export the canonical curriculum dispatcher. The actual hierarchy lives in
// `curriculum.ts`. CBSE Class 12 SCIENCE returns `null` so the caller falls
// back to the real authored content in `subjects.ts`.
export function getExamSubjects(
  category: string,
  examId?: string,
  classLevel?: string,
  stream?: string,
): Subject[] | null {
  return getCurriculumSubjects(category, examId, classLevel, stream);
}
