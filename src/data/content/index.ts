// Content registry — maps subject+chapter to pre-written content
import { physicsCh1, type ChapterContent, type TopicPage } from "./physics-ch1";
import { chemistryCh1 } from "./chemistry-ch1";
import { chemistryCh2 } from "./chemistry-ch2";
import { chemistryCh3 } from "./chemistry-ch3";
import { chemistryCh4 } from "./chemistry-ch4";
import { chemistryCh5 } from "./chemistry-ch5";
import { chemistryCh6 } from "./chemistry-ch6";

export type { ChapterContent, TopicPage };

// Registry: key = "subjectId-chapterId"
const contentRegistry: Record<string, ChapterContent> = {
  "physics-1": physicsCh1,
  "chemistry-1": chemistryCh1,
  "chemistry-2": chemistryCh2,
  "chemistry-3": chemistryCh3,
  "chemistry-4": chemistryCh4,
  "chemistry-5": chemistryCh5,
  "chemistry-6": chemistryCh6,
};

export function getChapterContent(subjectId: string, chapterId: number): ChapterContent | null {
  return contentRegistry[`${subjectId}-${chapterId}`] || null;
}

export function hasStaticContent(subjectId: string, chapterId: number): boolean {
  return `${subjectId}-${chapterId}` in contentRegistry;
}
