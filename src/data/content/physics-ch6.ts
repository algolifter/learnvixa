import type { ChapterContent } from "./physics-ch1";

export const physicsCh6: ChapterContent = {
  topics: [
    {
      title: "Faraday's Laws of Electromagnetic Induction",
      content: `## Electromagnetic Induction

### Magnetic Flux
$$\\Phi_B = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$$
SI unit: **weber (Wb)** = T·m²

### Faraday's First Law
Whenever the magnetic flux through a circuit changes, an EMF is induced.

### Faraday's Second Law
The induced EMF equals the **negative rate of change** of magnetic flux:
$$\\varepsilon = -\\frac{d\\Phi_B}{dt}$$

For N turns: ε = –N(dΦ/dt)

### Lenz's Law
The induced current opposes the **change** that produces it. (Conservation of energy)
- Flux increasing → induced current creates opposing field
- Flux decreasing → induced current supports the field

### Methods of Changing Flux
1. Change B (magnitude of field)
2. Change A (area of loop)
3. Change θ (orientation)
4. Any combination

> **Exam Tip**: Lenz's law gives the direction; Faraday's law gives the magnitude. The negative sign in Faraday's law IS Lenz's law mathematically.`
    },
    {
      title: "Motional EMF and Eddy Currents",
      content: `## Motional EMF

A conductor of length L moving with velocity v perpendicular to field B:
$$\\varepsilon = BvL$$

### Derivation
Force on charge q: F = qvB
Work done per unit charge = vBL = EMF

### AC Generator (Alternator)
A coil rotating in a magnetic field:
$$\\varepsilon = NBA\\omega\\sin(\\omega t) = \\varepsilon_0\\sin(\\omega t)$$

Where ε₀ = NBAω (peak EMF)

## Eddy Currents
When a bulk conductor is placed in a changing magnetic field, currents are induced in the body — called **eddy currents** (Foucault currents).

### Applications
- **Electromagnetic braking** (trains, roller coasters)
- **Induction furnace** (heating metals)
- **Electric meters** (damping oscillations)
- **Electromagnetic shielding**

### Minimising Eddy Currents
Use **laminated cores** (thin sheets separated by insulation) to increase resistance and reduce eddy current magnitude.

> **Board Tip**: Motional EMF derivation (ε = BvL) is a standard 3-mark derivation. For AC generator, the key formula is ε = NBAω sinωt.`
    },
    {
      title: "Inductance – Self and Mutual",
      content: `## Self-Inductance

### Definition
When current through a coil changes, it induces an EMF in **itself**:
$$\\varepsilon = -L\\frac{dI}{dt}$$

L = self-inductance (SI unit: **henry, H**)

### For a Solenoid
$$L = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}$$

### Energy Stored in Inductor
$$U = \\frac{1}{2}LI^2$$

## Mutual Inductance

When current in one coil changes, it induces EMF in a **nearby coil**:
$$\\varepsilon_2 = -M\\frac{dI_1}{dt}$$

M = mutual inductance

### For Two Coaxial Solenoids
$$M = \\mu_0 n_1 n_2 A l$$

### Coefficient of Coupling
$$M = k\\sqrt{L_1 L_2}$$ where 0 ≤ k ≤ 1

- k = 1: perfect coupling (all flux linked)
- k < 1: flux leakage

### Analogy with Capacitance

| Inductor | Capacitor |
|----------|-----------|
| L (henry) | C (farad) |
| U = ½LI² | U = ½CV² |
| Opposes change in I | Opposes change in V |

> **Exam Tip**: Self-inductance of a solenoid and energy stored (½LI²) are standard derivations. Remember the analogy: inductor stores energy in magnetic field, capacitor in electric field.`
    }
  ],
  notes: `# Electromagnetic Induction — Notes

## 1. Faraday's Law: ε = –dΦ/dt; Lenz's law gives direction
## 2. Motional EMF: ε = BvL
## 3. AC Generator: ε = NBAω sinωt
## 4. Eddy currents: minimised by lamination
## 5. Self-inductance: ε = –LdI/dt; L = μ₀n²Al; U = ½LI²
## 6. Mutual inductance: ε₂ = –MdI₁/dt; M = k√(L₁L₂)`,
  importantPoints: [
    "**Faraday's Law**: ε = −dΦ/dt. Magnitude of induced EMF = rate of change of magnetic flux",
    "**Lenz's Law**: Direction of induced current opposes the change in flux that causes it (conservation of energy)",
    "**Motional EMF**: ε = BvL for a conductor of length L moving with velocity v ⊥ to B",
    "**AC Generator**: ε = NBAω sinωt; peak EMF ε₀ = NBAω",
    "**Self-Inductance**: ε = −LdI/dt; for solenoid L = μ₀n²Al; energy U = ½LI²",
    "**Mutual Inductance**: ε₂ = −MdI₁/dt; coupling M = k√(L₁L₂)",
    "**Eddy currents**: Induced in bulk conductors; minimized by lamination; used in braking, induction heating"
  ],
  commonMistakes: [
    "**Forgetting the negative sign** in Faraday's law — it represents Lenz's law (opposition to change)",
    "**Motional EMF direction**: Use Fleming's right-hand rule, NOT left-hand rule (that's for motor)",
    "**Generator vs Motor**: Generator uses Fleming's RIGHT hand; Motor uses LEFT hand — frequently confused",
    "**Self-inductance formula**: L = μ₀n²Al where n = N/l (turns per unit length), NOT total turns N"
  ],
  examStrategy: [
    "**5-mark**: Derive EMF of AC generator; derive self-inductance of solenoid; derive motional EMF from Faraday's law",
    "**3-mark**: Lenz's law with examples; eddy currents — uses and minimization; mutual inductance numerical",
    "**2-mark**: State Faraday's laws; define self-inductance; what are eddy currents?"
  ],
  examples: [
    "**Motional EMF**: Rod 0.5m moving at 4m/s in B=0.2T. ε = BvL = 0.2×4×0.5 = **0.4 V**",
    "**AC Generator**: N=100, B=0.5T, A=0.1m², f=50Hz. ε₀ = NBAω = 100×0.5×0.1×2π×50 = **1571 V**",
    "**Self-inductance**: Solenoid n=500/m, A=10cm²=10⁻³m², l=0.5m. L = μ₀n²Al = 4π×10⁻⁷×(500)²×10⁻³×0.5 = **1.57×10⁻⁴ H**"
  ],
  summary: "**Electromagnetic Induction** — Faraday's discovery that changing magnetic flux induces EMF.\n\n**Key**: ε = −dΦ/dt (Faraday), direction by Lenz's law, motional EMF = BvL, AC generator ε = NBAω sinωt, self-inductance L = μ₀n²Al, energy = ½LI².\n\n**Board Weightage**: 6-8 marks.",
  questions2: [
    { question: "State Faraday's law of electromagnetic induction.", answer: "The magnitude of induced EMF is equal to the rate of change of magnetic flux linkage. ε = −dΦ/dt. The negative sign indicates that the induced EMF opposes the change in flux (Lenz's law)." },
    { question: "State Lenz's law.", answer: "The direction of induced current (or EMF) is such that it opposes the change in magnetic flux that produces it. This is a consequence of conservation of energy." },
    { question: "What is self-inductance? Write its SI unit.", answer: "Self-inductance is the property of a coil by which it opposes any change in current through it by inducing an EMF in itself. ε = −LdI/dt. SI unit: henry (H)." },
    { question: "Write the expression for motional EMF.", answer: "When a conductor of length L moves with velocity v perpendicular to magnetic field B, the induced EMF is ε = BvL. This can be derived from Faraday's law or from the Lorentz force on charges." }
  ],
  questions3: [
    { question: "Explain Lenz's law with an example. Show how it is consistent with the law of conservation of energy.", answer: "**Lenz's Law**: The induced current opposes the change causing it.\n\n**Example**: When a magnet's N-pole approaches a coil, the induced current flows to create a N-pole facing the magnet (opposing the approach). This requires work to push the magnet, which converts to electrical energy.\n\nIf the induced current aided the change, the magnet would accelerate without any external work — violating conservation of energy. Hence Lenz's law ensures energy conservation." },
    { question: "Derive the expression for motional EMF of a conductor moving in a magnetic field.", answer: "Consider a conductor PQ of length l moving with velocity v in field B (all mutually perpendicular).\n\nFree electrons in PQ experience Lorentz force: F = qvB\nThis moves electrons from P to Q, creating EMF.\n\nWork done to move charge q: W = Fl = qvBl\nEMF: ε = W/q = vBl = **BvL**\n\nAlternatively, using Faraday's law: Area swept in time dt = L×v×dt\nChange in flux: dΦ = BLvdt\nε = dΦ/dt = BvL" }
  ],
  questions5: [
    { question: "Derive the expression for the instantaneous EMF induced in an AC generator. Draw the graph of EMF vs time.", answer: "**Construction**: Rectangular coil of N turns, area A, rotating with angular velocity ω in uniform magnetic field B.\n\n**Derivation**:\nFlux at time t: Φ = NBAcosωt (when coil normal makes angle ωt with B)\n\nBy Faraday's law:\nε = −dΦ/dt = −d(NBAcosωt)/dt\nε = NBAω sinωt\n\n**ε = ε₀ sinωt** where ε₀ = NBAω (peak EMF)\n\n**Graph**: Sinusoidal wave with amplitude ε₀, time period T = 2π/ω.\n- ε = 0 when coil plane ⊥ B (maximum flux, zero rate of change)\n- ε = ε₀ when coil plane ∥ B (zero flux, maximum rate of change)\n\n**Frequency**: f = ω/(2π); in India f = 50 Hz, so ω = 100π rad/s" }
  ],
  revision: {
    quickPoints: [
      "**ε = −dΦ/dt** (Faraday); direction by Lenz's law",
      "**Motional EMF**: ε = BvL",
      "**AC Generator**: ε = NBAω sinωt; ε₀ = NBAω",
      "**Self-inductance**: ε = −LdI/dt; L = μ₀n²Al; U = ½LI²",
      "**Mutual inductance**: ε₂ = −MdI₁/dt",
      "**Eddy currents**: Minimized by lamination; used in braking"
    ],
    formulas: [
      "ε = −NdΦ/dt; ε = BvL",
      "ε = NBAω sinωt; ε₀ = NBAω",
      "L = μ₀n²Al; U = ½LI²",
      "M = k√(L₁L₂)"
    ],
    tipsAndTricks: [
      "Generator = RIGHT hand rule; Motor = LEFT hand rule",
      "Lenz's law = conservation of energy (induced current opposes change)"
    ]
  }
};
