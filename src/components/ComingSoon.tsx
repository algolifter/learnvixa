import { motion } from "framer-motion";
import { ArrowLeft, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ComingSoonProps {
  title?: string;
  message?: string;
  icon?: string;
  backTo?: string;
  backLabel?: string;
  status?: "planned" | "future" | "coming_soon" | "active";
}

const statusCopy: Record<string, { tag: string; tone: string }> = {
  active: { tag: "In Active Development", tone: "text-primary" },
  planned: { tag: "Planned Next", tone: "text-accent" },
  coming_soon: { tag: "Coming Soon", tone: "text-primary" },
  future: { tag: "Future Expansion", tone: "text-muted-foreground" },
};

export default function ComingSoon({
  title = "Coming Soon",
  message = "We're building Learnvixa one chapter at a time. This area will open up as content is added.",
  icon = "🚀",
  backTo,
  backLabel = "Back",
  status = "coming_soon",
}: ComingSoonProps) {
  const navigate = useNavigate();
  const tag = statusCopy[status] ?? statusCopy.coming_soon;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md"
      >
        <span className="text-7xl mb-6 block">{icon}</span>
        <h1 className="text-3xl font-display font-bold text-foreground mb-4">{title}</h1>
        <div className="glass rounded-2xl px-8 py-6">
          <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3 ${tag.tone}`}>
            <Rocket className="w-3.5 h-3.5" /> {tag.tag}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{message}</p>
        </div>
        <button
          onClick={() => (backTo ? navigate(backTo) : navigate(-1))}
          className="mt-6 text-primary hover:underline text-sm flex items-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" /> {backLabel}
        </button>
      </motion.div>
    </div>
  );
}
