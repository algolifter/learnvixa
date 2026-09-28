import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cbseClasses, streams, entranceExamCategories, governmentExams } from "@/data/educationData";
import type { UserProfile } from "@/hooks/useUserProfile";
import defaultLogo from "@/assets/learnvixa-logo.png";

interface Props {
  onComplete: (p: UserProfile) => void;
}

const selectCls =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const entranceExams = entranceExamCategories.flatMap((c) => c.subcategories ?? []);

const LOGO_KEY = "learnvixa-custom-logo";

export default function QuickStartPage({ onComplete }: Props) {
  const [showSplash, setShowSplash] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [course, setCourse] = useState("general");
  const [customLogo, setCustomLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem(LOGO_KEY);
    } catch {
      return null;
    }
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const logoSrc = customLogo || defaultLogo;

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleLogoFile = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setCustomLogo(dataUrl);
      try {
        localStorage.setItem(LOGO_KEY, dataUrl);
      } catch {
        // image too large for localStorage — still preview for this session
      }
    };
    reader.readAsDataURL(file);
  };

  const resetLogo = () => {
    setCustomLogo(null);
    try {
      localStorage.removeItem(LOGO_KEY);
    } catch {
      // ignore
    }
  };

  if (showSplash) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 animate-fade-in">
        <img src={logoSrc} alt="LearnVixa logo" className="w-40 h-40 object-contain" />
        <h1 className="font-display text-4xl font-bold text-primary tracking-wide">LearnVixa</h1>
      </div>
    );
  }

  const canContinue = name.trim() && classLevel;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue) return;
    const base = { name: name.trim(), email: "", age: age || undefined };
    if (course.startsWith("entrance:")) {
      onComplete({ ...base, category: "entrance", examId: course.slice(9), classLevel });
    } else if (course.startsWith("government:")) {
      onComplete({ ...base, category: "government", examId: course.slice(11), classLevel });
    } else {
      onComplete({
        ...base,
        category: "school",
        classLevel,
        stream: course === "general" ? undefined : course,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <form onSubmit={submit} className="glass w-full max-w-md p-6 space-y-4 rounded-2xl">
        <div className="text-center space-y-2">
          <img src={logoSrc} alt="LearnVixa logo" className="w-20 h-20 object-contain mx-auto" />
          <h1 className="font-display text-2xl font-bold text-primary">LearnVixa</h1>
          <p className="text-sm text-muted-foreground">Tell us a little about yourself</p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleLogoFile(e.target.files?.[0])}
            />
            <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
              Upload logo
            </Button>
            {customLogo && (
              <Button type="button" variant="ghost" size="sm" onClick={resetLogo}>
                Reset
              </Button>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="qs-name">Name</Label>
          <Input id="qs-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qs-age">Age</Label>
          <Input id="qs-age" type="number" min={3} max={99} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your age" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qs-class">Class</Label>
          <select id="qs-class" className={selectCls} value={classLevel} onChange={(e) => setClassLevel(e.target.value)} required>
            <option value="">Select your class</option>
            {cbseClasses.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
            <option value="graduate">Graduate / Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="qs-course">Course / Stream</Label>
          <select id="qs-course" className={selectCls} value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="general">General (School)</option>
            <optgroup label="Streams">
              {streams.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </optgroup>
            <optgroup label="Entrance Exams">
              {entranceExams.map((x) => <option key={x.id} value={`entrance:${x.id}`}>{x.name}</option>)}
            </optgroup>
            <optgroup label="Government Exams">
              {governmentExams.map((x) => <option key={x.id} value={`government:${x.id}`}>{x.name}</option>)}
            </optgroup>
          </select>
        </div>
        <Button type="submit" className="w-full" disabled={!canContinue}>Continue</Button>
      </form>
    </div>
  );
}
