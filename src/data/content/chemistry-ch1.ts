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
};
