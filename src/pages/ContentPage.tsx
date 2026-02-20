import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSubject, getChapter } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react";
import AITeacherPanel from "@/components/AITeacherPanel";

// Rich content generator based on chapter context
function getTopicsContent(subjectId: string, chapterName: string) {
  return {
    introduction: `This chapter covers the fundamental concepts, definitions, and applications of **${chapterName}** as prescribed by the CBSE Class 12 syllabus. Each topic is explained in detail with examples, diagrams, and exam-oriented insights. Understanding this chapter deeply is crucial for scoring full marks in board exams, as questions from this chapter frequently appear in 2-mark, 3-mark, and 5-mark sections.`,
    concepts: [
      `**Core Definitions**: All fundamental terms and their precise meanings as used in CBSE board exams. Every definition uses board-exam keywords for maximum marks.`,
      `**Theorems & Proofs**: Complete step-by-step derivations with proper mathematical notation. Each step is justified with reasoning that examiners expect.`,
      `**Solved Examples**: NCERT solved examples along with additional practice problems. Each example shows the ideal answer format for full marks.`,
      `**Graphical Representations**: Labeled diagrams showing relationships between variables. Graphs include axis labels, units, and key points marked.`,
      `**Real-World Applications**: How ${chapterName} connects to daily life and technology. These applications are commonly asked in HOTS questions.`,
      `**Inter-Chapter Connections**: How this chapter relates to other chapters in the syllabus. Understanding these links helps in revision and comprehensive answers.`,
      `**NCERT Back Exercise Solutions**: Complete solutions to all NCERT textbook exercises with step-by-step working.`,
      `**Exemplar Problem Solutions**: Solutions to NCERT Exemplar problems for advanced understanding.`,
    ],
    importantPoints: [
      `Focus on understanding derivations, not just memorizing them — examiners can spot rote learning.`,
      `Always mention units in final answers (1 mark can be deducted for missing units).`,
      `Draw neat, labeled diagrams wherever applicable — they can fetch up to 1 extra mark.`,
      `Use proper mathematical notation and standard symbols throughout your answer.`,
      `Highlight key terms and formulas by underlining them in your answer sheet.`,
      `For numerical problems, always write "Given", "To Find", "Formula", "Solution", and "Answer" sections.`,
      `Practice at least 5 numericals daily from this chapter for speed and accuracy.`,
    ],
    commonMistakes: [
      `Forgetting to mention units in final answers — costs 0.5 to 1 mark each time.`,
      `Skipping intermediate steps in derivations — examiners need to see your reasoning.`,
      `Not labeling diagrams properly — unlabeled diagrams get zero marks.`,
      `Confusing similar formulas from different chapters — make a comparison chart.`,
      `Writing answers in paragraph form instead of points — reduces readability and marks.`,
      `Not reading the question carefully — answering what wasn't asked wastes time.`,
      `Rushing through calculations without double-checking — arithmetic errors are common.`,
    ],
    examTips: [
      `Start with the definition before explaining any concept — this shows structured thinking.`,
      `Attempt all questions — there is no negative marking in CBSE boards.`,
      `Time management: spend approximately 1 minute per mark (2-mark = 2 min, 5-mark = 5 min).`,
      `Write neatly and use blue/black pen only. Red pen only for underlining key terms.`,
      `If stuck on a numerical, write the formula and substitution — partial marks are given.`,
    ],
  };
}

