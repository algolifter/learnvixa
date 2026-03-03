import type { ChapterContent } from "./physics-ch1";

export const physicsCh9: ChapterContent = {
  topics: [
    {
      title: "Reflection and Refraction",
      content: `## Ray Optics

### Reflection
- Angle of incidence = angle of reflection
- Mirror formula: 1/v + 1/u = 1/f
- Magnification: m = –v/u

### Sign Convention (Cartesian)
- All distances from pole; direction of incident light is positive
- Above principal axis = positive; below = negative

### Refraction — Snell's Law
$$n_1\\sin i = n_2\\sin r$$

### Total Internal Reflection
When light goes from denser to rarer medium and angle > critical angle:
$$\\sin i_c = \\frac{n_2}{n_1}$$ (n₁ > n₂)

**Applications**: Optical fibres, mirage, sparkling of diamonds (n = 2.42, ic = 24.4°)

### Refraction at Spherical Surfaces
$$\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$$

> **Exam Tip**: Total internal reflection requires light going from denser to rarer medium AND angle > critical angle. Both conditions must be met.`
    },
    {
      title: "Lenses and Lens Maker's Formula",
      content: `## Thin Lenses

### Lens Formula
$$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$$

### Lens Maker's Formula
$$\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$

### Power of a Lens
$$P = \\frac{1}{f(\\text{in metres})}$$ (unit: dioptre, D)

### Combination of Thin Lenses
$$\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2}$$
P = P₁ + P₂

### Magnification
- Linear: m = v/u = hi/ho
- For compound lenses: m = m₁ × m₂

> **Board Tip**: Lens maker's formula derivation is a 5-mark question. Power of combination of lenses is a standard numerical — remember to convert focal length to metres before calculating power.`
    },
    {
      title: "Prism, Dispersion and Optical Instruments",
      content: `## Prism

### Deviation
$$\\delta = (i + e) - A$$ where A = angle of prism

### Minimum Deviation
At minimum deviation: i = e, r₁ = r₂ = A/2
$$n = \\frac{\\sin\\left(\\frac{A+\\delta_m}{2}\\right)}{\\sin(A/2)}$$

### Dispersion
Splitting of white light into constituent colours. Cause: refractive index depends on wavelength (nᵥ > nᵣ).

## Optical Instruments

### Simple Microscope
$$m = 1 + \\frac{D}{f}$$ (D = 25 cm, least distance of distinct vision)

### Compound Microscope
$$m = m_o \\times m_e = \\frac{L}{f_o} \\times \\frac{D}{f_e}$$

### Astronomical Telescope (Normal adjustment)
$$m = \\frac{f_o}{f_e}$$, tube length L = fₒ + fₑ

### Reflecting Telescope
Uses concave mirror as objective — advantages: no chromatic aberration, can be made larger.

> **Exam Tip**: For telescope magnification, objective has LARGE focal length; for microscope, objective has SMALL focal length. This distinction is commonly tested.`
    }
  ],
  notes: `# Ray Optics — Notes

## 1. Reflection: 1/v+1/u=1/f; m=–v/u
## 2. Snell's law: n₁sini = n₂sinr; TIR: siniᶜ = n₂/n₁
## 3. Lens formula: 1/v–1/u=1/f; Power P=1/f (dioptre)
## 4. Lens maker: 1/f = (n–1)(1/R₁–1/R₂)
## 5. Prism: δ = i+e–A; n = sin((A+δₘ)/2)/sin(A/2)
## 6. Microscope: m = (L/fₒ)(D/fₑ); Telescope: m = fₒ/fₑ`
};
