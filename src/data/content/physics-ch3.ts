import type { ChapterContent } from "./physics-ch1";

export const physicsCh3: ChapterContent = {
  topics: [
    {
      title: "Electric Current and Drift Velocity",
      content: `## Electric Current

### Definition
**Electric current** is the rate of flow of electric charge through a conductor.

$$I = \\frac{Q}{t} = \\frac{dQ}{dt}$$

- SI unit: **ampere (A)** = C/s
- Conventional current: direction of positive charge flow (opposite to electron flow)

### Drift Velocity
In a conductor without electric field, free electrons move randomly with thermal velocities (~10⁵ m/s). When a field E is applied:

$$v_d = \\frac{eE\\tau}{m} = \\frac{eE}{m}\\tau$$

Where:
- vd = drift velocity (~10⁻⁴ m/s — very slow!)
- τ = relaxation time (average time between collisions)
- e = electron charge, m = electron mass

### Current in Terms of Drift Velocity
$$I = nAv_de$$

Where n = number density of free electrons, A = cross-sectional area.

### Current Density
$$J = \\frac{I}{A} = nev_d$$

Vector quantity, direction = direction of current flow.

> **Common Mistake**: Despite slow drift velocity, the electric signal travels at near the speed of light because the electric field propagates instantaneously through the wire.`
    },
    {
      title: "Ohm's Law and Resistance",
      content: `## Ohm's Law

### Statement
At constant temperature, the current through a conductor is **directly proportional** to the potential difference across it.

$$V = IR$$

### Resistance (R)
$$R = \\frac{\\rho l}{A}$$

Where ρ = resistivity, l = length, A = cross-sectional area.

- SI unit: **ohm (Ω)** = V/A
- Conductance G = 1/R; unit: siemens (S)

### Resistivity (ρ)
- Property of the **material**, not the geometry
- SI unit: Ω·m
- **Conductors**: 10⁻⁸ to 10⁻⁶ Ω·m
- **Semiconductors**: 10⁻⁵ to 10⁶ Ω·m
- **Insulators**: 10¹¹ to 10¹⁹ Ω·m

### Temperature Dependence
**Conductors**: ρ increases with temperature
$$\\rho_T = \\rho_0(1 + \\alpha T)$$

**Semiconductors**: ρ decreases with temperature (more charge carriers freed)

### Colour Code for Resistors
BB ROY of Great Britain has a Very Good Wife
- 0-Black, 1-Brown, 2-Red, 3-Orange, 4-Yellow, 5-Green, 6-Blue, 7-Violet, 8-Grey, 9-White

> **Exam Tip**: Resistivity is a material property; resistance depends on geometry. A long thin wire has more resistance than a short thick one of the same material.`
    },
    {
      title: "Combinations of Resistors",
      content: `## Series and Parallel Combinations

### Resistors in Series
- Same current I through each
- Voltages add: V = V₁ + V₂ + V₃

$$R_{eq} = R_1 + R_2 + R_3$$

### Resistors in Parallel
- Same voltage V across each
- Currents add: I = I₁ + I₂ + I₃

$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$$

### Key Points
- Series: total R increases (larger than largest)
- Parallel: total R decreases (smaller than smallest)
- For 2 resistors in parallel: R = R₁R₂/(R₁+R₂)

### Internal Resistance of a Cell
$$V = \\varepsilon - Ir$$

Where ε = EMF of cell, r = internal resistance.
- Open circuit: V = ε (no current, terminal voltage = EMF)
- Short circuit: I = ε/r (maximum current, V = 0)

### Cells in Series
$$\\varepsilon_{eq} = \\varepsilon_1 + \\varepsilon_2, \\quad r_{eq} = r_1 + r_2$$

### Cells in Parallel
$$\\frac{1}{r_{eq}} = \\frac{1}{r_1} + \\frac{1}{r_2}, \\quad \\varepsilon_{eq} = \\frac{\\varepsilon_1/r_1 + \\varepsilon_2/r_2}{1/r_1 + 1/r_2}$$

> **Board Tip**: Internal resistance questions are very common. Always use V = ε – Ir for a discharging cell. Remember: terminal voltage < EMF when current flows.`
    },
    {
      title: "Kirchhoff's Laws",
      content: `## Kirchhoff's Laws

### First Law (Junction Rule / KCL)
At any junction in a circuit, the sum of currents entering equals the sum of currents leaving.

$$\\sum I_{in} = \\sum I_{out}$$

Based on **conservation of charge**.

### Second Law (Loop Rule / KVL)
In any closed loop, the algebraic sum of potential differences is zero.

$$\\sum V = 0$$

Based on **conservation of energy**.

### Sign Conventions for KVL
- Traversing a resistor in current direction: voltage **drops** (–IR)
- Traversing a resistor against current: voltage **rises** (+IR)
- Traversing EMF from – to +: **rise** (+ε)
- Traversing EMF from + to –: **drop** (–ε)

### Wheatstone Bridge
A balanced bridge circuit:
$$\\frac{P}{Q} = \\frac{R}{S}$$

When balanced, no current flows through the galvanometer. Used for precise resistance measurement.

### Metre Bridge
Practical form of Wheatstone bridge using a 1-metre wire:
$$\\frac{R}{S} = \\frac{l}{100 - l}$$

Where l = balancing length from one end.

> **Exam Tip**: Wheatstone bridge and metre bridge numericals are board favourites. For metre bridge, always check: is the bridge balanced? If yes, Ig = 0 and use the ratio formula.`
    },
    {
      title: "Potentiometer",
      content: `## Potentiometer

### Principle
A potentiometer measures potential difference **without drawing any current** from the source (null method). It uses a uniform wire where potential drops uniformly.

$$V \\propto l$$ (for uniform wire with constant current)

### Comparing EMFs of Two Cells
$$\\frac{\\varepsilon_1}{\\varepsilon_2} = \\frac{l_1}{l_2}$$

Where l₁ and l₂ are the balancing lengths for the two cells.

### Finding Internal Resistance
$$r = R\\left(\\frac{l_1}{l_2} - 1\\right)$$

Where R = external resistance, l₁ = balancing length with key open, l₂ = with key closed.

### Sensitivity
- Longer wire → more sensitive (smaller divisions detectable)
- Greater driving EMF → higher sensitivity
- Thinner wire → more sensitive

### Potentiometer vs Voltmeter

| Feature | Potentiometer | Voltmeter |
|---------|--------------|-----------|
| Current drawn | Zero (at balance) | Small but finite |
| Accuracy | Very high | Less (due to current drawn) |
| Measures | True EMF | Terminal voltage |
| Principle | Null method | Deflection method |

> **Board Tip**: The potentiometer is superior to a voltmeter because it draws NO current at balance point, giving the TRUE EMF. This distinction is worth 2-3 marks in the board exam.`
    }
  ],
  notes: `# Current Electricity — Comprehensive Notes

## 1. Current & Drift Velocity
- I = Q/t = nAv_d e; drift velocity ~10⁻⁴ m/s
- Current density J = I/A = nev_d

## 2. Ohm's Law & Resistance
- V = IR; R = ρl/A
- Resistivity: material property; temperature dependent
- Conductors: ρ↑ with T; Semiconductors: ρ↓ with T

## 3. Combinations
- Series: R = R₁+R₂+...; same I; V adds
- Parallel: 1/R = 1/R₁+1/R₂+...; same V; I adds
- Internal resistance: V = ε – Ir

## 4. Kirchhoff's Laws
- KCL (junction): ΣI_in = ΣI_out (charge conservation)
- KVL (loop): ΣV = 0 (energy conservation)
- Wheatstone bridge: P/Q = R/S; balanced → I_g = 0
- Metre bridge: R/S = l/(100–l)

## 5. Potentiometer
- Null method: draws no current at balance
- Compare EMFs: ε₁/ε₂ = l₁/l₂
- Internal resistance: r = R(l₁/l₂ – 1)
- Superior to voltmeter: measures true EMF`,
  importantPoints: [
    "**Current I = nAv_de** — drift velocity is very small (~10⁻⁴ m/s) but signal travels at speed of light",
    "**Ohm's Law**: V = IR; R = ρl/A. Resistivity is material property, resistance depends on geometry",
    "**Temperature dependence**: Conductors ρ↑ with T; Semiconductors ρ↓ with T",
    "**Series**: R = R₁+R₂; same current. **Parallel**: 1/R = 1/R₁+1/R₂; same voltage",
    "**Internal resistance**: V = ε − Ir; terminal voltage < EMF when current flows",
    "**KCL**: ΣI_in = ΣI_out (charge conservation). **KVL**: ΣV = 0 around any loop (energy conservation)",
    "**Wheatstone bridge**: P/Q = R/S when balanced (no galvanometer current)",
    "**Potentiometer**: Null method, draws no current; ε₁/ε₂ = l₁/l₂; measures TRUE EMF"
  ],
  commonMistakes: [
    "**Confusing EMF with terminal voltage**: EMF is max potential difference (no current); V = ε − Ir when current flows",
    "**Resistor vs Capacitor combinations**: Resistors in series ADD directly; capacitors in series add RECIPROCALLY (opposite!)",
    "**Sign convention in KVL**: Going through battery from − to + is a RISE (+ε); through resistor in current direction is a DROP (−IR)",
    "**Metre bridge end corrections**: Not accounting for resistance of thick copper strips at ends",
    "**Potentiometer**: The driving EMF must be GREATER than the EMF being measured, otherwise no balance point exists"
  ],
  examStrategy: [
    "**5-mark**: Derive drift velocity expression and show V=IR; Wheatstone bridge derivation; Potentiometer for comparing EMFs",
    "**3-mark numericals**: Kirchhoff's laws to solve circuits; metre bridge calculations; internal resistance problems",
    "**2-mark**: Define drift velocity, current density, resistivity; State Kirchhoff's laws; Potentiometer vs voltmeter",
    "**Practice**: At least 10 Kirchhoff's law circuit problems — this is the most numerically intensive chapter"
  ],
  examples: [
    "**Drift velocity**: Cu wire, I=1.5A, A=10⁻⁶m², n=8.5×10²⁸/m³. v_d = I/(nAe) = 1.5/(8.5×10²⁸×10⁻⁶×1.6×10⁻¹⁹) = **1.1×10⁻⁴ m/s**",
    "**Resistance**: Wire l=2m, A=0.5mm²=5×10⁻⁷m², ρ=1.7×10⁻⁸Ωm. R = ρl/A = 1.7×10⁻⁸×2/(5×10⁻⁷) = **0.068 Ω**",
    "**Internal resistance**: Cell ε=2V, r=0.5Ω, R=4.5Ω. I = ε/(R+r) = 2/5 = 0.4A. V = ε−Ir = 2−0.2 = **1.8V**",
    "**Wheatstone bridge**: P=100Ω, Q=200Ω, R=150Ω. For balance: S = QR/P = 200×150/100 = **300Ω**",
    "**Potentiometer**: l₁=75cm for ε₁, l₂=50cm for ε₂. ε₁/ε₂ = 75/50 = **3:2**"
  ],
  summary: "**Current Electricity** deals with charges in motion through conductors.\n\n**Key Concepts**: (1) I = nAv_de; drift velocity ~10⁻⁴ m/s. (2) Ohm's law V=IR; R=ρl/A. (3) Series R adds, parallel 1/R adds. (4) Kirchhoff's laws for complex circuits. (5) Wheatstone bridge: P/Q=R/S. (6) Potentiometer: null method for true EMF.\n\n**Board Weightage**: 8-10 marks. Heavy on numericals — practice Kirchhoff's law and combination circuits extensively.",
  questions2: [
    { question: "Define drift velocity of electrons.", answer: "Drift velocity is the average velocity acquired by free electrons in a conductor in the direction opposite to the applied electric field. v_d = eEτ/m, where τ is relaxation time. It is very small (~10⁻⁴ m/s)." },
    { question: "State Kirchhoff's junction rule.", answer: "At any junction in a circuit, the algebraic sum of currents is zero, i.e., the sum of currents entering the junction equals the sum of currents leaving it. ΣI = 0. It is based on conservation of charge." },
    { question: "Why is a potentiometer preferred over a voltmeter for measuring EMF?", answer: "A potentiometer draws no current from the cell at the balance point (null method), so it measures the true EMF. A voltmeter draws some current, so it measures terminal voltage which is less than EMF." },
    { question: "Define resistivity. How does it depend on temperature for conductors?", answer: "Resistivity (ρ) is the resistance of a conductor of unit length and unit cross-sectional area. SI unit: Ω·m. For conductors, ρ increases with temperature: ρ_T = ρ₀(1 + αT), because increased lattice vibrations scatter electrons more." },
    { question: "What is a Wheatstone bridge? When is it said to be balanced?", answer: "A Wheatstone bridge is an arrangement of four resistances P, Q, R, S in a diamond shape with a galvanometer across one diagonal. It is balanced when P/Q = R/S, at which point no current flows through the galvanometer." },
    { question: "A wire of resistance R is stretched to double its length. What is its new resistance?", answer: "Volume remains constant: Al = A'(2l), so A' = A/2. New R' = ρ(2l)/(A/2) = 4ρl/A = 4R. The resistance becomes 4 times." },
    { question: "Define current density. Write its relation with electric field.", answer: "Current density J is the current per unit area of cross-section perpendicular to the current flow. J = I/A. Its relation with E: J = σE (where σ = 1/ρ is conductivity). SI unit: A/m²." },
    { question: "What is the difference between EMF and terminal voltage of a cell?", answer: "EMF (ε) is the potential difference across the cell when no current is drawn (open circuit). Terminal voltage (V) is the potential difference when current flows: V = ε − Ir, where r is internal resistance. V < ε always when current flows." },
    { question: "State Kirchhoff's loop rule. On what principle is it based?", answer: "In any closed loop of a circuit, the algebraic sum of all potential differences is zero: ΣV = 0. It is based on the law of conservation of energy — the energy gained by charges equals the energy lost in the loop." },
    { question: "Define relaxation time. How is it related to resistivity?", answer: "Relaxation time (τ) is the average time interval between two successive collisions of a free electron with the lattice ions. ρ = m/(ne²τ). As temperature increases, τ decreases, so ρ increases for conductors." },
    { question: "Two resistances of 3Ω and 6Ω are connected in parallel. What is the equivalent resistance?", answer: "1/R = 1/R₁ + 1/R₂ = 1/3 + 1/6 = 3/6 = 1/2. Therefore R = 2 Ω. In parallel, equivalent resistance is always less than the smallest individual resistance." },
    { question: "What happens to the sensitivity of a potentiometer if its wire length is increased?", answer: "Sensitivity increases. A longer wire means the potential gradient (V/L) decreases, so a small change in EMF corresponds to a larger change in balancing length, making the measurement more precise." }
  ],
  questions3: [
    { question: "Derive the expression for drift velocity and show that V = IR.", answer: "In a conductor with field E, force on electron = eE.\nAcceleration a = eE/m.\nBetween collisions, electron gains velocity = aτ = eEτ/m.\nThis average velocity is drift velocity: v_d = eEτ/m\n\nCurrent I = nAv_de = nAe(eEτ/m) = (ne²τ/m)AE\nSince E = V/l: I = (ne²τ/m)(A/l)V\n\nComparing with I = V/R: R = ml/(nAe²τ) = ρl/A\nwhere ρ = m/(ne²τ)\n\nThus V = IR (Ohm's law)." },
    { question: "Two cells of EMFs 1.5V and 2V with internal resistances 0.5Ω and 0.3Ω are connected in parallel. Find the equivalent EMF and internal resistance.", answer: "For parallel cells:\nε_eq = (ε₁/r₁ + ε₂/r₂)/(1/r₁ + 1/r₂)\nε_eq = (1.5/0.5 + 2/0.3)/(1/0.5 + 1/0.3)\nε_eq = (3 + 6.67)/(2 + 3.33)\nε_eq = 9.67/5.33 = **1.81 V**\n\n1/r_eq = 1/r₁ + 1/r₂ = 1/0.5 + 1/0.3 = 2 + 3.33 = 5.33\nr_eq = 1/5.33 = **0.188 Ω**" },
    { question: "In a metre bridge, the balance point is at 39.5 cm from end A with resistance 10Ω in the left gap. Find the unknown resistance.", answer: "Using metre bridge formula:\nR/S = l/(100−l)\n10/S = 39.5/60.5\nS = 10 × 60.5/39.5\nS = 605/39.5 = **15.32 Ω**" },
    { question: "Derive the expression for equivalent resistance when resistors are connected in (i) series and (ii) parallel.", answer: "**Series**: Same current I through all. V = V₁+V₂+V₃\nIR = IR₁+IR₂+IR₃\n**R = R₁+R₂+R₃**\n\n**Parallel**: Same voltage V across all. I = I₁+I₂+I₃\nV/R = V/R₁+V/R₂+V/R₃\n**1/R = 1/R₁+1/R₂+1/R₃**\n\nIn series: R > largest individual. In parallel: R < smallest individual." },
    { question: "A cell of EMF 1.5V and internal resistance 1Ω is connected to two resistors of 1Ω and 2Ω in series. Find current, terminal voltage, and power dissipated in each resistor.", answer: "Total resistance = R + r = (1+2) + 1 = 4Ω\nCurrent I = ε/(R+r) = 1.5/4 = 0.375 A\n\nTerminal voltage V = ε − Ir = 1.5 − 0.375×1 = 1.125 V\n\nPower in 1Ω: P₁ = I²R₁ = (0.375)²×1 = 0.141 W\nPower in 2Ω: P₂ = I²R₂ = (0.375)²×2 = 0.281 W\nPower in internal resistance: Pr = I²r = 0.141 W\nTotal = 0.563 W = εI ✓" },
    { question: "Explain why the metre bridge gives the most accurate result when the balance point is near the middle of the wire.", answer: "When the balance point is near 50 cm:\n1. Percentage error in measuring l and (100−l) is minimised.\n2. Small changes in balance position produce noticeable galvanometer deflection.\n3. At extremes (near 0 or 100 cm), even small errors in l cause large percentage errors in R/S.\n4. End corrections become significant at extremes.\n\nHence, for best accuracy, R and S should be of comparable magnitude so that l ≈ 50 cm." }
  ],
  questions5: [
    { question: "State Kirchhoff's laws. Using them, derive the balanced condition for a Wheatstone bridge.", answer: "**Kirchhoff's First Law (KCL)**: At any junction, ΣI = 0 (sum of currents entering = sum leaving). Based on conservation of charge.\n\n**Kirchhoff's Second Law (KVL)**: In any closed loop, ΣV = 0 (sum of potential differences = 0). Based on conservation of energy.\n\n**Wheatstone Bridge Derivation**:\nFour resistances P, Q, R, S arranged in a diamond. Galvanometer G connects B and D.\n\nApply KCL at B: I₁ = I_g + I₃ ... (i)\nApply KCL at D: I₂ + I_g = I₄ ... (ii)\n\nAt balance: I_g = 0\nSo I₁ = I₃ and I₂ = I₄\n\nApply KVL to loop ABDA:\nI₁P − I₂R = 0 → I₁P = I₂R ... (iii)\n\nApply KVL to loop BCDB:\nI₁Q − I₂S = 0 → I₁Q = I₂S ... (iv)\n\nDivide (iii) by (iv):\nP/Q = R/S\n\nThis is the **balanced condition** of the Wheatstone bridge." },
    { question: "Explain the principle, construction, and working of a potentiometer. How is it used to (i) compare EMFs of two cells, and (ii) find internal resistance of a cell?", answer: "**Principle**: When a constant current flows through a wire of uniform cross-section, the potential drop across any length is proportional to that length. V ∝ l.\n\n**Construction**: A long uniform wire AB (usually 10m) connected to a battery (driver cell) with EMF > EMFs being measured. A jockey slides along the wire to find balance point.\n\n**(i) Comparing EMFs**:\n- Connect cell ε₁, find balance length l₁ → ε₁ = kl₁\n- Connect cell ε₂, find balance length l₂ → ε₂ = kl₂\n- ε₁/ε₂ = l₁/l₂\n\n**(ii) Internal resistance**:\n- Connect cell with key K open: balance at l₁ → ε = kl₁\n- Close K (external resistance R): balance at l₂ → V = kl₂\n- Since ε = V + Ir → r = R(ε/V − 1) = R(l₁/l₂ − 1)\n\n**Advantage**: At balance, no current is drawn from the test cell → measures TRUE EMF." },
    { question: "Derive the expression for current and drift velocity in a metallic conductor. Hence, explain (i) resistivity in terms of microscopic quantities, and (ii) temperature dependence of resistance.", answer: "**Drift Velocity**: In electric field E, force on electron = eE, acceleration a = eE/m.\nBetween collisions (average time τ), electron acquires v_d = aτ = eEτ/m.\n\n**Current**: In wire of area A, number density n:\nI = nAv_de = nAe(eEτ/m) = (ne²τ/m)(AE)\n\nSince E = V/l: I = (ne²Aτ)/(ml) × V = V/R\n\nSo **R = ml/(ne²τA)** and **ρ = m/(ne²τ)** — resistivity in microscopic terms.\n\n**(i) Resistivity**: ρ = m/(ne²τ) depends on: electron mass m, number density n, charge e, and relaxation time τ. For metals, n is nearly constant, so ρ depends mainly on τ.\n\n**(ii) Temperature dependence**: As T increases, lattice vibrations increase → more frequent collisions → τ decreases → ρ increases.\nρ_T = ρ₀(1 + αT), where α is temperature coefficient.\nFor conductors: α > 0 (resistance increases with T).\nFor semiconductors: n increases rapidly with T, overcoming τ decrease → ρ decreases." }
  ],
  revision: {
    quickPoints: [
      "**I = nAv_de**; drift velocity ~10⁻⁴ m/s; signal speed ≈ c",
      "**V = IR**; R = ρl/A; ρ is material property",
      "**Conductors**: ρ↑ with T. **Semiconductors**: ρ↓ with T",
      "**Series**: R adds, I same. **Parallel**: 1/R adds, V same",
      "**V = ε − Ir** (terminal voltage < EMF when current flows)",
      "**KCL**: ΣI = 0 at junction. **KVL**: ΣV = 0 in loop",
      "**Wheatstone**: P/Q = R/S at balance. **Metre bridge**: R/S = l/(100−l)",
      "**Potentiometer**: ε₁/ε₂ = l₁/l₂; r = R(l₁/l₂ − 1)"
    ],
    formulas: [
      "I = Q/t = nAv_de",
      "v_d = eEτ/m",
      "R = ρl/A; ρ_T = ρ₀(1+αT)",
      "V = ε − Ir",
      "Series: R = R₁+R₂; Parallel: 1/R = 1/R₁+1/R₂",
      "P/Q = R/S (Wheatstone balance)",
      "ε₁/ε₂ = l₁/l₂ (potentiometer)",
      "r = R(l₁/l₂ − 1)"
    ],
    tipsAndTricks: [
      "For Kirchhoff problems: assign current directions first, apply KCL at each junction, then KVL for each loop",
      "Stretched wire: if length becomes n times, R becomes n² times (volume constant)",
      "Metre bridge: balance near 50cm mark gives most accurate results"
    ]
  }
};