function getNotesContent(subjectId: string, chapterName: string) {
  return {
    overview: `**${chapterName}** is a critical chapter in the CBSE Class 12 ${subjectId === "english" ? "English Core" : subjectId.charAt(0).toUpperCase() + subjectId.slice(1)} syllabus. This chapter carries significant weightage in board exams and has been consistently featured in previous year papers. The notes below are structured for maximum exam performance — covering every concept that has been tested in CBSE boards from 2015 to 2025.`,
    definitions: [
      `All key terms defined using exact CBSE-prescribed language with **highlighted keywords** that examiners look for.`,
      `Each definition includes the context in which it should be used in different types of questions.`,
      `Comparative definitions for easily confused terms, presented in table format.`,
      `Historical context of key concepts (often asked in 1-mark factual questions).`,
    ],
    concepts: [
      `Deep explanation of each concept going beyond NCERT but staying CBSE-aligned.`,
      `Step-by-step breakdowns of complex ideas into simple, understandable parts.`,
      `Analogies and real-world comparisons to make abstract concepts concrete.`,
      `Mathematical relationships and their physical/chemical significance.`,
      `Common derivations presented in exam-ready format with proper steps.`,
    ],
    diagrams: [
      `Neat, labeled diagram descriptions for all major concepts in this chapter.`,
      `Circuit diagrams / molecular structures / geometric representations as applicable.`,
      `Flowcharts summarizing processes and classification hierarchies.`,
      `Comparison tables for related concepts.`,
    ],
    boardPoints: [
      `Topics with highest frequency in previous 10 years of CBSE board exams.`,
      `Mark distribution analysis: which concepts appear as 2-mark vs 5-mark questions.`,
      `Frequently repeated exact questions from previous boards.`,
      `New pattern questions introduced in recent years (competency-based).`,
    ],
    answerTips: [
      `Start every answer with a definition or statement of the principle involved.`,
      `Include neat, labeled diagrams wherever possible — they can add 1 mark.`,
      `Underline key terms and formulas in your answer.`,
      `Write in numbered points for better readability — avoid lengthy paragraphs.`,
      `For derivations: state the assumptions, write each step clearly, and box the final result.`,
      `For numericals: Given → To Find → Formula → Substitution → Answer (with units).`,
    ],
    previousBoardQ: `Based on analysis of CBSE Board Papers (2015-2025), the most frequently asked question from ${chapterName} is a derivation-type 5-mark question. Students should prepare complete derivations with proper diagrams. The 2-mark questions typically test definitions and basic concepts. 3-mark questions focus on numerical problem-solving and conceptual explanations.`,
  };
}

