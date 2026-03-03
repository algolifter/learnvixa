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
## 5. Polarisation proves light is transverse`
};
