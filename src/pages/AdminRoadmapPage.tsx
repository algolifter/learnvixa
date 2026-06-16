import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2, Edit3, Loader2, Rocket, CheckCircle2, Clock, Target, X, Save, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";
import { toast } from "sonner";
import { computeStaticCoverage } from "@/lib/contentCoverage";

type RoadmapStatus = "completed" | "in_progress" | "planned";

interface RoadmapItem {
  id: string;
  title: string;
  description: string | null;
  status: RoadmapStatus;
  category: string | null;
  sort_order: number;
}

const STATUS_META: Record<RoadmapStatus, { label: string; icon: any; color: string; ring: string }> = {
  completed:   { label: "Completed",   icon: CheckCircle2, color: "text-emerald-500", ring: "ring-emerald-500/20" },
  in_progress: { label: "In Progress", icon: Clock,        color: "text-primary",     ring: "ring-primary/20" },
  planned:     { label: "Planned",     icon: Target,       color: "text-accent",      ring: "ring-accent/20" },
};

const SEED: Omit<RoadmapItem, "id">[] = [
  { title: "Supabase Authentication", description: "Email/password, sessions, password reset.", status: "completed", category: "Platform", sort_order: 0 },
  { title: "Admin Content Management", description: "Categories → Exams → Classes → Subjects → Chapters → Items.", status: "completed", category: "Admin", sort_order: 1 },
  { title: "Class 12 CBSE Static Content", description: "Pre-written topics, notes & questions for Physics, Chemistry, Maths, English.", status: "in_progress", category: "Content", sort_order: 2 },
  { title: "Development Progress Dashboard", description: "Track features and content completion at a glance.", status: "completed", category: "Admin", sort_order: 3 },
  { title: "Contributor Roles (Teacher / Expert / Moderator)", description: "Schema is ready; UI gates ship later.", status: "planned", category: "Platform", sort_order: 4 },
  { title: "Class 11 Content", description: "Mirror the Class 12 structure once Class 12 is solid.", status: "planned", category: "Content", sort_order: 5 },
  { title: "JEE / NEET Tracks", description: "Build after CBSE Class 12 is comprehensive.", status: "planned", category: "Content", sort_order: 6 },
];