function generateQuestions(marks: number, chapterName: string, count: number) {
  const templates = {
    2: [
      `Define the key concept of ${chapterName}.`,
      `State the main principle/law associated with ${chapterName}.`,
      `Give two differences between the key terms in ${chapterName}.`,
      `Write the SI unit and dimensional formula for the main quantity in ${chapterName}.`,
      `Name the scientist who proposed the main theory in ${chapterName} and state the year.`,
      `What are the conditions under which ${chapterName} concepts are valid?`,
      `State one practical application of ${chapterName}.`,
      `Define the term used in ${chapterName} and give one example.`,
      `Write the mathematical expression for the main concept in ${chapterName} and define each symbol.`,
      `What happens to the main quantity in ${chapterName} when a specific condition changes?`,
      `State one limitation of the theory discussed in ${chapterName}.`,
      `Differentiate between the two types discussed in ${chapterName}.`,
      `Write a short note on the significance of ${chapterName} in modern science.`,
      `Name the factors affecting the main phenomenon in ${chapterName}.`,
      `State whether the given statement about ${chapterName} is true or false with justification.`,
      `What is the relationship between the two main quantities in ${chapterName}?`,
      `Give the graphical representation of the main relationship in ${chapterName}.`,
      `Write the standard value of the constant used in ${chapterName}.`,
      `Define the efficiency/yield in the context of ${chapterName}.`,
      `State the boundary conditions for the main equation in ${chapterName}.`,
    ],
    3: [
      `Explain the fundamental concept of ${chapterName} with a neat labeled diagram.`,
      `Derive the main formula used in ${chapterName}. State the assumptions clearly.`,
      `Solve: A numerical problem based on the core concept of ${chapterName}. Show all steps.`,
      `Compare and contrast the two main approaches discussed in ${chapterName} with examples.`,
      `Describe the experimental setup related to ${chapterName} with a diagram.`,
      `Explain the graphical representation in ${chapterName}. What does the slope represent?`,
      `What are the factors affecting ${chapterName}? Explain any two in detail.`,
      `State and explain the main theorem/law in ${chapterName} with a proof.`,
      `Explain the physical/chemical significance of the main equation in ${chapterName}.`,
      `A student performed an experiment based on ${chapterName}. Describe the observations and conclusions.`,
      `Explain the real-world application of ${chapterName} with an example.`,
      `Derive the relationship between the main quantities in ${chapterName}.`,
      `Explain the concept of ${chapterName} using an analogy from daily life.`,
      `What modifications would you suggest to improve the experimental setup in ${chapterName}?`,
      `Explain the step-by-step process described in ${chapterName} with a flowchart.`,
      `State the assumptions made in deriving the main formula of ${chapterName}. Are they valid?`,
      `Explain the classification system used in ${chapterName} with examples of each type.`,
      `Derive the expression for the main quantity in ${chapterName} and discuss its limiting cases.`,
      `Explain the mechanism/process involved in ${chapterName} at the molecular level.`,
      `Solve a CBSE board exam problem from ${chapterName} (2023 pattern).`,
    ],
    5: [
      `Derive the complete mathematical expression for the main concept in ${chapterName}. Draw a neat diagram and explain each step. State the assumptions made.`,
      `Explain ${chapterName} comprehensively with: (a) Definition (b) Derivation (c) Diagram (d) Two solved examples (e) Applications.`,
      `State the main theory/law of ${chapterName}. Derive the formula step-by-step. Solve a numerical problem based on it showing all intermediate steps.`,
      `Compare and contrast all methods/types discussed in ${chapterName}. Present your answer in tabular form with examples and diagrams for each.`,
      `Describe the complete experimental procedure of ${chapterName}: (a) Apparatus needed (b) Circuit/setup diagram (c) Procedure (d) Observations (e) Conclusion.`,
      `Explain the applications of ${chapterName}: (a) Three real-world applications (b) Significance in technology (c) Future scope (d) Related innovations.`,
      `Write detailed notes on ${chapterName} covering: definitions, all formulas with derivations, labeled diagrams, and three solved CBSE-pattern examples.`,
      `Discuss the historical development of ${chapterName}: (a) Key scientists and their contributions (b) Evolution of the theory (c) Modern understanding (d) Applications.`,
      `A long numerical problem based on ${chapterName}: Given specific values, derive the required quantities step by step, verify the answer, and discuss the physical significance.`,
      `Explain the complete theory of ${chapterName} as a 5-mark board exam answer: Start with definition, explain the concept, derive the main formula, draw diagram, give example.`,
      `Critically analyze the main concept of ${chapterName}. Discuss its validity, limitations, and conditions under which it breaks down. Suggest improvements.`,
      `Design an experiment to verify the main law/principle of ${chapterName}. Include apparatus, procedure, observations, graph, calculations, and sources of error.`,
      `Solve three progressively difficult numerical problems from ${chapterName}, showing complete solutions with proper units and significant figures.`,
      `Write a comprehensive answer on ${chapterName} that would score full marks in CBSE boards. Include all required elements as per the marking scheme.`,
      `Explain the interconnections between ${chapterName} and two other related chapters. Show how concepts build upon each other with examples.`,
    ],
  };
  const list = templates[marks as keyof typeof templates] || templates[2];
  return list.slice(0, count);
}

