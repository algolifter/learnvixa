// Content registry — maps subject+chapter to pre-written content
import { physicsCh1, type ChapterContent, type TopicPage } from "./physics-ch1";

export type { ChapterContent, TopicPage };

// Registry: key = "subjectId-chapterId"
const contentRegistry: Record<string, ChapterContent> = {
  "physics-1": physicsCh1,
};

export function getChapterContent(subjectId: string, chapterId: number): ChapterContent | null {
  return contentRegistry[`${subjectId}-${chapterId}`] || null;
}

export function hasStaticContent(subjectId: string, chapterId: number): boolean {
  return `${subjectId}-${chapterId}` in contentRegistry;
}
