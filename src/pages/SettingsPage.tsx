import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserProfile, UserProfile } from "@/hooks/useUserProfile";
import { getSelectionLabel, mainCategories, cbseClasses, streams, entranceExamCategories, governmentExams } from "@/data/educationData";
import { ArrowLeft, User, Mail, BookOpen, RefreshCw, ChevronRight, Check } from "lucide-react";

export default function SettingsPage() {
  const navigate = useNavigate();
  const { profile, saveProfile, clearProfile } = useUserProfile();
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [showCourseChange, setShowCourseChange] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!profile) return null;

  const modeLabel = getSelectionLabel(profile.category, profile.examId, profile.classLevel, profile.stream);

  const handleSavePersonal = async () => {
    if (!name.trim() || !email.trim()) return;
    setSaving(true);
    await saveProfile({ ...profile, name: name.trim(), email: email.trim() });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleResetProgress = () => {
    if (confirm("This will reset all your study progress. Are you sure?")) {
      localStorage.removeItem("study-progress");
      localStorage.removeItem("study-hub-last-studied");
      window.location.reload();
    }
  };

  const handleChangeCourse = () => {
    if (confirm("This will take you back to the onboarding screen to select a new course. Continue?")) {
      clearProfile();
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl bg-card border border-border hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-5 space-y-4"
          >
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> Personal Information
            </h2>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-sm"
                />
              </div>
              <button
                onClick={handleSavePersonal}
                disabled={saving || !name.trim() || !email.trim()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-all"
              >
                {saved ? <><Check className="w-4 h-4" /> Saved!</> : saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </motion.div>

          {/* Course/Exam */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-5 space-y-4"
          >
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" /> Current Course
            </h2>
            <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
              <p className="font-medium text-foreground text-sm">{modeLabel}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {profile.category === "school" ? "School Education" : profile.category === "entrance" ? "Entrance Exam" : "Government Exam"}
              </p>
            </div>
            <button
              onClick={handleChangeCourse}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-foreground hover:bg-muted transition-colors w-full justify-between"
            >
              <span>Change Course / Exam</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </motion.div>

          {/* Reset */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-5 space-y-4"
          >
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-destructive" /> Reset
            </h2>
            <button
              onClick={handleResetProgress}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-destructive/30 text-sm text-destructive hover:bg-destructive/5 transition-colors w-full"
            >
              <RefreshCw className="w-4 h-4" /> Reset All Study Progress
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
