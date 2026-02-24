// Content registry — maps subject+chapter to pre-written content
import { physicsCh1, type ChapterContent, type TopicPage } from "./physics-ch1";
import { physicsCh2 } from "./physics-ch2";
import { physicsCh3 } from "./physics-ch3";
import { chemistryCh1 } from "./chemistry-ch1";
import { chemistryCh2 } from "./chemistry-ch2";
import { chemistryCh3 } from "./chemistry-ch3";
import { chemistryCh4 } from "./chemistry-ch4";
import { chemistryCh5 } from "./chemistry-ch5";
import { chemistryCh6 } from "./chemistry-ch6";
import { chemistryCh7 } from "./chemistry-ch7";
import { chemistryCh8 } from "./chemistry-ch8";
import { mathsCh1 } from "./maths-ch1";
import { mathsCh2 } from "./maths-ch2";
import { englishCh1 } from "./english-ch1";
import { englishCh2 } from "./english-ch2";

export type { ChapterContent, TopicPage };

// Registry: key = "subjectId-chapterId"
const contentRegistry: Record<string, ChapterContent> = {
  "physics-1": physicsCh1,
  "physics-2": physicsCh2,
  "physics-3": physicsCh3,
  "chemistry-1": chemistryCh1,
  "chemistry-2": chemistryCh2,
  "chemistry-3": chemistryCh3,
  "chemistry-4": chemistryCh4,
  "chemistry-5": chemistryCh5,
  "chemistry-6": chemistryCh6,
  "chemistry-7": chemistryCh7,
  "chemistry-8": chemistryCh8,
  "mathematics-1": mathsCh1,
  "mathematics-2": mathsCh2,
  "english-1": englishCh1,
  "english-2": englishCh2,
};

export function getChapterContent(subjectId: string, chapterId: number): ChapterContent | null {
  return contentRegistry[`${subjectId}-${chapterId}`] || null;
}

export function hasStaticContent(subjectId: string, chapterId: number): boolean {
  return `${subjectId}-${chapterId}` in contentRegistry;
}
