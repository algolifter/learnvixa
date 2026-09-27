import { cleanFakeMath } from "@/lib/cleanFakeMath";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Loader2, Volume2, VolumeX, Square } from "lucide-react";
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
  const [speaking, setSpeaking] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contentRef = useRef("");

  const explain = async () => {
    if (loading) return;
    stopAudio();
    setOpen(true);
    setContent("");
    contentRef.current = "";
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

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
        contentRef.current += chunk;
        setContent(contentRef.current);
      },
      onDone: () => setLoading(false),
      onError: (err) => {
        contentRef.current += `\n\n⚠️ ${err}`;
        setContent(contentRef.current);
        setLoading(false);
      },
      signal: controller.signal,
    });
  };

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current = null;
    }
    setSpeaking(false);
    setAudioLoading(false);
  }, []);

  const playVoice = useCallback(async () => {
    if (speaking) {
      stopAudio();
      return;
    }

    const textToSpeak = contentRef.current;
    if (!textToSpeak.trim()) return;

    setAudioLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: textToSpeak }),
        }
      );

      if (!response.ok) throw new Error("Voice generation failed");

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        setSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };
      audio.onerror = () => {
        setSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();
      setSpeaking(true);
    } catch (err) {
      console.error("TTS error:", err);
    } finally {
      setAudioLoading(false);
    }
  }, [speaking, stopAudio]);

  const close = () => {
    abortRef.current?.abort();
    stopAudio();
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
                <div className="flex items-center gap-2">
                  {/* Voice button */}
                  {content && !loading && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      onClick={playVoice}
                      disabled={audioLoading}
                      className={`p-2 rounded-lg transition-colors ${
                        speaking
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                      title={speaking ? "Stop voice" : "Listen to explanation"}
                    >
                      {audioLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : speaking ? (
                        <Square className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </motion.button>
                  )}
                  <button onClick={close} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Speaking indicator */}
              {speaking && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  className="bg-primary/10 px-5 py-2 flex items-center gap-2 text-xs text-primary border-b border-primary/20"
                >
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-0.5 bg-primary rounded-full"
                        animate={{ height: [4, 12, 4] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                  AI Teacher is speaking...
                  <button onClick={stopAudio} className="ml-auto text-primary hover:underline">Stop</button>
                </motion.div>
              )}

              <div className="p-5 max-h-[70vh] overflow-y-auto">
                {loading && !content && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" /> Generating explanation...
                  </div>
                )}
                {content && (
                  <div className="prose prose-sm dark:prose-invert max-w-none [&_h2]:text-base [&_h2]:font-display [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-display">
                    <ReactMarkdown>{cleanFakeMath(content)}</ReactMarkdown>
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
