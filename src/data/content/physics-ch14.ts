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
## 6. Gates: AND, OR, NOT, NAND, NOR; NAND/NOR are universal`,
  questions2: [
    { question: "Distinguish between n-type and p-type semiconductors.", answer: "**n-type**: Doped with **pentavalent** impurity (P, As, Sb); majority carriers are **electrons**; nₑ >> nₕ. **p-type**: Doped with **trivalent** impurity (B, Al, Ga); majority carriers are **holes**; nₕ >> nₑ. Both are electrically neutral." },
    { question: "What is the depletion region in a p-n junction?", answer: "The **depletion region** is a thin layer at the p-n junction devoid of free charge carriers. It forms when electrons from n-side diffuse to p-side and holes diffuse to n-side, leaving behind immobile ions. It creates a **barrier potential** (~0.7 V for Si, ~0.3 V for Ge)." },
    { question: "What is the knee voltage of a diode?", answer: "**Knee voltage** is the forward bias voltage at which current through the diode begins to increase rapidly. For **silicon** diodes: ~0.7 V. For **germanium** diodes: ~0.3 V. Below knee voltage, current is negligibly small." },
    { question: "Define current gain (β) of a transistor in CE configuration.", answer: "**Current gain β = Iᶜ/I_B** (ratio of collector current to base current) in common emitter configuration. Typical values: 20–200. Since Iₑ = I_B + Iᶜ and Iᶜ >> I_B, a small change in base current produces a large change in collector current." },
    { question: "What are universal gates? Name them.", answer: "**Universal gates** are logic gates from which any other logic gate can be constructed. **NAND** and **NOR** are universal gates. For example, NOT, AND, and OR can all be built using only NAND gates (or only NOR gates)." },
    { question: "State De Morgan's theorems.", answer: "**First theorem**: (A·B)' = A' + B' (complement of AND = OR of complements). **Second theorem**: (A+B)' = A'·B' (complement of OR = AND of complements). These are fundamental in digital circuit simplification." },
    { question: "What is a Zener diode? State its use.", answer: "A **Zener diode** is a specially designed p-n junction diode that operates in **reverse breakdown** region at a well-defined voltage (Zener voltage). It is used as a **voltage regulator** — maintains constant output voltage despite changes in input voltage or load current." }
  ],
  questions3: [
    { question: "Explain forward and reverse biasing of a p-n junction diode with diagrams.", answer: "**Forward Bias**:\n- p-side connected to **+ve** terminal, n-side to **−ve** terminal\n- External voltage opposes barrier potential → **depletion region narrows**\n- Majority carriers pushed toward junction → current flows easily\n- Current increases sharply above knee voltage (0.7 V Si)\n\n**Reverse Bias**:\n- p-side connected to **−ve** terminal, n-side to **+ve** terminal\n- External voltage supports barrier potential → **depletion region widens**\n- Only minority carriers cross → very small **reverse saturation current**\n- At high reverse voltage → **breakdown** (large current flows)\n\n**Key**: Forward bias reduces barrier; reverse bias increases barrier." },
    { question: "Explain the working of a full-wave rectifier.", answer: "**Full-wave rectifier** converts both halves of AC input to DC output.\n\n**Components**: Two diodes (D₁, D₂) + centre-tapped transformer + load R.\n\n**Working**:\n- **Positive half cycle**: D₁ forward biased, D₂ reverse biased → current flows through D₁ and load\n- **Negative half cycle**: D₂ forward biased, D₁ reverse biased → current flows through D₂ and load\n- **Result**: Current through load is **unidirectional** in both halves\n\n**Output frequency = 2 × input frequency** (both halves rectified)\n\n**Advantages over half-wave**: Higher average output, smoother DC (easier to filter)." },
    { question: "Explain how a transistor works as a switch.", answer: "In **common emitter** configuration, a transistor acts as a switch:\n\n**Cutoff State (OFF)**:\n- V_in < 0.7 V (for Si) → base-emitter junction not forward biased\n- I_B ≈ 0, I_C ≈ 0\n- V_out = V_CC (high) → transistor is **OFF** (like open switch)\n\n**Saturation State (ON)**:\n- V_in sufficient to forward bias both junctions\n- I_B is large → I_C = βI_B is maximum (saturated)\n- V_CE ≈ 0 → V_out ≈ 0 (low) → transistor is **ON** (like closed switch)\n\n**Application**: When input is LOW (0), output is HIGH (1) and vice versa → acts as a **NOT gate** (inverter). This is the basis of all digital circuits." },
    { question: "Compare intrinsic and extrinsic semiconductors.", answer: "| Property | Intrinsic | Extrinsic |\n|----------|-----------|----------|\n| Purity | Pure semiconductor | Doped with impurities |\n| Carriers | nₑ = nₕ = nᵢ | nₑ >> nₕ (n-type) or nₕ >> nₑ (p-type) |\n| Conductivity | Low, increases with temp | Much higher; controlled by doping |\n| Examples | Pure Si, Ge | Si doped with P (n-type) or B (p-type) |\n| Fermi level | Middle of band gap | Closer to CB (n-type) or VB (p-type) |\n\n**Key relation**: nₑ × nₕ = nᵢ² (valid for both types)" }
  ],
  questions5: [
    { question: "Explain the formation of a p-n junction. Describe its behaviour under forward and reverse bias. Draw the V-I characteristics.", answer: "**Formation of p-n Junction**:\nWhen p-type and n-type semiconductors are joined:\n1. **Diffusion**: Majority carriers diffuse across junction (electrons: n→p, holes: p→n)\n2. **Depletion region**: Immobile ions left behind create a charge-free zone\n3. **Barrier potential**: Electric field opposes further diffusion → equilibrium (~0.7 V Si, ~0.3 V Ge)\n\n**Forward Bias** (p to +ve, n to −ve):\n- External voltage opposes barrier → depletion region **narrows**\n- Above knee voltage, current increases **exponentially**\n- I = I₀(e^(eV/kT) − 1) ≈ I₀e^(eV/kT) for V >> kT/e\n\n**Reverse Bias** (p to −ve, n to +ve):\n- External voltage aids barrier → depletion region **widens**\n- Only reverse saturation current I₀ flows (very small, ~μA)\n- At **breakdown voltage**: current increases sharply (Zener or avalanche mechanism)\n\n**V-I Characteristics**:\n- Forward: Negligible current until knee voltage; then steep rise\n- Reverse: Small constant I₀; sharp increase at breakdown voltage\n- The curve is **asymmetric** — diode conducts mainly in forward direction\n\n**Applications**: Rectifier, voltage regulator (Zener), LED, photodiode, solar cell" },
    { question: "Explain the working of a transistor as an amplifier in common emitter configuration. Derive the expression for voltage gain.", answer: "**Common Emitter (CE) Amplifier**:\n- **Input**: Base-emitter junction (forward biased)\n- **Output**: Collector-emitter junction (reverse biased)\n- Small AC signal applied to base; amplified signal obtained at collector\n\n**Circuit**: V_BB provides base bias; V_CC provides collector bias; R_C is collector resistance; input signal v_i applied via coupling capacitor.\n\n**Working**:\n1. Small change in base current ΔI_B produces large change in collector current ΔI_C = βΔI_B\n2. This large ΔI_C flowing through R_C produces large voltage change at output\n\n**Voltage Gain Derivation**:\n- Output voltage: V_out = V_CC − I_C × R_C\n- Change in output: ΔV_out = −ΔI_C × R_C = −βΔI_B × R_C\n- Input voltage: ΔV_in ≈ ΔI_B × r_BE (input resistance)\n\n**A_v = ΔV_out/ΔV_in = −β × R_C/r_BE**\n\n- **Negative sign**: 180° phase shift between input and output\n- |A_v| can be much greater than 1 → **amplification**\n- β = 50–200, R_C/r_BE can be ~10–100 → gains of 500–20000\n\n**Key Points**: CE configuration gives both current gain (β) and voltage gain. Power gain = β × A_v." },
    { question: "What are logic gates? Draw truth tables for AND, OR, NOT, NAND, and NOR gates. Show how NAND gate is a universal gate.", answer: "**Logic Gates**: Digital circuits that perform Boolean operations on binary inputs.\n\n**AND Gate**: Y = A·B\n| A | B | Y |\n|---|---|---|\n| 0 | 0 | 0 |\n| 0 | 1 | 0 |\n| 1 | 0 | 0 |\n| 1 | 1 | 1 |\n\n**OR Gate**: Y = A+B\n| A | B | Y |\n|---|---|---|\n| 0 | 0 | 0 |\n| 0 | 1 | 1 |\n| 1 | 0 | 1 |\n| 1 | 1 | 1 |\n\n**NOT Gate**: Y = A'\n| A | Y |\n|---|---|\n| 0 | 1 |\n| 1 | 0 |\n\n**NAND Gate**: Y = (A·B)'\n| A | B | Y |\n|---|---|---|\n| 0 | 0 | 1 |\n| 0 | 1 | 1 |\n| 1 | 0 | 1 |\n| 1 | 1 | 0 |\n\n**NOR Gate**: Y = (A+B)'\n| A | B | Y |\n|---|---|---|\n| 0 | 0 | 1 |\n| 0 | 1 | 0 |\n| 1 | 0 | 0 |\n| 1 | 1 | 0 |\n\n**NAND as Universal Gate**:\n1. **NOT**: Connect both inputs together: Y = (A·A)' = A'\n2. **AND**: NAND followed by NOT: Y = ((A·B)')' = A·B\n3. **OR**: NOT each input, then NAND: Y = (A'·B')' = A+B (De Morgan's)\n\nSince AND, OR, NOT can all be made from NAND alone, it is a **universal gate**. Similarly, NOR is also universal." }
  ]
};
