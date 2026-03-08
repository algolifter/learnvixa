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
## 6. Microscope: m = (L/fₒ)(D/fₑ); Telescope: m = fₒ/fₑ`,
  importantPoints: [
    "**Mirror formula**: 1/v + 1/u = 1/f; magnification m = −v/u",
    "**Snell's law**: n₁ sinθ₁ = n₂ sinθ₂; **TIR** when i > i_c where sin i_c = n₂/n₁ (n₁ > n₂)",
    "**Lens formula**: 1/v − 1/u = 1/f; **Power** P = 1/f (dioptre)",
    "**Lens maker's**: 1/f = (n−1)(1/R₁ − 1/R₂)",
    "**Prism**: δ_min when i = e; n = sin((A+δ_m)/2)/sin(A/2)",
    "**Compound microscope**: m = (L/f_o)(D/f_e); **Telescope**: m = f_o/f_e"
  ],
  commonMistakes: [
    "**Sign convention**: Use Cartesian — distances measured from pole/optical centre; incident direction is positive",
    "**Lens vs Mirror formula**: Lens: 1/v − 1/u = 1/f. Mirror: 1/v + 1/u = 1/f. Students mix these up",
    "**TIR condition**: Light must go from denser to rarer medium; i > i_c",
    "**Microscope vs Telescope**: Microscope objective has SHORT f_o; telescope objective has LONG f_o"
  ],
  examStrategy: [
    "**5-mark**: Derive lens maker's formula; derive refraction at spherical surface; prism formula derivation",
    "**3-mark**: Total internal reflection with applications (optical fibre, mirage); compound microscope/telescope ray diagram and magnification",
    "**2-mark**: State Snell's law; conditions for TIR; define power of a lens"
  ],
  examples: [
    "**Mirror**: Object at u=−30cm, f=−20cm (concave). 1/v = 1/f − 1/u = −1/20 + 1/30 = −1/60. v = **−60cm** (real, inverted)",
    "**TIR**: Glass (n=1.5) to air. sin i_c = 1/1.5 = 0.667. i_c = **41.8°**",
    "**Telescope**: f_o=100cm, f_e=5cm. m = f_o/f_e = **20×**; tube length = f_o + f_e = **105cm**"
  ],
  summary: "**Ray Optics** covers reflection, refraction, lenses, prisms, and optical instruments.\n\n**Key**: Mirror formula, Snell's law, TIR, lens formula, prism, microscope and telescope. Heavy on numericals and ray diagrams.\n\n**Board Weightage**: 8-10 marks.",
  questions2: [
    { question: "State the conditions for total internal reflection.", answer: "Two conditions: (i) Light must travel from a denser medium to a rarer medium (n₁ > n₂). (ii) Angle of incidence must be greater than the critical angle (i > i_c), where sin i_c = n₂/n₁." },
    { question: "Define power of a lens. Write its SI unit.", answer: "Power of a lens is its ability to converge or diverge light rays. P = 1/f, where f is focal length in metres. SI unit: dioptre (D). Converging lens has +P, diverging lens has −P." },
    { question: "An object is placed at 15 cm from a convex lens of focal length 10 cm. Find the image position.", answer: "u = −15 cm, f = +10 cm. Using 1/v − 1/u = 1/f: 1/v = 1/10 + 1/(−15) = 1/10 − 1/15 = (3−2)/30 = 1/30. v = +30 cm (real, on other side)." }
  ],
  questions3: [
    { question: "Explain total internal reflection. Give two applications.", answer: "When light travels from denser to rarer medium, if i > i_c (critical angle), the light is completely reflected back into the denser medium. No refraction occurs.\n\nConditions: (i) n₁ > n₂, (ii) i > i_c where sin i_c = n₂/n₁\n\n**Applications**:\n1. **Optical fibre**: Light undergoes repeated TIR along the fibre, enabling data transmission over long distances with minimal loss.\n2. **Mirage**: Hot air near ground is rarer; light from sky undergoes TIR, creating an illusion of water.\n3. **Totally reflecting prisms**: Replace mirrors in periscopes and binoculars (no multiple reflections, no silvering needed)." }
  ],
  questions5: [
    { question: "Derive the lens maker's formula for a thin convex lens.", answer: "**Setup**: Thin lens with radii of curvature R₁ and R₂, refractive index n, in air.\n\n**Step 1**: Refraction at first surface (air to lens):\nn₁/v₁ − n₁/u = (n₂−n₁)/R₁\n1/v₁ − 1/u = (n−1)/R₁ ... (i) [taking n₁=1, n₂=n]\n\n**Step 2**: Image from first surface acts as object for second surface (lens to air):\nn/v₁ is the object, refraction gives:\n1/v − n/v₁ = (1−n)/R₂ ... (ii)\n\n**Adding (i) and (ii)**:\n1/v − 1/u = (n−1)(1/R₁ − 1/R₂)\n\nSince 1/v − 1/u = 1/f:\n\n**1/f = (n−1)(1/R₁ − 1/R₂)**\n\nThis is the Lens Maker's Formula. It relates focal length to the refractive index and radii of curvature." }
  ],
  revision: {
    quickPoints: [
      "**Mirror**: 1/v + 1/u = 1/f; m = −v/u; Cartesian sign convention",
      "**Snell's law**: n₁sini = n₂sinr; **TIR**: sini_c = n₂/n₁ (denser to rarer, i > i_c)",
      "**Lens**: 1/v − 1/u = 1/f; P = 1/f (dioptre)",
      "**Lens maker**: 1/f = (n−1)(1/R₁ − 1/R₂)",
      "**Prism**: n = sin((A+δ_m)/2)/sin(A/2)",
      "**Microscope**: m = (L/f_o)(D/f_e); **Telescope**: m = f_o/f_e"
    ],
    formulas: [
      "1/v + 1/u = 1/f (mirror); 1/v − 1/u = 1/f (lens)",
      "n₁sini = n₂sinr; sini_c = n₂/n₁",
      "1/f = (n−1)(1/R₁−1/R₂); P = 1/f",
      "n = sin((A+δ_m)/2)/sin(A/2)",
      "Microscope: m = −(L/f_o)(D/f_e); Telescope: m = −f_o/f_e"
    ],
    tipsAndTricks: [
      "Always draw ray diagram before solving — it prevents sign errors",
      "Cartesian: left of lens/mirror is negative, right is positive",
      "Microscope: short f_o, short f_e. Telescope: long f_o, short f_e"
    ]
  }
};
