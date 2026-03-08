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
## 4. Each type: know source + detection + use`,
  importantPoints: [
    "**Maxwell's displacement current**: Changing E field produces B field, completing Ampere's law for capacitors",
    "**EM waves are transverse**: E ⊥ B ⊥ direction of propagation; c = E₀/B₀ = 1/√(μ₀ε₀) = 3×10⁸ m/s",
    "**Spectrum order** (increasing frequency): Radio → Microwave → Infrared → Visible → UV → X-ray → Gamma",
    "**All EM waves travel at c in vacuum**; carry energy and momentum; no medium needed"
  ],
  commonMistakes: [
    "**Spectrum order**: Students confuse IR and UV positions. Remember: IR is below visible (lower frequency), UV is above",
    "**Displacement current is NOT actual current**: It's the effect of changing electric field, equivalent to current in producing B"
  ],
  examStrategy: [
    "**3-5 mark**: Complete EM spectrum table with source, wavelength range, and one use for each type — guaranteed question",
    "**2-mark**: Define displacement current; properties of EM waves; who discovered which type"
  ],
  examples: [
    "**Speed of EM waves**: c = 1/√(μ₀ε₀) = 1/√(4π×10⁻⁷ × 8.85×10⁻¹²) = **3 × 10⁸ m/s**",
    "**Wavelength of radio**: f=1MHz. λ = c/f = 3×10⁸/10⁶ = **300 m**"
  ],
  summary: "**Electromagnetic Waves** — Maxwell showed changing E produces B and vice versa, creating self-propagating EM waves.\n\n**Key**: c = 1/√(μ₀ε₀), transverse waves, E⊥B, spectrum from radio to gamma rays. Know source and use of each.\n\n**Board Weightage**: 4-5 marks.",
  questions2: [
    { question: "What is displacement current?", answer: "Displacement current is the current that arises due to time-varying electric field (or changing electric flux). I_d = ε₀ dΦ_E/dt. It was introduced by Maxwell to make Ampere's law consistent." },
    { question: "Name the part of the EM spectrum used for (i) water purification, (ii) TV remote.", answer: "(i) Ultraviolet rays — used for sterilisation/water purification. (ii) Infrared rays — used in TV remotes." },
    { question: "Write two properties of electromagnetic waves.", answer: "(i) EM waves are transverse — E and B are perpendicular to each other and to the direction of propagation. (ii) They travel at the speed of light c = 3×10⁸ m/s in vacuum and do not require a medium." }
  ],
  questions3: [
    { question: "Describe the electromagnetic spectrum. Give the source and one use of each type.", answer: "EM spectrum (increasing frequency):\n1. **Radio waves** (>1mm): Oscillating circuits; broadcasting\n2. **Microwaves** (1mm-1mm): Klystron; radar, cooking\n3. **Infrared** (1mm-700nm): Hot bodies; heating, night vision\n4. **Visible** (700-400nm): Atoms/molecules; vision\n5. **Ultraviolet** (400-1nm): Sun, arcs; sterilisation\n6. **X-rays** (1nm-0.001nm): X-ray tubes; medical imaging\n7. **Gamma rays** (<0.001nm): Radioactive nuclei; cancer treatment" }
  ],
  questions5: [
    { question: "Explain Maxwell's contribution to electromagnetic theory. Describe displacement current and show how it led to the prediction of EM waves.", answer: "**Maxwell's Contribution**: Maxwell unified electricity and magnetism into electromagnetic theory by modifying Ampere's circuital law.\n\n**The Problem**: Ampere's law (∮B·dl = μ₀I) failed for a capacitor circuit — current flows in the wire but not between the plates. Yet B exists between the plates.\n\n**Displacement Current**: Maxwell proposed that changing electric field between plates acts as a current:\nI_d = ε₀ dΦ_E/dt\n\n**Modified Ampere's Law**: ∮B·dl = μ₀(I + I_d) = μ₀(I + ε₀ dΦ_E/dt)\n\n**Prediction of EM Waves**: From Maxwell's equations:\n- Changing E → B (modified Ampere's law)\n- Changing B → E (Faraday's law)\n\nThis creates a self-sustaining wave propagating at:\nc = 1/√(μ₀ε₀) = 3×10⁸ m/s (speed of light!)\n\nThis proved light is an electromagnetic wave.\n\n**Properties**: Transverse, E⊥B, carries energy and momentum, no medium needed." }
  ],
  revision: {
    quickPoints: [
      "**Displacement current**: I_d = ε₀ dΦ_E/dt (changing E → B)",
      "**c = 1/√(μ₀ε₀) = 3×10⁸ m/s**; E⊥B⊥direction; transverse",
      "**Spectrum**: Radio, Micro, IR, **VIBGYOR**, UV, X-ray, Gamma",
      "Know source + use for each type — guaranteed question"
    ],
    formulas: [
      "c = 1/√(μ₀ε₀) = E₀/B₀ = 3×10⁸ m/s",
      "I_d = ε₀ dΦ_E/dt",
      "c = fλ; E = hf (photon energy)"
    ],
    tipsAndTricks: [
      "Mnemonic for spectrum: 'Raging Martians Invaded Venus Using X-ray Guns'",
      "Wavelength decreases left to right; frequency and energy increase"
    ]
  }
};
