import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { subjects } from "@/data/subjects";

const revisionData: Record<string, { formulas?: string[]; reactions?: string[]; keyPoints: string[] }> = {
  mathematics: {
    formulas: [
      "d/dx (xⁿ) = nxⁿ⁻¹",
      "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C",
      "sin²θ + cos²θ = 1",
      "A⁻¹ = adj(A) / |A|",
      "|A| = Σ aᵢⱼ · Cᵢⱼ (cofactor expansion)",
      "dy/dx = lim(h→0) [f(x+h) − f(x)] / h",
      "∫ₐᵇ f(x)dx = F(b) − F(a)",
      "P(A|B) = P(A∩B) / P(B)",
      "→a · →b = |a||b|cosθ",
      "→a × →b = |a||b|sinθ n̂",
    ],
    keyPoints: [
      "Relations: reflexive, symmetric, transitive → equivalence",
      "Inverse trig: principal value branches are critical",
      "Continuity: f is continuous at x=a if lim f(x) = f(a)",
      "Rolle's Theorem: f(a)=f(b) → f'(c)=0 for some c in (a,b)",
      "Integration by parts: ∫udv = uv − ∫vdu (ILATE rule)",
      "Area under curve = ∫ₐᵇ |f(x)| dx",
      "LPP: feasible region → corner point method",
      "Bayes' theorem for conditional probability",
    ],
  },
  physics: {
    formulas: [
      "F = kq₁q₂/r² (Coulomb's law)",
      "V = kq/r (Electric potential)",
      "C = Q/V (Capacitance)",
      "V = IR (Ohm's law)",
      "F = qv × B (Lorentz force)",
      "ε = −dΦ/dt (Faraday's law)",
      "E = hν (Photon energy)",
      "λ = h/p (de Broglie wavelength)",
      "1/f = 1/v − 1/u (Mirror formula)",
      "n₁sinθ₁ = n₂sinθ₂ (Snell's law)",
    ],
    keyPoints: [
      "Gauss's law: Φ = q/ε₀ for closed surfaces",
      "Kirchhoff's laws for circuit analysis",
      "Lenz's law gives direction of induced EMF",
      "Transformer ratio: V₂/V₁ = N₂/N₁",
      "Photoelectric effect: KEmax = hν − φ",
      "Nuclear binding energy and mass defect",
      "pn junction diode: forward & reverse bias",
      "Electromagnetic spectrum: order and applications",
    ],
  },
  chemistry: {
    reactions: [
      "2Na + 2H₂O → 2NaOH + H₂↑",
      "CH₃CH₂OH →[H₂SO₄, 170°C] CH₂=CH₂ + H₂O (dehydration)",
      "R-X + KOH(aq) → R-OH + KX (SN2 nucleophilic substitution)",
      "CH₃CHO + 2[Ag(NH₃)₂]⁺ → CH₃COO⁻ + 2Ag↓ (Tollens' test)",
      "C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ (Diazotisation)",
      "2Cu²⁺ + 4I⁻ → Cu₂I₂ + I₂ (Iodometric)",
      "Nernst equation: E = E° − (RT/nF)lnQ",
      "Rate = k[A]ⁿ[B]ᵐ (Rate law expression)",
    ],
    keyPoints: [
      "Raoult's law: P = P°·x (for ideal solutions)",
      "Kohlrausch's law for limiting molar conductivity",
      "Order of reaction ≠ molecularity in general",
      "Crystal field theory: t₂g and eg splitting",
      "IUPAC naming for coordination compounds",
      "SN1 vs SN2 mechanism differences",
      "Carboxylic acid: strongest organic acid (COOH group)",
      "Proteins: primary, secondary, tertiary, quaternary structure",
    ],
  },
  english: {
    keyPoints: [
      "The Last Lesson: theme of linguistic imperialism & patriotism",
      "Lost Spring: child labor & lost childhood dreams (Saheb & Mukesh)",
      "Deep Water: overcoming fear through determination (William Douglas)",
      "The Rattrap: theme of human goodness transforming lives",
      "Indigo: Gandhiji's champaran movement & civil disobedience",
      "Keeping Quiet: Pablo Neruda — theme of introspection and peace",
      "A Thing of Beauty: Keats — beauty as a source of eternal joy",
      "The Third Level: Charley's escapism via time travel fantasy",
      "The Tiger King: satire on power and arrogance",
      "The Enemy: moral dilemma — humanity vs patriotic duty",
      "Aunt Jennifer's Tigers: feminist theme — art as rebellion",
      "On the Face of It: loneliness, acceptance, and human connection",
    ],
  },
};

export default function QuickRevisionPage() {
  const navigate = useNavigate();
  const activeSubjects = subjects.filter((s) => !s.comingSoon);
  const [selected, setSelected] = useState(activeSubjects[0].id);
  const data = revisionData[selected];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 max-w-4xl mx-auto">
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => navigate("/")}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm">
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">Quick Revision</h1>
        <p className="text-muted-foreground text-sm mb-6">High-yield revision sheets for each subject</p>
      </motion.div>

      {/* Subject Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {activeSubjects.map((s) => (
          <button key={s.id} onClick={() => setSelected(s.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${selected === s.id ? "bg-primary text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"}`}>
            {s.icon} {s.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
          {data?.formulas && (
            <div className="glass rounded-xl p-5">
              <h2 className="font-display text-sm font-semibold text-primary mb-3">📐 Key Formulas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.formulas.map((f, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-foreground font-mono">{f}</div>
                ))}
              </div>
            </div>
          )}
          {data?.reactions && (
            <div className="glass rounded-xl p-5">
              <h2 className="font-display text-sm font-semibold text-accent mb-3">🧪 Important Reactions</h2>
              <div className="space-y-2">
                {data.reactions.map((r, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg px-3 py-2 text-sm text-foreground font-mono">{r}</div>
                ))}
              </div>
            </div>
          )}
          <div className="glass rounded-xl p-5">
            <h2 className="font-display text-sm font-semibold text-warning mb-3">⭐ Key Points</h2>
            <ul className="space-y-2">
              {data?.keyPoints.map((p, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary font-bold">•</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
