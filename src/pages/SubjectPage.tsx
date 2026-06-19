import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSubject } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { ArrowLeft, Bookmark, BookmarkCheck } from "lucide-react";
import ComingSoon from "@/components/ComingSoon";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } };

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { getChapterProgress, toggleBookmark, getSubjectProgress } = useStudyProgress();
  const subject = getSubject(subjectId || "");

  if (!subject) {
    return (
      <ComingSoon
        title="Subject not found"
        message="This subject isn't part of the catalog yet. It will appear here once content is added."
        backTo="/"
        backLabel="Back to Dashboard"
        status="future"
      />
    );
  }

  const totalChapters = subject.chapters.length;
  const authoredChapters = subject.chapters.filter((c) => !c.comingSoon).length;
  const isFullyAuthored = !subject.comingSoon && authoredChapters === totalChapters && totalChapters > 0;
  const progress = isFullyAuthored ? getSubjectProgress(subject.id, totalChapters) : 0;

  const subjectStatus = isFullyAuthored
    ? { label: "Available", tone: "bg-accent/10 text-accent border-accent/30" }
    : authoredChapters > 0
    ? { label: "In Development", tone: "bg-warning/10 text-warning border-warning/30" }
    : { label: "Coming Soon", tone: "bg-muted text-muted-foreground border-border" };

  const categories = [...new Set(subject.chapters.map((c) => c.category).filter(Boolean))];

  const renderChapters = (chapters: typeof subject.chapters) => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-2">
      {chapters.map((chapter) => {
        const cp = getChapterProgress(subject.id, chapter.id);
        const sectionsDone = Object.values(cp.sections).filter(Boolean).length;
        const pct = chapter.comingSoon ? 0 : Math.round((sectionsDone / 6) * 100);
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
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground truncate">{chapter.name}</p>
                {chapter.comingSoon && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full border bg-muted text-muted-foreground border-border shrink-0">
                    Coming Soon
                  </span>
                )}
              </div>
              {!chapter.comingSoon && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{pct}%</span>
                </div>
              )}
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
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">{subject.name}</h1>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${subjectStatus.tone}`}>
              {subjectStatus.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {totalChapters} {totalChapters === 1 ? "Chapter" : "Chapters"}
            {isFullyAuthored
              ? ` · ${progress}% Complete`
              : ` · ${authoredChapters} authored / ${totalChapters - authoredChapters} coming soon`}
          </p>
        </div>
      </motion.div>

      <div className="h-2 bg-muted rounded-full overflow-hidden mb-8 max-w-lg">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${isFullyAuthored ? progress : (totalChapters ? (authoredChapters / totalChapters) * 100 : 0)}%` }}
          transition={{ duration: 1 }}
          className={`h-full rounded-full ${isFullyAuthored ? "bg-primary" : "bg-primary/40"}`}
        />
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
