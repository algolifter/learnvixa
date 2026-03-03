import type { ChapterContent } from "./physics-ch1";

export const physicsCh14: ChapterContent = {
  topics: [
    {
      title: "Semiconductors – Intrinsic and Extrinsic",
      content: `## Semiconductor Electronics

### Energy Bands
- **Valence band**: Outermost electrons; filled at 0 K
- **Conduction band**: Empty at 0 K; electrons here conduct
- **Band gap**: Conductors (~0), Semiconductors (~1 eV), Insulators (>3 eV)

### Intrinsic Semiconductors (Pure)
- Si and Ge (group 14); band gap: Si = 1.1 eV, Ge = 0.7 eV
- nₑ = nₕ (equal electrons and holes)
- Conductivity increases with temperature

### Extrinsic Semiconductors (Doped)

#### n-type (Pentavalent dopant: P, As, Sb)
- Extra electrons (majority carriers); holes are minority
- nₑ >> nₕ

#### p-type (Trivalent dopant: B, Al, In, Ga)
- Extra holes (majority carriers); electrons are minority
- nₕ >> nₑ

### Key Relation
$$n_e \\times n_h = n_i^2$$ (always, for both types)

> **Exam Tip**: In n-type, electrons are majority carriers but the material is still electrically neutral. This is a common misconception tested in boards.`
    },
    {
      title: "p-n Junction Diode",
      content: `## p-n Junction

### Formation
When p-type and n-type are joined:
- Diffusion of majority carriers → **depletion region** (no mobile charges)
- Built-in potential (barrier potential): ~0.3 V (Ge), ~0.7 V (Si)

### Forward Bias
- p connected to +ve, n to –ve terminal
- Depletion region narrows; current flows easily
- Knee voltage: ~0.3 V (Ge), ~0.7 V (Si)

### Reverse Bias
- p connected to –ve, n to +ve terminal
- Depletion region widens; very small reverse saturation current
- **Breakdown**: at high reverse voltage, large current flows (Zener or avalanche)

### Diode as Rectifier

#### Half-Wave Rectifier
- One diode; conducts only in positive half cycle
- Output frequency = input frequency

#### Full-Wave Rectifier
- Two diodes + centre-tapped transformer; both halves rectified
- Output frequency = 2 × input frequency

### Special Diodes
- **Zener diode**: Voltage regulator (operates in breakdown)
- **LED**: Emits light (forward biased); used in displays
- **Photodiode**: Reverse biased; current ∝ light intensity
- **Solar cell**: p-n junction; converts light to electricity

> **Board Tip**: Forward and reverse bias characteristics, rectifier circuits, and Zener diode as voltage regulator are standard 5-mark questions.`
    },
    {
      title: "Transistors and Logic Gates",
      content: `## Transistors

### Types: npn and pnp

### Configuration (Common Emitter)
- Input: base-emitter (forward biased)
- Output: collector-emitter (reverse biased)
- Iₑ = I_b + I_c; I_c >> I_b

### Current Gain
$$\\beta = \\frac{I_C}{I_B}$$ (typically 20–200)

### Transistor as Amplifier (CE)
$$A_v = \\frac{\\Delta V_{out}}{\\Delta V_{in}} = -\\beta \\frac{R_C}{R_{BE}}$$

Negative sign indicates 180° phase shift.

### Transistor as Switch
- Cutoff: Both junctions reverse biased → OFF
- Saturation: Both junctions forward biased → ON

## Logic Gates

| Gate | Expression | Output = 1 when |
|------|-----------|-----------------|
| AND | Y = A·B | Both inputs = 1 |
| OR | Y = A+B | Any input = 1 |
| NOT | Y = Ā | Input = 0 |
| NAND | Y = (A·B)' | Not both 1 |
| NOR | Y = (A+B)' | Both inputs = 0 |

### Universal Gates
- **NAND** and **NOR** are universal gates (can make any gate from them)

### De Morgan's Theorems
- (A·B)' = A' + B'
- (A+B)' = A'·B'

> **Exam Tip**: NAND/NOR as universal gates and De Morgan's theorems are frequently asked. Practice constructing AND, OR, NOT using only NAND gates.`
    }
  ],
  notes: `# Semiconductor Electronics — Notes

## 1. Bands: conductors (~0 gap), semiconductors (~1 eV), insulators (>3 eV)
## 2. n-type (pentavalent dopant), p-type (trivalent dopant); nₑnₕ = nᵢ²
## 3. p-n junction: depletion region, barrier 0.7V(Si)/0.3V(Ge)
## 4. Rectifier: half-wave (f), full-wave (2f)
## 5. Transistor: β = Ic/Ib; amplifier and switch
## 6. Gates: AND, OR, NOT, NAND, NOR; NAND/NOR are universal`
};
