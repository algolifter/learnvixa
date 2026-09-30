import { useSafeBack } from "@/hooks/useSafeBack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";
import { getSelectionLabel } from "@/data/educationData";
import { ArrowLeft, User, BookOpen, RefreshCw, ChevronRight, Check, LogOut, Shield, Mail } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const navigate = useNavigate();
  const goBack = useSafeBack("/");
  const { profile, saveProfile, clearProfile } = useUserProfile();
  const { user, signOut } = useAuth();
  const { isAdmin } = useUserRole(user?.id);
  const [name, setName] = useState(profile?.name || "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!profile) return null;

  const modeLabel = getSelectionLabel(profile.category, profile.examId, profile.classLevel, profile.stream);

  const handleSavePersonal = async () => {
    if (!name.trim()) return;
    setSaving(true);
    await saveProfile({ ...profile, name: name.trim() });
    setSaving(false);
    setSaved(true);
    toast.success("Profile updated");
    setTimeout(() => setSaved(false), 2000);
  };

  const handleResetProgress = () => {
    if (confirm("This will reset all your study progress. Are you sure?")) {
      localStorage.removeItem("study-command-center");
      localStorage.removeItem("study-hub-last-studied");
      window.location.reload();
    }
  };

  const handleChangeCourse = () => {
    if (confirm("Change your course / exam? You'll go back to selection.")) {
      clearProfile();
    }
  };

  const handleLogout = async () => {
    // Clear only this session's onboarding state, then restart from the splash.
    try {
      localStorage.removeItem("learnvixa-guest-profile");
      localStorage.removeItem("learnvixa-ai-context");
    } catch { /* ignore */ }
    try { await signOut(); } catch { /* ignore */ }
    window.location.replace("/");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => goBack()} className="p-2 rounded-xl bg-card border border-border hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Account info */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-5 space-y-4">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> Account
            </h2>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <Mail className="w-3 h-3" /> Email
                </label>
                <div className="w-full h-11 px-4 rounded-xl bg-muted/40 border border-border text-muted-foreground flex items-center text-sm">
                  {profile.email}
                </div>
              </div>
              {isAdmin && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Shield className="w-3 h-3" /> Admin
                </div>
              )}
              <button
                onClick={handleSavePersonal}
                disabled={saving || !name.trim()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-all"
              >
                {saved ? <><Check className="w-4 h-4" /> Saved!</> : saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </motion.div>

          {/* Course */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-card border border-border rounded-2xl p-5 space-y-4">
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

          {/* Admin */}
          {isAdmin && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-primary/30 rounded-2xl p-5 space-y-3">
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" /> Admin Tools
              </h2>
              <button
                onClick={() => navigate("/admin")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all w-full justify-between"
              >
                <span>Open Admin Panel</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Reset & Logout */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border border-border rounded-2xl p-5 space-y-3">
            <h2 className="font-semibold text-foreground">Actions</h2>
            <button
              onClick={handleResetProgress}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-foreground hover:bg-muted transition-colors w-full"
            >
              <RefreshCw className="w-4 h-4" /> Reset Study Progress
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-destructive/30 text-sm text-destructive hover:bg-destructive/5 transition-colors w-full"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
