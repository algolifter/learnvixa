import type { ChapterContent } from "./physics-ch1";

export const physicsCh8: ChapterContent = {
  topics: [
    {
      title: "Electromagnetic Spectrum",
      content: `## Electromagnetic Waves

### Maxwell's Equations (Qualitative)
Maxwell showed that **changing electric field produces magnetic field** (displacement current) and vice versa, leading to self-sustaining electromagnetic waves.

### Properties of EM Waves
- Transverse waves (E ⊥ B ⊥ direction of propagation)
- Travel at speed of light: c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s
- Do not require a medium
- Carry energy and momentum
- E₀/B₀ = c

### Electromagnetic Spectrum

| Radiation | Wavelength | Source | Use |
|-----------|-----------|-------|-----|
| Radio waves | > 0.1 m | Oscillating circuits | Communication |
| Microwaves | 0.1 m – 1 mm | Klystron/magnetron | Radar, cooking |
| Infrared | 1 mm – 700 nm | Hot bodies | Heating, night vision |
| Visible | 700 – 400 nm | Atoms/molecules | Vision |
| Ultraviolet | 400 – 1 nm | Sun, arcs | Sterilisation |
| X-rays | 1 nm – 0.001 nm | X-ray tubes | Medical imaging |
| Gamma rays | < 0.001 nm | Nuclear reactions | Cancer treatment |

> **Exam Tip**: The entire spectrum in order (increasing frequency): Radio → Micro → IR → Visible → UV → X-ray → Gamma. Know at least one source and one use for each — this is a guaranteed 3-5 mark question.`
    }
  ],
  notes: `# Electromagnetic Waves — Notes

## 1. Maxwell: changing E → B; changing B → E; displacement current
## 2. Properties: transverse, c = 3×10⁸ m/s, E⊥B, no medium needed
## 3. Spectrum (increasing f): Radio, Micro, IR, Visible, UV, X-ray, Gamma
## 4. Each type: know source + detection + use`
};
