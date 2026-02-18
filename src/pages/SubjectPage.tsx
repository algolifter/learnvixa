import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSubject } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { ArrowLeft, Bookmark, BookmarkCheck } from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } };

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { getChapterProgress, toggleBookmark, getSubjectProgress } = useStudyProgress();
  const subject = getSubject(subjectId || "");

  if (!subject) return <div className="min-h-screen flex items-center justify-center text-foreground">Subject not found</div>;

  if (subject.comingSoon) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <span className="text-7xl mb-6 block">{subject.icon}</span>
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">{subject.name}</h1>
          <div className="glass rounded-2xl px-8 py-6 max-w-md">
            <p className="text-lg text-primary font-semibold mb-2">🚧 Content Coming Soon</p>
            <p className="text-muted-foreground text-sm">We're working hard to bring you comprehensive study material for Computer Science. Stay tuned!</p>
          </div>
          <button onClick={() => navigate("/")} className="mt-6 text-primary hover:underline text-sm flex items-center gap-2 mx-auto">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  const progress = getSubjectProgress(subject.id, subject.chapters.length);
  const categories = [...new Set(subject.chapters.map((c) => c.category).filter(Boolean))];

  const renderChapters = (chapters: typeof subject.chapters) => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-2">
      {chapters.map((chapter) => {
        const cp = getChapterProgress(subject.id, chapter.id);
        const sectionsDone = Object.values(cp.sections).filter(Boolean).length;
        const pct = Math.round((sectionsDone / 6) * 100);
        return (
          <motion.div
            key={chapter.id}
            variants={item}
            whileHover={{ x: 4 }}
            className="glass-hover rounded-xl p-4 flex items-center gap-4 cursor-pointer"
            onClick={() => navigate(`/subject/${subject.id}/chapter/${chapter.id}`)}
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-display text-sm font-bold text-primary">
              {chapter.id}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{chapter.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-muted-foreground w-8">{pct}%</span>
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); toggleBookmark(subject.id, chapter.id); }}
              className="p-1 hover:text-primary transition-colors"
            >
              {cp.bookmarked ? <BookmarkCheck className="w-4 h-4 text-primary" /> : <Bookmark className="w-4 h-4 text-muted-foreground" />}
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-2">
        <span className="text-5xl">{subject.icon}</span>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">{subject.name}</h1>
          <p className="text-sm text-muted-foreground">{subject.chapters.length} Chapters · {progress}% Complete</p>
        </div>
      </motion.div>

      <div className="h-2 bg-muted rounded-full overflow-hidden mb-8 max-w-lg">
        <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1 }} className="h-full bg-primary rounded-full" />
      </div>

      {categories.length > 0 ? (
        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="text-sm font-display font-semibold text-primary mb-3 uppercase tracking-wider">{cat}</h2>
              {renderChapters(subject.chapters.filter((c) => c.category === cat))}
            </div>
          ))}
        </div>
      ) : (
        renderChapters(subject.chapters)
      )}
    </div>
  );
}
