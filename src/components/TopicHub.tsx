import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, AlertTriangle, XCircle, Target, FlaskConical, Zap,
  ChevronRight, Lightbulb, PenTool, GraduationCap
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AIExplainer from "@/components/AIExplainer";

interface TopicHubProps {
  subjectId: string;
  chapterName: string;
}

const TAB_CONFIG = [
  { id: "concepts", label: "Concepts", icon: BookOpen, shortLabel: "Concepts" },
  { id: "important", label: "Important Points", icon: AlertTriangle, shortLabel: "Important" },
  { id: "mistakes", label: "Common Mistakes", icon: XCircle, shortLabel: "Mistakes" },
  { id: "strategy", label: "Exam Strategy", icon: Target, shortLabel: "Strategy" },
  { id: "examples", label: "Examples & Diagrams", icon: FlaskConical, shortLabel: "Examples" },
  { id: "summary", label: "Quick Summary", icon: Zap, shortLabel: "Summary" },
] as const;

export default function TopicHub({ subjectId, chapterName }: TopicHubProps) {
  const [activeTab, setActiveTab] = useState("concepts");

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Desktop tabs */}
        <TabsList className="hidden md:inline-flex w-full h-auto flex-wrap gap-1 bg-muted/60 p-1.5 rounded-xl">
          {TAB_CONFIG.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center gap-1.5 text-xs px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Mobile: scrollable tab bar */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-2 min-w-max pb-2">
            {TAB_CONFIG.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.shortLabel}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <TabsContent value="concepts" className="mt-0">
              <ConceptsTab subjectId={subjectId} chapterName={chapterName} />
            </TabsContent>
            <TabsContent value="important" className="mt-0">
              <ImportantPointsTab subjectId={subjectId} chapterName={chapterName} />
            </TabsContent>
            <TabsContent value="mistakes" className="mt-0">
              <CommonMistakesTab subjectId={subjectId} chapterName={chapterName} />
            </TabsContent>
            <TabsContent value="strategy" className="mt-0">
              <ExamStrategyTab subjectId={subjectId} chapterName={chapterName} />
            </TabsContent>
            <TabsContent value="examples" className="mt-0">
              <ExamplesTab subjectId={subjectId} chapterName={chapterName} />
            </TabsContent>
            <TabsContent value="summary" className="mt-0">
              <SummaryTab subjectId={subjectId} chapterName={chapterName} />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}

/* ─── Shared UI ─── */

function Section({ title, icon, children, accent = "primary" }: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: "primary" | "warning" | "destructive" | "accent";
}) {
  return (
    <div className="glass rounded-xl p-5 space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function BulletList({ items, marker = "✦", markerClass = "text-primary" }: {
  items: string[];
  marker?: string;
  markerClass?: string;
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-muted-foreground text-sm leading-relaxed">
          <span className={`${markerClass} font-bold shrink-0 mt-0.5`}>{marker}</span>
          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        </li>
      ))}
    </ul>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-primary/30 pl-4 space-y-2">
      <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
        <ChevronRight className="w-3.5 h-3.5 text-primary" />
        {title}
      </h4>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

/* ─── Content Generators ─── */

