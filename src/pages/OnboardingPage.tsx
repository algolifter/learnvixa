import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserProfile } from "@/hooks/useUserProfile";
import { mainCategories, cbseClasses, streams, entranceExamCategories, governmentExams } from "@/data/educationData";
import { ArrowLeft, ArrowRight, GraduationCap, Sparkles, Mail, User } from "lucide-react";

interface Props {
  onComplete: (profile: UserProfile) => void;
}

const fadeSlide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
};

export default function OnboardingPage({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [stream, setStream] = useState("");
  const [examId, setExamId] = useState("");
  const [examCategoryId, setExamCategoryId] = useState("");

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const canProceed = () => {
    if (step === 0) return name.trim().length >= 2 && isValidEmail(email.trim());
    if (step === 1) return !!category;
    if (step === 2) {
      if (category === "school") {
        if (!classLevel) return false;
        const cls = cbseClasses.find(c => c.id === classLevel);
        if (cls?.hasStreams && !stream) return false;
        return true;
      }
      if (category === "entrance") return !!examId;
      if (category === "government") return !!examId;
    }
    return false;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onComplete({
        name: name.trim(),
        email: email.trim(),
        category,
        examId: examId || undefined,
        classLevel: classLevel || undefined,
        stream: stream || undefined,
      });
    }
  };

  const selectedClass = cbseClasses.find(c => c.id === classLevel);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === step ? "w-8 bg-primary" : i < step ? "w-4 bg-primary/40" : "w-4 bg-muted"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 0: Name & Email */}
          {step === 0 && (
            <motion.div key="name" {...fadeSlide} className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome to Study Hub</h1>
                <p className="text-muted-foreground text-sm">India's complete education platform. Let's get you started.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    autoFocus
                    className="w-full h-12 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && canProceed() && handleNext()}
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                  />
                  {email && !isValidEmail(email) && (
                    <p className="text-xs text-destructive">Please enter a valid email address</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 1: Category */}
          {step === 1 && (
            <motion.div key="category" {...fadeSlide} className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Hi {name}! 👋</h2>
                <p className="text-muted-foreground text-sm">What are you preparing for?</p>
              </div>
              <div className="space-y-3">
                {mainCategories.map(cat => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCategory(cat.id);
                      setExamId("");
                      setClassLevel("");
                      setStream("");
                      setExamCategoryId("");
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                      category === cat.id
                        ? "border-primary bg-primary/5 shadow-[0_0_0_1px_hsl(var(--primary)/0.3)]"
                        : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    <span className="text-3xl">{cat.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">{cat.name}</div>
                      <div className="text-xs text-muted-foreground">{cat.description}</div>
                    </div>
                    {category === cat.id && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Sparkles className="w-5 h-5 text-primary" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Specific selection */}
          {step === 2 && (
            <motion.div key="details" {...fadeSlide} className="space-y-6">
              {category === "school" && (
                <>
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-foreground">Select your class</h2>
                    <p className="text-xs text-muted-foreground">CBSE Board · More boards coming soon</p>
                  </div>

                  {!classLevel ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                      {cbseClasses.map(cls => (
                        <motion.button
                          key={cls.id}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setClassLevel(cls.id)}
                          className={`relative p-3 rounded-xl border text-center transition-all duration-200 ${
                            cls.isBoard
                              ? "border-primary/40 bg-primary/5 hover:bg-primary/10 hover:shadow-md"
                              : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                          }`}
                        >
                          <div className="font-semibold text-sm text-foreground">{cls.label}</div>
                          {cls.isBoard && (
                            <span className="text-[10px] text-primary font-medium">Board</span>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  ) : selectedClass?.hasStreams && !stream ? (
                    <div className="space-y-4">
                      <button
                        onClick={() => setClassLevel("")}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Change class
                      </button>
                      <p className="text-center text-sm font-medium text-foreground">
                        Select your stream for {selectedClass.label}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {streams.map(s => (
                          <motion.button
                            key={s.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setStream(s.id)}
                            className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all text-center"
                          >
                            <span className="text-2xl block mb-1">{s.icon}</span>
                            <span className="text-sm font-medium text-foreground">{s.name}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          if (selectedClass?.hasStreams && stream) setStream("");
                          else setClassLevel("");
                        }}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
                        <p className="font-semibold text-foreground">
                          {selectedClass?.label}
                          {stream && ` · ${streams.find(s => s.id === stream)?.name}`}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Ready to start!</p>
                      </div>
                    </div>
                  )}
                </>
              )}

              {category === "entrance" && (
                <>
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-foreground">Select your exam</h2>
                  </div>
                  {!examCategoryId ? (
                    <div className="space-y-2">
                      {entranceExamCategories.map(cat => (
                        <motion.button
                          key={cat.id}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setExamCategoryId(cat.id)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-left"
                        >
                          <span className="text-xl">{cat.icon}</span>
                          <div>
                            <div className="font-medium text-sm text-foreground">{cat.name}</div>
                            <div className="text-xs text-muted-foreground">{cat.description}</div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={() => { setExamCategoryId(""); setExamId(""); }}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> All categories
                      </button>
                      <div className="space-y-2">
                        {entranceExamCategories.find(c => c.id === examCategoryId)?.subcategories?.map(exam => (
                          <motion.button
                            key={exam.id}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => !exam.comingSoon && setExamId(exam.id)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                              exam.comingSoon
                                ? "border-border bg-muted/50 opacity-60 cursor-not-allowed"
                                : examId === exam.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                            }`}
                          >
                            <span className="text-xl">{exam.icon}</span>
                            <div className="flex-1">
                              <div className="font-medium text-sm text-foreground">{exam.name}</div>
                              <div className="text-xs text-muted-foreground">{exam.description}</div>
                            </div>
                            {exam.comingSoon && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Soon</span>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {category === "government" && (
                <>
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-foreground">Select your exam</h2>
                  </div>
                  <div className="space-y-2">
                    {governmentExams.map(exam => (
                      <motion.button
                        key={exam.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExamId(exam.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                          examId === exam.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                        }`}
                      >
                        <span className="text-xl">{exam.icon}</span>
                        <div>
                          <div className="font-medium text-sm text-foreground">{exam.name}</div>
                          <div className="text-xs text-muted-foreground">{exam.description}</div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {step > 0 ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </motion.button>
          ) : <div />}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              canProceed()
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {step === 2 ? "Start Learning" : "Continue"} <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
