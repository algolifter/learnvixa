import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Loader2 } from "lucide-react";
import { streamAI } from "@/lib/ai-stream";
import ReactMarkdown from "react-markdown";

interface Props {
  subject: string;
  chapter: string;
  section: string;
}

export default function AITeacherPanel({ subject, chapter, section }: Props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const explain = async () => {
    if (loading) return;
    setOpen(true);
    setContent("");
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    let soFar = "";
    await streamAI({
      messages: [
        {
          role: "user",
          content: `Please explain the "${section}" section of chapter "${chapter}" in ${subject} (CBSE Class 12). Give a complete, teacher-style explanation with examples, derivations if applicable, and exam tips. Make it very detailed and easy to understand.`,
        },
      ],
      mode: "teacher",
      subject,
      chapter,
      onDelta: (chunk) => {
        soFar += chunk;
        setContent(soFar);
      },
      onDone: () => setLoading(false),
      onError: (err) => {
        soFar += `\n\n⚠️ ${err}`;
        setContent(soFar);
        setLoading(false);
      },
      signal: controller.signal,
    });
  };

  const close = () => {
    abortRef.current?.abort();
    setOpen(false);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={explain}
        className="w-full glass-hover rounded-xl p-4 flex items-center justify-center gap-2 text-primary font-medium"
      >
        <Sparkles className="w-5 h-5" /> Explain with AI Teacher
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center p-4 pt-12 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-sm font-bold text-foreground">AI Teacher · {chapter}</h2>
                </div>
                <button onClick={close} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 max-h-[70vh] overflow-y-auto">
                {loading && !content && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" /> Generating explanation...
                  </div>
                )}
                {content && (
                  <div className="prose prose-sm dark:prose-invert max-w-none [&_h2]:text-base [&_h2]:font-display [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-display">
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                )}
                {loading && content && (
                  <Loader2 className="w-4 h-4 animate-spin text-primary mt-2" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
