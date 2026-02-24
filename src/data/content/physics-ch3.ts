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
- Superior to voltmeter: measures true EMF`
};