function getConceptsData(subjectId: string, chapterName: string) {
  const isMath = subjectId === "mathematics";
  const isPhysics = subjectId === "physics";
  const isChem = subjectId === "chemistry";

  return {
    introduction: `**${chapterName}** is one of the foundational chapters in CBSE Class 12 ${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}. This chapter builds upon prerequisite knowledge and introduces several new concepts that are heavily tested in board examinations. A thorough understanding — going beyond surface-level NCERT definitions — is essential for scoring full marks. Below, each subtopic is broken down with definitions, logical reasoning, step-by-step explanations, and worked examples.`,
    subtopics: [
      {
        title: "Fundamental Definitions & Terminology",
        content: [
          `**Precise Definition**: Every key term in ${chapterName} has a board-exam specific definition. Memorize the exact CBSE wording — examiners look for specific keywords such as "if and only if", "for all", "there exists", etc.`,
          `**Scope & Domain**: Understand where each concept applies. For instance, definitions may have constraints (e.g., domain restrictions in functions, temperature/pressure conditions in chemistry). These constraints are frequently tested in assertion-reason questions.`,
          `**Notation & Symbols**: Master all standard notation used in this chapter. Incorrect notation (e.g., confusing ∈ with ⊂, or using = instead of ≡) costs marks in board exams.`,
          `**Historical Context**: Know who proposed the key ideas in ${chapterName} — single-line factual questions about scientists/mathematicians appear as 1-mark questions.`,
        ],
      },
      {
        title: "Core Concepts & Logical Framework",
        content: [
          `**Building Blocks**: ${isMath ? "Start from axioms and build up to theorems. Each theorem has necessary and sufficient conditions — know both." : isPhysics ? "Start from the physical law, understand the assumptions, then derive mathematical expressions." : isChem ? "Begin with the underlying principle (thermodynamic, kinetic, or structural) and connect to observable properties." : "Begin with the central theme and trace its development through the text."}`,
          `**Step-by-Step Reasoning**: Every concept in ${chapterName} follows a logical chain. Don't skip steps — examiners award marks for intermediate reasoning. ${isMath ? "In proofs, state each logical implication explicitly." : isPhysics ? "In derivations, justify each line with the physical principle used." : "Show your reasoning process clearly."}`,
          `**Interconnections**: ${chapterName} connects to other chapters. Understanding these links helps in solving multi-concept board questions (5-mark questions often combine concepts from 2-3 chapters).`,
          `**Edge Cases & Exceptions**: CBSE loves testing boundary conditions. What happens at extreme values? When does the rule break down? These appear as HOTS questions worth 4-5 marks.`,
          `**Visualization**: Develop mental models for each concept. ${isPhysics ? "Visualize field lines, force diagrams, and circuit flows." : isMath ? "Think in terms of graphs, mappings, and geometric interpretations." : isChem ? "Picture molecular structures, orbital diagrams, and reaction mechanisms." : "Imagine scenes, character motivations, and thematic connections."}`,
        ],
      },
      {
        title: "Derivations & Mathematical Treatment",
        content: [
          `**Standard Derivations**: ${chapterName} contains ${isMath || isPhysics ? "2-4" : "1-3"} derivations that are repeatedly asked as 5-mark questions. Each derivation must be written with: (a) starting assumptions stated clearly, (b) every intermediate step shown, (c) final result boxed, (d) physical/mathematical significance explained.`,
          `**Formula Sheet**: All formulas in ${chapterName} should be organized by category: primary formulas (derived from first principles), secondary formulas (derived from primary), and special-case formulas (limiting conditions). This hierarchy helps in exam recall.`,
          `**Dimensional Analysis**: ${isPhysics ? "Verify every formula using dimensional analysis. This is both an exam technique (for MCQs) and a cross-check method for numericals." : isMath ? "Check results by substituting known values or testing boundary conditions." : isChem ? "Verify using stoichiometric balance, charge balance, or by checking units." : "Verify answers by cross-referencing with the text."}`,
          `**Worked Example**: Consider a typical board-exam problem: Start with "Given" (list all known quantities with units), then "To Find" (what the question asks), then "Formula" (relevant equation), then "Substitution" (plug in values), and finally "Answer" (with correct units and significant figures). This format guarantees full marks.`,
        ],
      },
      {
        title: "Applications & Real-World Connections",
        content: [
          `**Practical Applications**: ${chapterName} has direct applications in ${isPhysics ? "engineering, technology, and daily life — from household appliances to space technology" : isMath ? "computer science, economics, optimization, and data analysis" : isChem ? "medicine, industry, agriculture, and environmental science" : "communication, critical thinking, and cultural understanding"}. These applications appear as case-study questions in the new CBSE pattern.`,
          `**Competency-Based Questions (CBQs)**: CBSE has introduced CBQs that present a real-world scenario and ask concept-based questions. These typically carry 4-5 marks and require applying ${chapterName} concepts to unfamiliar situations.`,
          `**Inter-Disciplinary Links**: Questions may combine ${chapterName} with concepts from other subjects. For example, ${isPhysics ? "physics concepts applied to biological systems" : isMath ? "mathematical models used in physics or economics" : isChem ? "chemistry principles in biological or environmental contexts" : "literary analysis in social and historical contexts"}.`,
        ],
      },
      {
        title: "NCERT & Beyond — Advanced Understanding",
        content: [
          `**NCERT Coverage**: Everything in the NCERT textbook for ${chapterName} is directly examinable. Pay special attention to in-text questions, margin notes, and "Points to Ponder" boxes — these often appear as board questions verbatim.`,
          `**NCERT Exemplar Problems**: Solve all exemplar problems for ${chapterName}. These are harder than textbook exercises and prepare you for HOTS questions. Many board questions are adapted from exemplar problems.`,
          `**Beyond NCERT**: For competitive exam preparation (JEE/NEET), extend your understanding of ${chapterName} to include ${isMath ? "proof techniques, advanced problem-solving strategies, and multiple-solution approaches" : isPhysics ? "deeper derivations, advanced numericals, and conceptual traps" : isChem ? "reaction mechanisms, advanced stoichiometry, and exception cases" : "advanced literary criticism and comparative analysis"}.`,
          `**Previous Year Analysis (2015-2025)**: From 10 years of CBSE board papers, ${chapterName} contributes an average of ${isMath || isPhysics ? "8-12" : "6-10"} marks. The most common question type is ${isMath ? "proof/derivation (5 marks)" : isPhysics ? "derivation + numerical (5 marks)" : isChem ? "reaction-based + explanation (3-5 marks)" : "extract-based + long answer (5-6 marks)"}.`,
        ],
      },
    ],
  };
}

