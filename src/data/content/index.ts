// Content registry — maps subject+chapter to pre-written content
import { physicsCh1, type ChapterContent, type TopicPage } from "./physics-ch1";
import { chemistryCh1 } from "./chemistry-ch1";
import { chemistryCh2 } from "./chemistry-ch2";
import { chemistryCh3 } from "./chemistry-ch3";

export type { ChapterContent, TopicPage };

// Registry: key = "subjectId-chapterId"
const contentRegistry: Record<string, ChapterContent> = {
  "physics-1": physicsCh1,
  "chemistry-1": chemistryCh1,
  "chemistry-2": chemistryCh2,
  "chemistry-3": chemistryCh3,
};

export function getChapterContent(subjectId: string, chapterId: number): ChapterContent | null {
  return contentRegistry[`${subjectId}-${chapterId}`] || null;
}

export function hasStaticContent(subjectId: string, chapterId: number): boolean {
  return `${subjectId}-${chapterId}` in contentRegistry;
}
