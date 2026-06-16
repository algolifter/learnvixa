import { listChapters } from "@/data/content";
import { subjects } from "@/data/subjects";

export interface MissingChapter {
  subjectId: string;
  subjectName: string;
  chapterId: number;
  chapterName: string;
  hasStatic: boolean;
  missing: string[]; // section keys missing
}

const requiredSections = ["topics", "notes", "questions2", "questions3", "questions5"] as const;

export function computeStaticCoverage() {
  const liveSubjects = subjects.filter((s) => !s.comingSoon);
  const records = listChapters({ board: "cbse", classLevel: "12" });
  const recordKey = (sid: string, cid: number) => `${sid}-${cid}`;
  const byKey = new Map(records.map((r) => [recordKey(r.subjectId, r.chapterId), r]));

  let totalChapters = 0;
  let chaptersWithStatic = 0;
  const missing: MissingChapter[] = [];

  for (const s of liveSubjects) {
    for (const ch of s.chapters) {
      totalChapters++;
      const rec = byKey.get(recordKey(s.id, ch.id));
      if (rec) {
        chaptersWithStatic++;
        const c: any = rec.content;
        const missingSections: string[] = [];
        if (!c.topics?.length) missingSections.push("topics");
        if (!c.notes) missingSections.push("notes");
        if (!c.questions2?.length) missingSections.push("2-mark");
        if (!c.questions3?.length) missingSections.push("3-mark");
        if (!c.questions5?.length) missingSections.push("5-mark");
        if (missingSections.length) {
          missing.push({
            subjectId: s.id, subjectName: s.name,
            chapterId: ch.id, chapterName: ch.name,
            hasStatic: true, missing: missingSections,
          });
        }
      } else {
        missing.push({
          subjectId: s.id, subjectName: s.name,
          chapterId: ch.id, chapterName: ch.name,
          hasStatic: false, missing: [...requiredSections],
        });
      }
    }
  }

  return {
    totalSubjects: liveSubjects.length,
    totalChapters,
    chaptersWithStatic,
    coveragePct: totalChapters ? Math.round((chaptersWithStatic / totalChapters) * 100) : 0,
    missing,
  };
}