function getRevisionContent(chapterName: string) {
  return {
    quickRevision: [
      `Core definition of ${chapterName} — memorize exact wording.`,
      `Main formula/equation — know derivation steps.`,
      `Key diagram — practice drawing from memory.`,
      `Standard numerical approach — Given → Formula → Substitution → Answer.`,
      `Common board question patterns from this chapter.`,
      `Units and dimensions of all quantities.`,
      `Important constants and their standard values.`,
      `Key differences between related concepts.`,
    ],
    formulas: [
      `Primary formula of ${chapterName} with all variables defined.`,
      `Derived expressions and their special cases.`,
      `Relationship formulas connecting different quantities.`,
      `Limiting case expressions (when certain variables → 0 or ∞).`,
    ],
    highWeightage: [
      `Derivation-type questions (most frequent in 5-mark section).`,
      `Conceptual explanations with diagrams (3-mark section).`,
      `Definition and application questions (2-mark section).`,
      `Numerical problems based on direct formula application.`,
      `HOTS questions connecting this chapter to real-world scenarios.`,
    ],
    assertionReason: [
      `Assertion: The main concept of ${chapterName} holds true under standard conditions.\nReason: It is derived from fundamental conservation laws.\n→ Both A and R are true, and R is the correct explanation of A.`,
      `Assertion: The value of the main quantity in ${chapterName} increases with temperature.\nReason: Higher temperature provides more energy to the system.\n→ Analyze based on the specific relationship in this chapter.`,
      `Assertion: The graphical representation in ${chapterName} is linear.\nReason: The relationship between the two quantities is directly proportional.\n→ True only under specific conditions — state those conditions.`,
    ],
    mindMap: [
      `${chapterName} → Definitions → Formulas → Derivations`,
      `${chapterName} → Applications → Real-world → Technology`,
      `${chapterName} → Numerical Types → Direct Formula → Multi-step`,
      `${chapterName} → Diagrams → Labeled → Graph-based`,
      `${chapterName} → Previous Board Qs → 2-mark → 3-mark → 5-mark`,
    ],
  };
}

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

  const topics = getTopicsContent(subjectId!, chapter.name);
  const notes = getNotesContent(subjectId!, chapter.name);
  const revision = getRevisionContent(chapter.name);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 max-w-4xl mx-auto">
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
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

        {/* ========== TOPICS ========== */}
        {section === "topics" && (
          <>
            <ContentBlock title="Introduction" icon={<BookOpen className="w-5 h-5 text-primary" />}>
              <p>{topics.introduction}</p>
            </ContentBlock>
            <ContentBlock title="Key Concepts & Detailed Explanation" icon={<Lightbulb className="w-5 h-5 text-warning" />}>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                {topics.concepts.map((c, i) => <li key={i} dangerouslySetInnerHTML={{ __html: c.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />)}
              </ul>
            </ContentBlock>
            <ContentBlock title="⭐ Important Points for Board Exam" icon={<AlertTriangle className="w-5 h-5 text-destructive" />}>
              <ul className="space-y-2">
                {topics.importantPoints.map((p, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-primary font-bold shrink-0">✦</span> {p}</li>
                ))}
              </ul>
            </ContentBlock>
            <ContentBlock title="⚠️ Common Mistakes Students Make" icon={<AlertTriangle className="w-5 h-5 text-warning" />}>
              <ul className="space-y-2">
                {topics.commonMistakes.map((m, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-destructive font-bold shrink-0">✗</span> {m}</li>
                ))}
              </ul>
            </ContentBlock>
            <ContentBlock title="📝 Exam Strategy Tips" icon={<Sparkles className="w-5 h-5 text-accent" />}>
              <ul className="space-y-2">
                {topics.examTips.map((t, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-accent font-bold shrink-0">→</span> {t}</li>
                ))}
              </ul>
            </ContentBlock>
          </>
        )}

        {/* ========== NOTES ========== */}
        {section === "notes" && (
          <>
            <ContentBlock title="Chapter Overview" icon={<BookOpen className="w-5 h-5 text-accent" />}>
              <p>{notes.overview}</p>
            </ContentBlock>
            <ContentBlock title="Key Definitions (Exam-Ready)" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {notes.definitions.map((d, i) => <li key={i} dangerouslySetInnerHTML={{ __html: d.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />)}
              </ul>
            </ContentBlock>
            <ContentBlock title="Deep Concept Explanation" icon={<FileText className="w-5 h-5 text-warning" />}>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {notes.concepts.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </ContentBlock>
            <ContentBlock title="Diagram Descriptions" icon={<BookOpen className="w-5 h-5 text-primary" />}>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {notes.diagrams.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </ContentBlock>
            <ContentBlock title="⭐ Important Board Exam Points" icon={<AlertTriangle className="w-5 h-5 text-destructive" />}>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {notes.boardPoints.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </ContentBlock>
            <ContentBlock title="✍️ Answer Writing Tips for Full Marks" icon={<Sparkles className="w-5 h-5 text-accent" />}>
              <ul className="space-y-2">
                {notes.answerTips.map((t, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-accent font-bold shrink-0">→</span> {t}</li>
                ))}
              </ul>
            </ContentBlock>
            <ContentBlock title="📋 Previous Board Exam Analysis" icon={<BookOpen className="w-5 h-5 text-primary" />}>
              <p>{notes.previousBoardQ}</p>
            </ContentBlock>
          </>
        )}

        {/* ========== QUESTIONS ========== */}
        {(section === "q2mark" || section === "q3mark" || section === "q5mark") && (() => {
          const marks = section === "q2mark" ? 2 : section === "q3mark" ? 3 : 5;
          const count = marks === 5 ? 15 : 20;
          const questions = generateQuestions(marks, chapter.name, count);
          return (
            <>
              <ContentBlock title={`Practice Questions (${marks} Marks)`} icon={<BookOpen className="w-5 h-5 text-primary" />}>
                <p>CBSE-pattern {marks}-mark questions for <strong>{chapter.name}</strong>. Practice these to build exam confidence. These questions cover definitions, derivations, numericals, and conceptual understanding as per the latest CBSE marking scheme.</p>
              </ContentBlock>
              <div className="space-y-3">
                {questions.map((q, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-display font-bold text-sm shrink-0">Q{i + 1}.</span>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{q}</p>
                        <span className="text-xs text-muted-foreground">[{marks} Marks]</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        })()}

        {/* ========== REVISION ========== */}
        {section === "revision" && (
          <>
            <ContentBlock title="📋 Quick Revision Sheet" icon={<BookOpen className="w-5 h-5 text-accent" />}>
              <ul className="space-y-2">
                {revision.quickRevision.map((r, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-primary font-bold shrink-0">{i + 1}.</span> {r}</li>
                ))}
              </ul>
            </ContentBlock>
            <ContentBlock title="📐 Key Formulas & Expressions" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
              <ul className="space-y-2">
                {revision.formulas.map((f, i) => (
                  <li key={i} className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-foreground">{f}</li>
                ))}
              </ul>
            </ContentBlock>
            <ContentBlock title="🎯 High Weightage Topics" icon={<AlertTriangle className="w-5 h-5 text-destructive" />}>
              <ul className="space-y-2">
                {revision.highWeightage.map((h, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-warning font-bold shrink-0">★</span> {h}</li>
                ))}
              </ul>
            </ContentBlock>
            <ContentBlock title="✅ Assertion & Reason Practice" icon={<Sparkles className="w-5 h-5 text-accent" />}>
              <div className="space-y-3">
                {revision.assertionReason.map((ar, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg px-4 py-3 text-sm text-foreground whitespace-pre-line">{ar}</div>
                ))}
              </div>
            </ContentBlock>
            <ContentBlock title="🧠 Mind Map Summary" icon={<BookOpen className="w-5 h-5 text-primary" />}>
              <div className="space-y-2">
                {revision.mindMap.map((m, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-foreground font-mono">{m}</div>
                ))}
              </div>
            </ContentBlock>
          </>
        )}

        {/* AI Teacher */}
        <AITeacherPanel
          subject={subject.name}
          chapter={chapter.name}
          section={sectionLabels[section] || section}
        />

        {/* Mark as Complete */}
        <motion.button
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
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
