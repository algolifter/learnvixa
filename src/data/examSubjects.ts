import { Subject } from "@/data/subjects";

// Subject definitions for different exam types
// CBSE Class 12 Science uses the real subjects from subjects.ts
// Everything else uses placeholder subjects with "Coming Soon" chapters

export interface ExamSubjectConfig {
  subjects: Subject[];
  label: string;
}

const placeholderChapters = (names: string[]) =>
  names.map((name, i) => ({ id: i + 1, name }));

// --- JEE ---
const jeeSubjects: Subject[] = [
  {
    id: "jee-physics",
    name: "Physics",
    icon: "⚡",
    color: "38 92% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Mechanics", "Thermodynamics", "Electrostatics", "Current Electricity",
      "Magnetism", "Optics", "Modern Physics", "Waves & Oscillations",
    ]),
  },
  {
    id: "jee-chemistry",
    name: "Chemistry",
    icon: "🧪",
    color: "150 80% 45%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Atomic Structure", "Chemical Bonding", "Thermodynamics", "Equilibrium",
      "Organic Chemistry Basics", "Coordination Compounds", "Electrochemistry", "Polymers",
    ]),
  },
  {
    id: "jee-maths",
    name: "Mathematics",
    icon: "📐",
    color: "195 100% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Algebra", "Calculus", "Coordinate Geometry", "Trigonometry",
      "Vectors & 3D", "Probability & Statistics", "Differential Equations", "Matrices & Determinants",
    ]),
  },
];

// --- NEET ---
const neetSubjects: Subject[] = [
  {
    id: "neet-biology",
    name: "Biology",
    icon: "🧬",
    color: "120 70% 45%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Cell Biology", "Genetics & Evolution", "Human Physiology", "Plant Physiology",
      "Ecology & Environment", "Reproduction", "Biotechnology", "Animal Kingdom",
    ]),
  },
  {
    id: "neet-physics",
    name: "Physics",
    icon: "⚡",
    color: "38 92% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Mechanics", "Thermodynamics", "Optics", "Electrostatics",
      "Current Electricity", "Modern Physics", "Waves", "Magnetism",
    ]),
  },
  {
    id: "neet-chemistry",
    name: "Chemistry",
    icon: "🧪",
    color: "150 80% 45%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biomolecules",
      "Polymers", "Environmental Chemistry", "Chemical Kinetics", "Electrochemistry",
    ]),
  },
];

// --- UPSC ---
const upscSubjects: Subject[] = [
  {
    id: "upsc-history",
    name: "History",
    icon: "📜",
    color: "25 80% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Ancient India", "Medieval India", "Modern India", "World History",
      "Art & Culture", "Indian National Movement", "Post-Independence India",
    ]),
  },
  {
    id: "upsc-polity",
    name: "Indian Polity",
    icon: "🏛️",
    color: "210 70% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Constitution", "Parliament", "Judiciary", "State Government",
      "Local Government", "Fundamental Rights", "Directive Principles",
    ]),
  },
  {
    id: "upsc-economy",
    name: "Economy",
    icon: "📊",
    color: "150 60% 45%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Indian Economy Basics", "Planning & NITI Aayog", "Money & Banking",
      "Fiscal Policy", "International Trade", "Agriculture", "Industry",
    ]),
  },
  {
    id: "upsc-geography",
    name: "Geography",
    icon: "🌍",
    color: "170 70% 45%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Physical Geography", "Indian Geography", "World Geography",
      "Climatology", "Oceanography", "Human Geography", "Economic Geography",
    ]),
  },
  {
    id: "upsc-science",
    name: "General Science",
    icon: "🔬",
    color: "280 60% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Physics Basics", "Chemistry Basics", "Biology Basics",
      "Environment & Ecology", "Science & Technology", "Space Technology",
    ]),
  },
];

// --- Defence (NDA/CDS) ---
const defenceSubjects: Subject[] = [
  {
    id: "def-gk",
    name: "General Knowledge",
    icon: "🧠",
    color: "280 70% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "History", "Geography", "Polity", "Economy",
      "Science & Technology", "Current Affairs", "Defence & Security",
    ]),
  },
  {
    id: "def-maths",
    name: "Mathematics",
    icon: "📐",
    color: "195 100% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Algebra", "Trigonometry", "Geometry", "Statistics",
      "Mensuration", "Calculus Basics", "Number System",
    ]),
  },
  {
    id: "def-reasoning",
    name: "Reasoning",
    icon: "🧩",
    color: "38 80% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Verbal Reasoning", "Non-Verbal Reasoning", "Logical Deduction",
      "Analogy & Classification", "Coding-Decoding", "Data Interpretation",
    ]),
  },
  {
    id: "def-english",
    name: "English",
    icon: "📖",
    color: "0 70% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Grammar", "Vocabulary", "Comprehension", "Spotting Errors",
      "Sentence Improvement", "Idioms & Phrases",
    ]),
  },
];

