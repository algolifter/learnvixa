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
## 5. Davisson-Germer: experimental proof of matter waves`
};
