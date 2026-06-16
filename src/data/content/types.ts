// Shared content schema — all chapter files conform to this shape.
// This is the canonical structured representation of educational content.

export interface TopicPage {
  title: string;
  content: string; // Markdown
}

export interface QuestionItem {
  question: string;
  answer?: string;
}

export interface ChapterContent {
  topics: TopicPage[];
  notes: string;
  importantPoints?: string[];
  commonMistakes?: string[];
  examStrategy?: string[];
  examples?: string[];
  summary?: string;
  questions2?: QuestionItem[];
  questions3?: QuestionItem[];
  questions5?: QuestionItem[];
  revision?: {
    quickPoints: string[];
    formulas?: string[];
    diagrams?: string[];
    tipsAndTricks?: string[];
  };
}

// Structured metadata describing where a chapter lives in the catalog.
// (Category → Board/Exam → Class → Subject → Chapter → Section)
export interface ChapterMeta {
  category: string;   // e.g. "school", "competitive"
  board: string;      // e.g. "cbse", "jee", "neet"
  classLevel: string; // e.g. "12"
  subjectId: string;  // e.g. "physics"
  chapterId: number;  // e.g. 1
  filename: string;
}

export interface ChapterRecord extends ChapterMeta {
  content: ChapterContent;
}
