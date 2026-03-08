import type { ChapterContent } from "./physics-ch1";

export const physicsCh10: ChapterContent = {
  topics: [
    {
      title: "Huygens' Principle and Interference",
      content: `## Wave Optics

### Huygens' Principle
1. Every point on a wavefront acts as a source of secondary wavelets
2. The new wavefront is the forward envelope of all secondary wavelets

### Young's Double Slit Experiment (YDSE)
- Two coherent sources produce an interference pattern
- **Path difference**: Δ = d sinθ ≈ dy/D (for small angles)

### Conditions for Maxima and Minima
- **Bright fringe** (constructive): Δ = nλ → y = nλD/d
- **Dark fringe** (destructive): Δ = (2n–1)λ/2 → y = (2n–1)λD/2d

### Fringe Width
$$\\beta = \\frac{\\lambda D}{d}$$

- β increases with λ and D; decreases with d
- Central fringe is **always bright** and at centre

### Intensity Distribution
$$I = 4I_0\\cos^2(\\phi/2)$$
Iₘₐₓ = 4I₀ (constructive), Iₘᵢₙ = 0 (destructive)

> **Exam Tip**: YDSE derivation and fringe width formula are guaranteed 5-mark questions. Remember: if the experiment is done in water (n), λ decreases → fringe width decreases.`
    },
    {
      title: "Diffraction and Polarisation",
      content: `## Single Slit Diffraction

### Condition for Minima
$$a\\sin\\theta = n\\lambda$$ (n = 1, 2, 3...)

### Central Maximum Width
$$\\theta = \\frac{2\\lambda}{a}$$, width on screen = 2λD/a

Central maximum is **twice** the width of secondary maxima.

### Difference from Interference

| Feature | Interference | Diffraction |
|---------|-------------|-------------|
| Source | Two slits | Single slit |
| Fringe width | Equal throughout | Central is widest |
| Intensity | Equal maxima | Decreasing maxima |

## Polarisation

### Definition
Restriction of vibration of light to a single plane. Only **transverse waves** can be polarised.

### Malus's Law
$$I = I_0\\cos^2\\theta$$

When polarised light passes through an analyser at angle θ to the polarisation direction.

### Brewster's Angle
$$\\tan i_B = n$$

At Brewster's angle, reflected and refracted rays are perpendicular; reflected light is completely polarised.

### Polarisation by Scattering
Blue sky is partially polarised — scattered light is polarised perpendicular to the direction of propagation.

> **Board Tip**: Polarisation proves light is a transverse wave — this conceptual point is frequently asked. Malus's law and Brewster's angle are common numericals.`
    }
  ],
  notes: `# Wave Optics — Notes

## 1. Huygens' principle: wavefront = envelope of secondary wavelets
## 2. YDSE: β = λD/d; bright at nλD/d; dark at (2n–1)λD/2d
## 3. Diffraction: single slit minima at asinθ = nλ; central max is widest
## 4. Polarisation: Malus's law I = I₀cos²θ; Brewster's angle tanᵢB = n
## 5. Polarisation proves light is transverse`,
  importantPoints: [
    "**Huygens' principle**: Each point on wavefront is source of secondary wavelets; envelope = new wavefront",
    "**YDSE fringe width**: β = λD/d; bright fringes at y = nλD/d; dark at (2n−1)λD/(2d)",
    "**Single slit diffraction**: Minima at a sinθ = nλ; central maximum is widest (2λD/a)",
    "**Malus's law**: I = I₀cos²θ (intensity through analyzer at angle θ to polarizer)",
    "**Brewster's angle**: tan i_B = n; reflected light is completely polarized"
  ],
  commonMistakes: [
    "**YDSE vs diffraction**: YDSE has equally spaced fringes; diffraction central max is TWICE as wide",
    "**Malus's law angle**: θ is the angle between pass axes of polarizer and analyzer, NOT the angle of incidence",
    "**Brewster's angle**: At i_B, reflected light is polarized but refracted light is only PARTIALLY polarized"
  ],
  examStrategy: [
    "**5-mark**: Derive fringe width in YDSE; derive Huygens' explanation of refraction/reflection",
    "**3-mark**: Single slit diffraction pattern (central max + secondary); Malus's law + Brewster's angle numerical",
    "**2-mark**: State Huygens' principle; conditions for constructive/destructive interference"
  ],
  examples: [
    "**YDSE**: d=0.5mm, D=1m, λ=600nm. β = λD/d = 600×10⁻⁹×1/(0.5×10⁻³) = **1.2 mm**",
    "**Malus's law**: Polarized light I₀ through analyzer at 60°. I = I₀cos²60° = I₀/4",
    "**Brewster's angle**: Glass n=1.5. tan i_B = 1.5, i_B = **56.3°**"
  ],
  summary: "**Wave Optics** covers interference, diffraction, and polarization — proving the wave nature of light.\n\n**Key**: YDSE β = λD/d, diffraction minima a sinθ = nλ, Malus's law I = I₀cos²θ, Brewster's angle tan i_B = n.\n\n**Board Weightage**: 6-8 marks.",
  questions2: [
    { question: "State Huygens' principle.", answer: "Every point on a wavefront acts as a source of secondary wavelets which spread out in all directions with the speed of light. The envelope (tangent surface) of these wavelets at any later time gives the new wavefront." },
    { question: "What is Brewster's angle? Write the relation.", answer: "Brewster's angle is the angle of incidence at which reflected light is completely plane polarized. tan i_B = n (refractive index). At this angle, reflected and refracted rays are perpendicular to each other." },
    { question: "In YDSE, what happens to fringe width when (i) wavelength increases, (ii) slit separation increases?", answer: "β = λD/d. (i) If λ increases, β increases (wider fringes). (ii) If d increases, β decreases (narrower fringes)." },
    { question: "State Malus's law.", answer: "When plane polarised light of intensity I₀ passes through an analyser, the transmitted intensity is I = I₀cos²θ, where θ is the angle between the pass axes of the polariser and analyser." },
    { question: "What is the condition for constructive interference?", answer: "Constructive interference occurs when the path difference between two waves is an integral multiple of wavelength: Δ = nλ (n = 0, 1, 2, ...). The waves arrive in phase, and the resultant amplitude is maximum." },
    { question: "What is diffraction of light? How does it differ from interference?", answer: "Diffraction is the bending of light around corners of an obstacle or aperture. In interference, light from two distinct sources overlaps. In diffraction, light from different parts of the same wavefront interferes." },
    { question: "In YDSE, the fringe width is 0.6 mm. If the screen is moved 50 cm away, what is the new fringe width? (D originally = 1m, wavelength unchanged)", answer: "β = λD/d. New D = 1.5 m. β' = β × (D'/D) = 0.6 × 1.5/1 = 0.9 mm." },
    { question: "What is polarisation of light? What does it prove about light?", answer: "Polarisation restricts the vibrations of the electric field vector to a single plane. It proves that light is a transverse wave — longitudinal waves cannot be polarised." },
    { question: "What is the angular width of the central maximum in a single slit diffraction pattern?", answer: "Angular width = 2θ₁ = 2λ/a (for small angles), where a is the slit width and λ is the wavelength. Linear width of central maximum on screen = 2λD/a." },
    { question: "Find Brewster's angle for a glass surface of refractive index 1.5.", answer: "tan i_B = n = 1.5. i_B = tan⁻¹(1.5) ≈ 56.3°. At this angle, reflected light is completely plane polarised and the reflected and refracted rays are perpendicular." }
  ],
  questions3: [
    { question: "Derive the expression for fringe width in Young's double slit experiment.", answer: "Two slits S₁, S₂ separated by d, screen at distance D.\n\nPath difference at point P (at distance y from centre):\nΔ = S₂P − S₁P = yd/D (for small angles)\n\n**Bright fringes** (constructive): Δ = nλ → y_n = nλD/d\n**Dark fringes** (destructive): Δ = (2n−1)λ/2 → y_n = (2n−1)λD/(2d)\n\n**Fringe width**: β = y_{n+1} − y_n = (n+1)λD/d − nλD/d = **λD/d**\n\nFringe width is same for bright and dark fringes and is independent of the order n." },
    { question: "Explain single slit diffraction. Derive the condition for first minimum.", answer: "When monochromatic light passes through a narrow slit of width a, it spreads out and forms a pattern of bright and dark bands on a screen.\n\n**Derivation**: Divide the slit into two equal halves. For the first minimum, path difference between waves from top of upper half and top of lower half = λ/2.\n\nPath difference between extreme rays = a sinθ.\nFor first minimum: a sinθ = λ (each pair of corresponding points from two halves differs by λ/2, causing destructive interference).\n\nGeneral minima: a sinθ = nλ (n = 1, 2, 3, ...)\n\nCentral maximum width = 2λD/a (twice the width of secondary maxima)." },
    { question: "Explain the difference between interference and diffraction patterns.", answer: "| Feature | Interference (YDSE) | Diffraction (single slit) |\n| Source | Two separate coherent sources | Different parts of same wavefront |\n| Fringes | All equally bright | Central max is brightest; intensity decreases |\n| Width | All fringes equal width β = λD/d | Central max width 2λD/a (double) |\n| Minima | Perfectly dark (complete cancellation) | Not perfectly dark |\n| Condition | Two slits, separation d | Single slit, width a |\n| Formula | β = λD/d | Minima: a sinθ = nλ |" },
    { question: "Unpolarised light of intensity I₀ passes through two polaroids. The pass axis of the second is at 60° to the first. Find the transmitted intensity.", answer: "After first polaroid: I₁ = I₀/2 (unpolarised → polarised)\n\nAfter second polaroid (Malus's law): I₂ = I₁ cos²θ = (I₀/2) cos²60° = (I₀/2)(1/4) = **I₀/8**\n\nSo the final intensity is 1/8th of the original intensity." }
  ],
  questions5: [
    { question: "Using Huygens' principle, derive Snell's law of refraction.", answer: "**Setup**: Plane wavefront AB incident on surface XY separating medium 1 (speed v₁) and medium 2 (speed v₂).\n\nLet angle of incidence = i, angle of refraction = r.\n\nWhen point A reaches the surface, B is still at distance BC from surface.\nTime for B to reach C: t = BC/v₁\nIn same time, secondary wavelet from A travels distance AD in medium 2: AD = v₂t\n\nFrom geometry:\nBC = AC sin i and AD = AC sin r\n\nSince BC/v₁ = AD/v₂:\nAC sin i/v₁ = AC sin r/v₂\nsin i/sin r = v₁/v₂\n\nSince n = c/v:\nsin i/sin r = (c/n₁)/(c/n₂) = n₂/n₁\n\n**n₁ sin i = n₂ sin r** (Snell's law)\n\nThis also explains why light bends towards normal when entering denser medium (v₂ < v₁)." }
  ],
  revision: {
    quickPoints: [
      "**Huygens**: Each point → secondary wavelets; envelope = new wavefront",
      "**YDSE**: β = λD/d; bright at nλD/d; dark at (2n−1)λD/(2d)",
      "**Diffraction**: Minima at a sinθ = nλ; central max width = 2λD/a",
      "**Malus**: I = I₀cos²θ. **Brewster**: tan i_B = n",
      "**Polarization proves light is transverse wave**"
    ],
    formulas: [
      "β = λD/d; y_n = nλD/d (bright); y_n = (2n−1)λD/(2d) (dark)",
      "a sinθ = nλ (diffraction minima)",
      "I = I₀cos²θ (Malus's law)",
      "tan i_B = n (Brewster's angle)"
    ],
    tipsAndTricks: [
      "YDSE: all fringes same width. Diffraction: central max is TWICE secondary maxima width",
      "Unpolarized light through polarizer: intensity becomes I₀/2"
    ]
  }
};