function getImportantPointsData(subjectId: string, chapterName: string) {
  const isMath = subjectId === "mathematics";
  const isPhysics = subjectId === "physics";
  const isChem = subjectId === "chemistry";

  return {
    highWeightage: [
      `**Derivations**: The primary derivation in ${chapterName} is asked almost every year (5 marks). Know it cold — write it from memory in under 4 minutes.`,
      `**Definitions with examples**: Board examiners expect the NCERT definition verbatim, followed by at least one illustrative example.`,
      `**Graphical Analysis**: ${isPhysics ? "V-I characteristics, field diagrams, and energy-level diagrams" : isMath ? "Graph sketching, domain-range visualization, and transformation graphs" : isChem ? "Rate curves, phase diagrams, and titration curves" : "Thematic mapping and character arcs"} are high-scoring and frequently asked.`,
      `**Numerical Problem Types**: The 2-3 standard numerical types from ${chapterName} that repeat across board papers. Practice at least 10 variations of each type.`,
    ],
    frequentBoardAreas: [
      `**2-Mark Questions**: Definitions, state a theorem/law, give one difference, name the scientist, write the formula with symbol definitions.`,
      `**3-Mark Questions**: Derivation of a secondary formula, solve a standard numerical, explain a concept with a labeled diagram, compare two related ideas.`,
      `**5-Mark Questions**: Full derivation from first principles with diagram, solve a multi-step numerical, comprehensive explanation with examples and applications.`,
      `**Case-Study / CBQ**: Real-world scenario + 4-5 sub-questions testing conceptual understanding of ${chapterName}.`,
    ],
    keyFormulas: [
      `**Primary Formula**: The main equation of ${chapterName} — memorize along with conditions of validity and units of each quantity.`,
      `**Derived Expressions**: At least 2-3 secondary formulas derived from the primary one. Know which formula to use for which type of question.`,
      `**Special Cases**: Limiting values, boundary conditions, and "what if" scenarios. E.g., what happens when a variable → 0, → ∞, or equals a specific value.`,
      `**Constants**: All numerical constants used in ${chapterName} with their standard values, units, and dimensions.`,
    ],
    examKeywords: [
      `**Scoring keywords**: Use terms like "${isMath ? "if and only if, for all, there exists, hence proved" : isPhysics ? "according to [law name], by substitution, from equation (i)" : isChem ? "due to [effect name], according to Le Chatelier's principle" : "the author suggests, this symbolizes, in contrast to"}" in your answers.`,
      `**Transition phrases**: "Therefore", "Hence", "It follows that", "Substituting equation (i) in (ii)" — these show logical flow and earn process marks.`,
      `**Conclusion statements**: Always end with a clear concluding statement. For numericals: restate the answer with units. For theory: summarize the significance.`,
    ],
  };
}

