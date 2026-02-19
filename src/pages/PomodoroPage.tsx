import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";

type Mode = "focus" | "break";

export default function PomodoroPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("focus");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = mode === "focus" ? 25 * 60 : 5 * 60;
  const progress = ((total - secondsLeft) / total) * 100;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setRunning(false);
            if (mode === "focus") {
              setSessions((s) => s + 1);
              setMode("break");
              return 5 * 60;
            } else {
              setMode("focus");
              return 25 * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, mode]);

  const reset = () => {
    setRunning(false);
    setSecondsLeft(mode === "focus" ? 25 * 60 : 5 * 60);
  };

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </motion.button>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">Pomodoro Timer</h1>
        <p className="text-muted-foreground text-sm mb-8">
          {mode === "focus" ? "🎯 Focus Session" : "☕ Break Time"} · {sessions} sessions completed
        </p>

        {/* Circular Progress */}
        <div className="relative w-56 h-56 mx-auto mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
            <motion.circle
              cx="100" cy="100" r="90" fill="none"
              stroke={mode === "focus" ? "hsl(var(--primary))" : "hsl(var(--accent))"}
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-display font-bold text-foreground">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground mt-1 uppercase">{mode}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={() => setRunning(!running)}
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
          >
            {running ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 glass rounded-xl p-4 max-w-sm mx-auto">
          <h3 className="text-xs font-display font-semibold text-primary mb-2">Focus Tips</h3>
          <ul className="text-xs text-muted-foreground space-y-1 text-left">
            <li>• Put your phone on silent during focus sessions</li>
            <li>• Work on one subject per Pomodoro session</li>
            <li>• Use breaks for stretching or hydration</li>
            <li>• After 4 sessions, take a longer 15-min break</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
