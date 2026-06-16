import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { TopicPage } from "@/data/content/types";

interface TopicPageViewerProps {
  pages: TopicPage[];
  onComplete?: () => void;
}

export default function TopicPageViewer({ pages, onComplete }: TopicPageViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const isFirst = currentPage === 0;
  const isLast = currentPage === pages.length - 1;
  const [completed, setCompleted] = useState(false);

  const goNext = () => {
    if (isLast) {
      setCompleted(true);
      onComplete?.();
      return;
    }
    setDirection(1);
    setCurrentPage((p) => p + 1);
  };

  const goPrev = () => {
    if (isFirst) return;
    setDirection(-1);
    setCurrentPage((p) => p - 1);
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-xl p-8 text-center space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
        </motion.div>
        <h2 className="text-xl font-display font-bold text-foreground">
          Chapter Completed! 🎉
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          You've finished all the topics in this chapter. Great job! You can revisit any topic or move on to practice questions.
        </p>
        <button
          onClick={() => {
            setCompleted(false);
            setCurrentPage(0);
          }}
          className="text-sm text-primary hover:underline"
        >
          ← Review topics again
        </button>
      </motion.div>
    );
  }

  const page = pages[currentPage];

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <BookOpen className="w-4 h-4 text-primary shrink-0" />
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={false}
            animate={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs text-muted-foreground shrink-0">
          {currentPage + 1} / {pages.length}
        </span>
      </div>

      {/* Page content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
          transition={{ duration: 0.25 }}
          className="glass rounded-xl p-5 md:p-6"
        >
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed
            prose-headings:text-foreground prose-headings:font-display
            prose-h2:text-lg prose-h2:mt-0 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2
            prose-h4:text-sm prose-h4:mt-4 prose-h4:mb-1
            prose-strong:text-foreground
            prose-li:my-0.5
            prose-p:my-2
            prose-table:text-xs
            prose-th:text-foreground prose-th:bg-muted/50 prose-th:px-3 prose-th:py-2
            prose-td:px-3 prose-td:py-1.5 prose-td:border-border
            prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-4
            prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-code:text-xs
          ">
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={goPrev}
          disabled={isFirst}
          className="flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page dots */}
        <div className="flex gap-1.5 flex-wrap justify-center">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1);
                setCurrentPage(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentPage
                  ? "bg-primary w-6"
                  : i < currentPage
                  ? "bg-primary/40"
                  : "bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
        >
          <span className="hidden sm:inline">{isLast ? "Complete" : "Next"}</span>
          <span className="sm:hidden">{isLast ? "✓" : ""}</span>
          {isLast ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