function getCommonMistakesData(subjectId: string, chapterName: string) {
  const isMath = subjectId === "mathematics";
  const isPhysics = subjectId === "physics";
  const isChem = subjectId === "chemistry";

  return {
    conceptual: [
      `**Confusing similar concepts**: In ${chapterName}, students often mix up closely related terms. ${isMath ? "E.g., confusing one-one with onto, or domain with range." : isPhysics ? "E.g., confusing EMF with potential difference, or force with energy." : isChem ? "E.g., confusing molarity with molality, or rate with rate constant." : "E.g., confusing theme with plot, or metaphor with simile."} Make a comparison chart.`,
      `**Ignoring conditions/constraints**: Every theorem/law in ${chapterName} has conditions under which it is valid. Forgetting to state these conditions costs 1-2 marks per question.`,
      `**Surface-level understanding**: Students memorize formulas without understanding the underlying logic. When the question is slightly modified from standard format, they get stuck. Focus on "why" not just "what".`,
      `**Wrong assumptions**: Applying a concept outside its valid range. ${isPhysics ? "E.g., using Ohm's law for non-ohmic conductors." : isMath ? "E.g., assuming continuity implies differentiability." : isChem ? "E.g., assuming ideal gas behavior at high pressures." : "E.g., assuming the narrator's view equals the author's."}`,
    ],
    calculation: [
      `**Sign errors**: The most common mathematical mistake. ${isMath ? "Especially in integration by parts and trigonometric substitutions." : isPhysics ? "Especially with vector quantities and sign conventions." : isChem ? "Especially in equilibrium calculations and electrode potentials." : "N/A for literature, but in grammar: subject-verb agreement errors."}`,
      `**Unit conversion mistakes**: Not converting to SI units before substitution. Always write units alongside numbers in each step.`,
      `**Rounding too early**: Carry at least 4 significant figures through calculations. Round only in the final answer.`,
      `**Arithmetic errors under pressure**: In exam conditions, students make basic arithmetic mistakes. Double-check all calculations by estimating the expected answer range first.`,
    ],
    writing: [
      `**No structure in answers**: Writing in long paragraphs instead of numbered points. CBSE examiners prefer structured, point-wise answers with clear subheadings.`,
      `**Missing diagrams**: Not drawing diagrams when the question asks "with the help of a diagram" — instant 1-2 mark deduction.`,
      `**Unlabeled diagrams**: Drawing a diagram but forgetting to label parts, mark arrows, or include units on axes. An unlabeled diagram may get zero marks.`,
      `**Incomplete derivations**: Skipping intermediate steps assuming the examiner will understand. Every step must be explicitly written with justification.`,
      `**Not answering what was asked**: Reading the question carelessly and answering something related but different. Underline keywords in the question before writing.`,
      `**Exceeding word/space limit**: For 2-mark questions, keep answers to 30-40 words. For 3-mark, 50-80 words. Going overboard wastes time without earning extra marks.`,
    ],
    prevention: [
      `**Create an error log**: After every practice paper, note down mistakes and review before exams.`,
      `**Practice under timed conditions**: Simulate exam pressure to identify your weak spots.`,
      `**Peer review**: Exchange answers with a classmate and mark each other's papers.`,
      `**Use the "STOP" method**: Stop → Think → Organize → Proceed before writing each answer.`,
    ],
  };
}

function getExamStrategyData(subjectId: string, chapterName: string) {
  return {
    answerWriting: {
      twoMark: [
        `**Structure**: Definition + One example OR Two points with brief explanation.`,
        `**Time allocation**: Maximum 3 minutes per 2-mark question.`,
        `**Length**: 2-4 sentences. Be precise — extra words don't earn extra marks.`,
        `**Tip**: Start with the direct answer, then add a line of explanation. Don't write an introduction for a 2-mark question.`,
      ],
      threeMark: [
        `**Structure**: Definition/Concept (1 mark) + Explanation/Derivation (1 mark) + Diagram/Example (1 mark).`,
        `**Time allocation**: Maximum 5 minutes per 3-mark question.`,
        `**Length**: 5-8 sentences with a labeled diagram if applicable.`,
        `**Tip**: Use bullet points or numbered steps. Include at least one diagram or mathematical expression for full marks.`,
      ],
      fiveMark: [
        `**Structure**: Introduction/Definition (1 mark) + Detailed Derivation/Explanation (2 marks) + Diagram (1 mark) + Example/Application (1 mark).`,
        `**Time allocation**: Maximum 8-10 minutes per 5-mark question.`,
        `**Length**: 12-20 sentences with neat diagram and worked example.`,
        `**Tip**: Plan your answer for 30 seconds before writing. Ensure you cover all sub-parts. Box the final result.`,
      ],
    },
    presentation: [
      `**Use headings and sub-headings** for long answers — it guides the examiner and shows structure.`,
      `**Underline key terms, formulas, and final answers** using a ruler for neatness.`,
      `**Draw diagrams with pencil and label with pen** — this looks professional and neat.`,
      `**Leave 2-3 lines between answers** — crowded answer sheets are harder to mark favorably.`,
      `**Use fresh pages for 5-mark answers** — don't start mid-page if possible.`,
      `**Write the question number clearly** in the margin. If you attempt an answer out of order, mention it clearly.`,
    ],
    timeManagement: [
      `**Total paper: 3 hours (180 minutes)** — Plan: 15 min reading + 150 min writing + 15 min review.`,
      `**${chapterName} allocation**: Based on mark weightage, allocate proportional time. Don't spend more than the marks justify.`,
      `**Attempt order**: Start with the section you're most confident in. For ${chapterName}, if you're strong in derivations, attempt 5-mark questions first.`,
      `**Don't get stuck**: If a question takes more than 1.5× its allocated time, move on. Come back during review time.`,
      `**Last 15 minutes**: Review all answers. Check for missing units, unlabeled diagrams, and unanswered sub-parts.`,
    ],
    keywordStrategy: [
      `**Use NCERT language**: Examiners are trained on NCERT. Using the same phrasing increases your chances of getting full marks.`,
      `**Technical terms matter**: Use the proper scientific/mathematical term even if you explain it in simple words alongside.`,
      `**Connecting words**: "Hence", "Therefore", "Thus", "It follows that" — these show logical progression and are expected in board answers.`,
      `**Quantitative keywords**: "Directly proportional", "Inversely related", "Increases linearly" — be specific, not vague.`,
    ],
  };
}

