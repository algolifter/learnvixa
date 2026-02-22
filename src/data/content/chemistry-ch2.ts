// Chemistry Chapter 2: Electrochemistry
// Pre-written content based on NCERT Class 12 Chemistry, expanded beyond textbook level

import type { ChapterContent } from "./physics-ch1";

export const chemistryCh2: ChapterContent = {
  topics: [
    {
      title: "Introduction to Electrochemistry",
      content: `## Introduction to Electrochemistry

**Electrochemistry** is the branch of chemistry that deals with the **interconversion of chemical energy and electrical energy**. It studies how chemical reactions can produce electricity (galvanic cells) and how electricity can drive non-spontaneous reactions (electrolytic cells).

### Why Study Electrochemistry?

- Batteries and fuel cells that power our devices
- Corrosion of metals and its prevention
- Electroplating and electrorefining of metals
- Biological processes — nerve impulses, cellular respiration

### Two Major Divisions

| Type | Energy Conversion | Spontaneity | Example |
|------|-------------------|-------------|---------|
| **Galvanic/Voltaic Cell** | Chemical → Electrical | Spontaneous | Daniell cell, dry cell |
| **Electrolytic Cell** | Electrical → Chemical | Non-spontaneous | Electrolysis of water, electroplating |

### Recap: Oxidation and Reduction

- **Oxidation**: Loss of electrons (increase in oxidation state)
- **Reduction**: Gain of electrons (decrease in oxidation state)
- **Oxidising agent**: Gets reduced (gains electrons)
- **Reducing agent**: Gets oxidised (loses electrons)

> **Key Insight:** In electrochemistry, we separate oxidation and reduction into two **half-cells**, connected externally by a wire and internally by a salt bridge. This separation is what allows us to harness the electron flow as electric current.

> **Board Exam Tip:** Understanding the difference between galvanic and electrolytic cells is fundamental. A comparison table is a very common 2-3 mark question.`,
    },
    {
      title: "Galvanic Cells",
      content: `## Galvanic (Voltaic) Cells

A **galvanic cell** converts the energy of a spontaneous redox reaction into electrical energy.

### The Daniell Cell

The classic example is the **Daniell cell**:
- **Anode (oxidation):** Zn(s) → Zn²⁺(aq) + 2e⁻
- **Cathode (reduction):** Cu²⁺(aq) + 2e⁻ → Cu(s)
- **Overall:** Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)

### Cell Notation (IUPAC Convention)

$$\\text{Zn(s)} | \\text{Zn}^{2+}\\text{(aq)} || \\text{Cu}^{2+}\\text{(aq)} | \\text{Cu(s)}$$

**Rules for cell notation:**
1. **Anode** (oxidation) is written on the **left**
2. **Cathode** (reduction) is written on the **right**
3. Single vertical line (|) = phase boundary
4. Double vertical line (||) = salt bridge
5. Concentrations are written in parentheses

### Components of a Galvanic Cell

| Component | Function |
|-----------|----------|
| **Anode** | Electrode where oxidation occurs (negative terminal) |
| **Cathode** | Electrode where reduction occurs (positive terminal) |
| **Salt bridge** | Completes the circuit, maintains electrical neutrality |
| **External wire** | Path for electron flow from anode to cathode |

### Salt Bridge

The salt bridge (typically KCl or KNO₃ in agar-agar) serves two purposes:
1. **Completes the electrical circuit** by allowing ion flow
2. **Maintains electrical neutrality** in both half-cells

Without a salt bridge:
- Anode solution becomes increasingly positive (Zn²⁺ accumulates)
- Cathode solution becomes increasingly negative (Cu²⁺ depletes)
- Cell would stop working immediately

> **Common Mistake:** Students often think electrons flow through the salt bridge. They DO NOT. Only ions flow through the salt bridge. Electrons flow through the external wire only.

> **Memory Aid:** **An Ox** (Anode = Oxidation), **Red Cat** (Reduction = Cathode). Electrons flow from **anode to cathode** through external circuit.`,
    },
    {
      title: "Electrode Potential & EMF",
      content: `## Electrode Potential

When a metal is dipped in a solution of its ions, there is a tendency to either:
- **Lose electrons** to the solution (oxidation) — metal dissolves
- **Gain electrons** from the solution (reduction) — metal deposits

This creates a **potential difference** between the metal and the solution, called the **electrode potential**.

### Standard Electrode Potential (E°)

The electrode potential measured under **standard conditions**:
- Temperature: 298 K (25°C)
- Concentration: 1 M for all ions
- Pressure: 1 bar for gases
- Pure metal in its standard state

**Reference Electrode:** The **Standard Hydrogen Electrode (SHE)** is assigned E° = 0.00 V by convention.

### Standard Electrode Potential Series (Selected)

| Electrode | E° (V) | Nature |
|-----------|--------|--------|
| Li⁺/Li | -3.04 | Strongest reducing agent |
| K⁺/K | -2.93 | |
| Na⁺/Na | -2.71 | |
| Mg²⁺/Mg | -2.37 | |
| Al³⁺/Al | -1.66 | |
| Zn²⁺/Zn | -0.76 | |
| Fe²⁺/Fe | -0.44 | |
| H⁺/H₂ | 0.00 | Reference |
| Cu²⁺/Cu | +0.34 | |
| Ag⁺/Ag | +0.80 | |
| Au³⁺/Au | +1.50 | Strongest oxidising agent |

### Electromotive Force (EMF) of a Cell

$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$$

**For Daniell cell:**
$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} - E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = 0.34 - (-0.76) = 1.10 \\text{ V}$$

### Important Rules

1. **E°cell must be positive** for a spontaneous reaction (galvanic cell)
2. A metal with **more negative E°** is a **stronger reducing agent**
3. A species with **more positive E°** is a **stronger oxidising agent**
4. Metals above hydrogen in the series can displace hydrogen from acids
5. A metal higher in the series can displace one lower from its salt solution

> **Exam Strategy:** The electrochemical series is the backbone of this chapter. You must know at least 10-12 standard reduction potentials and how to use them to predict spontaneity, calculate E°cell, and determine which metal displaces which.`,
    },
    {
      title: "Nernst Equation",
      content: `## Nernst Equation

The Nernst equation relates the cell potential to the **concentrations** (or activities) of the reactants and products.

### For a General Electrode

$$E = E^\\circ - \\frac{RT}{nF} \\ln Q$$

At **T = 298 K**, converting to log₁₀:

$$E = E^\\circ - \\frac{0.0592}{n} \\log Q$$

Where:
- E = cell potential at non-standard conditions
- E° = standard cell potential
- R = 8.314 J K⁻¹ mol⁻¹
- T = temperature in K
- n = number of electrons transferred
- F = Faraday's constant = 96485 C mol⁻¹
- Q = reaction quotient

### For a Complete Cell

For the reaction: aA + bB → cC + dD

$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

### At Equilibrium

At equilibrium, E_cell = 0 and Q = K_c:

$$0 = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log K_c$$

$$\\log K_c = \\frac{n \\cdot E^\\circ_{\\text{cell}}}{0.0592}$$

### Relationship with Gibbs Free Energy

$$\\Delta G = -nFE_{\\text{cell}}$$
$$\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$$

Since ΔG° = -RT ln K:
$$\\ln K = \\frac{nFE^\\circ_{\\text{cell}}}{RT}$$

### Concentration Cell

A cell where both electrodes are the **same metal** but dipped in solutions of **different concentrations**:

$$E_{\\text{cell}} = \\frac{0.0592}{n} \\log \\frac{C_2}{C_1}$$

(where C₂ > C₁, so E > 0)

> **Board Exam Tip:** The Nernst equation is the most important equation in this chapter. Expect at least one 3-mark numerical. Practice problems involving: calculating E_cell at non-standard concentrations, finding equilibrium constant from E°, and relating ΔG° to E°.

> **Common Mistake:** Forgetting that 'n' in the Nernst equation is the number of electrons transferred in the BALANCED equation, not the charge on any single ion.`,
    },
    {
      title: "Conductance of Electrolytic Solutions",
      content: `## Conductance of Electrolytic Solutions

### Basic Terms

**Resistance (R):** Opposition to flow of current.
$$R = \\rho \\cdot \\frac{l}{A} \\quad (\\text{unit: ohm, }\\Omega)$$

**Resistivity (ρ):** Resistance of a conductor of unit length and unit cross-section area.

**Conductance (G):** Reciprocal of resistance.
$$G = \\frac{1}{R} \\quad (\\text{unit: siemens, S or }\\Omega^{-1})$$

**Conductivity (κ, kappa):** Reciprocal of resistivity.
$$\\kappa = \\frac{1}{\\rho} = \\frac{l}{R \\cdot A} = G \\cdot G^* \\quad (\\text{unit: S m}^{-1} \\text{ or S cm}^{-1})$$

Where G* = l/A is the **cell constant**.

### Molar Conductivity (Λ_m)

$$\\Lambda_m = \\frac{\\kappa}{C} \\quad (\\text{unit: S cm}^2 \\text{ mol}^{-1})$$

Where C = concentration in mol/cm³. If C is in mol/L:

$$\\Lambda_m = \\frac{\\kappa \\times 1000}{C_{\\text{(mol/L)}}}$$

### Variation of Conductivity with Concentration

- **Conductivity (κ) decreases** with dilution — fewer ions per unit volume
- **Molar conductivity (Λ_m) increases** with dilution — greater ionic mobility, less inter-ionic attraction

### Limiting Molar Conductivity (Λ°_m)

At **infinite dilution**, molar conductivity reaches a maximum called Λ°_m.

**For strong electrolytes:**
Λ_m increases slowly and linearly with dilution:
$$\\Lambda_m = \\Lambda^\\circ_m - A\\sqrt{C}$$ (Debye-Hückel-Onsager equation)

**For weak electrolytes:**
Λ_m increases steeply on dilution (as more molecules ionize) but Λ°_m cannot be obtained by extrapolation.

### Kohlrausch's Law of Independent Migration of Ions

$$\\Lambda^\\circ_m = v_+ \\lambda^\\circ_+ + v_- \\lambda^\\circ_-$$

Where:
- v₊, v₋ = number of cations and anions per formula unit
- λ°₊, λ°₋ = limiting molar conductivity of individual ions

**Applications:**
1. Finding Λ°_m for weak electrolytes:
   $$\\Lambda^\\circ_{\\text{CH₃COOH}} = \\Lambda^\\circ_{\\text{CH₃COONa}} + \\Lambda^\\circ_{\\text{HCl}} - \\Lambda^\\circ_{\\text{NaCl}}$$

2. Calculating **degree of dissociation (α):**
   $$\\alpha = \\frac{\\Lambda_m}{\\Lambda^\\circ_m}$$

> **Exam Strategy:** Kohlrausch's law application to find Λ°_m of weak electrolytes is a very frequent 3-mark question. Practice the subtraction method for CH₃COOH, NH₄OH, and H₂O.`,
    },
    {
      title: "Electrolysis & Faraday's Laws",
      content: `## Electrolytic Cells

An **electrolytic cell** uses electrical energy to drive a **non-spontaneous** chemical reaction.

### Key Differences from Galvanic Cell

| Feature | Galvanic Cell | Electrolytic Cell |
|---------|--------------|-------------------|
| Energy conversion | Chemical → Electrical | Electrical → Chemical |
| Reaction | Spontaneous | Non-spontaneous |
| E_cell | Positive | Negative (needs external source) |
| Anode | Negative (−) | Positive (+) |
| Cathode | Positive (+) | Negative (−) |

**Note:** In BOTH cells, oxidation occurs at anode and reduction at cathode. Only the sign convention changes.

### Products of Electrolysis

The products depend on:
1. The nature of the electrolyte
2. The type of electrode (inert vs reactive)
3. Concentration of the electrolyte

**For molten NaCl:**
- Cathode: Na⁺ + e⁻ → Na
- Anode: 2Cl⁻ → Cl₂ + 2e⁻

**For aqueous NaCl (concentrated):**
- Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (water reduced preferentially)
- Anode: 2Cl⁻ → Cl₂ + 2e⁻ (Cl⁻ oxidised due to overpotential)

**For dilute H₂SO₄ with Pt electrodes:**
- Cathode: 2H⁺ + 2e⁻ → H₂
- Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻

## Faraday's Laws of Electrolysis

### First Law

> The mass of substance deposited at an electrode is **directly proportional** to the quantity of electricity passed.

$$m = Z \\cdot Q = Z \\cdot I \\cdot t$$

Where:
- m = mass deposited (g)
- Z = electrochemical equivalent (g/C)
- Q = charge (coulombs)
- I = current (amperes)
- t = time (seconds)

Also: $$m = \\frac{M \\cdot I \\cdot t}{n \\cdot F}$$

Where M = molar mass, n = electrons transferred, F = 96485 C/mol

### Second Law

> When the same quantity of electricity passes through different electrolytes, the masses deposited are proportional to their **equivalent weights**.

$$\\frac{m_1}{m_2} = \\frac{E_1}{E_2}$$

### Key Value: 1 Faraday

**1 Faraday (F) = 96485 C/mol ≈ 96500 C/mol**

1 F deposits 1 gram equivalent of any substance.

> **Board Exam Tip:** Faraday's law numericals are very common (3-5 marks). Always convert time to seconds and remember: 1 F deposits 1 equivalent. For Cu²⁺, 2F deposits 1 mole; for Ag⁺, 1F deposits 1 mole.`,
    },
    {
      title: "Batteries and Fuel Cells",
      content: `## Batteries

A **battery** is a combination of galvanic cells connected in series to provide higher voltage.

### Primary Batteries

Cannot be recharged — irreversible reactions.

**1. Dry Cell (Leclanché Cell)**
- Anode: Zn container
- Cathode: Carbon rod surrounded by MnO₂ + carbon powder
- Electrolyte: Paste of NH₄Cl + ZnCl₂
- EMF: ~1.5 V
- Reactions:
  - Anode: Zn → Zn²⁺ + 2e⁻
  - Cathode: MnO₂ + NH₄⁺ + e⁻ → MnO(OH) + NH₃

**2. Mercury Cell**
- Anode: Zn-Hg amalgam
- Cathode: Paste of HgO + carbon
- Electrolyte: KOH + ZnO paste
- EMF: ~1.35 V (very constant — used in watches, hearing aids)
- Overall: Zn + HgO → ZnO + Hg

### Secondary Batteries

Can be recharged — reversible reactions.

**1. Lead-Acid Battery (Car Battery)**
- Anode: Spongy lead (Pb)
- Cathode: Lead dioxide (PbO₂)
- Electrolyte: 38% H₂SO₄
- EMF: ~2.0 V per cell (6 cells = 12 V)
- Overall: Pb + PbO₂ + 2H₂SO₄ ⇌ 2PbSO₄ + 2H₂O

**2. Nickel-Cadmium (Ni-Cd) Battery**
- Longer life than lead-acid
- Used in calculators, portable devices
- Contains toxic cadmium — environmental concern

## Fuel Cells

A fuel cell produces electricity by **continuously supplying fuel** (H₂, CH₃OH) and an oxidant (O₂).

**Hydrogen-Oxygen Fuel Cell:**
- Anode: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻
- Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻
- Overall: 2H₂ + O₂ → 2H₂O
- EMF: ~1.23 V

**Advantages:**
- High efficiency (~70% vs ~40% for thermal power)
- Pollution-free — only product is water
- Continuous operation as long as fuel is supplied
- Used in space programs (Apollo missions)

> **Exam Strategy:** Comparison between primary and secondary batteries is common (2-3 marks). Know at least one example of each with reactions.`,
    },
    {
      title: "Corrosion",
      content: `## Corrosion

**Corrosion** is the process of slow destruction of metals by the action of air, moisture, and chemicals in the environment. The most common example is **rusting of iron**.

### Mechanism of Rusting (Electrochemical Theory)

Rusting is an **electrochemical process** that requires both **moisture and oxygen**.

Different parts of the iron surface act as tiny galvanic cells:

**At the anodic spot (where rusting occurs):**
$$\\text{Fe(s)} \\rightarrow \\text{Fe}^{2+}\\text{(aq)} + 2e^-$$

**At the cathodic spot:**
$$\\text{O}_2\\text{(g)} + 4\\text{H}^+\\text{(aq)} + 4e^- \\rightarrow 2\\text{H}_2\\text{O(l)}$$

The Fe²⁺ ions are further oxidized:
$$2\\text{Fe}^{2+} + 2\\text{H}_2\\text{O} + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O (rust)}$$

### Conditions Necessary for Rusting

1. **Moisture** — essential (no rusting in dry air)
2. **Oxygen** — essential (no rusting in absence of O₂)
3. **Electrolyte** — speeds up rusting (salt water corrodes faster)
4. **Acidic pH** — increases rusting rate
5. **Impurities** in iron — create local electrochemical cells

### Methods of Corrosion Prevention

| Method | Principle |
|--------|-----------|
| **Painting/oiling/greasing** | Barrier — prevents contact with air and moisture |
| **Electroplating** | Coating with another metal (Cr, Ni, Sn) |
| **Galvanization** | Coating iron with zinc (even if scratched, Zn preferentially corrodes) |
| **Cathodic protection** | Connecting to a more reactive metal (sacrificial anode) |
| **Alloying** | Stainless steel (Cr, Ni, Mn) — forms Cr₂O₃ protective layer |
| **Anti-rust solutions** | Phosphoric acid solutions form protective phosphate layer |

### Galvanization vs Tinning

| Feature | Galvanization (Zn coating) | Tinning (Sn coating) |
|---------|---------------------------|---------------------|
| Protection when scratched | Yes — Zn acts as anode | No — Fe corrodes faster |
| E° of coating vs Fe | More negative (Zn = -0.76 V) | More positive (Sn = -0.14 V) |
| Safety for food | Not food-safe | Food-safe (tin cans) |

> **Board Exam Tip:** "Why is galvanization more effective than tinning?" is a classic 2-mark question. Answer: Zinc has lower E° than iron, so even if the coating is scratched, zinc preferentially oxidizes (acts as sacrificial anode), protecting the iron underneath.

> **Common Mistake:** Students think any metal coating prevents rusting equally. The electrochemical series position matters — only metals MORE reactive than iron provide cathodic protection.`,
    },
  ],
  notes: `# Electrochemistry — Comprehensive Notes

## Key Definitions
- **Galvanic cell**: Converts chemical energy → electrical energy (spontaneous)
- **Electrolytic cell**: Converts electrical energy → chemical energy (non-spontaneous)
- **EMF**: Maximum potential difference between two electrodes
- **Electrode potential**: Potential developed at electrode-solution interface

## Cell Notation
Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
- Anode (oxidation) on LEFT
- Cathode (reduction) on RIGHT
- || represents salt bridge

## Key Equations
1. **E°cell** = E°cathode − E°anode
2. **Nernst**: E = E° − (0.0592/n) log Q
3. **ΔG** = −nFE_cell
4. **Λm** = κ × 1000 / C
5. **Kohlrausch**: Λ°m = ν₊λ°₊ + ν₋λ°₋
6. **Faraday**: m = MIt / nF

## Important E° Values
Li⁺/Li = -3.04 V, Na⁺/Na = -2.71, Zn²⁺/Zn = -0.76, Fe²⁺/Fe = -0.44, H⁺/H₂ = 0.00, Cu²⁺/Cu = +0.34, Ag⁺/Ag = +0.80, Au³⁺/Au = +1.50

## Conductance Summary
- κ decreases with dilution (fewer ions per volume)
- Λm increases with dilution (more ionic mobility)
- Strong electrolytes: Λm = Λ°m − A√C
- Weak electrolytes: α = Λm / Λ°m

## Batteries
- **Primary** (non-rechargeable): Dry cell (1.5V), Mercury cell (1.35V)
- **Secondary** (rechargeable): Lead-acid (2V/cell), Ni-Cd
- **Fuel cell**: H₂-O₂ → H₂O, 70% efficient, pollution-free

## Corrosion Prevention
Galvanization > Tinning (Zn is sacrificial anode, Sn is not)
Methods: Painting, electroplating, galvanization, cathodic protection, alloying

## Common Mistakes
1. Confusing anode sign in galvanic (−) vs electrolytic (+) cells
2. Electrons don't flow through salt bridge — only ions do
3. In Nernst equation, n = electrons in BALANCED equation
4. 1 Faraday deposits 1 gram EQUIVALENT, not 1 mole

## Board Exam Weightage: ~7-9 marks`,
};
