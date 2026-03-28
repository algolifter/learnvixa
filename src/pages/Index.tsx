import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { subjects, motivationalQuotes } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useContinueStudying } from "@/hooks/useContinueStudying";
import { getSelectionLabel, hasContent } from "@/data/educationData";
import { getExamSubjects } from "@/data/examSubjects";
import { BookOpen, Clock, Flame, Target, Sparkles, Wind, Zap, TrendingUp, RefreshCw, Settings, AlertTriangle, ArrowRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const subjectColors: Record<string, string> = {
  mathematics: "from-[hsl(195,100%,50%)] to-[hsl(210,100%,60%)]",
  physics: "from-[hsl(38,92%,50%)] to-[hsl(25,100%,55%)]",
  chemistry: "from-[hsl(150,80%,45%)] to-[hsl(170,80%,50%)]",
  "computer-science": "from-[hsl(280,80%,60%)] to-[hsl(260,80%,65%)]",
  english: "from-[hsl(0,80%,55%)] to-[hsl(350,80%,60%)]",
};

function getColorForSubject(id: string, color?: string): string {
  if (subjectColors[id]) return subjectColors[id];
  if (color) {
    const [h] = color.split(" ");
    return `from-[hsl(${color})] to-[hsl(${Number(h) + 15},80%,55%)]`;
  }
  return "from-primary to-primary/80";
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { getSubjectProgress, getOverallProgress } = useStudyProgress();
  const { profile, clearProfile } = useUserProfile();
  const { lastStudied } = useContinueStudying();
  const [quote, setQuote] = useState("");
  const [daysLeft, setDaysLeft] = useState(getDaysRemaining());
  const [quoteIndex, setQuoteIndex] = useState(0);

  const modeLabel = profile
    ? getSelectionLabel(profile.category, profile.examId, profile.classLevel, profile.stream)
    : "Study Hub";

  const contentAvailable = profile
    ? hasContent(profile.category, profile.examId, profile.classLevel, profile.stream)
    : false;

  // Get dynamic subjects based on user selection
  const examSubjects = profile
    ? getExamSubjects(profile.category, profile.examId, profile.classLevel, profile.stream)
    : null;
  const displaySubjects = examSubjects ?? subjects;

  const refreshQuote = () => {
    let newIndex: number;
    do {
      newIndex = Math.floor(Math.random() * motivationalQuotes.length);
    } while (newIndex === quoteIndex && motivationalQuotes.length > 1);
    setQuoteIndex(newIndex);
    setQuote(motivationalQuotes[newIndex]);
  };

  useEffect(() => {
    refreshQuote();
    const timer = setInterval(() => setDaysLeft(getDaysRemaining()), 60000);
    return () => clearInterval(timer);
  }, []);

  const chapterCounts: Record<string, number> = {};
  displaySubjects.forEach((s) => {
    if (!s.comingSoon) chapterCounts[s.id] = s.chapters.length;
  });
  const overall = getOverallProgress(chapterCounts);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 overflow-x-hidden">
      {/* Header with mode indicator */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
          <span className="text-xs font-medium text-primary">{modeLabel}</span>
          <button
            onClick={() => navigate("/settings")}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Settings"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-2">
          Study Command Center
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          {profile?.name ? `Welcome back, ${profile.name}` : "Board Exam Preparation System"}
        </p>
      </motion.div>

      {/* Coming Soon banner for non-CBSE-12 */}
      {!contentAvailable && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-8 p-4 rounded-xl border border-warning/30 bg-warning/5 flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Content Coming Soon</p>
            <p className="text-xs text-muted-foreground mt-1">
              We're building content for {modeLabel}. Currently, full content is available for CBSE Class 12 Science.
              Showing the dashboard structure as a preview.
            </p>
          </div>
        </motion.div>
      )}

      {/* Stats Row */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        <motion.div variants={item} className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-primary">{daysLeft}</div>
          <div className="text-xs text-muted-foreground mt-1">Days Remaining</div>
        </motion.div>
        <motion.div variants={item} className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-accent">{overall}%</div>
          <div className="text-xs text-muted-foreground mt-1">Overall Progress</div>
        </motion.div>
        <motion.div variants={item} className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
          <Flame className="w-6 h-6 text-warning mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-warning">0</div>
          <div className="text-xs text-muted-foreground mt-1">Day Streak</div>
        </motion.div>
        <motion.div variants={item} className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
          <Target className="w-6 h-6 text-destructive mx-auto mb-2" />
          <div className="text-3xl md:text-4xl font-display font-bold text-destructive">2h</div>
          <div className="text-xs text-muted-foreground mt-1">Daily Goal</div>
        </motion.div>
      </motion.div>

      {/* Continue Studying */}
      {lastStudied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Continue Studying</h2>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const path = lastStudied.section
                ? `/subject/${lastStudied.subjectId}/chapter/${lastStudied.chapterId}/${lastStudied.section}`
                : `/subject/${lastStudied.subjectId}/chapter/${lastStudied.chapterId}`;
              navigate(path);
            }}
            className="w-full bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:shadow-md hover:border-primary/20 transition-all text-left"
          >
            <span className="text-3xl">{lastStudied.subjectIcon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{lastStudied.chapterName}</p>
              <p className="text-xs text-muted-foreground">{lastStudied.subjectName}{lastStudied.section ? ` · ${lastStudied.section}` : ""}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary shrink-0" />
          </motion.button>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-3 mb-8 justify-center">
        {[
          { path: "/calm", icon: Wind, label: "Calm Mode", color: "text-accent" },
          { path: "/revision", icon: BookOpen, label: "Quick Revision", color: "text-primary" },
          { path: "/pomodoro", icon: Zap, label: "Pomodoro Timer", color: "text-warning" },
          { path: "/predictor", icon: Sparkles, label: "Board Predictor", color: "text-destructive" },
        ].map(action => (
          <motion.button
            key={action.path}
            variants={item}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate(action.path)}
            className="bg-card border border-border rounded-full px-5 py-2.5 flex items-center gap-2 text-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
          >
            <action.icon className={`w-4 h-4 ${action.color}`} /> {action.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Motivational Quote */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-card border border-border rounded-2xl p-4 mb-8 text-center max-w-2xl mx-auto relative shadow-sm">
        <p className="text-muted-foreground italic text-sm px-8">"{quote}"</p>
        <button onClick={refreshQuote} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" title="New quote">
          <RefreshCw className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Subject Cards */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displaySubjects.map((subject) => {
          const progress = subject.comingSoon ? 0 : getSubjectProgress(subject.id, subject.chapters.length);
          const gradient = getColorForSubject(subject.id, subject.color);
          return (
            <motion.div
              key={subject.id}
              variants={item}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => !subject.comingSoon && navigate(`/subject/${subject.id}`)}
              className={`bg-card border border-border rounded-2xl p-6 relative overflow-hidden group hover:shadow-lg hover:border-primary/20 transition-all duration-300 ${
                subject.comingSoon ? "cursor-default opacity-80" : "cursor-pointer"
              }`}
            >
              {/* Gradient bar top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{subject.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{subject.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {subject.comingSoon ? "Coming Soon" : `${subject.chapters.length} Chapters`}
                  </p>
                </div>
              </div>

              {!subject.comingSoon && (
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
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