function getExamplesData(subjectId: string, chapterName: string) {
  const isMath = subjectId === "mathematics";
  const isPhysics = subjectId === "physics";
  const isChem = subjectId === "chemistry";

  return {
    diagrams: [
      {
        title: isMath ? `Graphical Representation of ${chapterName}` : isPhysics ? `Circuit / Field Diagram for ${chapterName}` : isChem ? `Molecular / Reaction Diagram for ${chapterName}` : `Concept Map for ${chapterName}`,
        description: isMath
          ? `Draw the coordinate axes. Label X-axis and Y-axis with appropriate variables and units. Plot key points, mark asymptotes if any, shade the relevant region. Indicate domain and range on the axes. Mark critical points (maxima, minima, inflection) clearly.`
          : isPhysics
          ? `Draw the experimental setup / circuit diagram. Label all components (source, resistors, meters, etc.). Mark the direction of current/field with arrows. Include values if given. Add a brief caption below the diagram.`
          : isChem
          ? `Draw the molecular structure using standard notation. Show all bonds (single, double, triple). Mark lone pairs, formal charges, and bond angles. For reactions, draw the mechanism with curved arrows showing electron movement.`
          : `Create a concept map showing the central theme, characters, and their relationships. Use arrows to show cause-effect and thematic connections.`,
      },
      {
        title: `Comparison / Classification Diagram`,
        description: `Create a table or flowchart comparing the main types/categories discussed in ${chapterName}. Include: Name, Definition, Key Property, Example, and Board Exam Relevance for each type. This visual summary is excellent for revision.`,
      },
      {
        title: `Process / Derivation Flowchart`,
        description: `Create a step-by-step flowchart showing the derivation process or algorithm in ${chapterName}. Each box contains one step with the formula/transformation applied. Arrows connect the steps. This helps visualize the logical flow.`,
      },
    ],
    solvedExamples: [
      {
        title: `Standard Board Exam Problem — Type 1 (2 Marks)`,
        problem: `A typical definition/short-answer question from ${chapterName} as it appears in CBSE board exams.`,
        solution: `**Step 1**: State the relevant definition or formula.\n**Step 2**: Apply it to the given context with specific values.\n**Answer**: Write the final answer with appropriate units and conclusion statement.\n\n*Examiner's note: For 2-mark questions, this level of detail is sufficient. Don't over-explain.*`,
      },
      {
        title: `Numerical Problem — Type 2 (3 Marks)`,
        problem: `A numerical problem involving calculation using the primary formula of ${chapterName}.`,
        solution: `**Given**: List all known quantities with proper symbols and units.\n**To Find**: State the required quantity clearly.\n**Formula**: Write the relevant formula — ${isMath ? "the main equation with all variables" : isPhysics ? "the physical law with units" : isChem ? "the rate/equilibrium expression" : "the analytical framework"}.\n**Substitution**: Plug in all values. Show unit conversion if needed.\n**Calculation**: Carry out arithmetic step by step. Don't skip steps.\n**Answer**: ${isMath ? "Final value with proper notation" : isPhysics ? "Final value = ___ (with SI units)" : isChem ? "Final concentration/value = ___ (with units)" : "Conclusion in 1-2 sentences"}.\n\n*Examiner's note: Each step earns marks. Even if the final answer is wrong, correct intermediate steps get partial credit.*`,
      },
      {
        title: `Derivation + Application — Type 3 (5 Marks)`,
        problem: `Derive the main expression for ${chapterName} and use it to solve a numerical.`,
        solution: `**Part A — Derivation (3 marks)**:\n**Step 1**: State assumptions and starting point.\n**Step 2**: Apply the fundamental principle (${isMath ? "mathematical axiom or theorem" : isPhysics ? "conservation law or Maxwell's equations" : isChem ? "thermodynamic or kinetic principle" : "literary analysis framework"}).\n**Step 3**: Perform the mathematical manipulation.\n**Step 4**: Simplify and arrive at the final expression. **Box the result**.\n\n**Part B — Numerical (2 marks)**:\n**Given**: Values from the question.\n**Using derived formula**: Substitute and calculate.\n**Answer**: Final answer with units and physical significance.\n\n*Examiner's note: Draw a relevant diagram between Part A and Part B. It adds clarity and can earn an additional mark.*`,
      },
    ],
    conceptIllustrations: [
      `**Analogy**: Think of ${chapterName}'s main concept like ${isMath ? "a vending machine — you put in an input (domain) and get a specific output (range). Some machines are one-to-one (each button gives a unique item), some are many-to-one (different buttons give the same item)." : isPhysics ? "water flowing through pipes — current is like water flow, voltage is like water pressure, and resistance is like the pipe's narrowness." : isChem ? "a crowded room — molecules at higher concentration are like a crowded room where collisions (reactions) happen more frequently." : "a mirror — the text reflects society's values, and each reading reveals a different angle."}`,
      `**Visual Mental Model**: When solving problems from ${chapterName}, ${isMath ? "always sketch a rough graph first. Even if the question doesn't ask for it, visualization prevents errors." : isPhysics ? "draw a free-body diagram or circuit diagram first. Label all quantities. This makes the solution path obvious." : isChem ? "write out the balanced equation first. Identify limiting reagent. This prevents stoichiometric errors." : "identify the central conflict first. Then trace how the author develops and resolves it."}`,
      `**Common Pattern Recognition**: After solving 20+ problems from ${chapterName}, you'll notice that most questions follow 3-4 standard patterns. Recognize the pattern, recall the method, and execute. This is the key to speed in exams.`,
    ],
  };
}

