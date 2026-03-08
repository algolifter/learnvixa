import type { ChapterContent } from "./physics-ch1";

export const physicsCh7: ChapterContent = {
  topics: [
    {
      title: "AC Circuits – Resistor, Inductor, Capacitor",
      content: `## Alternating Current

### AC Voltage and Current
$$V = V_0\\sin(\\omega t), \\quad I = I_0\\sin(\\omega t + \\phi)$$

### RMS Values
$$V_{rms} = \\frac{V_0}{\\sqrt{2}}, \\quad I_{rms} = \\frac{I_0}{\\sqrt{2}}$$

### Pure Resistive Circuit
- V and I are **in phase** (φ = 0)
- Power = VᵣₘₛIᵣₘₛ

### Pure Inductive Circuit
- I **lags** V by π/2
- Inductive reactance: Xₗ = ωL = 2πfL
- No power consumed (wattless current)

### Pure Capacitive Circuit
- I **leads** V by π/2
- Capacitive reactance: X꜀ = 1/(ωC)
- No power consumed

> **Exam Tip**: Remember "CIVIL" — in Capacitor I leads V; in Inductor V leads I. This mnemonic is essential for phasor diagrams.`
    },
    {
      title: "LCR Circuit and Resonance",
      content: `## Series LCR Circuit

### Impedance
$$Z = \\sqrt{R^2 + (X_L - X_C)^2}$$

### Phase Angle
$$\\tan\\phi = \\frac{X_L - X_C}{R}$$

### Resonance
When Xₗ = X꜀: $$\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$

At resonance:
- Z = R (minimum impedance)
- I = V/R (maximum current)
- Circuit is purely resistive (φ = 0)

### Quality Factor (Q)
$$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 CR} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$
Higher Q → sharper resonance → better selectivity

### Power in AC
$$P = V_{rms}I_{rms}\\cos\\phi$$
- cos φ = **power factor** = R/Z
- At resonance: cos φ = 1, maximum power
- Pure L or C: cos φ = 0, zero power (wattless)

> **Board Tip**: LCR resonance derivation and power factor are 5-mark questions. At resonance, impedance is minimum and current is maximum — always state this clearly.`
    },
    {
      title: "Transformers",
      content: `## Transformer

### Principle
Works on **mutual induction**. Transfers AC from one circuit to another with change in voltage.

### Transformation Ratio
$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = k$$

- **Step-up**: Nₛ > Nₚ (k > 1), voltage increases, current decreases
- **Step-down**: Nₛ < Nₚ (k < 1), voltage decreases, current increases

### For Ideal Transformer
$$V_pI_p = V_sI_s$$ (power conserved)
$$\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$$

### Energy Losses
1. **Flux leakage**: Not all flux links both coils
2. **Eddy currents**: Minimised by laminated core
3. **Hysteresis loss**: Minimised by soft iron core
4. **Copper loss (I²R)**: Minimised by thick copper wires

### Long-Distance Power Transmission
P = I²R → to reduce losses, transmit at **high voltage** (low current).
Step up at generating station → transmit → step down at distribution.

> **Exam Tip**: Transformer works only with AC (needs changing flux). The reason for high-voltage transmission (reducing I²R losses) is a standard 2-3 mark question.`
    }
  ],
  notes: `# Alternating Current — Notes

## 1. AC: V = V₀sinωt; Vᵣₘₛ = V₀/√2
## 2. Reactance: Xₗ = ωL; X꜀ = 1/ωC
## 3. LCR: Z = √(R² + (Xₗ–X꜀)²); resonance at ω₀ = 1/√LC
## 4. Power: P = VᵣₘₛIᵣₘₛcosφ; power factor = R/Z
## 5. Transformer: Vₛ/Vₚ = Nₛ/Nₚ; step-up/step-down
## 6. Long-distance: high voltage to reduce I²R losses`,
  importantPoints: [
    "**AC values**: V_rms = V₀/√2; I_rms = I₀/√2. Average power uses rms values",
    "**Reactance**: X_L = ωL (inductive, I lags V by π/2); X_C = 1/ωC (capacitive, I leads V by π/2)",
    "**Impedance**: Z = √(R² + (X_L−X_C)²); tanφ = (X_L−X_C)/R",
    "**Resonance**: ω₀ = 1/√(LC); at resonance Z = R (minimum), I = maximum, power factor = 1",
    "**Power**: P = V_rms I_rms cosφ; power factor cosφ = R/Z",
    "**Transformer**: V_s/V_p = N_s/N_p = I_p/I_s; works on mutual induction, AC only"
  ],
  commonMistakes: [
    "**Phase relationships**: In pure L, I LAGS V by 90°; in pure C, I LEADS V by 90° — remember CIVIL (C: I leads V; L: I lags V)",
    "**Resonance doesn't mean zero impedance**: At resonance Z = R (not zero), X_L = X_C cancel out",
    "**Transformer only works with AC**: DC has no changing flux, so no induced EMF in secondary",
    "**Power factor**: cosφ = R/Z, NOT R/X. Maximum power when cosφ = 1 (at resonance)"
  ],
  examStrategy: [
    "**5-mark**: Derive impedance and phase angle for series LCR circuit; AC generator (from Ch6 but often asked here)",
    "**3-mark**: Resonance condition derivation; transformer principle and energy losses; power factor explanation",
    "**2-mark**: Define impedance, reactance, power factor; why transformer uses AC not DC?"
  ],
  examples: [
    "**LCR circuit**: R=100Ω, L=0.5H, C=10μF, V=200V, f=50Hz. X_L=2π×50×0.5=157Ω; X_C=1/(2π×50×10⁻⁵)=318Ω; Z=√(100²+(157−318)²)=√(10000+25921)=**189.5Ω**",
    "**Resonant frequency**: L=2H, C=32μF. ω₀=1/√(LC)=1/√(2×32×10⁻⁶)=**125 rad/s**; f=125/(2π)=**19.9 Hz**",
    "**Transformer**: V_p=220V, N_p=1000, N_s=5000. V_s=220×5000/1000=**1100V** (step-up)"
  ],
  summary: "**Alternating Current** deals with AC circuits containing R, L, C elements.\n\n**Key**: Impedance Z = √(R²+(X_L−X_C)²), resonance at ω₀=1/√(LC), power P = VI cosφ, transformer V_s/V_p = N_s/N_p.\n\n**Board Weightage**: 6-8 marks.",
  questions2: [
    { question: "Define impedance of an AC circuit. Write its SI unit.", answer: "Impedance (Z) is the total opposition offered by an AC circuit to the flow of alternating current. Z = V_rms/I_rms. For series LCR: Z = √(R² + (X_L−X_C)²). SI unit: ohm (Ω)." },
    { question: "What is the condition for resonance in a series LCR circuit?", answer: "Resonance occurs when X_L = X_C, i.e., ωL = 1/(ωC). This gives resonant frequency ω₀ = 1/√(LC) or f₀ = 1/(2π√(LC)). At resonance, Z = R (minimum) and current is maximum." },
    { question: "Why is AC used for long-distance power transmission instead of DC?", answer: "AC voltage can be easily stepped up using a transformer. At high voltage, current is low (P = VI), so power loss (I²R) in transmission lines is minimized. DC cannot be stepped up by a transformer." },
    { question: "What is power factor? When is it maximum?", answer: "Power factor = cosφ = R/Z, where φ is the phase angle between V and I. It is maximum (=1) at resonance when X_L = X_C and Z = R. The circuit is then purely resistive." }
  ],
  questions3: [
    { question: "Derive the condition for resonance in a series LCR circuit. What is the significance of resonance?", answer: "In series LCR circuit: Z = √(R² + (ωL − 1/ωC)²)\n\nFor maximum current (minimum Z), the reactive part must be zero:\nωL = 1/(ωC)\nω² = 1/(LC)\n**ω₀ = 1/√(LC)** or **f₀ = 1/(2π√(LC))**\n\nAt resonance:\n- Z = R (minimum impedance)\n- I = V/R (maximum current)\n- Phase angle φ = 0 (V and I in phase)\n- Power factor = 1 (maximum power transfer)\n- X_L = X_C (cancel each other)\n\nSignificance: Used in tuning radio/TV receivers to select desired frequency." },
    { question: "Explain the principle and working of a transformer. List its energy losses.", answer: "**Principle**: Works on mutual induction. When AC passes through primary coil, changing flux links secondary coil, inducing EMF.\n\nV_s/V_p = N_s/N_p = I_p/I_s\n\nStep-up: N_s > N_p (increases voltage, decreases current)\nStep-down: N_s < N_p\n\n**Energy losses**:\n1. Copper losses (I²R heating in coils)\n2. Eddy current losses (minimized by laminated core)\n3. Hysteresis losses (minimized by soft iron core)\n4. Flux leakage (not all flux links both coils)\n\nEfficiency = P_output/P_input × 100%. Typically 90-99%." }
  ],
  questions5: [
    { question: "Derive the expression for impedance and phase angle of a series LCR circuit. Draw the phasor diagram.", answer: "**Setup**: R, L, C in series connected to AC source V = V₀sinωt.\n\n**Voltage across each**:\n- V_R = IR (in phase with I)\n- V_L = IX_L (leads I by 90°)\n- V_C = IX_C (lags I by 90°)\n\n**Phasor diagram**: Take I as reference. V_R along I, V_L perpendicular upward, V_C perpendicular downward.\n\nNet voltage: V = √(V_R² + (V_L−V_C)²)\n= I√(R² + (X_L−X_C)²)\n\n**Impedance**: Z = V/I = **√(R² + (X_L−X_C)²)**\n\nwhere X_L = ωL, X_C = 1/(ωC)\n\n**Phase angle**: tanφ = (V_L−V_C)/V_R = **(X_L−X_C)/R**\n\n- If X_L > X_C: φ > 0 (V leads I, inductive)\n- If X_L < X_C: φ < 0 (I leads V, capacitive)\n- If X_L = X_C: φ = 0 (resonance, resistive)\n\n**Power**: P = V_rms I_rms cosφ = I²_rms R" }
  ],
  revision: {
    quickPoints: [
      "**V_rms = V₀/√2**; average power uses rms values",
      "**X_L = ωL** (I lags V); **X_C = 1/ωC** (I leads V); CIVIL mnemonic",
      "**Z = √(R²+(X_L−X_C)²)**; tanφ = (X_L−X_C)/R",
      "**Resonance**: ω₀ = 1/√(LC); Z=R; I max; cosφ=1",
      "**Power**: P = VI cosφ; max at resonance",
      "**Transformer**: V_s/V_p = N_s/N_p; AC only; losses: Cu, eddy, hysteresis, flux leakage"
    ],
    formulas: [
      "X_L = ωL; X_C = 1/(ωC); Z = √(R²+(X_L−X_C)²)",
      "tanφ = (X_L−X_C)/R; cosφ = R/Z",
      "ω₀ = 1/√(LC); f₀ = 1/(2π√(LC))",
      "P = V_rms I_rms cosφ",
      "V_s/V_p = N_s/N_p = I_p/I_s"
    ],
    tipsAndTricks: [
      "CIVIL: C-I leads V, V-I lags in L",
      "At resonance: X_L = X_C, Z = R, I = max, cosφ = 1"
    ]
  }
};
