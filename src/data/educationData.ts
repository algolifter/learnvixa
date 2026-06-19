export interface ExamOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  comingSoon?: boolean;
}

export interface ExamCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories?: ExamOption[];
}

export interface ClassOption {
  id: string;
  label: string;
  isBoard?: boolean;
  hasStreams?: boolean;
}

export const streams = [
  { id: "science", name: "Science", icon: "🔬" },
  { id: "commerce", name: "Commerce", icon: "📊" },
  { id: "humanities", name: "Humanities", icon: "📜" },
  { id: "arts", name: "Arts", icon: "🎨" },
];

export const cbseClasses: ClassOption[] = [
  { id: "lkg", label: "LKG" },
  { id: "ukg", label: "UKG" },
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `class-${i + 1}`,
    label: `Class ${i + 1}`,
  })),
  { id: "class-10", label: "Class 10", isBoard: true },
  { id: "class-11", label: "Class 11", hasStreams: true },
  { id: "class-12", label: "Class 12", isBoard: true, hasStreams: true },
];

export const entranceExamCategories: ExamCategory[] = [
  {
    id: "engineering",
    name: "Engineering",
    icon: "⚙️",
    description: "Engineering entrance exams",
    subcategories: [
      { id: "jee-main", name: "JEE Main", icon: "🎯", description: "NITs, IIITs & GFTIs" },
      { id: "jee-advanced", name: "JEE Advanced", icon: "🏆", description: "IITs" },
      { id: "bitsat", name: "BITSAT", icon: "💡", description: "BITS Pilani / Goa / Hyderabad" },
      { id: "viteee", name: "VITEEE", icon: "🏫", description: "VIT University" },
      { id: "keam", name: "KEAM", icon: "🏛️", description: "Kerala Engineering & Pharmacy" },
      { id: "srmjeee", name: "SRMJEEE", icon: "🎓", description: "SRM University" },
    ],
  },
  {
    id: "medical",
    name: "Medical",
    icon: "🩺",
    description: "Medical entrance exams",
    subcategories: [
      { id: "neet", name: "NEET", icon: "🏥", description: "MBBS, BDS, AYUSH & Allied Sciences" },
    ],
  },
  {
    id: "law",
    name: "Law",
    icon: "⚖️",
    description: "Law entrance exams",
    subcategories: [
      { id: "clat", name: "CLAT", icon: "📚", description: "National Law Universities" },
      { id: "ailet", name: "AILET", icon: "🏛️", description: "NLU Delhi", comingSoon: true },
    ],
  },
  {
    id: "university",
    name: "University & Central",
    icon: "🎓",
    description: "Central university entrance exams",
    subcategories: [
      { id: "cuet", name: "CUET", icon: "🎓", description: "Central Universities (UG)" },
      { id: "ipmat", name: "IPMAT", icon: "📈", description: "IIM Indore / Rohtak", comingSoon: true },
      { id: "ca-foundation", name: "CA Foundation", icon: "🧮", description: "Chartered Accountancy", comingSoon: true },
    ],
  },
  {
    id: "defence-entrance",
    name: "Defence (Entrance)",
    icon: "🎖️",
    description: "Defence services entrance exams",
    subcategories: [
      { id: "nda", name: "NDA", icon: "🛡️", description: "National Defence Academy" },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: "🎨",
    description: "Design entrance exams",
    subcategories: [
      { id: "nid", name: "NID", icon: "✏️", description: "National Institute of Design", comingSoon: true },
      { id: "nift", name: "NIFT", icon: "👗", description: "National Institute of Fashion", comingSoon: true },
    ],
  },
];

export const governmentExams: ExamOption[] = [
  { id: "upsc", name: "UPSC", icon: "🏛️", description: "Civil Services Examination" },
  { id: "ssc", name: "SSC", icon: "📋", description: "Staff Selection Commission" },
  { id: "psc", name: "PSC", icon: "🗳️", description: "Kerala PSC & State PSCs" },
  { id: "banking", name: "Banking", icon: "🏦", description: "IBPS, SBI & other banks" },
  { id: "railways", name: "Railways", icon: "🚂", description: "RRB & Railway exams" },
  { id: "defence", name: "Defence", icon: "🎖️", description: "NDA, CDS & other defence exams" },
];

export const mainCategories = [
  {
    id: "school",
    name: "School Education",
    icon: "🏫",
    description: "CBSE, ICSE & State Boards from LKG to Class 12",
    color: "from-[hsl(195,100%,45%)] to-[hsl(210,100%,55%)]",
  },
  {
    id: "entrance",
    name: "Entrance Exams",
    icon: "🎯",
    description: "JEE, NEET, CLAT, CUET & more competitive exams",
    color: "from-[hsl(38,92%,50%)] to-[hsl(25,100%,55%)]",
  },
  {
    id: "government",
    name: "Government Exams",
    icon: "🏛️",
    description: "UPSC, SSC, Banking, Railways & Defence exams",
    color: "from-[hsl(150,80%,40%)] to-[hsl(170,80%,45%)]",
  },
];

// Map exam selections to display labels for dashboard header
export function getSelectionLabel(category: string, examId?: string, classLevel?: string, stream?: string): string {
  if (category === "school") {
    const cls = cbseClasses.find(c => c.id === classLevel);
    const streamObj = streams.find(s => s.id === stream);
    let label = `CBSE ${cls?.label || ""}`;
    if (streamObj) label += ` · ${streamObj.name}`;
    return label;
  }
  if (category === "entrance") {
    for (const cat of entranceExamCategories) {
      const exam = cat.subcategories?.find(e => e.id === examId);
      if (exam) return `${exam.name} Preparation`;
    }
    return "Entrance Exam";
  }
  if (category === "government") {
    const exam = governmentExams.find(e => e.id === examId);
    return exam ? `${exam.name} Preparation` : "Government Exam";
  }
  return "Study Hub";
}

// Check if a selection has actual content (only CBSE Class 12 Science for now)
export function hasContent(category: string, examId?: string, classLevel?: string, stream?: string): boolean {
  return category === "school" && classLevel === "class-12" && (stream === "science" || !stream);
}