function getSummaryData(subjectId: string, chapterName: string) {
  const isMath = subjectId === "mathematics";
  const isPhysics = subjectId === "physics";
  const isChem = subjectId === "chemistry";

  return {
    oneMinuteRevision: [
      `**What is it?** ${chapterName} deals with ${isMath ? "mathematical structures and relationships" : isPhysics ? "physical phenomena and their laws" : isChem ? "chemical properties and reactions" : "literary themes and analysis"}.`,
      `**Key formula?** The primary equation — know it, derive it, apply it.`,
      `**Most important diagram?** The one that appears in every 5-mark answer.`,
      `**Common question type?** ${isMath ? "Proof + Numerical" : isPhysics ? "Derivation + Numerical" : isChem ? "Reaction + Explanation" : "Extract + Long Answer"}.`,
      `**Marks in boards?** Approximately ${isMath || isPhysics ? "8-12" : "6-10"} marks total.`,
    ],
    formulaSheet: [
      `**Formula 1**: Primary equation of ${chapterName} — [state formula with all symbols defined]`,
      `**Formula 2**: Derived expression — [derived from Formula 1 under specific conditions]`,
      `**Formula 3**: Special case — [limiting case when variable → specific value]`,
      `**Key Constants**: Standard values used in this chapter with units`,
    ],
    mindMap: [
      `${chapterName} → **Definitions** → Key Term 1 | Key Term 2 | Key Term 3`,
      `${chapterName} → **Formulas** → Primary | Derived | Special Cases`,
      `${chapterName} → **Diagrams** → Standard Diagram | Graph | Flowchart`,
      `${chapterName} → **Question Types** → 2-mark (Definition) | 3-mark (Numerical) | 5-mark (Derivation)`,
      `${chapterName} → **Common Errors** → Sign Error | Unit Error | Missing Diagram`,
    ],
    lastDayChecklist: [
      `☐ Can I write the primary derivation from memory in under 4 minutes?`,
      `☐ Do I know all definitions word-for-word as per NCERT?`,
      `☐ Can I draw and label the standard diagram without reference?`,
      `☐ Have I solved at least 5 numericals of each type?`,
      `☐ Do I know the common mistakes and how to avoid them?`,
      `☐ Can I write a complete 5-mark answer with proper structure?`,
      `☐ Have I reviewed previous year board questions from this chapter?`,
    ],
  };
}

