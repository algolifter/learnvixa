import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSubject, getChapter } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle, Lightbulb, BookOpen } from "lucide-react";

export default function ContentPage() {
  const { subjectId, chapterId, section } = useParams<{ subjectId: string; chapterId: string; section: string }>();
  const navigate = useNavigate();
  const { markSection } = useStudyProgress();
  const subject = getSubject(subjectId || "");
  const chapter = getChapter(subjectId || "", Number(chapterId));

  if (!subject || !chapter || !section) return <div className="min-h-screen flex items-center justify-center">Not found</div>;

  const sectionLabels: Record<string, string> = {
    topics: "Topics · Deep Explanation",
    notes: "Exam-Perfect Notes",
    q2mark: "2 Mark Questions (CBSE Pattern)",
    q3mark: "3 Mark Questions (Conceptual)",
    q5mark: "5 Mark Questions (Long Answers + Diagrams)",
    revision: "Revision Pack",
  };

  const handleMarkDone = () => {
    markSection(subjectId!, Number(chapterId), section as any);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 max-w-4xl mx-auto">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate(`/subject/${subjectId}/chapter/${chapterId}`)}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> {chapter.name}
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <span>{subject.name}</span> · <span>Chapter {chapter.id}</span>
        </div>
        <h1 className="text-xl md:text-3xl font-display font-bold text-foreground mb-1">{chapter.name}</h1>
        <p className="text-primary text-sm font-medium mb-8">{sectionLabels[section] || section}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
        {/* Sample content based on section type */}
        {section === "topics" && (
          <>
            <ContentBlock title="Introduction" icon={<BookOpen className="w-5 h-5 text-primary" />}>
              <p>This chapter covers the fundamental concepts, definitions, and applications of <strong>{chapter.name}</strong> as prescribed by the CBSE Class 12 syllabus. Each topic is explained in detail with examples, diagrams, and exam-oriented insights.</p>
            </ContentBlock>
            <ContentBlock title="Key Concepts" icon={<Lightbulb className="w-5 h-5 text-warning" />}>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Core definitions and theorems with proofs</li>
                <li>Step-by-step solved examples from NCERT and beyond</li>
                <li>Real-world applications and connections to other chapters</li>
                <li>Graphical representations and labeled diagrams</li>
              </ul>
            </ContentBlock>
            <ContentBlock title="Important Points for Board Exam" icon={<AlertTriangle className="w-5 h-5 text-destructive" />}>
              <p>Focus on understanding derivations, learning standard results, and practicing numerical problems. Board examiners look for keyword usage, proper notation, and neat diagrams.</p>
            </ContentBlock>
            <ContentBlock title="Common Mistakes" icon={<AlertTriangle className="w-5 h-5 text-warning" />}>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Forgetting to mention units in final answers</li>
                <li>Skipping intermediate steps in derivations</li>
                <li>Not labeling diagrams properly</li>
              </ul>
            </ContentBlock>
            <AITeacherButton />
          </>
        )}

        {section === "notes" && (
          <>
            <ContentBlock title="Chapter Overview" icon={<BookOpen className="w-5 h-5 text-accent" />}>
              <p>Comprehensive, topper-level notes for <strong>{chapter.name}</strong> covering every concept tested in CBSE Board exams. Each definition uses board-exam keywords for maximum marks.</p>
            </ContentBlock>
            <ContentBlock title="Key Definitions" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
              <p className="text-muted-foreground">Precise, word-perfect definitions with highlighted keywords that examiners look for. Memorize these exactly as written for full marks.</p>
            </ContentBlock>
            <ContentBlock title="Answer Writing Tips" icon={<Sparkles className="w-5 h-5 text-warning" />}>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Always start with the definition before explaining</li>
                <li>Include neat, labeled diagrams wherever possible</li>
                <li>Underline key terms and formulas</li>
                <li>Write in points for better readability</li>
              </ul>
            </ContentBlock>
          </>
        )}

        {(section === "q2mark" || section === "q3mark" || section === "q5mark") && (
          <>
            <ContentBlock title="Practice Questions" icon={<BookOpen className="w-5 h-5 text-primary" />}>
              <p>CBSE-pattern {section === "q2mark" ? "2" : section === "q3mark" ? "3" : "5"} mark questions for <strong>{chapter.name}</strong>. Practice these to build exam confidence and improve answer-writing skills.</p>
            </ContentBlock>
            <div className="glass rounded-xl p-5 space-y-4">
              <QuestionItem num={1} text={`Define the key concept of ${chapter.name} and give one example.`} marks={section === "q2mark" ? 2 : section === "q3mark" ? 3 : 5} />
              <QuestionItem num={2} text={`Explain the fundamental principle with a neat diagram.`} marks={section === "q2mark" ? 2 : section === "q3mark" ? 3 : 5} />
              <QuestionItem num={3} text={`Derive the main formula/theorem used in this chapter.`} marks={section === "q2mark" ? 2 : section === "q3mark" ? 3 : 5} />
            </div>
          </>
        )}

        {section === "revision" && (
          <>
            <ContentBlock title="Quick Revision Sheet" icon={<BookOpen className="w-5 h-5 text-accent" />}>
              <p>One-page summary of all critical concepts, formulas, and facts from <strong>{chapter.name}</strong>. Perfect for last-minute revision before the exam.</p>
            </ContentBlock>
            <ContentBlock title="Key Formulas & Facts" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
              <p className="text-muted-foreground">All important formulas, reactions, and key facts compiled in a quick-reference format.</p>
            </ContentBlock>
            <ContentBlock title="High Weightage Topics" icon={<AlertTriangle className="w-5 h-5 text-destructive" />}>
              <p className="text-muted-foreground">Based on CBSE board exam trends, these topics carry the highest marks and are frequently asked.</p>
            </ContentBlock>
          </>
        )}

        {/* Mark as Complete */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleMarkDone}
          className="w-full glass-hover rounded-xl p-4 flex items-center justify-center gap-2 text-accent font-medium"
        >
          <CheckCircle2 className="w-5 h-5" /> Mark as Completed
        </motion.button>
      </motion.div>
    </div>
  );
}

function ContentBlock({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="font-display text-sm font-semibold text-foreground">{title}</h2>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function QuestionItem({ num, text, marks }: { num: number; text: string; marks: number }) {
  return (
    <div className="flex gap-3">
      <span className="text-primary font-display font-bold text-sm">Q{num}.</span>
      <div className="flex-1">
        <p className="text-sm text-foreground">{text}</p>
        <span className="text-xs text-muted-foreground">[{marks} Marks]</span>
      </div>
    </div>
  );
}

function AITeacherButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full gradient-border glass rounded-xl p-4 flex items-center justify-center gap-3 group"
    >
      <Sparkles className="w-5 h-5 text-primary group-hover:animate-spin" />
      <span className="font-display text-sm font-semibold text-gradient">Explain with AI Teacher</span>
    </motion.button>
  );
}
