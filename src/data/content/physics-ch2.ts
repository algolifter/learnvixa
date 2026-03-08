import type { ChapterContent } from "./physics-ch1";

export const physicsCh2: ChapterContent = {
  topics: [
    {
      title: "Electrostatic Potential",
      content: `## Electrostatic Potential

### Definition
The **electrostatic potential** at a point is the work done by an external agency to bring a unit positive charge from **infinity** to that point (against the electric field), without any acceleration.

$$V = \\frac{W}{q_0} = \\frac{kQ}{r}$$

- SI unit: **volt (V)** = J/C
- Scalar quantity (unlike electric field which is a vector)

### Potential Due to a Point Charge
$$V = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{r}$$

- Positive charge → positive potential (decreases with distance)
- Negative charge → negative potential (increases toward zero with distance)

### Potential Due to a System of Charges
$$V = \\frac{1}{4\\pi\\varepsilon_0} \\sum \\frac{q_i}{r_i}$$

Superposition principle applies — potentials add algebraically (scalars).

### Potential Difference
$$V_A - V_B = \\frac{W_{B→A}}{q_0}$$

Current flows from higher to lower potential (conventional current).

> **Exam Tip**: Potential is a scalar, so calculations are simpler than field. Always check the sign of charges when computing net potential.`
    },
    {
      title: "Equipotential Surfaces",
      content: `## Equipotential Surfaces

### Definition
A surface where the potential is the **same at every point**. No work is done in moving a charge along an equipotential surface.

### Key Properties
1. **Electric field is always perpendicular** to equipotential surfaces
2. No two equipotential surfaces intersect
3. Closer surfaces → stronger field (steeper potential gradient)
4. Work done moving charge on equipotential surface = **zero**

### Shapes of Equipotential Surfaces

| Source | Equipotential Shape | Field Lines |
|--------|-------------------|-------------|
| Point charge | Concentric spheres | Radial |
| Infinite plane sheet | Parallel planes | Perpendicular |
| Uniform field | Parallel planes | Parallel straight lines |
| Dipole | Complex curved shapes | Complex |

### Relation Between E and V
$$E = -\\frac{dV}{dr}$$

The electric field points in the direction of **decreasing potential** (steepest descent).

> **Board Tip**: The negative sign in E = –dV/dr is frequently asked. It means E points from high to low potential. This relationship connects the vector (E) and scalar (V) descriptions of the field.`
    },
    {
      title: "Potential Energy and Work",
      content: `## Potential Energy of a System of Charges

### Two-Charge System
$$U = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r_{12}}$$

- If both charges same sign → U > 0 (repulsive, energy stored)
- If opposite signs → U < 0 (attractive, energy released)

### Three-Charge System
$$U = \\frac{1}{4\\pi\\varepsilon_0} \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_2 q_3}{r_{23}} + \\frac{q_1 q_3}{r_{13}} \\right)$$

### Potential Energy of a Dipole in Uniform Field
$$U = -pE\\cos\\theta = -\\vec{p} \\cdot \\vec{E}$$

- θ = 0° → U = –pE (minimum, stable equilibrium)
- θ = 90° → U = 0
- θ = 180° → U = +pE (maximum, unstable equilibrium)

### Work Done in Rotating Dipole
$$W = pE(\\cos\\theta_1 - \\cos\\theta_2)$$

> **Common Mistake**: Students forget the sign convention. U = –pEcosθ means potential energy is MINIMUM (most negative) when dipole is aligned with the field.`
    },
    {
      title: "Capacitors and Capacitance",
      content: `## Capacitors

### What is a Capacitor?
A device that stores electric charge and energy. Consists of two conductors (plates) separated by an insulator (dielectric).

### Capacitance
$$C = \\frac{Q}{V}$$

- SI unit: **farad (F)** — 1 F = 1 C/V
- Practical units: μF (10⁻⁶), nF (10⁻⁹), pF (10⁻¹²)

### Parallel Plate Capacitor
$$C = \\frac{\\varepsilon_0 A}{d}$$

Where A = area of plates, d = separation between them.

### With Dielectric
$$C = \\frac{K\\varepsilon_0 A}{d} = KC_0$$

Where K = dielectric constant (always ≥ 1).

### Factors Affecting Capacitance
1. **Area of plates** (C ∝ A)
2. **Distance between plates** (C ∝ 1/d)
3. **Dielectric medium** (C ∝ K)

> **Exam Tip**: The formula C = εA/d applies only to parallel plate capacitors. For spherical or cylindrical capacitors, different formulae apply. Board exams focus mostly on parallel plate.`
    },
    {
      title: "Combination of Capacitors",
      content: `## Series and Parallel Combinations

### Capacitors in Series
- Same charge Q on each capacitor
- Voltages add: V = V₁ + V₂ + V₃

$$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$$

- Equivalent capacitance is **less than the smallest** individual capacitance

### Capacitors in Parallel
- Same voltage V across each capacitor
- Charges add: Q = Q₁ + Q₂ + Q₃

$$C_{eq} = C_1 + C_2 + C_3$$

- Equivalent capacitance is **greater than the largest** individual capacitance

### Key Comparison

| Feature | Series | Parallel |
|---------|--------|----------|
| Charge | Same | Different |
| Voltage | Different | Same |
| Formula | 1/C reciprocal sum | C direct sum |
| Effect | Decreases C | Increases C |

> **Board Tip**: Capacitors in series behave opposite to resistors in series (resistors add directly in series, capacitors add reciprocally). This contrast is a common conceptual question.`
    },
    {
      title: "Energy Stored in Capacitors",
      content: `## Energy Stored in a Capacitor

### Formula
$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$$

All three forms are equivalent; choose based on known quantities.

### Energy Density
Energy per unit volume of the electric field:
$$u = \\frac{1}{2}\\varepsilon_0 E^2$$

This shows energy is stored **in the electric field** between the plates.

### Effect of Dielectric
#### Battery connected (V constant):
- C increases by K → Q increases by K → U increases by K
- U = ½KCV² = KU₀

#### Battery disconnected (Q constant):
- C increases by K → V decreases by K → U decreases by K
- U = Q²/(2KC) = U₀/K

### Common Applications
- Camera flash: capacitor charged slowly, discharged rapidly
- Defibrillators: large capacitor discharge through heart
- Smoothing circuits in power supplies

> **Common Mistake**: Whether U increases or decreases with dielectric depends on whether the battery stays connected. With battery: U increases. Without battery: U decreases. This is a very frequently tested distinction.`
    }
  ],
  notes: `# Electrostatic Potential and Capacitance — Comprehensive Notes

## 1. Electrostatic Potential
- V = kQ/r; scalar quantity; SI unit: volt
- Superposition: potentials add algebraically
- E = –dV/dr (field points from high to low potential)

## 2. Equipotential Surfaces
- Same potential everywhere on surface; E ⊥ to surface
- No work done moving charge along equipotential surface
- Point charge → concentric spheres; uniform field → parallel planes

## 3. Potential Energy
- Two charges: U = kq₁q₂/r; like charges → U > 0
- Dipole in field: U = –pEcosθ; stable at θ = 0°

## 4. Capacitance
- C = Q/V; parallel plate: C = ε₀A/d; with dielectric: C = Kε₀A/d
- Series: 1/C = Σ(1/Cᵢ); Parallel: C = ΣCᵢ
- Energy: U = ½CV² = ½QV = Q²/2C
- Energy density: u = ½ε₀E²
- Dielectric effect depends on battery connection (V constant vs Q constant)`,
  importantPoints: [
    "**Electrostatic Potential** V = kQ/r is a scalar — potentials add algebraically, much simpler than vector addition of fields",
    "**E = −dV/dr** — electric field points from high to low potential; the negative sign is crucial",
    "**Equipotential surfaces** are perpendicular to field lines; no work done moving charge along them",
    "**Potential energy** of two charges: U = kq₁q₂/r — positive for like charges (repulsive), negative for unlike (attractive)",
    "**Dipole in uniform field**: U = −pEcosθ; stable at θ=0°, unstable at θ=180°; work done = pE(cosθ₁−cosθ₂)",
    "**Capacitance** C = Q/V = ε₀A/d for parallel plate; with dielectric C = Kε₀A/d",
    "**Series capacitors**: 1/C = Σ(1/Cᵢ) — same charge, different voltage; **Parallel**: C = ΣCᵢ — same voltage, different charge",
    "**Energy stored**: U = ½CV² = ½QV = Q²/2C; energy density u = ½ε₀E²",
    "**Dielectric with battery connected**: V constant, C↑K times, Q↑K times, U↑K times",
    "**Dielectric with battery disconnected**: Q constant, C↑K times, V↓K times, U↓K times"
  ],
  commonMistakes: [
    "**Confusing potential with potential energy**: V = W/q₀ (per unit charge) vs U = kq₁q₂/r (for a pair of charges)",
    "**Wrong sign in E = −dV/dr**: The negative sign means E points from higher to lower potential, not the other way",
    "**Capacitor series/parallel confusion**: Capacitors in series add reciprocally (opposite to resistors!). Students often mix these up",
    "**Dielectric effect**: Whether energy increases or decreases depends on battery connection — most common mistake in boards",
    "**Forgetting to convert units**: μF to F (×10⁻⁶), pF to F (×10⁻¹²) before calculations",
    "**Equipotential surface direction**: E is perpendicular to equipotential surfaces, not parallel",
    "**Capacitance of isolated sphere**: C = 4πε₀R — students forget this for spherical conductor problems",
    "**Wrong formula for partially filled dielectric**: C = ε₀A/(d−t+t/K), not simply Kε₀A/d"
  ],
  examStrategy: [
    "**5-mark derivation**: Derive capacitance of parallel plate capacitor with and without dielectric — most common 5-marker",
    "**3-mark numericals**: Combination of capacitors (series/parallel) with energy calculation; Nernst equation type problems",
    "**2-mark definitions**: Equipotential surface, dielectric constant, capacitance, energy density",
    "**Diagram questions**: Equipotential surfaces for point charge, dipole, uniform field; parallel plate capacitor with dielectric",
    "**Key numerical type**: Given C₁, C₂ in series/parallel — find equivalent C, charge on each, energy stored",
    "**Time management**: 5-mark derivation should take ≤8 min with neat diagram; 3-mark numericals ≤5 min"
  ],
  examples: [
    "**Potential at a point**: Two charges +2μC at origin and −1μC at (3,0). V at (0,4) = k(2×10⁻⁶/4 + (−1×10⁻⁶)/5) = 9×10⁹(5×10⁻⁷ − 2×10⁻⁷) = **2700 V**",
    "**Capacitor combination**: C₁=2μF, C₂=3μF in series: 1/C = 1/2+1/3 = 5/6, C = **1.2μF**. In parallel: C = 2+3 = **5μF**",
    "**Energy stored**: 10μF capacitor charged to 200V. U = ½CV² = ½×10×10⁻⁶×(200)² = **0.2 J**",
    "**Dielectric insertion**: Parallel plate capacitor C₀=100pF, V=50V (battery connected). Insert K=5 dielectric: C=500pF, Q=500×50=25000pC, U=½×500×10⁻¹²×2500= **625 nJ**",
    "**Work done on dipole**: Dipole p=2×10⁻⁶ C·m in E=10⁵ N/C. Work to rotate from 0° to 90°: W = pE(cos0°−cos90°) = 2×10⁻⁶×10⁵×(1−0) = **0.2 J**"
  ],
  summary: "**Electrostatic Potential and Capacitance** builds on Ch1 by introducing the scalar approach to electrostatics.\n\n**Key Concepts**: (1) Potential V = kQ/r (scalar, easier than vector E). (2) E = −dV/dr connects field and potential. (3) Equipotential surfaces ⊥ field lines. (4) Potential energy U = kq₁q₂/r. (5) Capacitance C = Q/V; parallel plate C = ε₀A/d. (6) Series: 1/C = Σ1/Cᵢ; Parallel: C = ΣCᵢ. (7) Energy: U = ½CV².\n\n**Board Weightage**: 8-10 marks. Expect derivation (5M), numerical on capacitor combinations (3M), definitions (2M).",
  questions2: [
    { question: "Define electrostatic potential at a point.", answer: "Electrostatic potential at a point is the work done by an external force in bringing a unit positive test charge from infinity to that point without acceleration. V = W/q₀. SI unit: volt (V)." },
    { question: "What are equipotential surfaces? Give one property.", answer: "Surfaces where the electric potential has the same value at every point. Property: Electric field lines are always perpendicular to equipotential surfaces. No work is done in moving a charge along an equipotential surface." },
    { question: "Define capacitance. Write its SI unit.", answer: "Capacitance is the ratio of charge stored to the potential difference across the capacitor. C = Q/V. SI unit: farad (F). 1 F = 1 C/V." },
    { question: "Write the relation between electric field and electrostatic potential.", answer: "E = −dV/dr. The electric field is the negative gradient of potential. The negative sign indicates that E points in the direction of decreasing potential." },
    { question: "What is the effect of introducing a dielectric in a parallel plate capacitor (battery connected)?", answer: "With battery connected (V constant): Capacitance increases by K times (C = KC₀), charge increases by K times (Q = KC₀V), and energy stored increases by K times (U = KU₀)." },
    { question: "Two capacitors of 2μF and 3μF are connected in series. Find the equivalent capacitance.", answer: "1/C = 1/C₁ + 1/C₂ = 1/2 + 1/3 = 5/6. Therefore C = 6/5 = 1.2 μF." },
    { question: "What is the energy stored in a capacitor of 10μF charged to 100V?", answer: "U = ½CV² = ½ × 10 × 10⁻⁶ × (100)² = ½ × 10⁻⁴ × 10⁴ = 0.05 J = 50 mJ." },
    { question: "Why is the potential inside a charged conducting sphere constant?", answer: "Because E = 0 inside the conductor (all charge on surface). Since E = −dV/dr and E = 0, dV/dr = 0, meaning V is constant throughout the interior and equals the surface potential V = kQ/R." }
  ],
  questions3: [
    { question: "Derive the expression for capacitance of a parallel plate capacitor.", answer: "Consider two parallel plates of area A, separated by distance d, with charges +Q and −Q.\n\nElectric field between plates: E = σ/ε₀ = Q/(ε₀A)\n\nPotential difference: V = Ed = Qd/(ε₀A)\n\nCapacitance: C = Q/V = Q/[Qd/(ε₀A)] = ε₀A/d\n\nWith dielectric (constant K): C = Kε₀A/d" },
    { question: "Three capacitors of 2μF, 3μF, and 6μF are connected in parallel combination, which is then connected in series with a 4μF capacitor. Find the equivalent capacitance.", answer: "Parallel combination: C_p = 2 + 3 + 6 = 11 μF\n\nNow C_p (11μF) in series with 4μF:\n1/C = 1/11 + 1/4 = (4 + 11)/(44) = 15/44\n\nC = 44/15 = 2.93 μF" },
    { question: "Derive the expression for energy stored in a charged capacitor.", answer: "When charge dq is added to a capacitor already having charge q:\nWork done: dW = V dq = (q/C) dq\n\nTotal work to charge from 0 to Q:\nW = ∫₀ᵠ (q/C) dq = Q²/2C\n\nUsing Q = CV:\nU = Q²/2C = ½CV² = ½QV\n\nThis energy is stored in the electric field between the plates.\nEnergy density: u = U/volume = ½ε₀E²" },
    { question: "A parallel plate capacitor of capacitance C is charged to V and disconnected. A dielectric slab (K=3) is inserted. Find the new capacitance, voltage, and energy.", answer: "Initial: C₀ = C, V₀ = V, Q₀ = CV, U₀ = ½CV²\n\nBattery disconnected → Q remains constant = CV\n\nNew capacitance: C' = KC = 3C\nNew voltage: V' = Q/C' = CV/(3C) = V/3\nNew energy: U' = Q²/(2C') = (CV)²/(2×3C) = CV²/6 = U₀/3\n\nEnergy decreased by factor 3. The lost energy goes into pulling the dielectric slab in (work done by electrostatic force)." },
    { question: "Explain the principle of a Van de Graaff generator.", answer: "Principle: A small conducting sphere (charge q, potential V₁) placed inside a large shell (potential V₂) always transfers its charge to the shell, regardless of how much charge the shell already has.\n\nThis is because V₁ > V₂ always for the inner sphere, so charge flows from inner to outer.\n\nConstruction: A moving belt carries charge from a spray comb to a collecting comb inside a large dome. This accumulates very high charge and potential on the dome.\n\nUse: Accelerating charged particles to high energies for nuclear physics experiments.\n\nLimitation: Air breakdown limits maximum voltage to ~7 MV." }
  ],
  questions5: [
    { question: "Derive the expression for the capacitance of a parallel plate capacitor with a dielectric slab of thickness t (t < d) and dielectric constant K.", answer: "**Setup**: Two parallel plates, area A, separation d. A dielectric slab of thickness t and dielectric constant K is inserted between the plates.\n\n**Field in different regions**:\n- In air gap: E₁ = σ/ε₀\n- In dielectric: E₂ = σ/(Kε₀)\n\n**Potential difference**:\nV = E₁(d−t) + E₂(t)\nV = σ/ε₀ × (d−t) + σ/(Kε₀) × t\nV = (σ/ε₀)[d − t + t/K]\nV = (Q/ε₀A)[d − t + t/K]\n\n**Capacitance**:\nC = Q/V = ε₀A/[d − t + t/K]\n\n**Special cases**:\n1. t = 0 (no dielectric): C = ε₀A/d\n2. t = d (fully filled): C = Kε₀A/d\n3. K → ∞ (conducting slab): C = ε₀A/(d−t)\n\n**Physical significance**: Dielectric reduces the effective gap, increasing capacitance." },
    { question: "What are equipotential surfaces? State their properties. Draw equipotential surfaces for (i) a point charge, (ii) a uniform electric field, and (iii) a dipole.", answer: "**Definition**: A surface where the electrostatic potential has the same value at every point.\n\n**Properties**:\n1. Electric field is always perpendicular to equipotential surfaces\n2. No work is done in moving a charge along an equipotential surface (W = q(V₁−V₂) = 0)\n3. No two equipotential surfaces can intersect\n4. Closer equipotential surfaces → stronger electric field\n5. For a point charge: concentric spheres\n6. For uniform field: parallel planes perpendicular to E\n\n**Diagrams**:\n(i) Point charge: Concentric spheres centered on the charge, spacing increases outward (since E decreases with distance)\n(ii) Uniform field: Equally spaced parallel planes perpendicular to the field direction\n(iii) Dipole: Complex curved surfaces; near each charge they approximate spheres, far away they become distorted\n\n**Relation to E**: E = −dV/dr; the direction of E is perpendicular to equipotential surfaces and points from higher to lower potential." }
  ],
  revision: {
    quickPoints: [
      "**V = kQ/r** — potential is scalar; add algebraically for multiple charges",
      "**E = −dV/dr** — field points from high to low potential",
      "**Equipotential surfaces** ⊥ to field lines; no work on them",
      "**U = kq₁q₂/r** — positive for like charges, negative for unlike",
      "**Dipole**: U = −pEcosθ; stable at θ=0°",
      "**C = ε₀A/d** for parallel plate; **C = Kε₀A/d** with dielectric",
      "**Series**: 1/C = Σ(1/Cᵢ); **Parallel**: C = ΣCᵢ",
      "**Energy**: U = ½CV² = ½QV = Q²/2C",
      "**Battery connected** (V const): C,Q,U all increase K times",
      "**Battery disconnected** (Q const): C increases, V and U decrease K times"
    ],
    formulas: [
      "V = kQ/r; V = (1/4πε₀)Σ(qᵢ/rᵢ)",
      "E = −dV/dr",
      "U = kq₁q₂/r₁₂ (two charges)",
      "U = −pEcosθ (dipole in field)",
      "W = pE(cosθ₁ − cosθ₂)",
      "C = Q/V = ε₀A/d (parallel plate)",
      "C = Kε₀A/d (with dielectric)",
      "C = ε₀A/(d−t+t/K) (partial dielectric)",
      "Series: 1/C = 1/C₁+1/C₂+...",
      "Parallel: C = C₁+C₂+...",
      "U = ½CV² = ½QV = Q²/2C",
      "u = ½ε₀E² (energy density)"
    ],
    tipsAndTricks: [
      "Potential is scalar — MUCH easier to compute than field for multiple charges",
      "For capacitor problems, first identify: series or parallel? battery connected or not?",
      "Dielectric effect shortcut: with battery (V const) everything increases K times; without battery (Q const) only C increases"
    ]
  }
};