// --- SSC ---
const sscSubjects: Subject[] = [
  {
    id: "ssc-gk",
    name: "General Awareness",
    icon: "🧠",
    color: "280 70% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "History", "Geography", "Polity", "Economy",
      "Science", "Current Affairs", "Static GK",
    ]),
  },
  {
    id: "ssc-reasoning",
    name: "Reasoning",
    icon: "🧩",
    color: "38 80% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Analogy", "Classification", "Series", "Coding-Decoding",
      "Blood Relations", "Direction Sense", "Non-Verbal Reasoning",
    ]),
  },
  {
    id: "ssc-quant",
    name: "Quantitative Aptitude",
    icon: "🔢",
    color: "195 90% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Number System", "Algebra", "Geometry", "Trigonometry",
      "Mensuration", "Data Interpretation", "Percentage & Profit/Loss",
    ]),
  },
  {
    id: "ssc-english",
    name: "English",
    icon: "📖",
    color: "0 70% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Grammar", "Vocabulary", "Reading Comprehension",
      "Error Spotting", "Cloze Test", "Idioms",
    ]),
  },
];

// --- Banking ---
const bankingSubjects: Subject[] = [
  {
    id: "bank-reasoning",
    name: "Reasoning Ability",
    icon: "🧩",
    color: "38 80% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Puzzles & Seating", "Syllogism", "Coding-Decoding", "Inequality",
      "Blood Relations", "Direction Sense", "Data Sufficiency",
    ]),
  },
  {
    id: "bank-quant",
    name: "Quantitative Aptitude",
    icon: "🔢",
    color: "195 90% 50%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Number Series", "Simplification", "Data Interpretation",
      "Percentage", "Profit & Loss", "Time & Work", "Probability",
    ]),
  },
  {
    id: "bank-english",
    name: "English Language",
    icon: "📖",
    color: "0 70% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Reading Comprehension", "Cloze Test", "Error Spotting",
      "Sentence Improvement", "Para Jumbles", "Vocabulary",
    ]),
  },
  {
    id: "bank-gk",
    name: "General Awareness",
    icon: "🧠",
    color: "280 70% 55%",
    comingSoon: true,
    chapters: placeholderChapters([
      "Banking Awareness", "Financial Awareness", "Current Affairs",
      "Static GK", "Economy", "RBI & Monetary Policy",
    ]),
  },
];

// --- Railways ---
const railwaySubjects: Subject[] = [
  ...sscSubjects.map(s => ({ ...s, id: s.id.replace("ssc-", "rly-") })),
];

// --- PSC ---
const pscSubjects: Subject[] = [
  ...upscSubjects.map(s => ({ ...s, id: s.id.replace("upsc-", "psc-") })),
];

// Generic placeholder for entrance exams without specific subjects yet
const genericEntranceSubjects: Subject[] = [
  {
    id: "gen-subject1",
    name: "Subject 1",
    icon: "📚",
    color: "195 80% 50%",
    comingSoon: true,
    chapters: placeholderChapters(["Topic 1", "Topic 2", "Topic 3", "Topic 4"]),
  },
  {
    id: "gen-subject2",
    name: "Subject 2",
    icon: "📝",
    color: "38 80% 50%",
    comingSoon: true,
    chapters: placeholderChapters(["Topic 1", "Topic 2", "Topic 3", "Topic 4"]),
  },
];

// Map exam IDs to subject lists
const examSubjectMap: Record<string, Subject[]> = {
  // Entrance
  jee: jeeSubjects,
  neet: neetSubjects,
  // Government
  upsc: upscSubjects,
  ssc: sscSubjects,
  psc: pscSubjects,
  banking: bankingSubjects,
  railways: railwaySubjects,
  defence: defenceSubjects,
};

/**
 * Get subjects for a given user profile selection.
 * Returns null if we should use the real subjects from subjects.ts (CBSE 12 Science).
 */
export function getExamSubjects(
  category: string,
  examId?: string,
  classLevel?: string,
  stream?: string
): Subject[] | null {
  // CBSE Class 12 Science uses the real content
  if (category === "school" && classLevel === "class-12" && (stream === "science" || !stream)) {
    return null; // signal to use real subjects
  }

  // Other exam selections
  if (examId && examSubjectMap[examId]) {
    return examSubjectMap[examId];
  }

  // School but not class 12 science - show generic placeholder
  if (category === "school") {
    return genericEntranceSubjects;
  }

  // Fallback for unknown entrance/government exams
  return genericEntranceSubjects;
}
