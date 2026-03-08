import type { ChapterContent } from "./physics-ch1";

export const chemistryCh4: ChapterContent = {
  topics: [
    {
      title: "Introduction to Surface Chemistry",
      content: `## Introduction to Surface Chemistry

Surface chemistry deals with phenomena occurring at **surfaces or interfaces** — the boundary separating two bulk phases.

### Key Terminology
- **Adsorption**: Accumulation of molecular species at the surface rather than in the bulk
- **Adsorbent**: The surface on which adsorption takes place (e.g., charcoal, silica gel)
- **Adsorbate**: The substance that gets adsorbed (e.g., gas or solute)
- **Absorption**: When molecules penetrate into the bulk of the solid
- **Sorption**: When both adsorption and absorption occur simultaneously

### Adsorption vs Absorption

| Feature | Adsorption | Absorption |
|---------|-----------|------------|
| Location | Surface phenomenon | Bulk phenomenon |
| Concentration | Higher at surface | Uniform throughout |
| Temperature effect | Decreases with ↑ temp | Not much affected |
| Example | Water vapour on silica gel | Water soaked by sponge |

> **Exam Tip**: CBSE frequently asks the distinction between adsorption and absorption. Remember: adsorption is a *surface* phenomenon while absorption is a *bulk* phenomenon.`
    },
    {
      title: "Types of Adsorption",
      content: `## Physisorption vs Chemisorption

### Physical Adsorption (Physisorption)
- Held by weak **van der Waals forces**
- Low enthalpy of adsorption (20–40 kJ/mol)
- Reversible and non-specific
- Multi-layered adsorption possible
- Favoured at **low temperature**
- No activation energy required

### Chemical Adsorption (Chemisorption)
- Held by **chemical bonds** (covalent/ionic)
- High enthalpy of adsorption (80–240 kJ/mol)
- Irreversible and highly specific
- Only **monolayer** adsorption
- Favoured at **high temperature**
- May require activation energy

### Comparison Table

| Property | Physisorption | Chemisorption |
|----------|--------------|---------------|
| Forces | van der Waals | Chemical bonds |
| Enthalpy | 20–40 kJ/mol | 80–240 kJ/mol |
| Specificity | Non-specific | Highly specific |
| Layers | Multilayer | Monolayer |
| Reversibility | Reversible | Usually irreversible |
| Temperature | Low temp favoured | High temp favoured |

> **Common Mistake**: Students confuse the temperature dependence — physisorption *decreases* with temperature while chemisorption first *increases* then decreases.`
    },
    {
      title: "Adsorption Isotherms",
      content: `## Adsorption Isotherms

An **adsorption isotherm** shows the variation of adsorption (x/m) with pressure at constant temperature.

### Freundlich Adsorption Isotherm

$$\\frac{x}{m} = k \\cdot P^{1/n}$$

Where:
- x/m = extent of adsorption per unit mass of adsorbent
- P = pressure of adsorbate
- k, n = constants (n > 1)

**Logarithmic form**: log(x/m) = log k + (1/n) log P

This gives a **straight line** with slope = 1/n and intercept = log k.

### Limitations of Freundlich Isotherm
- Approximate, works only in a limited pressure range
- At very high pressure, adsorption becomes independent of pressure (saturation)
- The value 1/n lies between 0 and 1

### Key Observations
- At **low pressure**: x/m ∝ P (1/n ≈ 1)
- At **high pressure**: x/m = constant (1/n ≈ 0)
- At **intermediate pressure**: x/m = kP^(1/n)

> **Board Tip**: Numericals on Freundlich isotherm are common. Practice plotting log(x/m) vs log P graphs and extracting k and 1/n values.`
    },
    {
      title: "Catalysis",
      content: `## Catalysis

A **catalyst** is a substance that alters the rate of a reaction without being consumed. It provides an **alternative reaction pathway** with lower activation energy.

### Types of Catalysis

#### 1. Homogeneous Catalysis
Catalyst and reactants are in the **same phase**.
- NO(g) catalyses SO₂ oxidation: 2SO₂ + O₂ → 2SO₃ (all gases)
- H⁺ catalyses ester hydrolysis (all in solution)

#### 2. Heterogeneous Catalysis
Catalyst and reactants are in **different phases**.
- Fe(s) in Haber's process: N₂(g) + 3H₂(g) → 2NH₃(g)
- Pt(s) in Ostwald's process: 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g)

### Important Features of Solid Catalysts
- **Activity**: Ability to accelerate a reaction
- **Selectivity**: Ability to direct a reaction to give a particular product
  - Example: CO + H₂ gives CH₃OH with ZnO–Cr₂O₃ but CH₄ with Cu

### Adsorption Theory of Heterogeneous Catalysis
1. Reactant molecules adsorb on catalyst surface
2. Formation of surface intermediates
3. Chemical reaction occurs on the surface
4. Products desorb from the surface

> **Important**: Catalysts do NOT change the equilibrium position — they only help reach equilibrium faster by lowering activation energy for both forward and reverse reactions equally.`
    },
    {
      title: "Catalytic Properties and Enzyme Catalysis",
      content: `## Shape-Selective Catalysis & Enzyme Catalysis

### Shape-Selective Catalysis
Occurs when the reaction depends on the **pore size** of the catalyst and the **size of reactant/product** molecules.

**Zeolites** are excellent shape-selective catalysts:
- Honeycomb-like microporous structure
- ZSM-5 converts alcohols to gasoline
- Only molecules with specific shapes can enter/leave the pores

### Enzyme Catalysis
Enzymes are **biological catalysts** — proteins that catalyse biochemical reactions with extraordinary efficiency and specificity.

#### Key Characteristics
- Highly specific — each enzyme acts on a specific substrate
- Most effective at **optimum temperature** (25–37°C) and **optimum pH**
- Activity increases with temperature up to a point, then drops (denaturation)
- Enormous catalytic efficiency (10⁶ to 10¹⁴ times faster)

#### Lock and Key Mechanism
1. Substrate binds to **active site** of enzyme
2. Enzyme–substrate complex forms (E + S → ES)
3. Products are released (ES → E + P)
4. Enzyme is regenerated

#### Important Enzymes

| Enzyme | Substrate | Product |
|--------|----------|---------|
| Invertase | Sucrose | Glucose + Fructose |
| Zymase | Glucose | Ethanol + CO₂ |
| Urease | Urea | CO₂ + NH₃ |
| Maltase | Maltose | Glucose |

> **Exam Tip**: The lock-and-key model is a favourite CBSE question. Always mention the active site, specificity, and enzyme regeneration.`
    },
    {
      title: "Colloids – Classification and Properties",
      content: `## Colloidal Solutions

A **colloidal solution** (sol) is a heterogeneous mixture where particle size ranges from **1 nm to 1000 nm**.

### Components
- **Dispersed phase**: The component present in smaller proportion (like solute)
- **Dispersion medium**: The component present in larger proportion (like solvent)

### Classification by Physical State

| Dispersed Phase | Dispersion Medium | Type | Example |
|----------------|-------------------|------|---------|
| Solid | Liquid | Sol | Gold sol, muddy water |
| Liquid | Liquid | Emulsion | Milk, face cream |
| Gas | Liquid | Foam | Whipped cream, shaving cream |
| Solid | Gas | Aerosol | Smoke, dust |
| Liquid | Gas | Aerosol | Fog, mist, cloud |
| Solid | Solid | Solid sol | Coloured glass, alloys |
| Gas | Solid | Solid foam | Pumice stone, foam rubber |

### Classification by Nature of Interaction
- **Lyophilic** (solvent-loving): Strong interaction; reversible; self-stabilising. Example: starch, gum, gelatin
- **Lyophobic** (solvent-hating): Weak interaction; irreversible; need stabilisers. Example: metal sols, As₂S₃

> **Board Tip**: Memorise at least two examples for each type of colloid — this is frequently tested.`
    },
    {
      title: "Preparation and Properties of Colloids",
      content: `## Preparation & Properties of Colloids

### Preparation Methods

#### Chemical Methods
- **Reduction**: HAuCl₄ reduced by HCHO or SnCl₂ → gold sol
- **Oxidation**: H₂S + SO₂ → S sol (sulphur sol)
- **Hydrolysis**: FeCl₃ + 3H₂O → Fe(OH)₃ sol + 3HCl
- **Double decomposition**: As₂O₃ + 3H₂S → As₂S₃ sol + 3H₂O

#### Physical Methods
- **Bredig's Arc Method**: Electric arc between metal electrodes in dispersion medium
- **Peptization**: Converting a precipitate into colloidal sol by adding an electrolyte (peptizing agent)

### Purification of Colloids
- **Dialysis**: Colloidal particles cannot pass through parchment membrane; crystalloids can
- **Electrodialysis**: Applying electric field to speed up dialysis
- **Ultrafiltration**: Using graded filters with known pore sizes

### Properties of Colloids

#### Tyndall Effect
- Scattering of light by colloidal particles
- Path of light becomes visible (Tyndall cone)
- Does not occur in true solutions (particles too small)

#### Brownian Movement
- Random zigzag movement of colloidal particles
- Due to unequal bombardment by dispersion medium molecules
- Prevents settling; stabilises the sol

> **Common Mistake**: Students confuse dialysis (purification) with peptization (preparation). Dialysis removes dissolved ions; peptization converts precipitate to sol.`
    },
    {
      title: "Electrophoresis, Coagulation, and Emulsions",
      content: `## Electrophoresis, Coagulation & Emulsions

### Electrophoresis
- Movement of colloidal particles under an electric field
- Positive sol moves towards cathode; negative sol moves towards anode
- Proves that colloidal particles carry electric charge

### Charge on Colloidal Particles
- **Positive sols**: Fe(OH)₃, Al(OH)₃, basic dye sols
- **Negative sols**: As₂S₃, gold, silver, starch, clay, acidic dye sols

### Coagulation (Flocculation)
The process of settling colloidal particles by destroying the charge.

#### Methods of Coagulation
1. **Adding electrolyte**: Neutralises the charge (most common method)
2. **Electrophoresis**: Particles deposit at electrodes
3. **Mixing opposite sols**: Mutual coagulation
4. **Boiling**: Increased collisions remove adsorbed layer

#### Hardy-Schulze Rule
- Greater the valence of the coagulating ion, greater its coagulating power
- For negative sol: Al³⁺ > Ba²⁺ > Na⁺
- For positive sol: [Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻

### Emulsions
- Colloidal system of two immiscible liquids
- **Oil-in-water (O/W)**: Oil dispersed in water (milk, vanishing cream)
- **Water-in-oil (W/O)**: Water dispersed in oil (butter, cold cream)
- **Emulsifiers**: Stabilise emulsions (soaps, detergents, proteins)

> **Exam Tip**: Hardy-Schulze rule is a very important concept for board exams. Remember: higher valency ion = stronger coagulating power. The effective ion is the one with opposite charge to the sol.`
    }
  ],
  notes: `# Surface Chemistry — Comprehensive Notes

## 1. Adsorption
- **Adsorption** = accumulation at surface; **Absorption** = penetration into bulk
- **Adsorbent**: surface; **Adsorbate**: substance adsorbed
- Physisorption: van der Waals, reversible, multilayer, low ΔH (20–40 kJ/mol)
- Chemisorption: chemical bonds, irreversible, monolayer, high ΔH (80–240 kJ/mol)

## 2. Factors Affecting Adsorption
- Nature of adsorbent (surface area ↑ → adsorption ↑)
- Nature of adsorbate (easily liquefiable gases adsorbed more)
- Temperature (physisorption ↓, chemisorption first ↑ then ↓)
- Pressure (adsorption ↑ with pressure until saturation)

## 3. Freundlich Isotherm
- x/m = kP^(1/n); log(x/m) = log k + (1/n)log P
- Valid at intermediate pressures; fails at very high/low pressures

## 4. Catalysis
- Homogeneous: same phase; Heterogeneous: different phases
- Catalysts lower activation energy, don't shift equilibrium
- Shape-selective catalysis: zeolites, pore-size dependent
- Enzyme catalysis: lock-and-key, optimum temp/pH, highly specific

## 5. Colloidal Solutions
- Size: 1–1000 nm; dispersed phase + dispersion medium
- Lyophilic (reversible, self-stabilising) vs Lyophobic (irreversible, need stabilisers)
- Tyndall effect, Brownian motion, electrophoresis
- Coagulation: Hardy-Schulze rule — higher valency = stronger coagulation
- Emulsions: O/W (milk) and W/O (butter), stabilised by emulsifiers

## 6. Applications
- Medicines, water purification, food industry, rubber, photography`,
  questions2: [
    { question: "Distinguish between adsorption and absorption.", answer: "**Adsorption**: Surface phenomenon; substance accumulates on the **surface** of adsorbent; concentration higher at surface. **Absorption**: Bulk phenomenon; substance is uniformly distributed throughout the **bulk** of the material. Example: silica gel adsorbs water vapour; sponge absorbs water." },
    { question: "What is the Tyndall effect?", answer: "The **Tyndall effect** is the scattering of light by **colloidal particles** when a beam of light passes through a colloidal solution. The path of light becomes visible. This distinguishes colloids from true solutions (which don't show this effect)." },
    { question: "Distinguish between lyophilic and lyophobic colloids.", answer: "**Lyophilic** (solvent-loving): Directly formed, reversible, more stable, self-stabilising. Example: starch, gum, gelatin. **Lyophobic** (solvent-hating): Need special methods, irreversible, less stable, require stabilisers. Example: gold sol, Fe(OH)₃ sol." },
    { question: "What is Brownian movement?", answer: "**Brownian movement** is the continuous **zigzag** motion of colloidal particles due to unbalanced bombardment by molecules of the dispersion medium. It provides evidence for the **kinetic molecular theory** and helps prevent settling of colloidal particles." },
    { question: "State Hardy-Schulze rule.", answer: "**Hardy-Schulze rule**: The coagulating power of an electrolyte depends on the **valency of the ion** carrying the charge opposite to the colloidal particles. Higher the valency, greater the coagulating power. For negative sol: Al³⁺ > Ba²⁺ > Na⁺." },
    { question: "What is an emulsion? Give examples.", answer: "An **emulsion** is a colloidal dispersion of one liquid in another immiscible liquid. **Types**: (i) Oil-in-water (O/W): oil dispersed in water, e.g., **milk**, vanishing cream. (ii) Water-in-oil (W/O): water dispersed in oil, e.g., **butter**, cold cream. Stabilised by **emulsifiers**." }
  ],
  questions3: [
    { question: "Compare physisorption and chemisorption.", answer: "| Property | Physisorption | Chemisorption |\n|----------|-------------|---------------|\n| Forces | Van der Waals | Chemical bonds |\n| Enthalpy | Low (20–40 kJ/mol) | High (80–240 kJ/mol) |\n| Specificity | Non-specific | Highly specific |\n| Reversibility | Reversible | Usually irreversible |\n| Temperature | Decreases with ↑T | First increases, then decreases |\n| Layers | Multilayer possible | Monolayer only |\n| Activation energy | Low/none | Sometimes high |\n\n**Key**: Physisorption is physical; chemisorption involves electron sharing/transfer." },
    { question: "Explain the mechanism of enzyme catalysis with the lock-and-key model.", answer: "**Enzyme Catalysis**: Enzymes are biological catalysts (proteins) that are highly specific.\n\n**Lock-and-Key Mechanism**:\n1. Enzyme (E) has an **active site** with specific shape\n2. Substrate (S) fits into active site like a key into a lock\n3. **Enzyme-substrate complex** [ES] forms: E + S → [ES]\n4. Products form and enzyme is released: [ES] → E + P\n\n**Characteristics**:\n- Highly **specific** (one enzyme, one substrate)\n- **Optimum temperature** (~310 K for human enzymes) — denaturation above\n- **Optimum pH** (pepsin: pH 2; trypsin: pH 8)\n- Can be inhibited by poisons/drugs (competitive and non-competitive inhibition)" },
    { question: "What is coagulation? Describe methods of coagulation of colloids.", answer: "**Coagulation/Flocculation**: The process of settling of colloidal particles by neutralising their charge.\n\n**Methods**:\n1. **Electrophoresis**: Particles move toward electrode and lose charge on contact\n2. **Mixing opposite colloids**: Positive + negative sol → mutual coagulation\n3. **Adding electrolyte**: Oppositely charged ions neutralise the colloid charge (Hardy-Schulze rule)\n4. **Boiling**: Increases kinetic energy, destabilises particles\n5. **Persistent dialysis**: Removes stabilising electrolyte from colloidal solution\n\n**Applications**: Water purification (alum as coagulant), delta formation (river meets sea → electrolyte coagulates colloidal mud)" }
  ],
  questions5: [
    { question: "What are colloids? Discuss their classification, preparation methods (any three), and properties in detail.", answer: "**Colloids**: Heterogeneous systems where particle size is between 1–1000 nm. They consist of **dispersed phase** (solute-like) and **dispersion medium** (solvent-like).\n\n**Classification by Dispersed Phase/Medium**:\n| Type | Dispersed | Medium | Example |\n|------|-----------|--------|--------|\n| Sol | Solid | Liquid | Gold sol, Fe(OH)₃ |\n| Emulsion | Liquid | Liquid | Milk, butter |\n| Foam | Gas | Liquid | Shaving cream |\n| Aerosol | Liquid/Solid | Gas | Fog, smoke |\n\n**Preparation Methods**:\n1. **Chemical methods**: Reduction (HAuCl₄ + HCHO → gold sol); Oxidation (H₂S + SO₂ → sulphur sol); Hydrolysis (FeCl₃ + 3H₂O → Fe(OH)₃ sol)\n2. **Bredig's arc method**: Electric arc between metal electrodes in water → metal sol (for Au, Ag, Pt)\n3. **Peptisation**: Freshly prepared precipitate dispersed by adding peptising agent (e.g., Fe(OH)₃ precipitate + FeCl₃ → sol)\n\n**Properties**:\n- **Tyndall Effect**: Scattering of light by colloidal particles\n- **Brownian Movement**: Zigzag motion due to molecular bombardment\n- **Electrophoresis**: Migration of particles under electric field (shows particles carry charge)\n- **Coagulation**: Settling by adding electrolyte (Hardy-Schulze rule)\n- **Dialysis**: Purification using semipermeable membrane" },
    { question: "Explain adsorption isotherms. Derive the Freundlich adsorption isotherm and discuss its limitations.", answer: "**Adsorption Isotherm**: A plot of the amount of gas adsorbed (x/m) against pressure (p) at constant temperature.\n\n**Freundlich Adsorption Isotherm**:\n\n**x/m = kp^(1/n)** where k, n are constants (n > 1)\n\nTaking log: **log(x/m) = log k + (1/n)log p**\n\nPlot of log(x/m) vs log p gives a **straight line** with:\n- Slope = 1/n (between 0 and 1)\n- Intercept = log k\n\n**Cases**:\n- At low pressure: x/m ∝ p (1/n ≈ 1)\n- At high pressure: x/m is constant (1/n ≈ 0)\n- At intermediate pressure: 0 < 1/n < 1\n\n**Limitations**:\n1. Empirical equation — no theoretical basis\n2. Fails at **very high pressures** (predicts x/m → ∞, but actually x/m reaches saturation)\n3. Does not explain multilayer adsorption\n4. Constants k, n have no clear physical meaning\n\n**Langmuir Isotherm** (overcomes some limitations): Based on monolayer adsorption on uniform surface: x/m = ap/(1+bp). BET theory extends to multilayer." }
  ]
};