/* ─── Tab Components ─── */

function ConceptsTab({ subjectId, chapterName }: { subjectId: string; chapterName: string }) {
  const subjectLabel = subjectId.charAt(0).toUpperCase() + subjectId.slice(1);
  const prompt = `You are an expert CBSE Class 12 ${subjectLabel} teacher. Explain the chapter "${chapterName}" in full detail.

Your explanation must be MORE detailed and vast than NCERT. Structure it as follows:

## Introduction
A clear introduction to ${chapterName} with real-world relevance.

## Subtopic-wise Detailed Explanation
Break "${chapterName}" into its actual subtopics (use the real NCERT subtopics). For EACH subtopic:
- Give the precise **definition**
- Explain the **concept** deeply with reasoning and logic
- Show **step-by-step derivations** (for Maths/Physics)
- Provide a **solved example** after each major concept
- Mention **important formulas** in bold

## Key Formulas & Equations
List all formulas from this chapter with every variable defined.

## Diagrams & Visual Descriptions
Describe important diagrams students should know, with labels.

## Applications & Real-World Connections
How this chapter connects to daily life, technology, and competitive exams.

## Board Exam Relevance
Mark weightage, frequently asked question types, and previous year patterns.

Use markdown formatting with clear headings (##, ###), bold terms, bullet points, and numbered steps. Be thorough — a student should be able to study this instead of a textbook.`;

  return (
    <AIExplainer
      subject={subjectLabel}
      chapter={chapterName}
      prompt={prompt}
      cacheKey={`concepts-${subjectId}-${chapterName}`}
    />
  );
}

function ImportantPointsTab({ subjectId, chapterName }: { subjectId: string; chapterName: string }) {
  const data = getImportantPointsData(subjectId, chapterName);
  return (
    <div className="space-y-5">
      <Section title="🎯 High Weightage Concepts" icon={<AlertTriangle className="w-5 h-5 text-destructive" />}>
        <BulletList items={data.highWeightage} marker="★" markerClass="text-warning" />
      </Section>
      <Section title="📋 Frequently Asked Board Areas" icon={<GraduationCap className="w-5 h-5 text-primary" />}>
        <BulletList items={data.frequentBoardAreas} marker="▸" markerClass="text-primary" />
      </Section>
      <Section title="📐 Key Formulas & Definitions" icon={<Lightbulb className="w-5 h-5 text-warning" />}>
        <BulletList items={data.keyFormulas} marker="✦" markerClass="text-accent" />
      </Section>
      <Section title="🔑 Exam Keywords" icon={<PenTool className="w-5 h-5 text-accent" />}>
        <BulletList items={data.examKeywords} marker="→" markerClass="text-primary" />
      </Section>
    </div>
  );
}

function CommonMistakesTab({ subjectId, chapterName }: { subjectId: string; chapterName: string }) {
  const data = getCommonMistakesData(subjectId, chapterName);
  return (
    <div className="space-y-5">
      <Section title="🧠 Conceptual Misunderstandings" icon={<XCircle className="w-5 h-5 text-destructive" />}>
        <BulletList items={data.conceptual} marker="✗" markerClass="text-destructive" />
      </Section>
      <Section title="🔢 Calculation & Numerical Errors" icon={<AlertTriangle className="w-5 h-5 text-warning" />}>
        <BulletList items={data.calculation} marker="✗" markerClass="text-destructive" />
      </Section>
      <Section title="✍️ Writing & Presentation Mistakes" icon={<PenTool className="w-5 h-5 text-accent" />}>
        <BulletList items={data.writing} marker="✗" markerClass="text-destructive" />
      </Section>
      <Section title="🛡️ How to Prevent These Mistakes" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
        <BulletList items={data.prevention} marker="✓" markerClass="text-accent" />
      </Section>
    </div>
  );
}

