import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cbseClasses, streams, entranceExamCategories, governmentExams, mainCategories } from "@/data/educationData";
import type { UserProfile } from "@/hooks/useUserProfile";
import defaultLogo from "@/assets/learnvixa-logo.png";

interface Props {
  onComplete: (p: UserProfile) => void;
}

const selectCls =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";


const govSubExams: Record<string, string[]> = {
  upsc: ["UPSC Civil Services (IAS/IPS)", "UPSC CAPF", "UPSC ESE"],
  ssc: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC GD"],
  psc: ["Kerala PSC", "State PSC Exams"],
  banking: ["IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk", "RBI Grade B"],
  railways: ["RRB NTPC", "RRB Group D", "RRB JE"],
  defence: ["NDA", "CDS", "AFCAT"],
};

const LOGO_KEY = "learnvixa-custom-logo";

export default function QuickStartPage({ onComplete }: Props) {
  const [showSplash, setShowSplash] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [course, setCourse] = useState("general");
  const [customLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem(LOGO_KEY);
    } catch {
      return null;
    }
  });
  const logoSrc = customLogo || defaultLogo;

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const [step, setStep] = useState<"info" | "category" | "school" | "entrance" | "government" | "gov-exam">("info");
  const [govCat, setGovCat] = useState("");

  if (showSplash) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 animate-fade-in">
        <img src={logoSrc} alt="LearnVixa logo" className="w-40 h-40 object-contain" />
        <h1 className="font-display text-4xl font-bold text-primary tracking-wide">LearnVixa</h1>
      </div>
    );
  }

  const base = () => ({ name: name.trim(), email: "", age: age || undefined });
  const selectedClass = cbseClasses.find((c) => c.id === classLevel);

  const finishSchool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!classLevel) return;
    onComplete({
      ...base(),
      category: "school",
      classLevel,
      stream: selectedClass?.hasStreams && course !== "general" ? course : undefined,
    });
  };

  const back = (to: typeof step) => (
    <Button type="button" variant="ghost" size="sm" onClick={() => setStep(to)}>← Back</Button>
  );

  const card = "w-full text-left rounded-xl border border-border bg-background/60 p-4 hover:border-primary transition-colors";

  const govCategory = governmentExams.find((g) => g.id === govCat);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <div className="glass w-full max-w-md p-6 space-y-4 rounded-2xl">
        <div className="text-center space-y-2">
          <img src={logoSrc} alt="LearnVixa logo" className="w-20 h-20 object-contain mx-auto" />
          <h1 className="font-display text-2xl font-bold text-primary">LearnVixa</h1>
          <p className="text-sm text-muted-foreground">Tell us a little about yourself</p>
        </div>

        {step === "info" && (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); if (name.trim()) setStep("category"); }}>
            <div className="space-y-2">
              <Label htmlFor="qs-name">Name</Label>
              <Input id="qs-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qs-age">Age (optional)</Label>
              <Input id="qs-age" type="number" min={3} max={100} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your age" />
            </div>
            <Button type="submit" className="w-full" disabled={!name.trim()}>Next</Button>
          </form>
        )}

        {step === "category" && (
          <div className="space-y-3">
            <p className="text-sm font-medium">Choose your education category</p>
            {mainCategories.map((c) => (
              <button key={c.id} type="button" className={card} onClick={() => setStep(c.id as typeof step)}>
                <span className="font-semibold">{c.name}</span>
              </button>
            ))}
            {back("info")}
          </div>
        )}

        {step === "school" && (
          <form className="space-y-4" onSubmit={finishSchool}>
            <div className="space-y-2">
              <Label htmlFor="qs-class">Class</Label>
              <select id="qs-class" className={selectCls} value={classLevel} onChange={(e) => { setClassLevel(e.target.value); setCourse("general"); }} required>
                <option value="">Select your class</option>
                {cbseClasses.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
            {selectedClass?.hasStreams && (
              <div className="space-y-2">
                <Label htmlFor="qs-course">Course / Stream</Label>
                <select id="qs-course" className={selectCls} value={course} onChange={(e) => setCourse(e.target.value)}>
                  <option value="general">General School Education</option>
                  {streams.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
            )}
            <div className="flex items-center justify-between">
              {back("category")}
              <Button type="submit" disabled={!classLevel}>Continue</Button>
            </div>
          </form>
        )}

        {step === "entrance" && (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto">
            <p className="text-sm font-medium">Choose your entrance exam</p>
            {entranceExamCategories.map((cat) => (
              <div key={cat.id} className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{cat.name}</p>
                {(cat.subcategories ?? []).map((x) => (
                  <button key={x.id} type="button" className={card}
                    onClick={() => onComplete({ ...base(), category: "entrance", examId: x.id, classLevel: "class-12" })}>
                    <span className="font-semibold">{x.name}</span>
                    {x.description && <span className="block text-xs text-muted-foreground">{x.description}</span>}
                  </button>
                ))}
              </div>
            ))}
            {back("category")}
          </div>
        )}

        {step === "government" && (
          <div className="space-y-3">
            <p className="text-sm font-medium">Choose a government exam category</p>
            {governmentExams.map((g) => (
              <button key={g.id} type="button" className={card} onClick={() => { setGovCat(g.id); setStep("gov-exam"); }}>
                <span className="font-semibold">{g.name}</span>
                {g.description && <span className="block text-xs text-muted-foreground">{g.description}</span>}
              </button>
            ))}
            {back("category")}
          </div>
        )}

        {step === "gov-exam" && govCategory && (
          <div className="space-y-3">
            <p className="text-sm font-medium">{govCategory.name} exams</p>
            {(govSubExams[govCat] ?? [govCategory.name]).map((ex) => (
              <button key={ex} type="button" className={card}
                onClick={() => onComplete({ ...base(), category: "government", examId: govCat, classLevel: "graduate" })}>
                <span className="font-semibold">{ex}</span>
              </button>
            ))}
            {back("government")}
          </div>
        )}
      </div>
    </div>
  );
}
