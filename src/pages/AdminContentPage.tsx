import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";
import {
  ArrowLeft, ChevronRight, ChevronDown, Plus, Trash2, Edit3,
  FolderTree, FileText, Loader2, Save, X,
} from "lucide-react";
import { toast } from "sonner";

type NodeType = "category" | "exam" | "class" | "subject" | "chapter";
type ItemType = "note" | "question" | "summary" | "pyq";

interface ContentNode {
  id: string;
  parent_id: string | null;
  node_type: NodeType;
  slug: string;
  title: string;
  description: string | null;
  icon: string | null;
  order_index: number;
  is_published: boolean;
}

interface ContentItem {
  id: string;
  chapter_id: string;
  item_type: ItemType;
  title: string;
  body: string;
  order_index: number;
  is_published: boolean;
}

const childTypeOf: Record<NodeType, NodeType | null> = {
  category: "exam",
  exam: "class",
  class: "subject",
  subject: "chapter",
  chapter: null,
};

const typeLabel: Record<NodeType, string> = {
  category: "Category",
  exam: "Exam / Board",
  class: "Class",
  subject: "Subject",
  chapter: "Chapter",
};

const itemTypeLabel: Record<ItemType, string> = {
  note: "Note",
  question: "Question",
  summary: "Summary",
  pyq: "Previous Year Question",
};

