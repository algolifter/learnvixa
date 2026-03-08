import type { ChapterContent } from "./physics-ch1";

export const physicsCh11: ChapterContent = {
  topics: [
    {
      title: "Photoelectric Effect",
      content: `## Dual Nature of Radiation and Matter

### Photoelectric Effect
Emission of electrons from a metal surface when light of sufficient frequency falls on it.

### Experimental Observations
1. **Threshold frequency (ν₀)**: Below this, no emission regardless of intensity
2. **Instantaneous**: No time lag (even at low intensity)
3. **KE depends on frequency**, not intensity
4. **Number of electrons ∝ intensity**

### Einstein's Photoelectric Equation
$$KE_{max} = h\\nu - \\phi = h\\nu - h\\nu_0$$

$$eV_0 = h\\nu - \\phi$$

Where: φ = work function = hν₀; V₀ = stopping potential

### Graphs
- KE vs ν: straight line, slope = h, x-intercept = ν₀
- Photocurrent vs intensity: linear (above threshold)
- Stopping potential vs ν: straight line, slope = h/e

> **Exam Tip**: The photoelectric effect cannot be explained by wave theory (no threshold frequency, instantaneous emission). Einstein's explanation using photon theory earned him the Nobel Prize.`
    },
    {
      title: "De Broglie Hypothesis",
      content: `## Matter Waves

### De Broglie Wavelength
Every moving particle has an associated wavelength:
$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

### For Electron Accelerated Through V
$$\\lambda = \\frac{h}{\\sqrt{2meV}} = \\frac{1.227}{\\sqrt{V}} \\text{ nm}$$

### For a Particle with KE
$$\\lambda = \\frac{h}{\\sqrt{2mKE}}$$

### At Temperature T
$$\\lambda = \\frac{h}{\\sqrt{3mkT}}$$

### Davisson-Germer Experiment
- Confirmed wave nature of electrons experimentally
- Electron beam diffracted by nickel crystal
- Measured wavelength matched de Broglie's prediction

### Key Points
- λ is significant only for microscopic particles (electrons, protons)
- For macroscopic objects, λ is negligibly small → no observable wave effects
- Heisenberg's uncertainty principle: Δx·Δp ≥ h/4π

> **Board Tip**: De Broglie wavelength formula for an electron accelerated through potential V (λ = 1.227/√V nm) is a standard numerical. Always convert units correctly.`
    }
  ],
  notes: `# Dual Nature — Notes

## 1. Photoelectric effect: KEₘₐₓ = hν – φ; eV₀ = hν – φ
## 2. Threshold frequency: below ν₀, no emission
## 3. de Broglie: λ = h/mv = h/√(2mKE)
## 4. Electron: λ = 1.227/√V nm
## 5. Davisson-Germer: experimental proof of matter waves`,
  questions2: [
    { question: "What is the photoelectric effect?", answer: "The **photoelectric effect** is the emission of electrons from a metal surface when light of **sufficiently high frequency** (≥ threshold frequency ν₀) falls on it. The emitted electrons are called **photoelectrons**." },
    { question: "Define threshold frequency and work function.", answer: "**Threshold frequency (ν₀)** is the minimum frequency of incident radiation below which no photoelectric emission occurs, regardless of intensity. **Work function (φ)** is the minimum energy required to eject an electron from the metal surface: φ = hν₀." },
    { question: "What is stopping potential?", answer: "**Stopping potential (V₀)** is the minimum negative potential applied to the collector plate that just stops the most energetic photoelectron from reaching it. It satisfies: eV₀ = KEₘₐₓ = hν − φ." },
    { question: "State de Broglie's hypothesis.", answer: "Every moving particle has an associated wave called a **matter wave** or **de Broglie wave**. The wavelength is given by λ = h/p = h/mv, where h is Planck's constant, m is mass, and v is velocity." },
    { question: "Why is the wave nature of macroscopic objects not observable?", answer: "For macroscopic objects, mass m is very large, so λ = h/mv becomes **negligibly small** (much smaller than any measurable dimension). Wave effects like diffraction require λ comparable to the obstacle size, so macroscopic wave nature is undetectable." },
    { question: "What was the Davisson-Germer experiment?", answer: "Davisson and Germer directed an electron beam at a **nickel crystal** and observed a **diffraction pattern**. The measured wavelength matched de Broglie's prediction (λ = h/mv), providing the first experimental confirmation of **matter waves**." },
    { question: "Why can't wave theory explain the photoelectric effect?", answer: "Wave theory predicts: (i) emission at any frequency with sufficient intensity — contradicted by threshold frequency, (ii) time lag for energy accumulation — contradicted by instantaneous emission, (iii) KE depends on intensity — but KE depends only on frequency. Einstein's **photon theory** successfully explains all observations." },
    { question: "Write de Broglie wavelength for an electron accelerated through potential V.", answer: "When an electron is accelerated through potential V: KE = eV. So λ = h/√(2meV). Substituting values: **λ = 1.227/√V nm**. For V = 100 V, λ = 0.1227 nm." }
  ],
  questions3: [
    { question: "State Einstein's photoelectric equation and explain each term.", answer: "**Einstein's photoelectric equation**: KEₘₐₓ = hν − φ\n\nWhere:\n- **KEₘₐₓ** = maximum kinetic energy of emitted photoelectrons\n- **h** = Planck's constant (6.63 × 10⁻³⁴ Js)\n- **ν** = frequency of incident radiation\n- **φ** = work function of the metal = hν₀\n\nAlternatively: eV₀ = hν − hν₀, where V₀ is stopping potential.\n\nThe equation shows KE depends **linearly on frequency** and is independent of intensity." },
    { question: "Draw and explain the graph of stopping potential vs frequency.", answer: "The graph of **V₀ vs ν** is a **straight line** with:\n- **Slope** = h/e (same for all metals)\n- **x-intercept** = threshold frequency ν₀ (different for different metals)\n- **y-intercept** = −φ/e (negative)\n\nAbove ν₀, V₀ increases linearly with frequency. Below ν₀, no emission occurs regardless of intensity. This graph provides **experimental proof** of Einstein's equation and allows determination of Planck's constant." },
    { question: "Derive de Broglie wavelength for a particle with kinetic energy KE.", answer: "For a particle of mass m with kinetic energy KE:\n\nKE = ½mv² → v = √(2KE/m)\n\nMomentum: p = mv = m√(2KE/m) = √(2mKE)\n\nDe Broglie wavelength: **λ = h/p = h/√(2mKE)**\n\nFor thermal neutrons at temperature T: KE = (3/2)kT\n\nSo: **λ = h/√(3mkT)**\n\nThis shows λ decreases as KE or temperature increases." },
    { question: "Explain why the photoelectric effect supports the particle nature of light.", answer: "The photoelectric effect supports **particle nature** because:\n1. **Threshold frequency**: A photon must have minimum energy hν₀ to eject an electron — wave theory predicts emission at any frequency with enough intensity\n2. **Instantaneous emission**: Energy transfer is in discrete quanta (photons), not gradual accumulation — wave theory predicts a time lag\n3. **KE depends on frequency, not intensity**: Each photon delivers energy hν; increasing intensity means more photons but same energy per photon\n4. **Number of electrons ∝ intensity**: More photons = more electron ejections, consistent with particle picture" },
    { question: "Compare photoelectric effect and Compton effect.", answer: "**Photoelectric Effect**: Photon is **completely absorbed** by an electron bound in a metal; electron is ejected. Demonstrates particle nature of light. Energy: hν = φ + KEₘₐₓ.\n\n**Compton Effect**: Photon is **partially scattered** by a free/loosely bound electron; photon loses energy and increases wavelength. Demonstrates photon-electron collision (like billiards). Change in wavelength: Δλ = (h/mₑc)(1−cosθ).\n\nBoth support the **quantum (particle) nature** of electromagnetic radiation." },
    { question: "What is Heisenberg's Uncertainty Principle? Give its mathematical form.", answer: "**Heisenberg's Uncertainty Principle** states that it is impossible to simultaneously determine both the **position** and **momentum** of a particle with absolute precision.\n\nMathematically: **Δx · Δp ≥ h/4π**\n\nWhere Δx = uncertainty in position, Δp = uncertainty in momentum.\n\nAlternatively: ΔE · Δt ≥ h/4π (energy-time uncertainty).\n\nThis principle is a fundamental consequence of the **wave-particle duality** and is significant only for microscopic particles where λ is appreciable." }
  ],
  questions5: [
    { question: "Describe the photoelectric effect. State the experimental observations and explain how Einstein's photon theory accounts for them.", answer: "**Photoelectric Effect**: Emission of electrons from a metal surface when light of sufficient frequency falls on it.\n\n**Experimental Observations**:\n1. **Threshold frequency (ν₀)**: No emission below ν₀, regardless of intensity\n2. **Instantaneous emission**: No time lag, even at low intensity\n3. **KEₘₐₓ depends on frequency**, not intensity\n4. **Number of photoelectrons ∝ intensity**\n5. **Stopping potential** is independent of intensity\n\n**Einstein's Explanation (Photon Theory)**:\nLight consists of discrete packets (photons), each with energy E = hν.\n\n1. A photon transfers ALL its energy to one electron: hν = φ + KEₘₐₓ\n2. If hν < φ (i.e., ν < ν₀), electron cannot escape → explains threshold frequency\n3. Energy transfer is instantaneous (one photon, one electron) → no time lag\n4. KEₘₐₓ = hν − φ → depends on ν, not intensity\n5. Greater intensity = more photons = more electrons ejected → current ∝ intensity\n\n**Graphs**: (i) KE vs ν: straight line, slope = h, x-intercept = ν₀ (ii) V₀ vs ν: straight line, slope = h/e" },
    { question: "What is de Broglie's hypothesis? Derive the expression for de Broglie wavelength. Describe the Davisson-Germer experiment and explain how it confirmed this hypothesis.", answer: "**De Broglie's Hypothesis (1924)**: Every moving particle has an associated wave (matter wave). If light can behave as particles (photons), then particles should exhibit wave behaviour.\n\n**Derivation**:\nFor a photon: E = hν = hc/λ and E = pc (from relativity)\nSo: p = h/λ → **λ = h/p**\n\nExtending to any particle of mass m moving with velocity v:\n**λ = h/mv = h/p**\n\nFor electron accelerated through V: KE = eV, p = √(2meV)\n**λ = h/√(2meV) = 1.227/√V nm**\n\n**Davisson-Germer Experiment (1927)**:\n1. **Setup**: Electron gun accelerates electrons through voltage V; beam directed at **nickel crystal**; scattered electrons detected by movable detector\n2. **Observation**: At V = 54 V and scattering angle 50°, a strong **diffraction peak** was observed\n3. **Analysis**: Using Bragg's law (2d sinθ = nλ), measured λ ≈ 0.165 nm\n4. **Verification**: De Broglie's formula: λ = 1.227/√54 ≈ 0.167 nm\n5. **Conclusion**: Excellent agreement confirmed the **wave nature of electrons** and validated de Broglie's hypothesis\n\nThis experiment provided the first direct experimental proof of matter waves." },
    { question: "Draw the graphs for the photoelectric effect and explain each. How can Planck's constant be determined from these graphs?", answer: "**Graph 1: KEₘₐₓ vs ν**\n- Straight line with slope = h (Planck's constant)\n- x-intercept = threshold frequency ν₀\n- y-intercept = −φ (work function)\n- Equation: KEₘₐₓ = hν − φ\n- Same slope for all metals; different intercepts\n\n**Graph 2: Stopping potential V₀ vs ν**\n- Straight line with slope = h/e\n- x-intercept = ν₀; y-intercept = −φ/e\n- Equation: V₀ = (h/e)ν − φ/e\n- **Planck's constant**: h = e × slope of V₀ vs ν graph\n\n**Graph 3: Photocurrent vs Intensity**\n- Linear relationship (above threshold frequency)\n- Doubling intensity doubles the photocurrent\n- Below threshold frequency: zero current at any intensity\n\n**Graph 4: Photocurrent vs Collector Potential**\n- At large +ve potential, current saturates (saturation current)\n- At −V₀ (stopping potential), current = 0\n- Higher intensity → higher saturation current, same V₀\n- Higher frequency → same saturation current, higher V₀\n\n**Determination of h**: From V₀ vs ν graph, slope = h/e. Measuring slope and using known e = 1.6 × 10⁻¹⁹ C: **h = slope × e ≈ 6.63 × 10⁻³⁴ Js**" },
    { question: "Compare the wave and particle nature of light with suitable examples. Explain wave-particle duality.", answer: "**Particle Nature of Light**:\n1. **Photoelectric effect**: Light ejects electrons; explained only by photon theory (E = hν)\n2. **Compton effect**: Photon scatters off electron like a particle collision\n3. **Blackbody radiation**: Planck's quantum hypothesis (E = nhν)\n\n**Wave Nature of Light**:\n1. **Interference**: Young's double slit experiment — bright and dark fringes\n2. **Diffraction**: Bending of light around obstacles\n3. **Polarisation**: Transverse wave property\n\n**Wave-Particle Duality**:\nLight exhibits **both** wave and particle properties, but never both simultaneously in the same experiment.\n- In propagation: wave behaviour (interference, diffraction)\n- In interaction with matter: particle behaviour (photoelectric, Compton)\n\n**De Broglie extended this to matter**: Every particle has an associated wavelength λ = h/mv.\n\n**Confirmation**: Davisson-Germer experiment showed electron diffraction (wave nature of particles).\n\n**Heisenberg's Uncertainty Principle** is a natural consequence: Δx·Δp ≥ h/4π — precise knowledge of one property limits knowledge of the complementary property.\n\nThis duality is fundamental to **quantum mechanics** and applies to all entities — light and matter alike." }
  ]
};