function ExamStrategyTab({ subjectId, chapterName }: { subjectId: string; chapterName: string }) {
  const data = getExamStrategyData(subjectId, chapterName);
  return (
    <div className="space-y-5">
      <Section title="📝 2-Mark Answer Writing" icon={<PenTool className="w-5 h-5 text-primary" />}>
        <BulletList items={data.answerWriting.twoMark} marker="▸" markerClass="text-primary" />
      </Section>
      <Section title="📝 3-Mark Answer Writing" icon={<PenTool className="w-5 h-5 text-warning" />}>
        <BulletList items={data.answerWriting.threeMark} marker="▸" markerClass="text-warning" />
      </Section>
      <Section title="📝 5-Mark Answer Writing" icon={<PenTool className="w-5 h-5 text-accent" />}>
        <BulletList items={data.answerWriting.fiveMark} marker="▸" markerClass="text-accent" />
      </Section>
      <Section title="🎨 Presentation Tips" icon={<GraduationCap className="w-5 h-5 text-primary" />}>
        <BulletList items={data.presentation} marker="→" markerClass="text-primary" />
      </Section>
      <Section title="⏱️ Time Management" icon={<Target className="w-5 h-5 text-warning" />}>
        <BulletList items={data.timeManagement} marker="⏳" markerClass="text-warning" />
      </Section>
      <Section title="🔑 Keyword Usage Strategy" icon={<Lightbulb className="w-5 h-5 text-accent" />}>
        <BulletList items={data.keywordStrategy} marker="✦" markerClass="text-accent" />
      </Section>
    </div>
  );
}

function ExamplesTab({ subjectId, chapterName }: { subjectId: string; chapterName: string }) {
  const data = getExamplesData(subjectId, chapterName);
  return (
    <div className="space-y-5">
      <Section title="📊 Diagram Descriptions" icon={<FlaskConical className="w-5 h-5 text-primary" />}>
        <div className="space-y-4">
          {data.diagrams.map((d, i) => (
            <SubSection key={i} title={d.title}>
              <p>{d.description}</p>
            </SubSection>
          ))}
        </div>
      </Section>
      <Section title="✅ Solved Examples (Board Pattern)" icon={<BookOpen className="w-5 h-5 text-accent" />}>
        <div className="space-y-5">
          {data.solvedExamples.map((ex, i) => (
            <div key={i} className="bg-muted/40 rounded-lg p-4 space-y-2">
              <h4 className="text-sm font-semibold text-foreground">{ex.title}</h4>
              <p className="text-sm text-muted-foreground italic">{ex.problem}</p>
              <div className="border-t border-border/50 pt-2">
                <p className="text-sm text-muted-foreground whitespace-pre-line"
                   dangerouslySetInnerHTML={{ __html: ex.solution.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/\n/g, '<br/>') }} />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="💡 Concept Illustrations & Analogies" icon={<Lightbulb className="w-5 h-5 text-warning" />}>
        <BulletList items={data.conceptIllustrations} marker="💡" markerClass="text-warning" />
      </Section>
    </div>
  );
}

function SummaryTab({ subjectId, chapterName }: { subjectId: string; chapterName: string }) {
  const data = getSummaryData(subjectId, chapterName);
  return (
    <div className="space-y-5">
      <Section title="⚡ 1-Minute Revision" icon={<Zap className="w-5 h-5 text-warning" />}>
        <BulletList items={data.oneMinuteRevision} marker="▸" markerClass="text-warning" />
      </Section>
      <Section title="📐 Formula Sheet" icon={<Lightbulb className="w-5 h-5 text-primary" />}>
        <div className="space-y-2">
          {data.formulaSheet.map((f, i) => (
            <div key={i} className="bg-muted/50 rounded-lg px-4 py-2.5 text-sm"
                 dangerouslySetInnerHTML={{ __html: f.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
          ))}
        </div>
      </Section>
      <Section title="🧠 Mind Map" icon={<BookOpen className="w-5 h-5 text-accent" />}>
        <div className="space-y-2">
          {data.mindMap.map((m, i) => (
            <div key={i} className="bg-muted/50 rounded-lg px-4 py-2.5 text-sm font-mono"
                 dangerouslySetInnerHTML={{ __html: m.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
          ))}
        </div>
      </Section>
      <Section title="📋 Last-Day Checklist" icon={<Target className="w-5 h-5 text-destructive" />}>
        <div className="space-y-2">
          {data.lastDayChecklist.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
