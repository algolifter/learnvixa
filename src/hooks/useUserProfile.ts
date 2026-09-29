import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export interface UserProfile {
  name: string;
  email: string;
  category: string;
  examId?: string;
  classLevel?: string;
  stream?: string;
  age?: string;
  board?: string;
}

const LOCAL_KEY = "learnvixa-guest-profile";
const readLocal = (): UserProfile | null => {
  try { const v = localStorage.getItem(LOCAL_KEY); return v ? JSON.parse(v) : null; } catch { return null; }
};

export function useUserProfile() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setProfile(readLocal());
      setLoading(false);
      return;
    }
    loadProfile(user.id, user.email ?? "");
    // Update last_login
    supabase
      .from("user_profiles")
      .update({ last_login_at: new Date().toISOString() } as any)
      .eq("user_id", user.id)
      .then(() => {});
  }, [user, authLoading]);

  const loadProfile = async (userId: string, email: string) => {
    setLoading(true);
    const { data } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (data) {
      const d = data as any;
      // If category is empty, treat as no profile (needs onboarding)
      if (d.category) {
        setProfile({
          name: d.name || "",
          email: d.email || email,
          category: d.category,
          examId: d.exam_id || undefined,
          classLevel: d.class_level || undefined,
          stream: d.stream || undefined,
        });
      } else {
        // Profile row exists but no onboarding yet
        setProfile(null);
      }
    } else {
      setProfile(null);
    }
    setLoading(false);
  };

  const saveProfile = useCallback(async (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem("learnvixa-ai-context", JSON.stringify({
        category: newProfile.category, classLevel: newProfile.classLevel,
        board: newProfile.board, stream: newProfile.stream, examId: newProfile.examId,
      }));
    } catch { /* ignore */ }
    if (!user) { localStorage.setItem(LOCAL_KEY, JSON.stringify(newProfile)); return; }
    await supabase
      .from("user_profiles")
      .upsert(
        {
          user_id: user.id,
          name: newProfile.name,
          email: newProfile.email,
          category: newProfile.category,
          exam_id: newProfile.examId || null,
          class_level: newProfile.classLevel || null,
          stream: newProfile.stream || null,
        } as any,
        { onConflict: "user_id" }
      );
  }, [user]);

  const clearProfile = useCallback(async () => {
    setProfile(null);
    if (!user) { localStorage.removeItem(LOCAL_KEY); return; }
    await supabase
      .from("user_profiles")
      .update({ category: null, exam_id: null, class_level: null, stream: null } as any)
      .eq("user_id", user.id);
  }, [user]);

  return { profile, loading: loading || authLoading, saveProfile, clearProfile };
}
