import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";
import { ArrowLeft, Users, Shield, Loader2, BookOpen, FolderTree, ChevronRight } from "lucide-react";

interface ProfileRow {
  user_id: string;
  name: string;
  email: string;
  category: string | null;
  exam_id: string | null;
  class_level: string | null;
  created_at: string;
  last_login_at: string | null;
}

export default function AdminPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isAdmin, loading: roleLoading } = useUserRole(user?.id);
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (roleLoading) return;
    if (!isAdmin) {
      navigate("/");
      return;
    }
    supabase
      .from("user_profiles")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setProfiles((data as any) ?? []);
        setLoading(false);
      });
  }, [isAdmin, roleLoading, navigate]);

  if (roleLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const total = profiles.length;
  const onboarded = profiles.filter(p => p.category).length;
  const activeToday = profiles.filter(p => {
    if (!p.last_login_at) return false;
    return new Date(p.last_login_at).toDateString() === new Date().toDateString();
  }).length;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card border border-border hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" /> Admin Panel
            </h1>
            <p className="text-xs text-muted-foreground">Platform overview & user management</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Users", value: total, icon: Users, color: "text-primary" },
            { label: "Onboarded", value: onboarded, icon: BookOpen, color: "text-accent" },
            { label: "Active Today", value: activeToday, icon: Shield, color: "text-warning" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-5 shadow-sm"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => navigate("/admin/content")}
          className="w-full mb-6 group bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-primary/40 hover:bg-primary/5 transition-all text-left flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FolderTree className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-foreground">Content Management</div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Build the catalog: categories, exams, classes, subjects, chapters, notes, questions, PYQs.
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
        </button>



        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Registered Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr className="text-left text-xs text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Course</th>
                  <th className="px-4 py-3 font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map(p => (
                  <tr key={p.user_id} className="border-t border-border">
                    <td className="px-4 py-3 text-foreground">{p.name || "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.email}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {p.category ? `${p.category}${p.exam_id ? ` · ${p.exam_id}` : ""}${p.class_level ? ` · ${p.class_level}` : ""}` : "Not onboarded"}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{new Date(p.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
                {profiles.length === 0 && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No users yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Content management features coming soon.
        </p>
      </div>
    </div>
  );
}
