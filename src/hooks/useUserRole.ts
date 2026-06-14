import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useUserRole(userId: string | undefined) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    supabase
      .from("user_roles" as any)
      .select("role")
      .eq("user_id", userId)
      .then(({ data }) => {
        const roles = (data as any[] | null)?.map(r => r.role) ?? [];
        setIsAdmin(roles.includes("admin"));
        setLoading(false);
      });
  }, [userId]);

  return { isAdmin, loading };
}
