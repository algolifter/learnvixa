import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface UserProfile {
  name: string;
  category: string;
  examId?: string;
  classLevel?: string;
  stream?: string;
}

const USER_ID_KEY = "study-hub-user-id";

function getOrCreateUserId(): string {
  let id = localStorage.getItem(USER_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, id);
  }
  return id;
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const userId = getOrCreateUserId();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (data && !error) {
        setProfile({
          name: data.name,
          category: data.category,
          examId: data.exam_id || undefined,
          classLevel: data.class_level || undefined,
          stream: data.stream || undefined,
        });
      }
    } catch {
      // fallback to localStorage
      const cached = localStorage.getItem("study-hub-profile");
      if (cached) setProfile(JSON.parse(cached));
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = useCallback(async (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem("study-hub-profile", JSON.stringify(newProfile));

    try {
      await supabase.from("user_profiles").upsert({
        user_id: userId,
        name: newProfile.name,
        category: newProfile.category,
        exam_id: newProfile.examId || null,
        class_level: newProfile.classLevel || null,
        stream: newProfile.stream || null,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" });
    } catch {
      // localStorage fallback already saved
    }
  }, [userId]);

  const clearProfile = useCallback(async () => {
    setProfile(null);
    localStorage.removeItem("study-hub-profile");
    try {
      await supabase.from("user_profiles").delete().eq("user_id", userId);
    } catch {}
  }, [userId]);

  return { profile, loading, saveProfile, clearProfile };
}
