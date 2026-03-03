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
## 5. Permanent magnets: high retentivity+coercivity; electromagnets: low coercivity`
};
