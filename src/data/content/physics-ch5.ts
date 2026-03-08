import type { ChapterContent } from "./physics-ch1";

export const physicsCh5: ChapterContent = {
  topics: [
    {
      title: "Magnetism – Bar Magnet and Earth's Magnetism",
      content: `## Magnetism and Matter

### Bar Magnet
- Every magnet has **North and South poles** — magnetic monopoles do not exist
- Magnetic field lines: closed loops from N to S outside, S to N inside
- Bar magnet ≈ solenoid (equivalent magnetic dipole)

### Magnetic Dipole Moment
$$\\vec{m} = NIA\\hat{n}$$
SI unit: A·m² or J/T

### Axial Field (far point on axis)
$$B = \\frac{\\mu_0}{4\\pi} \\frac{2m}{r^3}$$

### Equatorial Field
$$B = \\frac{\\mu_0}{4\\pi} \\frac{m}{r^3}$$

### Earth's Magnetism
- Earth behaves as a huge magnetic dipole
- **Geographic North ≈ Magnetic South** (and vice versa)

#### Elements of Earth's Magnetic Field
1. **Declination (θ)**: Angle between geographic and magnetic meridians
2. **Dip/Inclination (δ)**: Angle of B with horizontal (0° at equator, 90° at poles)
3. **Horizontal component**: Bₕ = B cos δ

> **Exam Tip**: At magnetic poles, dip = 90° (vertical); at magnetic equator, dip = 0° (horizontal). These three elements completely describe Earth's field at any location.`
    },
    {
      title: "Magnetic Properties of Materials",
      content: `## Classification of Magnetic Materials

### Key Terms
- **Magnetisation (M)**: Magnetic moment per unit volume; M = χₘH
- **Magnetic susceptibility (χₘ)**: M/H (dimensionless)
- **Permeability (μ)**: μ = μ₀(1 + χₘ) = μ₀μᵣ

### Types

| Property | Diamagnetic | Paramagnetic | Ferromagnetic |
|----------|-------------|--------------|---------------|
| χₘ | Small, negative | Small, positive | Large, positive |
| μᵣ | < 1 | > 1 | >> 1 |
| Behaviour in B | Weakly repelled | Weakly attracted | Strongly attracted |
| Examples | Bi, Cu, water | Al, Na, O₂ | Fe, Co, Ni |
| Temperature effect | Independent | χ ∝ 1/T (Curie law) | Becomes paramagnetic above Tᶜ |

### Hysteresis
When a ferromagnetic material is magnetised and demagnetised cyclically, B lags behind H — this is **hysteresis**.

- **Retentivity**: B remaining when H = 0
- **Coercivity**: H needed to reduce B to 0
- Area of hysteresis loop = energy loss per cycle

### Applications
- **Permanent magnets**: High retentivity + high coercivity (steel, Alnico)
- **Electromagnets**: High retentivity + low coercivity (soft iron)
- **Transformer cores**: Narrow hysteresis loop (low energy loss)

> **Board Tip**: The comparison table of dia/para/ferromagnetic materials is a guaranteed question. Also know: Curie temperature is where ferromagnetic → paramagnetic transition occurs.`
    }
  ],
  notes: `# Magnetism and Matter — Notes

## 1. Bar Magnet: dipole moment m = NIA; no monopoles
## 2. Earth's magnetism: declination, dip, horizontal component
## 3. Materials: diamagnetic (χ<0), paramagnetic (χ>0 small), ferromagnetic (χ>>0)
## 4. Hysteresis: retentivity, coercivity; area = energy loss
## 5. Permanent magnets: high retentivity+coercivity; electromagnets: low coercivity`,
  importantPoints: [
    "**No magnetic monopoles**: Magnetic poles always exist in pairs (N and S). If a magnet is broken, each piece is a complete magnet",
    "**Bar magnet ≡ solenoid**: A bar magnet is equivalent to a magnetic dipole; m = NIA",
    "**Earth's magnetism**: Declination (θ), Dip (δ), Horizontal component B_H = Bcosδ completely describe field",
    "**Dia/Para/Ferro comparison**: Key for 2-3 mark questions — know χ, μ_r, behavior in field, examples, temperature effect",
    "**Hysteresis**: Retentivity (B when H=0), Coercivity (H to make B=0), Loop area = energy loss/cycle",
    "**Permanent magnets**: High retentivity + high coercivity (steel, Alnico). **Electromagnets**: Low coercivity (soft iron)"
  ],
  commonMistakes: [
    "**Geographic North ≠ Magnetic North**: Geographic North pole region has Earth's Magnetic South pole (field lines enter)",
    "**Dip angle**: 90° at poles (vertical), 0° at equator (horizontal) — students often confuse these",
    "**χ for diamagnetic is NEGATIVE** (repelled), not just small. Paramagnetic χ is small but positive",
    "**Curie temperature**: Above T_C, ferromagnetic → paramagnetic. This is NOT the Curie law (χ ∝ 1/T for paramagnetic)"
  ],
  examStrategy: [
    "**3-mark**: Comparison table of dia/para/ferromagnetic (guaranteed question). Hysteresis loop explanation with retentivity and coercivity",
    "**2-mark**: Define declination, dip, horizontal component; properties of magnetic field lines; Curie temperature",
    "**5-mark**: Elements of Earth's magnetic field with diagram; hysteresis + applications (permanent magnet vs electromagnet vs transformer core)"
  ],
  examples: [
    "**Magnetic moment**: Circular coil N=200, A=0.1m², I=5A. m = NIA = 200×0.1×5 = **100 A·m²**",
    "**Earth's field**: B=6×10⁻⁵T, dip=60°. B_H = Bcosδ = 6×10⁻⁵×cos60° = **3×10⁻⁵ T**. B_V = Bsinδ = **5.2×10⁻⁵ T**"
  ],
  summary: "**Magnetism and Matter** covers magnetic properties of materials and Earth's magnetism.\n\n**Key Concepts**: (1) Bar magnet as dipole, m=NIA. (2) Earth's field: declination, dip, B_H. (3) Dia/Para/Ferromagnetic materials. (4) Hysteresis.\n\n**Board Weightage**: 4-6 marks. Comparison table and Earth's magnetism elements are most common.",
  questions2: [
    { question: "Define magnetic declination.", answer: "Magnetic declination at a place is the angle between the geographic meridian and the magnetic meridian. It varies from place to place and changes slowly over time." },
    { question: "What are the three elements of Earth's magnetic field?", answer: "The three elements are: (i) Declination (θ) — angle between geographic and magnetic meridians, (ii) Dip/Inclination (δ) — angle between total field B and horizontal, (iii) Horizontal component B_H = Bcosδ." },
    { question: "Distinguish between diamagnetic and paramagnetic materials (any two points).", answer: "Diamagnetic: χ is small and negative, weakly repelled by magnets, examples: Bi, Cu, water. Paramagnetic: χ is small and positive, weakly attracted by magnets, examples: Al, Na, O₂." },
    { question: "What is Curie temperature?", answer: "The temperature above which a ferromagnetic material loses its ferromagnetism and becomes paramagnetic. For iron, Curie temperature ≈ 770°C." }
  ],
  questions3: [
    { question: "Explain hysteresis in ferromagnetic materials. What do retentivity and coercivity represent?", answer: "When a ferromagnetic material is magnetised and demagnetised cyclically, B (magnetic flux density) lags behind H (magnetising field). This lagging is called hysteresis.\n\n**Retentivity**: The value of B remaining when H is reduced to zero. It indicates how much magnetisation is \"retained.\"\n\n**Coercivity**: The reverse value of H needed to reduce B to zero. It indicates how \"hard\" it is to demagnetise.\n\nThe area of the hysteresis loop represents energy dissipated as heat per cycle of magnetisation." },
    { question: "Compare diamagnetic, paramagnetic, and ferromagnetic substances.", answer: "| Property | Diamagnetic | Paramagnetic | Ferromagnetic |\n| χ | Small, negative | Small, positive | Very large, positive |\n| μᵣ | Slightly < 1 | Slightly > 1 | >> 1 |\n| In non-uniform B | Moves to weaker field | Moves to stronger field | Strongly moves to stronger field |\n| Examples | Bi, Cu, H₂O | Al, Na, O₂ | Fe, Co, Ni |\n| Temperature | Independent | χ ∝ 1/T | Becomes paramagnetic above Tᶜ |\n| Domains | No | No | Yes |" }
  ],
  questions5: [
    { question: "Describe the three elements of Earth's magnetic field with a neat diagram. Explain how they completely specify the field at a location.", answer: "Earth behaves as a huge magnetic dipole. At any location, the magnetic field B can be completely described by three quantities:\n\n**1. Declination (θ)**: The angle between the geographic meridian and the magnetic meridian at that place. It tells us the horizontal direction of B.\n\n**2. Dip/Inclination (δ)**: The angle between the total magnetic field B and the horizontal plane. At the magnetic equator δ = 0° (B is horizontal); at magnetic poles δ = 90° (B is vertical).\n\n**3. Horizontal Component (B_H)**: The component of B along the horizontal: B_H = B cosδ\n\n**Vertical component**: B_V = B sinδ\n**Total field**: B = √(B_H² + B_V²)\n**tan δ = B_V/B_H**\n\nKnowing θ, δ, and B_H at a point, we can calculate the complete field vector B — its magnitude, horizontal direction, and inclination from horizontal.\n\n**Diagram**: Show geographic meridian (N-S), magnetic meridian at angle θ, field B at angle δ below horizontal, with B_H and B_V components marked." }
  ],
  revision: {
    quickPoints: [
      "**No monopoles**: Poles always in pairs; bar magnet ≡ solenoid",
      "**m = NIA** — magnetic dipole moment",
      "**Axial field**: B = (μ₀/4π)(2m/r³); **Equatorial**: B = (μ₀/4π)(m/r³)",
      "**Earth's field**: Declination, Dip, B_H = Bcosδ",
      "**Diamagnetic**: χ < 0, repelled. **Paramagnetic**: χ > 0 small, attracted. **Ferromagnetic**: χ >> 0",
      "**Hysteresis**: Retentivity = B at H=0; Coercivity = H to make B=0; Area = energy loss",
      "**Permanent magnets**: Steel (high retentivity + coercivity). **Electromagnets**: Soft iron (low coercivity)"
    ],
    formulas: [
      "m = NIA; B_axial = (μ₀/4π)(2m/r³); B_equat = (μ₀/4π)(m/r³)",
      "B_H = Bcosδ; B_V = Bsinδ; tanδ = B_V/B_H",
      "B = μ₀(H + M); M = χ_mH; μ = μ₀(1+χ_m)"
    ],
    tipsAndTricks: [
      "Dia/Para/Ferro table with 6 properties is a guaranteed 3-mark question — memorize it!",
      "Permanent magnet = hard to demagnetise (high coercivity); electromagnet = easy to demagnetise (low coercivity)"
    ]
  }
};
