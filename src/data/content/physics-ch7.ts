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
## 6. Long-distance: high voltage to reduce I²R losses`
};
