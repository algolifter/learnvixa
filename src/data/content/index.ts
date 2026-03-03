// Content registry — maps subject+chapter to pre-written content
import { physicsCh1, type ChapterContent, type TopicPage } from "./physics-ch1";
import { physicsCh2 } from "./physics-ch2";
import { physicsCh3 } from "./physics-ch3";
import { physicsCh4 } from "./physics-ch4";
import { physicsCh5 } from "./physics-ch5";
import { physicsCh6 } from "./physics-ch6";
import { physicsCh7 } from "./physics-ch7";
import { physicsCh8 } from "./physics-ch8";
import { physicsCh9 } from "./physics-ch9";
import { physicsCh10 } from "./physics-ch10";
import { physicsCh11 } from "./physics-ch11";
import { physicsCh12 } from "./physics-ch12";
import { physicsCh13 } from "./physics-ch13";
import { physicsCh14 } from "./physics-ch14";
import { chemistryCh1 } from "./chemistry-ch1";
import { chemistryCh2 } from "./chemistry-ch2";
import { chemistryCh3 } from "./chemistry-ch3";
import { chemistryCh4 } from "./chemistry-ch4";
import { chemistryCh5 } from "./chemistry-ch5";
import { chemistryCh6 } from "./chemistry-ch6";
import { chemistryCh7 } from "./chemistry-ch7";
import { chemistryCh8 } from "./chemistry-ch8";
import { chemistryCh9 } from "./chemistry-ch9";
import { chemistryCh10 } from "./chemistry-ch10";
import { chemistryCh11 } from "./chemistry-ch11";
import { chemistryCh12 } from "./chemistry-ch12";
import { mathsCh1 } from "./maths-ch1";
import { mathsCh2 } from "./maths-ch2";
import { mathsCh3 } from "./maths-ch3";
import { mathsCh4 } from "./maths-ch4";
import { mathsCh5 } from "./maths-ch5";
import { mathsCh6 } from "./maths-ch6";
import { mathsCh7 } from "./maths-ch7";
import { mathsCh8 } from "./maths-ch8";
import { mathsCh9 } from "./maths-ch9";
import { mathsCh10 } from "./maths-ch10";
import { mathsCh11 } from "./maths-ch11";
import { mathsCh12 } from "./maths-ch12";
import { mathsCh13 } from "./maths-ch13";
import { englishCh1 } from "./english-ch1";
import { englishCh2 } from "./english-ch2";
import { englishCh3 } from "./english-ch3";
import { englishCh4 } from "./english-ch4";
import { englishCh5 } from "./english-ch5";
import { englishCh6 } from "./english-ch6";
import { englishCh7 } from "./english-ch7";
import { englishCh8 } from "./english-ch8";
import { englishCh9 } from "./english-ch9";
import { englishCh10 } from "./english-ch10";
import { englishCh11 } from "./english-ch11";
import { englishCh12 } from "./english-ch12";
import { englishCh13 } from "./english-ch13";
import { englishCh14 } from "./english-ch14";
import { englishCh15 } from "./english-ch15";
import { englishCh16 } from "./english-ch16";
import { englishCh17 } from "./english-ch17";
import { englishCh18 } from "./english-ch18";
import { englishCh19 } from "./english-ch19";
import { englishCh20 } from "./english-ch20";

export type { ChapterContent, TopicPage };

// Registry: key = "subjectId-chapterId"
const contentRegistry: Record<string, ChapterContent> = {
  "physics-1": physicsCh1,
  "physics-2": physicsCh2,
  "physics-3": physicsCh3,
  "physics-4": physicsCh4,
  "physics-5": physicsCh5,
  "physics-6": physicsCh6,
  "physics-7": physicsCh7,
  "physics-8": physicsCh8,
  "physics-9": physicsCh9,
  "physics-10": physicsCh10,
  "physics-11": physicsCh11,
  "physics-12": physicsCh12,
  "physics-13": physicsCh13,
  "physics-14": physicsCh14,
  "chemistry-1": chemistryCh1,
  "chemistry-2": chemistryCh2,
  "chemistry-3": chemistryCh3,
  "chemistry-4": chemistryCh4,
  "chemistry-5": chemistryCh5,
  "chemistry-6": chemistryCh6,
  "chemistry-7": chemistryCh7,
  "chemistry-8": chemistryCh8,
  "chemistry-9": chemistryCh9,
  "chemistry-10": chemistryCh10,
  "chemistry-11": chemistryCh11,
  "chemistry-12": chemistryCh12,
  "mathematics-1": mathsCh1,
  "mathematics-2": mathsCh2,
  "mathematics-3": mathsCh3,
  "mathematics-4": mathsCh4,
  "mathematics-5": mathsCh5,
  "mathematics-6": mathsCh6,
  "mathematics-7": mathsCh7,
  "mathematics-8": mathsCh8,
  "mathematics-9": mathsCh9,
  "mathematics-10": mathsCh10,
  "mathematics-11": mathsCh11,
  "mathematics-12": mathsCh12,
  "mathematics-13": mathsCh13,
  "english-1": englishCh1,
  "english-2": englishCh2,
  "english-3": englishCh3,
  "english-4": englishCh4,
  "english-5": englishCh5,
  "english-6": englishCh6,
  "english-7": englishCh7,
  "english-8": englishCh8,
  "english-9": englishCh9,
  "english-10": englishCh10,
  "english-11": englishCh11,
  "english-12": englishCh12,
  "english-13": englishCh13,
  "english-14": englishCh14,
  "english-15": englishCh15,
  "english-16": englishCh16,
  "english-17": englishCh17,
  "english-18": englishCh18,
  "english-19": englishCh19,
  "english-20": englishCh20,
};

export function getChapterContent(subjectId: string, chapterId: number): ChapterContent | null {
  return contentRegistry[`${subjectId}-${chapterId}`] || null;
}

export function hasStaticContent(subjectId: string, chapterId: number): boolean {
  return `${subjectId}-${chapterId}` in contentRegistry;
}
