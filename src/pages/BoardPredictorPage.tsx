import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { subjects } from "@/data/subjects";
import { getBoardPredictorQuestions, type PredictedQuestion, type Probability } from "@/data/boardPredictorQuestions";

const probColor: Record<Probability, string> = {
  High: "bg-accent/20 text-accent",
  Medium: "bg-warning/20 text-warning",
  Important: "bg-primary/20 text-primary",
};

export default function BoardPredictorPage() {
  const navigate = useNavigate();
  const activeSubjects = subjects.filter((s) => !s.comingSoon);
  const [selSubject, setSelSubject] = useState(activeSubjects[0].id);
  const subject = activeSubjects.find((s) => s.id === selSubject)!;
  const [selChapter, setSelChapter] = useState(subject.chapters[0]?.id ?? 1);
  const chapter = subject.chapters.find((c) => c.id === selChapter);
  const [filter, setFilter] = useState<string>("all");

  const questions = chapter ? generateQuestions(selSubject, chapter.name) : [];
  const filtered = filter === "all" ? questions : questions.filter((q) => q.type === filter);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 max-w-5xl mx-auto">
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => navigate("/")}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm">
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">Board Exam Predictor</h1>
        <p className="text-muted-foreground text-sm mb-6">Expected questions based on CBSE board exam trends</p>
      </motion.div>

      {/* Subject Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {activeSubjects.map((s) => (
          <button key={s.id} onClick={() => { setSelSubject(s.id); setSelChapter(s.chapters[0]?.id ?? 1); }}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${selSubject === s.id ? "bg-primary text-primary-foreground" : "glass text-muted-foreground"}`}>
            {s.icon} {s.name}
          </button>
        ))}
      </div>

      {/* Chapter Select */}
      <select value={selChapter} onChange={(e) => setSelChapter(Number(e.target.value))}
        className="w-full max-w-md glass rounded-lg px-3 py-2 text-sm text-foreground bg-card border border-border mb-4">
        {subject.chapters.map((c) => <option key={c.id} value={c.id}>{c.id}. {c.name}</option>)}
      </select>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[{ k: "all", l: "All" }, { k: "2mark", l: "2 Mark" }, { k: "3mark", l: "3 Mark" }, { k: "5mark", l: "5 Mark" }, { k: "hots", l: "HOTS" }, { k: "assertion", l: "A&R" }].map((f) => (
          <button key={f.k} onClick={() => setFilter(f.k)}
            className={`px-3 py-1 rounded-full text-xs ${filter === f.k ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            {f.l}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${selSubject}-${selChapter}-${filter}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
          {filtered.map((q, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-display font-bold text-primary">Q{i + 1}.</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${probColor[q.probability]}`}>{q.probability}</span>
                <span className="text-xs text-muted-foreground ml-auto">[{q.marks} Mark{q.marks > 1 ? "s" : ""}]</span>
              </div>
              <p className="text-sm text-foreground whitespace-pre-line">{q.text}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