export default function AdminContentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isAdmin, loading: roleLoading } = useUserRole(user?.id);

  const [nodes, setNodes] = useState<ContentNode[]>([]);
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selectedChapter, setSelectedChapter] = useState<ContentNode | null>(null);

  const [addingUnder, setAddingUnder] = useState<{ parent: ContentNode | null; type: NodeType } | null>(null);
  const [editingNode, setEditingNode] = useState<ContentNode | null>(null);
  const [addingItem, setAddingItem] = useState<ItemType | null>(null);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);

  useEffect(() => {
    if (roleLoading) return;
    if (!isAdmin) {
      navigate("/");
      return;
    }
    loadAll();
  }, [isAdmin, roleLoading, navigate]);

  async function loadAll() {
    setLoading(true);
    const [{ data: n }, { data: i }] = await Promise.all([
      supabase.from("content_nodes" as any).select("*").order("order_index"),
      supabase.from("content_items" as any).select("*").order("order_index"),
    ]);
    setNodes((n as any) ?? []);
    setItems((i as any) ?? []);
    setLoading(false);
  }

  const rootNodes = nodes.filter(n => n.parent_id === null);
  const childrenOf = (id: string) => nodes.filter(n => n.parent_id === id);
  const itemsForChapter = (id: string) => items.filter(i => i.chapter_id === id);

  const toggle = (id: string) => {
    const next = new Set(expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    setExpanded(next);
  };

  async function saveNode(payload: Partial<ContentNode> & { node_type: NodeType; title: string; slug: string }) {
    const { id, ...rest } = payload as any;
    const op = id
      ? supabase.from("content_nodes" as any).update(rest).eq("id", id)
      : supabase.from("content_nodes" as any).insert(rest);
    const { error } = await op;
    if (error) return toast.error(error.message);
    toast.success(id ? "Updated" : "Added");
    setAddingUnder(null);
    setEditingNode(null);
    loadAll();
  }

  async function deleteNode(node: ContentNode) {
    if (!confirm(`Delete "${node.title}" and everything inside it?`)) return;
    const { error } = await supabase.from("content_nodes" as any).delete().eq("id", node.id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    loadAll();
  }

  async function saveItem(payload: Partial<ContentItem> & { chapter_id: string; item_type: ItemType; title: string }) {
    const { id, ...rest } = payload as any;
    const op = id
      ? supabase.from("content_items" as any).update(rest).eq("id", id)
      : supabase.from("content_items" as any).insert(rest);
    const { error } = await op;
    if (error) return toast.error(error.message);
    toast.success(id ? "Updated" : "Added");
    setAddingItem(null);
    setEditingItem(null);
    loadAll();
  }

  async function deleteItem(item: ContentItem) {
    if (!confirm(`Delete "${item.title}"?`)) return;
    const { error } = await supabase.from("content_items" as any).delete().eq("id", item.id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    loadAll();
  }

  if (roleLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const renderNode = (node: ContentNode, depth: number) => {
    const kids = childrenOf(node.id);
    const isOpen = expanded.has(node.id);
    const childType = childTypeOf[node.node_type];
    const isChapter = node.node_type === "chapter";

    return (
      <div key={node.id} className="border-l border-border/60" style={{ marginLeft: depth * 8 }}>
        <div className="flex items-center gap-1.5 py-1.5 px-2 hover:bg-muted/40 rounded-lg group">
          {kids.length > 0 || isChapter ? (
            <button onClick={() => toggle(node.id)} className="p-0.5 text-muted-foreground hover:text-foreground">
              {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>
          ) : (
            <span className="w-4" />
          )}
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase font-medium tracking-wider">
            {node.node_type}
          </span>
          <span className="text-sm text-foreground truncate flex-1">{node.title}</span>
          {!node.is_published && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">draft</span>
          )}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {isChapter && (
              <button
                onClick={() => { setSelectedChapter(node); toggle(node.id); }}
                className="p-1 text-muted-foreground hover:text-primary"
                title="Manage content"
              >
                <FileText className="w-3.5 h-3.5" />
              </button>
            )}
            {childType && (
              <button
                onClick={() => setAddingUnder({ parent: node, type: childType })}
                className="p-1 text-muted-foreground hover:text-primary"
                title={`Add ${typeLabel[childType]}`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            )}
            <button onClick={() => setEditingNode(node)} className="p-1 text-muted-foreground hover:text-primary">
              <Edit3 className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => deleteNode(node)} className="p-1 text-muted-foreground hover:text-destructive">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="ml-2">
            {kids.map(k => renderNode(k, depth + 1))}
            {isChapter && (
              <ChapterItems
                chapter={node}
                items={itemsForChapter(node.id)}
                onAdd={(t) => { setSelectedChapter(node); setAddingItem(t); }}
                onEdit={(it) => setEditingItem(it)}
                onDelete={deleteItem}
              />
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-card border border-border hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <FolderTree className="w-6 h-6 text-primary" /> Content Management
            </h1>
            <p className="text-xs text-muted-foreground">Build the catalog one piece at a time: Category → Exam → Class → Subject → Chapter → Content.</p>
          </div>
          <button
            onClick={() => setAddingUnder({ parent: null, type: "category" })}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" /> Category
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl p-3 shadow-sm"
        >
          {rootNodes.length === 0 ? (
            <div className="p-8 text-center">
              <FolderTree className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No content yet. Start by adding a Category.</p>
              <button
                onClick={() => setAddingUnder({ parent: null, type: "category" })}
                className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm"
              >
                <Plus className="w-4 h-4" /> Add Category
              </button>
            </div>
          ) : (
            rootNodes.map(r => renderNode(r, 0))
          )}
        </motion.div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Tip: start with LKG → Class 1 and grow upward. Content is published immediately unless you uncheck "Published".
        </p>
      </div>

      {(addingUnder || editingNode) && (
        <NodeEditor
          parent={addingUnder?.parent ?? (editingNode ? nodes.find(n => n.id === editingNode.parent_id) ?? null : null)}
          type={addingUnder?.type ?? editingNode!.node_type}
          existing={editingNode}
          onCancel={() => { setAddingUnder(null); setEditingNode(null); }}
          onSave={saveNode}
        />
      )}

      {(addingItem || editingItem) && selectedChapter && (
        <ItemEditor
          chapter={selectedChapter}
          type={addingItem ?? editingItem!.item_type}
          existing={editingItem}
          onCancel={() => { setAddingItem(null); setEditingItem(null); }}
          onSave={saveItem}
        />
      )}
    </div>
  );
}

function ChapterItems({
  chapter, items, onAdd, onEdit, onDelete,
}: {
  chapter: ContentNode;
  items: ContentItem[];
  onAdd: (t: ItemType) => void;
  onEdit: (it: ContentItem) => void;
  onDelete: (it: ContentItem) => void;
}) {
  return (
    <div className="ml-6 my-2 p-2.5 rounded-lg bg-muted/30 border border-border/60">
      <div className="flex items-center gap-1.5 flex-wrap mb-2">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mr-1">Add:</span>
        {(Object.keys(itemTypeLabel) as ItemType[]).map(t => (
          <button
            key={t}
            onClick={() => onAdd(t)}
            className="text-[11px] px-2 py-0.5 rounded-full bg-card border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
          >
            + {itemTypeLabel[t]}
          </button>
        ))}
      </div>
      {items.length === 0 ? (
        <p className="text-xs text-muted-foreground italic">No content items yet.</p>
      ) : (
        <ul className="space-y-1">
          {items.map(it => (
            <li key={it.id} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-card group">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent uppercase font-medium tracking-wider">
                {it.item_type}
              </span>
              <span className="text-xs text-foreground truncate flex-1">{it.title}</span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                <button onClick={() => onEdit(it)} className="p-1 text-muted-foreground hover:text-primary">
                  <Edit3 className="w-3 h-3" />
                </button>
                <button onClick={() => onDelete(it)} className="p-1 text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function NodeEditor({
  parent, type, existing, onCancel, onSave,
}: {
  parent: ContentNode | null;
  type: NodeType;
  existing: ContentNode | null;
  onCancel: () => void;
  onSave: (p: any) => void;
}) {
  const [title, setTitle] = useState(existing?.title ?? "");
  const [slug, setSlug] = useState(existing?.slug ?? "");
  const [description, setDescription] = useState(existing?.description ?? "");
  const [icon, setIcon] = useState(existing?.icon ?? "");
  const [orderIndex, setOrderIndex] = useState(existing?.order_index ?? 0);
  const [isPublished, setIsPublished] = useState(existing?.is_published ?? true);

  const autoSlug = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <Modal title={`${existing ? "Edit" : "Add"} ${typeLabel[type]}`} onClose={onCancel}>
      <div className="space-y-3">
        {parent && <p className="text-xs text-muted-foreground">Under: <span className="text-foreground">{parent.title}</span></p>}
        <Field label="Title">
          <input className={inputCls} value={title}
            onChange={e => { setTitle(e.target.value); if (!existing && !slug) setSlug(autoSlug(e.target.value)); }} />
        </Field>
        <Field label="Slug (URL-safe id)">
          <input className={inputCls} value={slug} onChange={e => setSlug(autoSlug(e.target.value))} />
        </Field>
        <Field label="Description (optional)">
          <textarea className={inputCls} rows={2} value={description ?? ""} onChange={e => setDescription(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Icon (emoji, optional)">
            <input className={inputCls} value={icon ?? ""} onChange={e => setIcon(e.target.value)} />
          </Field>
          <Field label="Order">
            <input type="number" className={inputCls} value={orderIndex} onChange={e => setOrderIndex(Number(e.target.value))} />
          </Field>
        </div>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} />
          Published
        </label>
        <ModalActions onCancel={onCancel} onSave={() => {
          if (!title.trim() || !slug.trim()) return toast.error("Title and slug are required");
          onSave({
            id: existing?.id,
            parent_id: parent?.id ?? null,
            node_type: type,
            slug, title, description: description || null,
            icon: icon || null,
            order_index: orderIndex,
            is_published: isPublished,
          });
        }} />
      </div>
    </Modal>
  );
}

function ItemEditor({
  chapter, type, existing, onCancel, onSave,
}: {
  chapter: ContentNode;
  type: ItemType;
  existing: ContentItem | null;
  onCancel: () => void;
  onSave: (p: any) => void;
}) {
  const [title, setTitle] = useState(existing?.title ?? "");
  const [body, setBody] = useState(existing?.body ?? "");
  const [orderIndex, setOrderIndex] = useState(existing?.order_index ?? 0);
  const [isPublished, setIsPublished] = useState(existing?.is_published ?? true);

  return (
    <Modal title={`${existing ? "Edit" : "Add"} ${itemTypeLabel[type]}`} onClose={onCancel}>
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground">Chapter: <span className="text-foreground">{chapter.title}</span></p>
        <Field label="Title">
          <input className={inputCls} value={title} onChange={e => setTitle(e.target.value)} />
        </Field>
        <Field label="Body (markdown supported)">
          <textarea className={inputCls} rows={10} value={body} onChange={e => setBody(e.target.value)} />
        </Field>
        <Field label="Order">
          <input type="number" className={inputCls} value={orderIndex} onChange={e => setOrderIndex(Number(e.target.value))} />
        </Field>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} />
          Published
        </label>
        <ModalActions onCancel={onCancel} onSave={() => {
          if (!title.trim()) return toast.error("Title is required");
          onSave({
            id: existing?.id,
            chapter_id: chapter.id,
            item_type: type,
            title, body,
            order_index: orderIndex,
            is_published: isPublished,
          });
        }} />
      </div>
    </Modal>
  );
}

const inputCls = "w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/70 backdrop-blur" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-card border border-border rounded-2xl p-5 shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

function ModalActions({ onCancel, onSave }: { onCancel: () => void; onSave: () => void }) {
  return (
    <div className="flex items-center justify-end gap-2 pt-2">
      <button onClick={onCancel} className="px-3 py-2 rounded-xl text-sm text-foreground hover:bg-muted">
        Cancel
      </button>
      <button onClick={onSave} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90">
        <Save className="w-4 h-4" /> Save
      </button>
    </div>
  );
}
