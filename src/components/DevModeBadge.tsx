import { isDevEnvironment } from "@/config/devMode";
import { Wrench } from "lucide-react";

export default function DevModeBadge() {
  if (!isDevEnvironment()) return null;
  return (
    <div className="fixed bottom-3 left-3 z-[60] pointer-events-none">
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warning/15 text-warning border border-warning/30 backdrop-blur text-[10px] font-medium uppercase tracking-wider shadow-sm">
        <Wrench className="w-3 h-3" />
        Dev Mode
      </div>
    </div>
  );
}
