import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { GraduationCap, Mail, Lock, User, Loader2, Wrench } from "lucide-react";
import { isDevEnvironment, DEV_ADMIN_EMAIL, DEV_ADMIN_PASSWORD } from "@/config/devMode";

type Mode = "login" | "signup" | "reset";

export default function AuthPage() {
  const devMode = isDevEnvironment();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(devMode ? DEV_ADMIN_EMAIL : "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const autoTriedRef = useRef(false);

  // Fully automatic dev sign-in when password is provided via env.
  useEffect(() => {
    if (!devMode || autoTriedRef.current) return;
    if (!DEV_ADMIN_PASSWORD) return;
    autoTriedRef.current = true;
    (async () => {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: DEV_ADMIN_EMAIL,
        password: DEV_ADMIN_PASSWORD,
      });
      setLoading(false);
      if (error) toast.error(`Dev auto-login failed: ${error.message}`);
    })();
  }, [devMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { name: name.trim() },
          },
        });
        if (error) throw error;
        toast.success("Account created! You're signed in.");
      } else if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
        toast.success("Welcome back!");
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast.success("Password reset email sent. Check your inbox.");
        setMode("login");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Learnvixa</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {mode === "login" && "Welcome back. Sign in to continue."}
            {mode === "signup" && "Create your account to get started."}
            {mode === "reset" && "We'll send you a reset link."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-2xl p-6 shadow-sm">
          {mode === "signup" && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
          </div>

          {mode !== "reset" && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === "login" && "Sign In"}
            {mode === "signup" && "Create Account"}
            {mode === "reset" && "Send Reset Link"}
          </button>

          <div className="text-xs text-center text-muted-foreground space-y-1">
            {mode === "login" && (
              <>
                <button type="button" onClick={() => setMode("reset")} className="text-primary hover:underline block w-full">
                  Forgot password?
                </button>
                <div>
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setMode("signup")} className="text-primary hover:underline">
                    Sign up
                  </button>
                </div>
              </>
            )}
            {mode === "signup" && (
              <div>
                Already have an account?{" "}
                <button type="button" onClick={() => setMode("login")} className="text-primary hover:underline">
                  Sign in
                </button>
              </div>
            )}
            {mode === "reset" && (
              <button type="button" onClick={() => setMode("login")} className="text-primary hover:underline">
                Back to sign in
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
