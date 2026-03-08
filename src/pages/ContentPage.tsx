import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSubject, getChapter } from "@/data/subjects";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react";
import AITeacherPanel from "@/components/AITeacherPanel";
import TopicHub from "@/components/TopicHub";
import AIExplainer from "@/components/AIExplainer";
import ReactMarkdown from "react-markdown";
import { getChapterContent, type ChapterContent } from "@/data/content";

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

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/\|/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildTopicWiseFiveMarkNotes(chapterContent: ChapterContent, chapterName: string) {
  return chapterContent.topics.map((topic, index) => {
    const cleanText = stripMarkdown(topic.content);
    const sentences = cleanText
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 20);

    const intro = sentences[0] ?? `${topic.title} is a key concept from ${chapterName}.`;
    const explanation = sentences[1] ?? `Explain the core idea of ${topic.title} with proper logic and sequence.`;
    const corePoints = (sentences.slice(2, 7).length ? sentences.slice(2, 7) : sentences.slice(0, 5)).slice(0, 5);
    const conclusion = sentences[sentences.length - 1] ?? `End with the exam relevance or application of ${topic.title}.`;

    const keywords = [topic.title, chapterName, "definition", "diagram", "application"]
      .filter(Boolean)
      .map((word) => `**${word}**`)
      .join(", ");

    const keyPointList = corePoints.length
      ? corePoints.map((point) => `- ${point}`).join("\n")
      : "- Write one clear definition\n- Add one diagram/example\n- Mention one formula or key argument\n- Add one practical implication\n- Conclude with exam language";

    const answerMarkdown = `## **Topic ${index + 1}: ${topic.title}**\n\n### **5-Mark Answer Structure**\n\n**1) Intro / Definition:** ${intro}\n\n**2) Core Explanation:** ${explanation}\n\n**3) Key Points to Include:**\n${keyPointList}\n\n**4) Scoring Keywords:** ${keywords}\n\n**5) Conclusion / Exam Closing Line:** ${conclusion}`;

    return {
      title: topic.title,
      markdown: answerMarkdown,
    };
  });
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

        {/* ========== TOPICS (Tabbed Hub) ========== */}
        {section === "topics" && (
          <TopicHub subjectId={subjectId!} chapterId={chapter.id} chapterName={chapter.name} />
        )}

        {/* ========== NOTES ========== */}
        {section === "notes" && (() => {
          const chapterContent = getChapterContent(subjectId!, chapter.id);
          if (chapterContent) {
            const topicWiseNotes = buildTopicWiseFiveMarkNotes(chapterContent, chapter.name);

            return (
              <div className="space-y-4">
                <ContentBlock title="Topic-wise 5-Mark Notes" icon={<FileText className="w-5 h-5 text-primary" />}>
                  <p>Every topic is organized in board-answer format so you can directly prepare 5-mark responses.</p>
                </ContentBlock>

                {topicWiseNotes.map((topicNote, index) => (
                  <div key={`${topicNote.title}-${index}`} className="glass rounded-xl p-5 space-y-3">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed
                      prose-headings:text-foreground prose-headings:font-display
                      prose-h2:text-base prose-h2:mt-0 prose-h2:mb-2 prose-h2:font-bold
                      prose-h3:text-sm prose-h3:mt-4 prose-h3:mb-1 prose-h3:font-semibold
                      prose-strong:text-foreground
                      prose-li:my-1
                      prose-p:my-2
                    ">
                      <ReactMarkdown>{topicNote.markdown}</ReactMarkdown>
                    </div>
                  </div>
                ))}

                {chapterContent.notes && (
                  <details className="glass rounded-xl p-5 group">
                    <summary className="text-sm text-primary cursor-pointer font-medium">Open quick chapter snapshot</summary>
                    <div className="mt-3 prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed
                      prose-headings:text-foreground prose-headings:font-display
                      prose-h2:text-base prose-h2:mt-4 prose-h2:mb-2
                      prose-h3:text-sm prose-h3:mt-3 prose-h3:mb-1
                      prose-strong:text-foreground
                      prose-li:my-1
                      prose-p:my-2
                    ">
                      <ReactMarkdown>{chapterContent.notes}</ReactMarkdown>
                    </div>
                  </details>
                )}
              </div>
            );
          }
          return (
            <AIExplainer
              subject={subject.name}
              chapter={chapter.name}
              cacheKey={`notes-${subjectId}-${chapter.name}`}
              prompt={`You are an expert CBSE Class 12 ${subject.name} teacher. Write topper-level notes for the chapter "${chapter.name}" in strict topic-wise format.

Rules:
- Divide notes into clear topic sections
- For each topic, provide a complete 5-mark answer structure
- Use bold headings and subheadings
- Include definition, explanation, key points, keywords, and conclusion for each topic
- Keep language exam-ready and scoring focused

Use markdown with ## and ### headings, **bold** text, bullet points, and numbered structure.`}
            />
          );
        })()}

        {/* ========== QUESTIONS ========== */}
        {(section === "q2mark" || section === "q3mark" || section === "q5mark") && (() => {
          const marks = section === "q2mark" ? 2 : section === "q3mark" ? 3 : 5;
          const chapterContent = getChapterContent(subjectId!, chapter.id);
          const chapterQuestions = marks === 2 ? chapterContent?.questions2 : marks === 3 ? chapterContent?.questions3 : chapterContent?.questions5;
          
          if (chapterQuestions?.length) {
            return (
              <>
                <ContentBlock title={`${marks}-Mark Questions — ${chapter.name}`} icon={<BookOpen className="w-5 h-5 text-primary" />}>
                  <p>Chapter-specific CBSE-pattern {marks}-mark questions with answers.</p>
                </ContentBlock>
                <div className="space-y-3">
                  {chapterQuestions.map((q, i) => (
                    <div key={i} className="glass rounded-xl p-4">
                      <div className="flex gap-3">
                        <span className="text-primary font-display font-bold text-sm shrink-0">Q{i + 1}.</span>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-foreground font-medium">{q.question}</p>
                          {q.answer && (
                            <details className="group">
                              <summary className="text-xs text-primary cursor-pointer hover:underline">Show Answer</summary>
                              <div className="mt-2 text-sm text-muted-foreground bg-muted/40 rounded-lg p-3 leading-relaxed whitespace-pre-line">{q.answer}</div>
                            </details>
                          )}
                          <span className="text-xs text-muted-foreground">[{marks} Marks]</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          }
          
          const count = marks === 5 ? 15 : 20;
          const questions = generateQuestions(marks, chapter.name, count);
          return (
            <>
              <ContentBlock title={`Practice Questions (${marks} Marks)`} icon={<BookOpen className="w-5 h-5 text-primary" />}>
                <p>CBSE-pattern {marks}-mark questions for <strong>{chapter.name}</strong>. Practice these to build exam confidence.</p>
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
        {section === "revision" && (() => {
          const chapterContent = getChapterContent(subjectId!, chapter.id);
          if (chapterContent?.revision) {
            const rev = chapterContent.revision;
            return (
              <>
                <ContentBlock title="📋 Quick Revision Points" icon={<BookOpen className="w-5 h-5 text-accent" />}>
                  <ul className="space-y-2">
                    {rev.quickPoints.map((r, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary font-bold shrink-0">{i + 1}.</span>
                        <span dangerouslySetInnerHTML={{ __html: r.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </ContentBlock>
                {rev.formulas?.length && (
                  <ContentBlock title="📐 Key Formulas" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {rev.formulas.map((f, i) => (
                        <div key={i} className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-foreground font-mono"
                          dangerouslySetInnerHTML={{ __html: f.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                      ))}
                    </div>
                  </ContentBlock>
                )}
                {rev.tipsAndTricks?.length && (
                  <ContentBlock title="💡 Tips & Tricks" icon={<Sparkles className="w-5 h-5 text-accent" />}>
                    <ul className="space-y-2">
                      {rev.tipsAndTricks.map((t, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-warning font-bold shrink-0">★</span>
                          <span dangerouslySetInnerHTML={{ __html: t.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </ContentBlock>
                )}
                {rev.diagrams?.length && (
                  <ContentBlock title="📊 Key Diagrams to Remember" icon={<FileText className="w-5 h-5 text-primary" />}>
                    <ul className="space-y-2">
                      {rev.diagrams.map((d, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-accent font-bold shrink-0">▸</span>
                          <span dangerouslySetInnerHTML={{ __html: d.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </ContentBlock>
                )}
              </>
            );
          }
          
          return (
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
          );
        })()}

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
