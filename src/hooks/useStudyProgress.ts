import { useState, useEffect, useCallback } from "react";

interface ChapterProgress {
  completed: boolean;
  lastStudied?: string;
  bookmarked: boolean;
  sections: {
    topics: boolean;
    notes: boolean;
    q2mark: boolean;
    q3mark: boolean;
    q5mark: boolean;
    revision: boolean;
  };
}

interface StudyData {
  progress: Record<string, Record<number, ChapterProgress>>;
  streak: number;
  lastStudyDate: string;
  totalHoursStudied: number;
  dailyGoalMinutes: number;
  todayMinutes: number;
}

const DEFAULT_DATA: StudyData = {
  progress: {},
  streak: 0,
  lastStudyDate: "",
  totalHoursStudied: 0,
  dailyGoalMinutes: 120,
  todayMinutes: 0,
};

function loadData(): StudyData {
  try {
    const raw = localStorage.getItem("study-command-center");
    if (raw) return { ...DEFAULT_DATA, ...JSON.parse(raw) };
  } catch {}
  return DEFAULT_DATA;
}

function saveData(data: StudyData) {
  localStorage.setItem("study-command-center", JSON.stringify(data));
}

export function useStudyProgress() {
  const [data, setData] = useState<StudyData>(loadData);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const getChapterProgress = useCallback(
    (subjectId: string, chapterId: number): ChapterProgress => {
      return (
        data.progress[subjectId]?.[chapterId] ?? {
          completed: false,
          bookmarked: false,
          sections: { topics: false, notes: false, q2mark: false, q3mark: false, q5mark: false, revision: false },
        }
      );
    },
    [data.progress]
  );

  const toggleBookmark = useCallback((subjectId: string, chapterId: number) => {
    setData((prev) => {
      const cp = prev.progress[subjectId]?.[chapterId] ?? {
        completed: false,
        bookmarked: false,
        sections: { topics: false, notes: false, q2mark: false, q3mark: false, q5mark: false, revision: false },
      };
      return {
        ...prev,
        progress: {
          ...prev.progress,
          [subjectId]: { ...prev.progress[subjectId], [chapterId]: { ...cp, bookmarked: !cp.bookmarked } },
        },
      };
    });
  }, []);

  const markSection = useCallback((subjectId: string, chapterId: number, section: keyof ChapterProgress["sections"]) => {
    setData((prev) => {
      const cp = prev.progress[subjectId]?.[chapterId] ?? {
        completed: false,
        bookmarked: false,
        sections: { topics: false, notes: false, q2mark: false, q3mark: false, q5mark: false, revision: false },
      };
      const newSections = { ...cp.sections, [section]: true };
      const allDone = Object.values(newSections).every(Boolean);
      return {
        ...prev,
        progress: {
          ...prev.progress,
          [subjectId]: {
            ...prev.progress[subjectId],
            [chapterId]: { ...cp, sections: newSections, completed: allDone, lastStudied: new Date().toISOString() },
          },
        },
      };
    });
  }, []);

  const getSubjectProgress = useCallback(
    (subjectId: string, totalChapters: number): number => {
      if (totalChapters === 0) return 0;
      const subjectData = data.progress[subjectId] ?? {};
      let total = 0;
      for (const cp of Object.values(subjectData)) {
        const done = Object.values(cp.sections).filter(Boolean).length;
        total += done / 6;
      }
      return Math.round((total / totalChapters) * 100);
    },
    [data.progress]
  );

  const getOverallProgress = useCallback(
    (subjectChapterCounts: Record<string, number>): number => {
      const entries = Object.entries(subjectChapterCounts);
      if (entries.length === 0) return 0;
      const totalProg = entries.reduce((sum, [id, count]) => sum + getSubjectProgress(id, count), 0);
      return Math.round(totalProg / entries.length);
    },
    [getSubjectProgress]
  );

  return { data, getChapterProgress, toggleBookmark, markSection, getSubjectProgress, getOverallProgress };
}
