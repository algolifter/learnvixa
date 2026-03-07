// Chemistry Chapter 1: Solutions
// Pre-written content based on NCERT Class 12 Chemistry, expanded beyond textbook level

import type { ChapterContent } from "./physics-ch1";

export const chemistryCh1: ChapterContent = {
  topics: [
    {
      title: "Introduction to Solutions",
      content: `## Introduction to Solutions

Most of the substances we encounter in everyday life are **mixtures**. The air we breathe, the water we drink (tap water), beverages, medicines, and body fluids — all are solutions of one kind or another.

### What is a Solution?

A **solution** is a **homogeneous mixture** of two or more substances whose composition can be varied within certain limits. The substance present in **larger quantity** is called the **solvent**, and the substance present in **smaller quantity** is called the **solute**.

> **Key Point:** In a solution of sugar in water, water is the solvent and sugar is the solute. But in a solution of alcohol and water, the component present in larger amount is the solvent.

### Types of Solutions

Solutions can be classified based on the physical states of solute and solvent:

| Solute | Solvent | Example |
|--------|---------|---------|
| Gas | Gas | Air (O₂ in N₂) |
| Gas | Liquid | Aerated drinks (CO₂ in water) |
| Gas | Solid | H₂ in palladium |
| Liquid | Liquid | Alcohol in water |
| Liquid | Solid | Mercury in silver (amalgam) |
| Solid | Liquid | Sugar in water |
| Solid | Solid | Copper in gold (alloy) |

### Important Terminology

- **Binary solution**: A solution with exactly two components
- **Aqueous solution**: Water is the solvent
- **Non-aqueous solution**: Solvent is not water (e.g., benzene, ether, carbon tetrachloride)

> **Board Exam Tip:** A question asking you to classify types of solutions with examples is very common (2-3 marks). Memorize the 7-type table above.`,
    },
    {
      title: "Expressing Concentration of Solutions",
      content: `## Expressing Concentration of Solutions

The concentration of a solution describes the **amount of solute dissolved in a given amount of solvent or solution**. There are many ways to express concentration:

### 1. Mass Percentage (w/w)

$$\\text{Mass \\%} = \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 100$$

**Example:** 10% glucose solution means 10 g of glucose is dissolved in 100 g of solution (90 g water + 10 g glucose).

### 2. Volume Percentage (v/v)

$$\\text{Volume \\%} = \\frac{\\text{Volume of solute}}{\\text{Volume of solution}} \\times 100$$

**Example:** 35% ethanol means 35 mL of ethanol per 100 mL of solution.

### 3. Mass by Volume Percentage (w/v)

$$\\text{Mass by Volume \\%} = \\frac{\\text{Mass of solute (g)}}{\\text{Volume of solution (mL)}} \\times 100$$

Used commonly in **medicine and pharmacology**.

### 4. Parts per Million (ppm)

$$\\text{ppm} = \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 10^6$$

Used for very dilute solutions — pollutant concentrations, trace elements.

### 5. Mole Fraction (χ)

$$\\chi_A = \\frac{n_A}{n_A + n_B}$$

For a binary solution: **χ_A + χ_B = 1**

### 6. Molarity (M)

$$M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution in litres}}$$

**Temperature dependent** — changes with temperature because volume changes.

### 7. Molality (m)

$$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}}$$

**Temperature independent** — does not change with temperature because mass doesn't change.

> **Critical Difference:** Molarity depends on temperature (volume changes), but molality does NOT depend on temperature (mass is constant). This is a frequently asked 1-mark question.

### 8. Normality (N) — Beyond NCERT

$$N = \\frac{\\text{Gram equivalents of solute}}{\\text{Volume of solution in litres}}$$

Relationship: **N = n × M** (where n = n-factor)

> **Exam Strategy:** Always remember the interconversion formulas. Questions on converting between molarity, molality, and mole fraction are guaranteed in boards.`,
    },
    {
      title: "Solubility",
      content: `## Solubility

**Solubility** is defined as the **maximum amount of a substance that can be dissolved in a specified amount of solvent at a particular temperature**.

### Solubility of Solids in Liquids

The process of dissolution involves:
1. **Breaking of solute-solute interactions** (endothermic, ΔH > 0)
2. **Breaking of solvent-solvent interactions** (endothermic, ΔH > 0)
3. **Formation of solute-solvent interactions** (exothermic, ΔH < 0)

> **"Like dissolves like"** — Polar solutes dissolve in polar solvents, and non-polar solutes dissolve in non-polar solvents.

### Saturated Solution & Equilibrium

At a given temperature, when **no more solute can dissolve** in a solvent, the solution is called a **saturated solution**. At this point:

$$\\text{Solute (undissolved)} \\rightleftharpoons \\text{Solute (dissolved)}$$

A dynamic equilibrium exists between dissolved and undissolved solute.

### Effect of Temperature on Solubility

- If dissolution is **endothermic** (ΔH_sol > 0): Solubility **increases** with temperature (Le Chatelier's principle)
- If dissolution is **exothermic** (ΔH_sol < 0): Solubility **decreases** with temperature

**Examples:**
- KNO₃, NaNO₃ — solubility increases sharply with temperature
- NaCl — solubility increases only slightly
- CeSO₄, Ca(OH)₂ — solubility decreases with temperature

### Effect of Pressure on Solubility of Solids

Pressure has **negligible effect** on solubility of solids and liquids because they are nearly incompressible.

### Solubility of Gases in Liquids — Henry's Law

**Henry's Law** states:

> "The solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid."

$$p = K_H \\cdot \\chi_{\\text{gas}}$$

Where K_H = Henry's law constant (units: pressure, e.g., bar)

**Higher K_H → Lower solubility** (gas is less soluble)

| Gas | K_H (kbar) at 298 K |
|-----|---------------------|
| He  | 76.48              |
| H₂  | 71.67              |
| N₂  | 76.48              |
| O₂  | 46.82              |

### Applications of Henry's Law

1. **Scuba diving** — At depth, more N₂ dissolves in blood. Rapid ascent causes "the bends" (decompression sickness)
2. **Carbonated drinks** — CO₂ dissolves under high pressure; fizz released when cap is opened
3. **High altitude** — Low O₂ partial pressure → less O₂ in blood → altitude sickness

> **Board Exam Tip:** Henry's Law is almost always asked — either as a definition (1 mark), application (2 marks), or numerical (3 marks). Know the formula and at least 2 applications.`,
    },
    {
      title: "Vapour Pressure of Liquid Solutions",
      content: `## Vapour Pressure of Liquid Solutions

### What is Vapour Pressure?

When a liquid is in a closed container, molecules escape from the surface (evaporation) and some return (condensation). At **equilibrium**, the pressure exerted by the vapour is called the **vapour pressure** of the liquid.

### Raoult's Law for Volatile Solutes

For a solution of two volatile liquids A and B:

$$p_A = \\chi_A \\cdot p_A^\\circ \\quad \\text{and} \\quad p_B = \\chi_B \\cdot p_B^\\circ$$

Where:
- p_A, p_B = partial vapour pressures of components
- p_A°, p_B° = vapour pressures of pure components
- χ_A, χ_B = mole fractions in the liquid phase

**Total vapour pressure:**

$$p_{\\text{total}} = \\chi_A \\cdot p_A^\\circ + \\chi_B \\cdot p_B^\\circ$$

$$p_{\\text{total}} = p_B^\\circ + (p_A^\\circ - p_B^\\circ) \\cdot \\chi_A$$

This is a **straight line equation** — total pressure varies linearly with mole fraction.

### Raoult's Law for Non-volatile Solutes

When a **non-volatile solute** is dissolved in a volatile solvent:

$$p = \\chi_{\\text{solvent}} \\cdot p^\\circ_{\\text{solvent}}$$

Since χ_solvent < 1, the vapour pressure of the solution is **always less** than that of the pure solvent.

**Relative lowering of vapour pressure:**

$$\\frac{p^\\circ - p}{p^\\circ} = \\chi_{\\text{solute}}$$

### Raoult's Law as a Special Case of Henry's Law

- **Raoult's Law:** p_A = χ_A · p_A° (for the solvent)
- **Henry's Law:** p = K_H · χ (for the gas/solute)

When K_H = p°, Henry's law becomes Raoult's law. So Raoult's law is a **special case** of Henry's law.

> **Important:** This connection between the two laws is a common 2-mark question. Understand that both describe vapour pressure–mole fraction relationships, but for different components.`,
    },
    {
      title: "Ideal and Non-Ideal Solutions",
      content: `## Ideal and Non-Ideal Solutions

### Ideal Solutions

A solution that obeys **Raoult's law at all compositions and temperatures** is called an ideal solution.

**Characteristics:**
- ΔH_mixing = 0 (no heat evolved or absorbed)
- ΔV_mixing = 0 (no volume change on mixing)
- A–B interactions ≈ A–A interactions ≈ B–B interactions

**Examples:** n-hexane + n-heptane, benzene + toluene, bromoethane + chloroethane

### Non-Ideal Solutions

Most real solutions **deviate** from Raoult's law.

### Positive Deviation

When A–B interactions are **weaker** than A–A and B–B interactions:

- Molecules escape more easily → **higher vapour pressure** than predicted
- p_A > χ_A · p_A° and p_B > χ_B · p_B°
- ΔH_mixing > 0 (endothermic)
- ΔV_mixing > 0 (volume increases)

**Examples:** Ethanol + acetone, CS₂ + acetone, water + ethanol

### Negative Deviation

When A–B interactions are **stronger** than A–A and B–B interactions:

- Molecules held more tightly → **lower vapour pressure** than predicted
- p_A < χ_A · p_A° and p_B < χ_B · p_B°
- ΔH_mixing < 0 (exothermic)
- ΔV_mixing < 0 (volume decreases)

**Examples:** Chloroform + acetone (H-bonding), HNO₃ + water, acetic acid + pyridine

### Azeotropes

Non-ideal solutions that show large deviations form **azeotropes** — constant boiling mixtures that cannot be separated by distillation.

| Type | Deviation | Boiling Point | Example |
|------|-----------|---------------|---------|
| Minimum boiling | Positive | Lower than both components | Ethanol-water (95.4% ethanol, 78.1°C) |
| Maximum boiling | Negative | Higher than both components | HNO₃-water (68% HNO₃, 120.5°C) |

> **Exam Strategy:** The distinction between positive and negative deviation is extremely important. Questions on this topic appear in almost every board exam. Remember the signs of ΔH and ΔV, and give at least one example for each.`,
    },
    {
      title: "Colligative Properties — Introduction",
      content: `## Colligative Properties

**Colligative properties** are properties of solutions that depend on the **number of solute particles** and NOT on the **nature (identity) of the solute**.

The word "colligative" comes from the Latin *colligare* meaning "to bind together."

### The Four Colligative Properties

1. **Relative lowering of vapour pressure** (RLVP)
2. **Elevation of boiling point** (ΔT_b)
3. **Depression of freezing point** (ΔT_f)
4. **Osmotic pressure** (π)

### Why Do Colligative Properties Depend on Number of Particles?

When a non-volatile solute is added to a solvent:
- Solute particles **occupy surface area** → fewer solvent molecules can escape → vapour pressure decreases
- The more solute particles present, the greater the effect
- The **nature** of the solute doesn't matter — 1 mole of glucose has the same effect as 1 mole of urea (if both don't dissociate)

### Relative Lowering of Vapour Pressure (RLVP)

$$\\frac{p^\\circ - p}{p^\\circ} = \\chi_{\\text{solute}} = \\frac{n_{\\text{solute}}}{n_{\\text{solute}} + n_{\\text{solvent}}}$$

For dilute solutions (n_solute << n_solvent):

$$\\frac{p^\\circ - p}{p^\\circ} \\approx \\frac{n_{\\text{solute}}}{n_{\\text{solvent}}} = \\frac{w_2 \\cdot M_1}{w_1 \\cdot M_2}$$

This can be used to determine the **molar mass of the solute**.

> **Common Mistake:** Students often confuse "lowering of vapour pressure" (p° - p) with "relative lowering of vapour pressure" ((p° - p)/p°). RLVP is the colligative property, not the absolute lowering.

> **Board Exam Tip:** Questions on RLVP are often combined with mole fraction calculations. Practice converting between mass percentage and mole fraction.`,
    },
    {
      title: "Elevation of Boiling Point & Depression of Freezing Point",
      content: `## Elevation of Boiling Point

The **boiling point** of a liquid is the temperature at which its vapour pressure equals the atmospheric pressure. Since a non-volatile solute **lowers the vapour pressure**, the solution needs to be heated to a **higher temperature** to boil.

$$\\Delta T_b = T_b - T_b^\\circ = K_b \\cdot m$$

Where:
- ΔT_b = elevation in boiling point
- K_b = **ebullioscopic constant** (molal elevation constant) — depends on solvent only
- m = molality of solution

**For determining molar mass:**

$$M_2 = \\frac{K_b \\cdot w_2 \\cdot 1000}{\\Delta T_b \\cdot w_1}$$

| Solvent | K_b (K kg mol⁻¹) | Boiling Point (°C) |
|---------|-------------------|--------------------|
| Water | 0.52 | 100 |
| Ethanol | 1.20 | 78.4 |
| Benzene | 2.53 | 80.1 |
| Chloroform | 3.63 | 61.2 |

## Depression of Freezing Point

The **freezing point** is the temperature at which the vapour pressure of solid and liquid phases become equal. Since the solute lowers the vapour pressure of the liquid, the freezing point **decreases**.

$$\\Delta T_f = T_f^\\circ - T_f = K_f \\cdot m$$

Where:
- ΔT_f = depression in freezing point
- K_f = **cryoscopic constant** (molal depression constant)
- m = molality

**For determining molar mass:**

$$M_2 = \\frac{K_f \\cdot w_2 \\cdot 1000}{\\Delta T_f \\cdot w_1}$$

| Solvent | K_f (K kg mol⁻¹) | Freezing Point (°C) |
|---------|-------------------|--------------------|
| Water | 1.86 | 0 |
| Benzene | 5.12 | 5.5 |
| Acetic acid | 3.90 | 16.6 |

### Applications

1. **Antifreeze** in car radiators — ethylene glycol lowers the freezing point of water
2. **Salting roads** in winter — NaCl/CaCl₂ lowers the freezing point of water
3. **Ice-cream making** — salt added to ice lowers its melting point

> **Critical Formula Difference:** ΔT_b = T_solution - T_pure (solution boils higher), but ΔT_f = T_pure - T_solution (solution freezes lower). Both are positive values.`,
    },
    {
      title: "Osmotic Pressure",
      content: `## Osmotic Pressure

### Osmosis

**Osmosis** is the spontaneous flow of solvent molecules through a **semi-permeable membrane** from a solution of **lower concentration** (or pure solvent) to a solution of **higher concentration**.

A **semi-permeable membrane (SPM)** allows only solvent molecules to pass through but blocks solute molecules. Examples: cellophane, parchment paper, animal bladder, copper ferrocyanide membrane.

### Osmotic Pressure (π)

The **minimum external pressure** applied on the solution side to **prevent osmosis** is called the osmotic pressure.

$$\\pi = CRT = \\frac{n}{V}RT$$

Where:
- π = osmotic pressure (atm or Pa)
- C = molarity of solution (mol/L)
- R = gas constant (0.0821 L atm K⁻¹ mol⁻¹)
- T = temperature (K)

**For molar mass determination:**

$$M_2 = \\frac{w_2 \\cdot R \\cdot T}{\\pi \\cdot V}$$

### Why Osmotic Pressure is Preferred

Osmotic pressure is the **best colligative property** for molar mass determination because:
1. It can be measured at **room temperature** (no heating/cooling needed)
2. Even dilute solutions give **measurable osmotic pressure**
3. The value is large even for high molar mass solutes (polymers, proteins)
4. It uses **molarity**, which is easy to prepare experimentally

### Types of Solutions (Tonicity)

| Term | Condition | Effect on Cell |
|------|-----------|----------------|
| **Isotonic** | π₁ = π₂ | No net flow — cell normal |
| **Hypertonic** | π_solution > π_cell | Water leaves cell → **crenation** (shrinking) |
| **Hypotonic** | π_solution < π_cell | Water enters cell → **lysis** (bursting) |

### Reverse Osmosis (RO)

When pressure **greater than osmotic pressure** is applied on the solution side, the solvent flows from the solution to the pure solvent side. This is **reverse osmosis**.

**Application:** Desalination of sea water — RO membranes can produce drinking water from salt water.

> **Board Exam Tip:** The derivation of π = CRT using the van't Hoff equation analogy with ideal gas law (PV = nRT) is a common 3-mark question. Also know the Berkeley-Hartley method for osmotic pressure measurement.`,
    },
    {
      title: "Abnormal Molar Mass & Van't Hoff Factor",
      content: `## Abnormal Molar Mass

Sometimes the molar mass determined from colligative properties doesn't match the actual molar mass. This is called **abnormal molar mass**.

### Causes

**1. Association of Solute Molecules**
- Some solutes form dimers, trimers, etc. in solution
- Number of particles **decreases** → colligative property is **less** than expected
- Calculated molar mass is **higher** than actual

**Example:** Acetic acid in benzene forms dimers through hydrogen bonding:
$$2 CH_3COOH \\rightleftharpoons (CH_3COOH)_2$$

**Example:** Benzoic acid in benzene also dimerizes.

**2. Dissociation of Solute Molecules**
- Electrolytes dissociate into ions
- Number of particles **increases** → colligative property is **more** than expected
- Calculated molar mass is **lower** than actual

**Example:** NaCl → Na⁺ + Cl⁻ (2 particles from 1)
**Example:** K₂SO₄ → 2K⁺ + SO₄²⁻ (3 particles from 1)

### Van't Hoff Factor (i)

To account for abnormal behaviour, **van't Hoff** introduced the factor **i**:

$$i = \\frac{\\text{Observed colligative property}}{\\text{Calculated colligative property}}$$

$$i = \\frac{\\text{Normal molar mass}}{\\text{Abnormal (observed) molar mass}}$$

$$i = \\frac{\\text{Total moles of particles after association/dissociation}}{\\text{Moles of particles before association/dissociation}}$$

### Modified Colligative Property Equations

$$\\Delta T_b = i \\cdot K_b \\cdot m$$
$$\\Delta T_f = i \\cdot K_f \\cdot m$$
$$\\pi = i \\cdot CRT$$
$$\\frac{p^\\circ - p}{p^\\circ} = i \\cdot \\chi_{\\text{solute}}$$

### Value of i

| Condition | Value of i | Example |
|-----------|-----------|---------|
| No dissociation/association | i = 1 | Glucose, urea, sucrose |
| Dissociation | i > 1 | NaCl (i≈2), CaCl₂ (i≈3) |
| Association | i < 1 | Acetic acid in benzene (i≈0.5) |

### Relating i to Degree of Dissociation (α)

$$i = 1 + (n - 1)\\alpha$$

Where n = number of ions produced per formula unit

**Example:** For NaCl (n = 2), if α = 0.9:
$$i = 1 + (2-1)(0.9) = 1.9$$

### Relating i to Degree of Association (α)

$$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$$

Where n = number of molecules that associate

> **Exam Strategy:** Van't Hoff factor problems are **guaranteed** in the board exam (3-5 marks). Master the formula i = 1 + (n-1)α for dissociation and i = 1 + (1/n - 1)α for association. Practice calculating i for common electrolytes.`,
    },
  ],
  notes: `# Solutions — Comprehensive Notes

## Key Definitions
- **Solution**: Homogeneous mixture of two or more components
- **Solubility**: Maximum amount of solute dissolved in a given solvent at a specific temperature
- **Saturated solution**: Contains maximum solute at given temperature
- **Colligative properties**: Properties depending only on number of solute particles

## Concentration Units Summary
| Unit | Formula | Temperature Dependence |
|------|---------|----------------------|
| Molarity (M) | mol solute / L solution | Yes (depends on volume) |
| Molality (m) | mol solute / kg solvent | No |
| Mole fraction (χ) | n_A / (n_A + n_B) | No |
| Mass % | (mass solute / mass solution) × 100 | No |
| ppm | (mass solute / mass solution) × 10⁶ | No |

## Laws
- **Henry's Law**: p = K_H · χ (gas solubility ∝ partial pressure)
- **Raoult's Law**: p_A = χ_A · p_A° (vapour pressure of component in solution)
- Raoult's law is a special case of Henry's law when K_H = p°

## Ideal vs Non-Ideal Solutions
- **Ideal**: Obeys Raoult's law, ΔH_mix = 0, ΔV_mix = 0
- **Positive deviation**: Weak A-B forces, higher VP, minimum boiling azeotrope
- **Negative deviation**: Strong A-B forces, lower VP, maximum boiling azeotrope

## Colligative Properties Master Formulas
1. **RLVP**: (p° - p)/p° = i · χ_solute
2. **ΔT_b** = i · K_b · m
3. **ΔT_f** = i · K_f · m
4. **π** = i · CRT

## Molar Mass Determination
$$M_2 = \\frac{K_b \\cdot w_2 \\cdot 1000}{\\Delta T_b \\cdot w_1} \\quad \\text{or} \\quad M_2 = \\frac{K_f \\cdot w_2 \\cdot 1000}{\\Delta T_f \\cdot w_1} \\quad \\text{or} \\quad M_2 = \\frac{w_2 RT}{\\pi V}$$

## Van't Hoff Factor
- i = 1 → no dissociation/association (glucose, urea)
- i > 1 → dissociation (electrolytes: NaCl→2, CaCl₂→3, AlCl₃→4)
- i < 1 → association (acetic acid in benzene)
- **Dissociation**: i = 1 + (n-1)α
- **Association**: i = 1 + (1/n - 1)α

## Common Mistakes
1. Confusing molarity (temperature dependent) with molality (temperature independent)
2. Forgetting to include van't Hoff factor for electrolyte solutions
3. Mixing up ΔT_b (T_solution - T_pure) and ΔT_f (T_pure - T_solution)
4. Higher K_H means LOWER solubility, not higher
5. RLVP is (p° - p)/p°, not just (p° - p)

## Board Exam Weightage: ~5-7 marks
- 1-mark: Definitions, Henry's law statement
- 2-mark: Raoult's law, types of solutions
- 3-mark: Numerical on colligative properties
- 5-mark: Numerical involving van't Hoff factor`,
  importantPoints: [
    "**Raoult's Law**: p = p°·x (for volatile solutes). The partial vapour pressure of each component = mole fraction × pure component vapour pressure.",
    "**Henry's Law**: p = K_H · x (for gases). Solubility of gas ∝ partial pressure. K_H increases with temperature (gas becomes less soluble).",
    "**Ideal vs Non-ideal solutions**: Ideal: obeys Raoult's law, ΔH_mix = 0, ΔV_mix = 0. Non-ideal: positive deviation (weaker interactions, e.g., ethanol-acetone) or negative deviation (stronger interactions, e.g., CHCl₃-acetone).",
    "**Colligative Properties**: Depend on NUMBER of solute particles, not nature. Four types: RLVP, elevation in boiling point, depression in freezing point, osmotic pressure.",
    "**RLVP**: (p° − p)/p° = x_solute (for non-volatile solute). Vapour pressure decreases when solute is added.",
    "**Boiling Point Elevation**: ΔT_b = K_b · m. K_b = molal elevation constant. Boiling point increases with solute addition.",
    "**Freezing Point Depression**: ΔT_f = K_f · m. K_f = molal depression constant. Freezing point decreases with solute addition.",
    "**Osmotic Pressure**: π = CRT = (n/V)RT. Semi-permeable membrane allows only solvent. Reverse osmosis: apply pressure > π.",
    "**Van't Hoff Factor**: i = observed colligative property / calculated colligative property. For dissociation: i > 1. For association: i < 1.",
    "**Molality**: m = moles of solute / kg of solvent. Temperature-independent (unlike molarity).",
  ],
  commonMistakes: [
    "**Confusing molarity and molality**: Molarity (M) = mol/L of solution (temperature-dependent). Molality (m) = mol/kg of solvent (temperature-independent). Use molality for colligative properties!",
    "**RLVP formula error**: RLVP = (p° − p)/p° = x_solute (NOT x_solvent). Students often use the wrong mole fraction.",
    "**Forgetting van't Hoff factor**: For electrolytes like NaCl (i=2), CaCl₂ (i=3), multiply colligative property by i. Without this, answers are wrong by a factor of 2-3.",
    "**Unit errors**: K_b and K_f have units of K·kg/mol. Molality is mol/kg. Mixing up g and kg is the most common numerical error.",
    "**Positive vs Negative deviation**: Positive deviation = WEAKER solute-solvent forces than pure components. Negative = STRONGER. Students mix this up.",
    "**Henry's Law direction**: As temperature ↑, K_H ↑, so gas solubility ↓. This is why hot water holds less dissolved gas.",
  ],
  examStrategy: [
    "**5-mark numericals**: Usually involve finding molecular mass using colligative properties + van't Hoff factor. Set up: find molality → apply formula → solve for M.",
    "**3-mark**: Explain positive/negative deviation with examples and graphs. OR Raoult's law derivation. OR Henry's law applications.",
    "**2-mark**: Definitions (colligative property, osmotic pressure, ideal solution), state Raoult's law/Henry's law, types of solutions.",
    "**Azeotropes**: Minimum boiling azeotrope (positive deviation, e.g., ethanol-water 95.5%), Maximum boiling azeotrope (negative deviation, e.g., HCl-water).",
    "**Graph questions**: Know the p vs x graphs for ideal, positive, and negative deviation. Examiners love asking you to draw/identify these.",
  ],
  examples: [
    "**Molality calculation**: 5g of NaCl (M=58.5) in 500g water. Moles = 5/58.5 = 0.0855. Molality = 0.0855/0.5 = **0.171 mol/kg**.",
    "**Boiling point elevation**: K_b for water = 0.52 K·kg/mol. 3g glucose (M=180) in 100g water. m = (3/180)/0.1 = 0.167. ΔT_b = 0.52 × 0.167 = **0.087 K**.",
    "**Osmotic pressure**: 2g protein in 200mL solution at 27°C. π = 0.0083 atm. M = wRT/(πV) = 2×0.0821×300/(0.0083×0.2) = **29,590 g/mol**.",
    "**Van't Hoff factor**: NaCl dissociates into Na⁺ + Cl⁻, so i = 2. ΔT_f (observed) = i × K_f × m = 2 × 1.86 × m.",
    "**Henry's Law**: At 25°C, K_H for O₂ = 46.82 kbar. At p(O₂) = 0.2 bar, x(O₂) = 0.2/46820 = **4.27 × 10⁻⁶**.",
  ],
  summary: "**Solutions** covers mixtures where composition varies. **Key concepts**: (1) Concentration units: molarity, molality, mole fraction, mass%. (2) **Raoult's Law**: p = p°·x for ideal solutions. (3) **Henry's Law**: p = K_H·x for gas solubility. (4) **Ideal vs Non-ideal solutions**: Positive deviation (weaker forces) vs Negative deviation (stronger forces). (5) **Colligative Properties**: RLVP, ΔT_b, ΔT_f, π — depend on number of particles. (6) **Van't Hoff factor** (i): accounts for dissociation/association.\n\n**Board weightage**: 5-7 marks. Expect 1 numerical (3-5 marks) + 1-2 short answers.",
  questions2: [
    { question: "State Raoult's law for a solution containing volatile components.", answer: "For a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction. p_A = p°_A · x_A and p_B = p°_B · x_B. Total pressure P = p_A + p_B." },
    { question: "What are colligative properties? Name any two.", answer: "Colligative properties are properties of solutions that depend on the NUMBER of solute particles, not their nature. Examples: (1) Relative lowering of vapour pressure (RLVP) (2) Elevation of boiling point (ΔT_b) (3) Depression of freezing point (ΔT_f) (4) Osmotic pressure (π)." },
    { question: "State Henry's law. Give one application.", answer: "Henry's law states that the partial pressure of a gas in vapour phase is directly proportional to the mole fraction of the gas in solution. p = K_H · x. Application: In carbonated drinks, CO₂ is dissolved under high pressure. When opened, pressure drops and CO₂ escapes as bubbles." },
    { question: "Define van't Hoff factor. What is its value for NaCl?", answer: "Van't Hoff factor (i) = Observed colligative property / Calculated colligative property (assuming no dissociation). For NaCl: NaCl → Na⁺ + Cl⁻ (2 particles). So i = 2. This means all colligative properties are doubled." },
    { question: "Why is molality preferred over molarity in studying colligative properties?", answer: "Molality (mol/kg of solvent) is preferred because it is independent of temperature, unlike molarity (mol/L of solution) which changes with temperature due to volume expansion/contraction. Since colligative properties are measured at different temperatures (boiling, freezing), molality gives consistent results." },
  ],
  questions3: [
    { question: "Explain positive and negative deviations from Raoult's law with one example each.", answer: "**Positive deviation**: When solute-solvent interactions are WEAKER than solute-solute and solvent-solvent interactions. Vapour pressure is higher than Raoult's law predicts.\nΔH_mix > 0 (endothermic), ΔV_mix > 0.\nExample: Ethanol + Acetone (hydrogen bonds broken).\n\n**Negative deviation**: When solute-solvent interactions are STRONGER than individual interactions. Vapour pressure is lower than predicted.\nΔH_mix < 0 (exothermic), ΔV_mix < 0.\nExample: CHCl₃ + Acetone (new hydrogen bond formed between Cl of CHCl₃ and O of acetone)." },
    { question: "Calculate the boiling point elevation when 1.5g of a non-volatile solute (M = 150) is dissolved in 75g of water. K_b for water = 0.52 K·kg/mol.", answer: "Given: w = 1.5 g, M = 150 g/mol, W = 75 g = 0.075 kg, K_b = 0.52\n\nMoles of solute = w/M = 1.5/150 = 0.01 mol\nMolality (m) = moles/kg of solvent = 0.01/0.075 = 0.133 mol/kg\n\nΔT_b = K_b × m = 0.52 × 0.133 = **0.069 K**\n\nNew boiling point = 100 + 0.069 = 100.069°C" },
  ],
  questions5: [
    { question: "Derive the relationship between relative lowering of vapour pressure and mole fraction of the solute. Calculate the molar mass of a solute if 2.5g of it dissolved in 100g of water lowers the vapour pressure from 23.8 mmHg to 23.2 mmHg at 25°C.", answer: "**Derivation**:\nFor a solution with non-volatile solute:\nBy Raoult's law: p = p° · x_solvent = p° · (1 − x_solute)\np = p° − p° · x_solute\np° − p = p° · x_solute\n(p° − p)/p° = x_solute = n_solute/(n_solute + n_solvent)\n\nFor dilute solution: n_solute << n_solvent\n(p° − p)/p° ≈ n_solute/n_solvent = (w/M)/(W/M_solvent)\n\n**Numerical**:\nGiven: w = 2.5g, W = 100g, p° = 23.8 mmHg, p = 23.2 mmHg, M_water = 18\n\nRLVP = (p° − p)/p° = (23.8 − 23.2)/23.8 = 0.6/23.8 = 0.02521\n\n0.02521 = (w × M_solvent)/(M × W)\n0.02521 = (2.5 × 18)/(M × 100)\n0.02521 = 45/(100M)\nM = 45/(100 × 0.02521)\n**M = 17.85 g/mol**" },
  ],
  revision: {
    quickPoints: [
      "**Solution** = homogeneous mixture. Solute + Solvent. 9 types based on physical states.",
      "**Concentration units**: Molarity (M), Molality (m), Mole fraction (x), Mass %, ppm.",
      "**Raoult's Law**: p = p°·x. For ideal solutions. Total P = p_A + p_B.",
      "**Henry's Law**: p = K_H·x for gas dissolution. K_H ↑ with temperature.",
      "**Ideal solution**: Obeys Raoult's law. ΔH=0, ΔV=0. Example: benzene + toluene.",
      "**Colligative properties**: RLVP, ΔT_b = K_b·m, ΔT_f = K_f·m, π = CRT.",
      "**Van't Hoff factor**: i = observed/calculated. i > 1 (dissociation), i < 1 (association).",
      "**Azeotropes**: Constant boiling mixtures. Min boiling (positive dev), Max boiling (negative dev).",
    ],
    formulas: [
      "(p° − p)/p° = x_solute (RLVP)",
      "ΔT_b = i × K_b × m",
      "ΔT_f = i × K_f × m",
      "π = iCRT = i(n/V)RT",
      "p = K_H · x (Henry's law)",
      "M = (w × K_b × 1000)/(ΔT_b × W)",
    ],
    tipsAndTricks: [
      "**For numericals**: Always convert g to kg for molality. Most common error!",
      "**Van't Hoff factor for common salts**: NaCl→2, CaCl₂→3, Na₂SO₄→3, Al₂(SO₄)₃→5.",
      "**Positive deviation clue**: If A-B interactions < A-A and B-B interactions → positive deviation → higher VP.",
      "**Quick osmotic pressure**: π = CRT. C in mol/L, R = 0.0821 L·atm/mol·K, T in Kelvin.",
    ],
  },
};
