// Content registry — auto-discovers all chapter files in this folder.
//
// Convention: each chapter lives in a file named `<subject>-ch<chapterId>.ts`
// and exports a single `ChapterContent`-shaped const. Adding a new chapter
// requires NO edits to this file — just drop a new file matching the pattern.
//
// Subject aliases (e.g. `maths` → `mathematics`) are normalized so that
// frontend code can continue to request content by the canonical subject id.
//
// Default board/class is CBSE Class 12 (the originally hardcoded scope).
// Files may optionally export a `meta` object to override board / class /
// subject / chapter for future content (other classes, JEE, NEET, etc.).

import type { ChapterContent, ChapterMeta, ChapterRecord } from "./types";

export type { ChapterContent, TopicPage, QuestionItem, ChapterMeta, ChapterRecord } from "./types";

// Map directory-name subject prefixes → canonical subject ids used by the app.
const SUBJECT_ALIASES: Record<string, string> = {
  maths: "mathematics",
};

const DEFAULT_META: Omit<ChapterMeta, "subjectId" | "chapterId" | "filename"> = {
  category: "school",
  board: "cbse",
  classLevel: "12",
};

// Eagerly import every chapter file in this directory at build time.
// Vite resolves this statically, so tree-shaking and code splitting still work.
const modules = import.meta.glob<Record<string, unknown>>("./*.ts", { eager: true });

function isChapterContent(value: unknown): value is ChapterContent {
  return (
    !!value &&
    typeof value === "object" &&
    Array.isArray((value as { topics?: unknown }).topics) &&
    typeof (value as { notes?: unknown }).notes === "string"
  );
}

function pickContent(mod: Record<string, unknown>): ChapterContent | null {
  // Prefer an explicitly named `content` export, then fall back to the first
  // export whose shape matches ChapterContent.
  if (isChapterContent(mod.content)) return mod.content;
  for (const key of Object.keys(mod)) {
    const value = mod[key];
    if (isChapterContent(value)) return value;
  }
  return null;
}

function pickMeta(mod: Record<string, unknown>): Partial<ChapterMeta> | null {
  const meta = mod.meta;
  if (meta && typeof meta === "object") return meta as Partial<ChapterMeta>;
  return null;
}

// Build the registry: key = "<subject>-<chapterId>" (canonical subject id).
const registry: Record<string, ChapterRecord> = {};
const allRecords: ChapterRecord[] = [];

for (const [path, mod] of Object.entries(modules)) {
  const filename = path.replace(/^\.\//, "").replace(/\.ts$/, "");
  if (filename === "index" || filename === "types") continue;

  const match = filename.match(/^([a-z0-9]+)-ch(\d+)$/i);
  if (!match) continue;

  const rawSubject = match[1].toLowerCase();
  const chapterId = parseInt(match[2], 10);
  const subjectId = SUBJECT_ALIASES[rawSubject] ?? rawSubject;

  const content = pickContent(mod);
  if (!content) continue;

  const overrides = pickMeta(mod) ?? {};
  const record: ChapterRecord = {
    ...DEFAULT_META,
    subjectId,
    chapterId,
    filename,
    ...overrides,
    content,
  };

  registry[`${record.subjectId}-${record.chapterId}`] = record;
  allRecords.push(record);
}

export function getChapterContent(subjectId: string, chapterId: number): ChapterContent | null {
  return registry[`${subjectId}-${chapterId}`]?.content ?? null;
}

export function hasStaticContent(subjectId: string, chapterId: number): boolean {
  return `${subjectId}-${chapterId}` in registry;
}

export function getChapterRecord(subjectId: string, chapterId: number): ChapterRecord | null {
  return registry[`${subjectId}-${chapterId}`] ?? null;
}

export function listChapters(filter?: Partial<Pick<ChapterMeta, "board" | "classLevel" | "subjectId">>): ChapterRecord[] {
  if (!filter) return [...allRecords];
  return allRecords.filter((r) =>
    (!filter.board || r.board === filter.board) &&
    (!filter.classLevel || r.classLevel === filter.classLevel) &&
    (!filter.subjectId || r.subjectId === filter.subjectId)
  );
}
