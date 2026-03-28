import { useState, useCallback, useEffect } from "react";

export interface LastStudied {
  subjectId: string;
  subjectName: string;
  subjectIcon: string;
  chapterId: number;
  chapterName: string;
  section?: string;
  timestamp: number;
}

const STORAGE_KEY = "study-hub-last-studied";

export function useContinueStudying() {
  const [lastStudied, setLastStudied] = useState<LastStudied | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLastStudied(JSON.parse(raw));
    } catch {}
  }, []);

  const recordStudy = useCallback((entry: Omit<LastStudied, "timestamp">) => {
    const full = { ...entry, timestamp: Date.now() };
    setLastStudied(full);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
  }, []);

  return { lastStudied, recordStudy };
}
