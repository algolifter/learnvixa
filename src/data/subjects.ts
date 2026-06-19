export interface Chapter {
  id: number;
  name: string;
  category?: string;
  /** True for placeholder chapters with no authored content yet. */
  comingSoon?: boolean;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  chapters: Chapter[];
  /** True when this subject's content is still on the roadmap. */
  comingSoon?: boolean;
}

export const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    color: "195 100% 50%",
    chapters: [
      { id: 1, name: "Relations and Functions" },
      { id: 2, name: "Inverse Trigonometric Functions" },
      { id: 3, name: "Matrices" },
      { id: 4, name: "Determinants" },
      { id: 5, name: "Continuity and Differentiability" },
      { id: 6, name: "Applications of Derivatives" },
      { id: 7, name: "Integrals" },
      { id: 8, name: "Applications of Integrals" },
      { id: 9, name: "Differential Equations" },
      { id: 10, name: "Vector Algebra" },
      { id: 11, name: "Three Dimensional Geometry" },
      { id: 12, name: "Linear Programming" },
      { id: 13, name: "Probability" },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚡",
    color: "38 92% 50%",
    chapters: [
      { id: 1, name: "Electric Charges and Fields" },
      { id: 2, name: "Electrostatic Potential and Capacitance" },
      { id: 3, name: "Current Electricity" },
      { id: 4, name: "Moving Charges and Magnetism" },
      { id: 5, name: "Magnetism and Matter" },
      { id: 6, name: "Electromagnetic Induction" },
      { id: 7, name: "Alternating Current" },
      { id: 8, name: "Electromagnetic Waves" },
      { id: 9, name: "Ray Optics and Optical Instruments" },
      { id: 10, name: "Wave Optics" },
      { id: 11, name: "Dual Nature of Radiation and Matter" },
      { id: 12, name: "Atoms" },
      { id: 13, name: "Nuclei" },
      { id: 14, name: "Semiconductor Electronics" },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪",
    color: "150 80% 45%",
    chapters: [
      { id: 1, name: "Solutions", category: "Physical Chemistry" },
      { id: 2, name: "Electrochemistry", category: "Physical Chemistry" },
      { id: 3, name: "Chemical Kinetics", category: "Physical Chemistry" },
      { id: 4, name: "Surface Chemistry", category: "Physical Chemistry" },
      { id: 5, name: "The p-Block Elements", category: "Inorganic Chemistry" },
      { id: 6, name: "The d- and f-Block Elements", category: "Inorganic Chemistry" },
      { id: 7, name: "Coordination Compounds", category: "Inorganic Chemistry" },
      { id: 8, name: "Haloalkanes and Haloarenes", category: "Organic Chemistry" },
      { id: 9, name: "Alcohols, Phenols and Ethers", category: "Organic Chemistry" },
      { id: 10, name: "Aldehydes, Ketones and Carboxylic Acids", category: "Organic Chemistry" },
      { id: 11, name: "Amines", category: "Organic Chemistry" },
      { id: 12, name: "Biomolecules", category: "Organic Chemistry" },
    ],
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "💻",
    color: "280 80% 60%",
    chapters: [],
    comingSoon: true,
  },
  {
    id: "english",
    name: "English Core",
    icon: "📖",
    color: "0 80% 55%",
    chapters: [
      { id: 1, name: "The Last Lesson", category: "Flamingo (Prose)" },
      { id: 2, name: "Lost Spring", category: "Flamingo (Prose)" },
      { id: 3, name: "Deep Water", category: "Flamingo (Prose)" },
      { id: 4, name: "The Rattrap", category: "Flamingo (Prose)" },
      { id: 5, name: "Indigo", category: "Flamingo (Prose)" },
      { id: 6, name: "Poets and Pancakes", category: "Flamingo (Prose)" },
      { id: 7, name: "The Interview", category: "Flamingo (Prose)" },
      { id: 8, name: "Going Places", category: "Flamingo (Prose)" },
      { id: 9, name: "My Mother at Sixty-Six", category: "Flamingo (Poetry)" },
      { id: 10, name: "An Elementary School Classroom in a Slum", category: "Flamingo (Poetry)" },
      { id: 11, name: "Keeping Quiet", category: "Flamingo (Poetry)" },
      { id: 12, name: "A Thing of Beauty", category: "Flamingo (Poetry)" },
      { id: 13, name: "A Roadside Stand", category: "Flamingo (Poetry)" },
      { id: 14, name: "Aunt Jennifer's Tigers", category: "Flamingo (Poetry)" },
      { id: 15, name: "The Third Level", category: "Vistas" },
      { id: 16, name: "The Tiger King", category: "Vistas" },
      { id: 17, name: "Journey to the End of the Earth", category: "Vistas" },
      { id: 18, name: "The Enemy", category: "Vistas" },
      { id: 19, name: "On the Face of It", category: "Vistas" },
      { id: 20, name: "Memories of Childhood", category: "Vistas" },
    ],
  },
];

export const motivationalQuotes = [
  "The expert in anything was once a beginner.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Hard work beats talent when talent doesn't work hard.",
  "Dream it. Wish it. Do it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It always seems impossible until it's done.",
  "Don't stop when you're tired. Stop when you're done.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Discipline is choosing between what you want now and what you want most.",
  "A year from now, you'll wish you had started today.",
  "Small daily improvements are the key to staggering long-term results.",
  "Focus on being productive instead of busy.",
  "The secret of getting ahead is getting started.",
  "You don't have to be great to start, but you have to start to be great.",
  "Study hard, for the well is deep, and our brains are shallow.",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  "Success doesn't come to you; you go to it.",
  "Wake up with determination, go to bed with satisfaction.",
  "The only place where success comes before work is in the dictionary.",
  "Strive for progress, not perfection.",
  "Every master was once a disaster.",
  "Your grades don't define you, but your effort does.",
  "Consistency is what transforms average into excellence.",
  "One chapter at a time. One question at a time. One day at a time.",
  "Toppers aren't born — they're built through daily revision.",
  "Board exams are a marathon, not a sprint. Pace yourself.",
  "The more you sweat in practice, the less you bleed in the exam.",
  "Don't compare your chapter 1 to someone else's chapter 20.",
  "Revision is not optional — it's the weapon of toppers.",
  "Every problem you solve builds a bridge to your dream score.",
];

import { getPlaceholderSubject } from "@/data/curriculum";

export function getSubject(id: string): Subject | undefined {
  const real = subjects.find((s) => s.id === id);
  if (real) return real;
  // Fall back to the placeholder curriculum registry so users can browse
  // every CBSE class / exam stream even before content is authored.
  return getPlaceholderSubject(id);
}

export function getChapter(subjectId: string, chapterId: number): Chapter | undefined {
  const subject = getSubject(subjectId);
  return subject?.chapters.find((c) => c.id === chapterId);
}
