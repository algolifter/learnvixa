import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";

const affirmations = [
  "You are prepared. You are capable. You will succeed.",
  "Every hour of study brings you closer to your dream.",
  "Breathe in confidence. Breathe out doubt.",
  "You have worked hard. Trust your preparation.",
  "This exam is just one chapter of your amazing story.",
  "Stay calm. Stay focused. You've got this.",
];

export default function CalmMode() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [counter, setCounter] = useState(4);
  const [affirmation, setAffirmation] = useState(affirmations[0]);

  useEffect(() => {
    setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
  }, []);

  useEffect(() => {
    const durations = { inhale: 4, hold: 7, exhale: 8 };
    const nextPhase = { inhale: "hold" as const, hold: "exhale" as const, exhale: "inhale" as const };

    const interval = setInterval(() => {
      setCounter((c) => {
        if (c <= 1) {
          setPhase((p) => nextPhase[p]);
          return durations[nextPhase[phase]];
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const circleScale = phase === "inhale" ? 1.4 : phase === "hold" ? 1.4 : 1;
  const phaseLabel = phase === "inhale" ? "Breathe In" : phase === "hold" ? "Hold" : "Breathe Out";

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl breathing-circle" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl breathing-circle" style={{ animationDelay: "4s" }} />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-primary text-sm z-10"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </motion.button>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center z-10">
        <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">Calm Mode</h1>
        <p className="text-muted-foreground text-sm mb-12">4-7-8 Breathing Exercise</p>

        {/* Breathing circle */}
        <div className="relative w-48 h-48 mx-auto mb-10">
          <motion.div
            animate={{ scale: circleScale }}
            transition={{ duration: phase === "inhale" ? 4 : phase === "hold" ? 0.3 : 8, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-2 border-accent/30 flex items-center justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-accent/10 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span key={phaseLabel} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-accent font-display text-sm font-semibold">
                  {phaseLabel}
                </motion.span>
              </AnimatePresence>
              <span className="text-3xl font-display font-bold text-foreground mt-1">{counter}</span>
            </div>
          </motion.div>
        </div>

        {/* Affirmation */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-foreground/80 italic max-w-sm mx-auto text-sm">
          "{affirmation}"
        </motion.p>

        <div className="mt-10 glass rounded-xl p-4 max-w-sm">
          <h3 className="text-xs font-display font-semibold text-primary mb-2">Exam Stress Tips</h3>
          <ul className="text-xs text-muted-foreground space-y-1 text-left">
            <li>• Take regular breaks every 45 minutes</li>
            <li>• Sleep 7-8 hours before exam day</li>
            <li>• Avoid studying new topics the night before</li>
            <li>• Stay hydrated and eat light meals</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
