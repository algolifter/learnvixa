import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSubject, getChapter } from "@/data/subjects";
import { ArrowLeft, BookOpen, FileText, HelpCircle, MessageSquare, PenTool, RotateCcw } from "lucide-react";
import ComingSoon from "@/components/ComingSoon";

const sections = [
  { key: "topics", label: "Topics", desc: "Deep Explanation", icon: BookOpen, color: "text-primary" },
  { key: "notes", label: "Notes", desc: "Exam-Perfect Notes", icon: FileText, color: "text-accent" },
  { key: "q2mark", label: "2 Mark Q", desc: "CBSE Pattern", icon: HelpCircle, color: "text-warning" },
  { key: "q3mark", label: "3 Mark Q", desc: "Conceptual", icon: MessageSquare, color: "text-destructive" },
  { key: "q5mark", label: "5 Mark Q", desc: "Long Answers", icon: PenTool, color: "text-[hsl(280,80%,60%)]" },
  { key: "revision", label: "Revision Pack", desc: "Full Exam Revision", icon: RotateCcw, color: "text-primary" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };

export default function ChapterPage() {
  const { subjectId, chapterId } = useParams<{ subjectId: string; chapterId: string }>();
  const navigate = useNavigate();
  const subject = getSubject(subjectId || "");
  const chapter = getChapter(subjectId || "", Number(chapterId));

  if (!subject || !chapter) return <ComingSoon title="Chapter not found" message="This chapter hasn't been published yet. It'll appear here as content is gradually added." backTo="/" backLabel="Back to Dashboard" status="coming_soon" />;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate(`/subject/${subjectId}`)}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> {subject.name}
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground mb-3">
          Chapter {chapter.id} {chapter.category && `· ${chapter.category}`}
        </div>
        <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground">{chapter.name}</h1>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <motion.div
              key={sec.key}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/subject/${subjectId}/chapter/${chapterId}/${sec.key}`)}
              className="glass-hover rounded-2xl p-6 cursor-pointer text-center"
            >
              <Icon className={`w-10 h-10 mx-auto mb-3 ${sec.color}`} />
              <h3 className="font-display text-base font-semibold text-foreground mb-1">{sec.label}</h3>
              <p className="text-xs text-muted-foreground">{sec.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
