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
    { question: "An object is placed at 15 cm from a convex lens of focal length 10 cm. Find the image position.", answer: "u = −15 cm, f = +10 cm. Using 1/v − 1/u = 1/f: 1/v = 1/10 + 1/(−15) = 1/10 − 1/15 = (3−2)/30 = 1/30. v = +30 cm (real, on other side)." },
    { question: "State Snell's law of refraction.", answer: "When light passes from one medium to another, the ratio of sine of angle of incidence to sine of angle of refraction is constant (equal to the refractive index): n₁ sinθ₁ = n₂ sinθ₂." },
    { question: "What is the critical angle for glass (n = 1.5) to air interface?", answer: "sin i_c = n₂/n₁ = 1/1.5 = 2/3. i_c = sin⁻¹(2/3) ≈ 41.8°. Any ray hitting the interface at i > 41.8° will undergo total internal reflection." },
    { question: "What is the magnifying power of a simple microscope for normal adjustment?", answer: "m = 1 + D/f, where D = 25 cm (least distance of distinct vision) and f = focal length of the convex lens. When the image is at infinity: m = D/f." },
    { question: "Write the mirror formula. What sign convention is used?", answer: "Mirror formula: 1/v + 1/u = 1/f. Sign convention: All distances measured from pole. Distances in direction of incident light are positive. For concave mirror, f is negative; for convex, f is positive." },
    { question: "What is the minimum deviation condition for a prism?", answer: "At minimum deviation (δ_m), the refracted ray inside the prism is parallel to the base. The angle of incidence equals the angle of emergence (i = e), and r₁ = r₂ = A/2. n = sin((A+δ_m)/2)/sin(A/2)." },
    { question: "A convex lens of focal length 20 cm is combined with a concave lens of focal length 30 cm. Find the combined focal length.", answer: "1/f = 1/f₁ + 1/f₂ = 1/20 + 1/(−30) = 3/60 − 2/60 = 1/60. f = 60 cm. The combination acts as a converging lens." },
    { question: "Why does a diamond sparkle?", answer: "Diamond has a very high refractive index (n ≈ 2.42), giving a very small critical angle (≈ 24.4°). Most light entering undergoes total internal reflection multiple times before emerging, producing intense sparkle." }
  ],
  questions3: [
    { question: "Explain total internal reflection. Give two applications.", answer: "When light travels from denser to rarer medium, if i > i_c (critical angle), the light is completely reflected back into the denser medium. No refraction occurs.\n\nConditions: (i) n₁ > n₂, (ii) i > i_c where sin i_c = n₂/n₁\n\n**Applications**:\n1. **Optical fibre**: Light undergoes repeated TIR along the fibre, enabling data transmission over long distances with minimal loss.\n2. **Mirage**: Hot air near ground is rarer; light from sky undergoes TIR, creating an illusion of water.\n3. **Totally reflecting prisms**: Replace mirrors in periscopes and binoculars (no multiple reflections, no silvering needed)." },
    { question: "Derive the relation between n, A, and δ_m for a prism.", answer: "At minimum deviation: i = e, r₁ = r₂ = r\nFrom prism geometry: r₁ + r₂ = A → 2r = A → r = A/2\nFrom deviation: δ = (i + e) − A → δ_m = 2i − A → i = (A + δ_m)/2\n\nApplying Snell's law at first surface:\nn = sin i/sin r = sin((A + δ_m)/2) / sin(A/2)\n\nThis is the prism formula. Used to find n experimentally." },
    { question: "Derive the lens formula 1/v − 1/u = 1/f for a convex lens using ray diagrams.", answer: "Consider object AB at distance u from a convex lens, image A'B' at distance v.\n\nUsing similar triangles:\nTriangles OAB and OA'B' give: A'B'/AB = v/u ... (i)\nTriangles formed with focal point: A'B'/AB = (v−f)/f ... (ii)\n\nFrom (i) and (ii): v/u = (v−f)/f\nvf = u(v−f) = uv − uf\nvf + uf = uv\nDividing by uvf: 1/u + 1/v = 1/f → **1/v − 1/u = 1/f** (with sign convention)" },
    { question: "Compare a compound microscope and an astronomical telescope.", answer: "| Feature | Microscope | Telescope |\n| Objective | Short f, small aperture | Long f, large aperture |\n| Eyepiece | Short f | Short f |\n| Object | Close to F_o, beyond f_o | At infinity |\n| Magnification | m = −(L/f_o)(D/f_e) | m = −f_o/f_e |\n| Image | Virtual, magnified | Virtual, diminished (angular magnification) |\n| Tube length | L + f_e (normal adjustment) | f_o + f_e (normal adjustment) |\n| Use | Very small objects | Distant celestial objects |" }
  ],
  questions5: [
    { question: "Derive the lens maker's formula for a thin convex lens.", answer: "**Setup**: Thin lens with radii of curvature R₁ and R₂, refractive index n, in air.\n\n**Step 1**: Refraction at first surface (air to lens):\nn₁/v₁ − n₁/u = (n₂−n₁)/R₁\n1/v₁ − 1/u = (n−1)/R₁ ... (i) [taking n₁=1, n₂=n]\n\n**Step 2**: Image from first surface acts as object for second surface (lens to air):\nn/v₁ is the object, refraction gives:\n1/v − n/v₁ = (1−n)/R₂ ... (ii)\n\n**Adding (i) and (ii)**:\n1/v − 1/u = (n−1)(1/R₁ − 1/R₂)\n\nSince 1/v − 1/u = 1/f:\n\n**1/f = (n−1)(1/R₁ − 1/R₂)**\n\nThis is the Lens Maker's Formula. It relates focal length to the refractive index and radii of curvature." },
    { question: "Explain the construction and working of a compound microscope. Derive its magnifying power.", answer: "**Construction**: Two convex lenses — objective (short f_o, small aperture) and eyepiece (short f_e). Object placed just beyond f_o of objective.\n\n**Working**:\n1. Objective forms a real, inverted, magnified image (A'B') of the object (AB) on the other side.\n2. This image acts as object for eyepiece, which further magnifies it into a virtual image.\n\n**Magnification**:\nMagnification by objective: m_o = −L/f_o (where L = tube length = distance between lenses − f_e)\nMagnification by eyepiece: m_e = 1 + D/f_e (normal adjustment, image at D)\nor m_e = D/f_e (image at infinity)\n\n**Total magnification**: m = m_o × m_e = −(L/f_o)(1 + D/f_e)\n\nFor image at infinity: m = −(L/f_o)(D/f_e)\n\n**Key**: Both f_o and f_e should be small for high magnification. The minus sign indicates inverted image." }
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
