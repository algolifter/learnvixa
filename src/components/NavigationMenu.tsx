import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen, Wind, Zap, Sparkles, RotateCcw, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { subjects } from "@/data/subjects";
import { ScrollArea } from "@/components/ui/scroll-area";

const quickLinks = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/revision", label: "Quick Revision", icon: RotateCcw },
  { path: "/calm", label: "Calm Mode", icon: Wind },
  { path: "/pomodoro", label: "Pomodoro Timer", icon: Zap },
  { path: "/predictor", label: "Board Predictor", icon: Sparkles },
];

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="fixed top-4 left-4 z-50 glass rounded-xl p-2.5 hover:bg-muted/80 transition-colors">
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 bg-background border-border">
        <div className="p-4 border-b border-border">
          <h2 className="font-display text-lg font-bold text-foreground">📚 Study Hub</h2>
          <p className="text-xs text-muted-foreground">CBSE Class 12</p>
        </div>

        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-3 space-y-1">
            {/* Quick Links */}
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider px-3 py-2">Quick Access</div>
            {quickLinks.map((link) => {
              const Icon = link.icon;
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </button>
              );
            })}

            {/* Subjects */}
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider px-3 py-2 mt-4">Subjects</div>
            {subjects.filter(s => !s.comingSoon).map((subject) => (
              <div key={subject.id}>
                <button
                  onClick={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>{subject.icon}</span>
                    {subject.name}
                  </span>
                  <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${expandedSubject === subject.id ? "rotate-90" : ""}`} />
                </button>

                {expandedSubject === subject.id && (
                  <div className="ml-4 pl-4 border-l border-border space-y-0.5 py-1">
                    <button
                      onClick={() => go(`/subject/${subject.id}`)}
                      className="w-full text-left px-3 py-1.5 rounded text-xs text-primary hover:bg-muted transition-colors font-medium"
                    >
                      All Chapters →
                    </button>
                    {subject.chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => go(`/subject/${subject.id}/chapter/${ch.id}`)}
                        className="w-full text-left px-3 py-1.5 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors truncate"
                      >
                        {ch.id}. {ch.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