export default function AdminRoadmapPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isAdmin, loading: roleLoading } = useUserRole(user?.id);

  const [items, setItems] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<RoadmapItem | null>(null);
  const [adding, setAdding] = useState<RoadmapStatus | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (roleLoading) return;
    if (!isAdmin) { navigate("/"); return; }
    load();
  }, [isAdmin, roleLoading, navigate]);

  async function load() {
    setLoading(true);
    const { data } = await supabase
      .from("roadmap_items" as any)
      .select("*")
      .order("sort_order");
    let rows = ((data as any) ?? []) as RoadmapItem[];
    if (rows.length === 0) {
      // Seed first-run defaults so the admin sees something useful.
      await supabase.from("roadmap_items" as any).insert(SEED as any);
      const { data: seeded } = await supabase.from("roadmap_items" as any).select("*").order("sort_order");
      rows = ((seeded as any) ?? []) as RoadmapItem[];
    }
    setItems(rows);
    setLoading(false);
  }

  const coverage = useMemo(() => computeStaticCoverage(), []);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) =>
      i.title.toLowerCase().includes(s) ||
      (i.description ?? "").toLowerCase().includes(s) ||
      (i.category ?? "").toLowerCase().includes(s)
    );
  }, [items, search]);

  const byStatus = (st: RoadmapStatus) => filtered.filter((i) => i.status === st);

  async function save(payload: Partial<RoadmapItem> & { title: string; status: RoadmapStatus }) {
    const { id, ...rest } = payload as any;
    const op = id
      ? supabase.from("roadmap_items" as any).update(rest).eq("id", id)
      : supabase.from("roadmap_items" as any).insert(rest);
    const { error } = await op;
    if (error) return toast.error(error.message);
    toast.success(id ? "Updated" : "Added");
    setEditing(null);
    setAdding(null);
    load();
  }

  async function remove(item: RoadmapItem) {
    if (!confirm(`Delete "${item.title}"?`)) return;
    const { error } = await supabase.from("roadmap_items" as any).delete().eq("id", item.id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    load();
  }

  async function setStatus(item: RoadmapItem, status: RoadmapStatus) {
    if (item.status === status) return;
    const { error } = await supabase.from("roadmap_items" as any).update({ status }).eq("id", item.id);
    if (error) return toast.error(error.message);
    load();
  }

  if (roleLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/admin")} className="p-2 rounded-xl bg-card border border-border hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" /> Development Progress
            </h1>
            <p className="text-xs text-muted-foreground">Roadmap, content coverage, and what's coming next. Admin only.</p>
          </div>
        </div>

        {/* Coverage stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatCard label="Subjects (Class 12)" value={coverage.totalSubjects} />
          <StatCard label="Chapters with content" value={`${coverage.chaptersWithStatic} / ${coverage.totalChapters}`} />
          <StatCard label="Content coverage" value={`${coverage.coveragePct}%`} progress={coverage.coveragePct} />
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search roadmap items..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-card border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {(Object.keys(STATUS_META) as RoadmapStatus[]).map((st) => {
            const meta = STATUS_META[st];
            const Icon = meta.icon;
            const list = byStatus(st);
            return (
              <div key={st} className="bg-card border border-border rounded-2xl p-3 flex flex-col min-h-[260px]">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className={`flex items-center gap-2 text-sm font-semibold ${meta.color}`}>
                    <Icon className="w-4 h-4" /> {meta.label}
                    <span className="text-xs text-muted-foreground font-normal">({list.length})</span>
                  </div>
                  <button
                    onClick={() => setAdding(st)}
                    className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-muted"
                    title="Add item"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2 flex-1">
                  {list.map((it) => (
                    <motion.div
                      key={it.id}
                      layout
                      className={`group rounded-xl border border-border bg-background p-3 ring-1 ${meta.ring}`}
                    >
                      <div className="flex items-start gap-2">
                        <div className="flex-1 min-w-0">
                          {it.category && (
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">{it.category}</div>
                          )}
                          <div className="text-sm font-medium text-foreground">{it.title}</div>
                          {it.description && <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{it.description}</div>}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                          <button onClick={() => setEditing(it)} className="p-1 text-muted-foreground hover:text-primary"><Edit3 className="w-3.5 h-3.5" /></button>
                          <button onClick={() => remove(it)} className="p-1 text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {(Object.keys(STATUS_META) as RoadmapStatus[]).filter((s) => s !== it.status).map((s) => (
                          <button
                            key={s}
                            onClick={() => setStatus(it, s)}
                            className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                          >
                            → {STATUS_META[s].label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                  {list.length === 0 && (
                    <div className="text-xs text-muted-foreground italic px-1 py-4 text-center">Nothing here yet.</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Missing content */}
        <div className="bg-card border border-border rounded-2xl p-4">
          <h2 className="text-sm font-semibold text-foreground mb-1">Chapters needing content</h2>
          <p className="text-xs text-muted-foreground mb-3">{coverage.missing.length} chapters in Class 12 still need work. Tackle them at your own pace.</p>
          <div className="max-h-64 overflow-y-auto divide-y divide-border">
            {coverage.missing.slice(0, 100).map((m) => (
              <div key={`${m.subjectId}-${m.chapterId}`} className="py-2 flex items-center gap-3 text-xs">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase font-medium tracking-wider w-20 text-center">
                  {m.subjectName}
                </span>
                <span className="text-foreground truncate flex-1">Ch {m.chapterId}. {m.chapterName}</span>
                {!m.hasStatic ? (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">no static file</span>
                ) : (
                  <span className="text-[10px] text-muted-foreground">missing: {m.missing.join(", ")}</span>
                )}
              </div>
            ))}
            {coverage.missing.length === 0 && (
              <div className="text-xs text-muted-foreground italic py-6 text-center">All Class 12 chapters look fully covered. 🎉</div>
            )}
          </div>
        </div>
      </div>

      {(editing || adding) && (
        <RoadmapEditor
          existing={editing}
          defaultStatus={adding ?? editing!.status}
          onCancel={() => { setEditing(null); setAdding(null); }}
          onSave={save}
        />
      )}
    </div>
  );
}

function StatCard({ label, value, progress }: { label: string; value: string | number; progress?: number }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      {typeof progress === "number" && (
        <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-3">
          <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}

function RoadmapEditor({
  existing, defaultStatus, onCancel, onSave,
}: {
  existing: RoadmapItem | null;
  defaultStatus: RoadmapStatus;
  onCancel: () => void;
  onSave: (p: any) => void;
}) {
  const [title, setTitle] = useState(existing?.title ?? "");
  const [description, setDescription] = useState(existing?.description ?? "");
  const [category, setCategory] = useState(existing?.category ?? "");
  const [status, setStatus] = useState<RoadmapStatus>(existing?.status ?? defaultStatus);
  const [sortOrder, setSortOrder] = useState(existing?.sort_order ?? 0);

  const inputCls = "w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl max-w-md w-full p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">{existing ? "Edit roadmap item" : "Add roadmap item"}</h3>
          <button onClick={onCancel} className="p-1 text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-muted-foreground block mb-1">Title</label>
            <input className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-1">Description</label>
            <textarea className={inputCls} rows={3} value={description ?? ""} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Category</label>
              <input className={inputCls} value={category ?? ""} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Content, Platform" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Sort order</label>
              <input type="number" className={inputCls} value={sortOrder} onChange={(e) => setSortOrder(Number(e.target.value))} />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground block mb-1">Status</label>
            <select className={inputCls} value={status} onChange={(e) => setStatus(e.target.value as RoadmapStatus)}>
              <option value="completed">Completed</option>
              <option value="in_progress">In Progress</option>
              <option value="planned">Planned</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button onClick={onCancel} className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground">Cancel</button>
            <button
              onClick={() => {
                if (!title.trim()) return toast.error("Title is required");
                onSave({
                  id: existing?.id,
                  title,
                  description: description || null,
                  category: category || null,
                  status,
                  sort_order: sortOrder,
                });
              }}
              className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
