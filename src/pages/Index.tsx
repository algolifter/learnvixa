import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { subjects, motivationalQuotes } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { BookOpen, Clock, Flame, Target, Sparkles, Wind, Zap, TrendingUp } from "lucide-react";

const EXAM_DATE = new Date("2027-03-02");

function getDaysRemaining() {
  const now = new Date();
  const diff = EXAM_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const subjectColors: Record<string, string> = {
  mathematics: "from-[hsl(195,100%,50%)] to-[hsl(210,100%,60%)]",
  physics: "from-[hsl(38,92%,50%)] to-[hsl(25,100%,55%)]",
  chemistry: "from-[hsl(150,80%,45%)] to-[hsl(170,80%,50%)]",
  "computer-science": "from-[hsl(280,80%,60%)] to-[hsl(260,80%,65%)]",
  english: "from-[hsl(0,80%,55%)] to-[hsl(350,80%,60%)]",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { getSubjectProgress, getOverallProgress } = useStudyProgress();
  const [quote, setQuote] = useState("");
  const [daysLeft, setDaysLeft] = useState(getDaysRemaining());

  useEffect(() => {
    setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
    const timer = setInterval(() => setDaysLeft(getDaysRemaining()), 60000);
    return () => clearInterval(timer);
  }, []);

  const chapterCounts: Record<string, number> = {};
  subjects.forEach((s) => {
    if (!s.comingSoon) chapterCounts[s.id] = s.chapters.length;
  });
  const overall = getOverallProgress(chapterCounts);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 overflow-x-hidden">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-2">
          Study Command Center
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">CBSE Class 12 · Board Exam Preparation System</p>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        <motion.div variants={item} className="glass rounded-xl p-4 text-center pulse-glow">
          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-primary glow-text-primary">{daysLeft}</div>
          <div className="text-xs text-muted-foreground mt-1">Days Remaining</div>
        </motion.div>
        <motion.div variants={item} className="glass rounded-xl p-4 text-center">
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-accent glow-text-accent">{overall}%</div>
          <div className="text-xs text-muted-foreground mt-1">Overall Progress</div>
        </motion.div>
        <motion.div variants={item} className="glass rounded-xl p-4 text-center">
          <Flame className="w-6 h-6 text-warning mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-warning">0</div>
          <div className="text-xs text-muted-foreground mt-1">Day Streak</div>
        </motion.div>
        <motion.div variants={item} className="glass rounded-xl p-4 text-center">
          <Target className="w-6 h-6 text-destructive mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-destructive">2h</div>
          <div className="text-xs text-muted-foreground mt-1">Daily Goal</div>
        </motion.div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-3 mb-8 justify-center">
        <motion.button variants={item} onClick={() => navigate("/calm")} className="glass-hover rounded-full px-5 py-2.5 flex items-center gap-2 text-sm">
          <Wind className="w-4 h-4 text-accent" /> Calm Mode
        </motion.button>
        <motion.button variants={item} onClick={() => navigate("/revision")} className="glass-hover rounded-full px-5 py-2.5 flex items-center gap-2 text-sm">
          <BookOpen className="w-4 h-4 text-primary" /> Quick Revision
        </motion.button>
        <motion.button variants={item} onClick={() => navigate("/pomodoro")} className="glass-hover rounded-full px-5 py-2.5 flex items-center gap-2 text-sm">
          <Zap className="w-4 h-4 text-warning" /> Pomodoro Timer
        </motion.button>
        <motion.button variants={item} onClick={() => navigate("/predictor")} className="glass-hover rounded-full px-5 py-2.5 flex items-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-destructive" /> Board Predictor
        </motion.button>
      </motion.div>

      {/* Motivational Quote */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="glass rounded-xl p-4 mb-8 text-center max-w-2xl mx-auto">
        <p className="text-muted-foreground italic text-sm">"{quote}"</p>
      </motion.div>

      {/* Subject Cards */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {subjects.map((subject) => {
          const progress = subject.comingSoon ? 0 : getSubjectProgress(subject.id, subject.chapters.length);
          return (
            <motion.div
              key={subject.id}
              variants={item}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/subject/${subject.id}`)}
              className="glass-hover rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
            >
              {/* Gradient bar top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${subjectColors[subject.id]}`} />

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{subject.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{subject.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {subject.comingSoon ? "Coming Soon" : `${subject.chapters.length} Chapters`}
                  </p>
                </div>
              </div>

              {!subject.comingSoon && (
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full rounded-full bg-gradient-to-r ${subjectColors[subject.id]}`}
                    />
                  </div>
                </div>
              )}

              {subject.comingSoon && (
                <div className="text-center py-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">🚧 Content Coming Soon</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
