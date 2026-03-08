// Chemistry Chapter 3: Chemical Kinetics
// Pre-written content based on NCERT Class 12 Chemistry, expanded beyond textbook level

import type { ChapterContent } from "./physics-ch1";

export const chemistryCh3: ChapterContent = {
  topics: [
    {
      title: "Introduction to Chemical Kinetics",
      content: `## Introduction to Chemical Kinetics

**Chemical Kinetics** is the branch of chemistry that deals with the **rate of chemical reactions** and the **factors that influence** these rates. While thermodynamics tells us WHETHER a reaction is feasible (ΔG < 0), kinetics tells us **HOW FAST** the reaction occurs.

### Why Study Chemical Kinetics?

- A reaction may be thermodynamically feasible but kinetically very slow
  - Example: Diamond → Graphite (ΔG < 0, but takes millions of years!)
- Understanding rates helps in:
  - Designing industrial processes (faster production)
  - Preserving food (slowing down decomposition)
  - Drug design (controlling drug release rates)
  - Understanding biological processes (enzyme kinetics)

### Key Terms

**Rate of Reaction:** The change in concentration of any reactant or product **per unit time**.

For a reaction: A → B

$$\\text{Rate} = -\\frac{d[A]}{dt} = +\\frac{d[B]}{dt}$$

The negative sign for reactants indicates that their concentration **decreases** with time.

For a general reaction: aA + bB → cC + dD

$$\\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt} = +\\frac{1}{d}\\frac{d[D]}{dt}$$

### Average Rate vs Instantaneous Rate

- **Average rate**: Change in concentration over a **finite time interval** (Δ[A]/Δt)
- **Instantaneous rate**: Rate at a **specific instant** — obtained as the slope of the concentration-time curve at that point (d[A]/dt)

> **Board Exam Tip:** The expression for rate of reaction with stoichiometric coefficients is a very common 1-2 mark question. Always divide by the stoichiometric coefficient.`,
    },
    {
      title: "Factors Affecting Rate of Reaction",
      content: `## Factors Affecting Rate of Reaction

### 1. Concentration of Reactants

Generally, increasing the concentration of reactants **increases the rate**. More molecules per unit volume → more frequent collisions → faster reaction.

This is quantified by the **Rate Law**:

$$\\text{Rate} = k[A]^m[B]^n$$

Where:
- k = **rate constant** (specific rate constant)
- m, n = **order** of reaction with respect to A and B
- m + n = **overall order** of the reaction

**Important:** The order of reaction is determined **experimentally**, NOT from the balanced equation.

### 2. Temperature

Increasing temperature **always increases** the rate. As a rough rule:

> For every **10°C rise** in temperature, the rate approximately **doubles** (for most reactions).

This is quantified by the **temperature coefficient**:
$$\\text{Temperature coefficient} = \\frac{k_{T+10}}{k_T} \\approx 2 \\text{ to } 3$$

### 3. Nature of Reactants

- **Ionic reactions** in solution are very fast (almost instantaneous)
- **Covalent bond reactions** are generally slower (bonds need to be broken)
- Reactions involving complex molecules are slower than simple ones

### 4. Catalyst

A catalyst increases the rate by providing an **alternative pathway** with **lower activation energy**.

- **Positive catalyst**: Increases rate (lower E_a)
- **Negative catalyst (inhibitor)**: Decreases rate (higher E_a)
- Catalyst is **not consumed** in the reaction
- Catalyst **does not change** the equilibrium position — only helps reach equilibrium faster

### 5. Surface Area

For heterogeneous reactions, **finer particles react faster** due to more exposed surface area.
- Powdered CaCO₃ reacts faster with HCl than a lump

### 6. Radiation / Light

Some reactions are initiated or accelerated by light (photochemical reactions).
- H₂ + Cl₂ → 2HCl (very slow in dark, explosive in light)
- Photography uses light-sensitive AgBr

> **Exam Strategy:** When asked about factors affecting rate, list all six with one example each. This is a common 3-5 mark question.`,
    },
    {
      title: "Rate Law and Order of Reaction",
      content: `## Rate Law and Order of Reaction

### Rate Law (Rate Expression)

The rate law is an expression that relates the rate to the concentrations of reactants raised to appropriate powers:

$$\\text{Rate} = k[A]^m[B]^n$$

**Key Points:**
- m and n are NOT necessarily equal to stoichiometric coefficients
- They are determined **experimentally** (from initial rate data)
- m = order with respect to A, n = order with respect to B
- m + n = overall order

### Order of Reaction

The **order** is the sum of powers of concentration terms in the rate law.

| Order | Rate Law | Units of k |
|-------|----------|------------|
| 0 | Rate = k | mol L⁻¹ s⁻¹ |
| 1 | Rate = k[A] | s⁻¹ |
| 2 | Rate = k[A]² or k[A][B] | L mol⁻¹ s⁻¹ |
| 3 | Rate = k[A]³ | L² mol⁻² s⁻¹ |

**General unit of k:**
$$k = \\frac{\\text{mol}^{1-n} \\cdot \\text{L}^{n-1}}{\\text{s}}$$

where n = overall order.

### Molecularity vs Order

| Feature | Molecularity | Order |
|---------|-------------|-------|
| Definition | Number of molecules taking part in elementary step | Sum of powers in rate law |
| Value | Always whole number (1, 2, or 3) | Can be 0, fractional, or negative |
| Determination | From mechanism | From experiment |
| Applicable to | Elementary reactions only | Overall or elementary |

### Determining Order Experimentally

**Initial Rate Method:** Perform multiple experiments varying one reactant at a time:

| Expt | [A] | [B] | Initial Rate |
|------|-----|-----|-------------|
| 1 | 0.1 | 0.1 | 2 × 10⁻³ |
| 2 | 0.2 | 0.1 | 4 × 10⁻³ |
| 3 | 0.1 | 0.2 | 8 × 10⁻³ |

From Expt 1 & 2: Doubling [A] doubles rate → order w.r.t. A = 1
From Expt 1 & 3: Doubling [B] quadruples rate → order w.r.t. B = 2
Overall order = 1 + 2 = 3

> **Common Mistake:** Students assume order = stoichiometric coefficient. This is ONLY true for elementary (single-step) reactions, NOT for overall reactions with multiple steps.`,
    },
    {
      title: "Integrated Rate Equations",
      content: `## Integrated Rate Equations

While the rate law gives the **instantaneous rate**, integrated rate equations give the **concentration as a function of time**.

### Zero-Order Reaction

$$[A] = [A]_0 - kt$$

- Plot of [A] vs t → **straight line** with slope = −k
- **Half-life:** $t_{1/2} = \\frac{[A]_0}{2k}$ (depends on initial concentration)
- Example: Decomposition of NH₃ on hot Pt surface, photochemical reaction of H₂ + Cl₂

### First-Order Reaction

$$\\ln[A] = \\ln[A]_0 - kt$$

Or equivalently:

$$k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]}$$

- Plot of ln[A] vs t → **straight line** with slope = −k
- **Half-life:** $t_{1/2} = \\frac{0.693}{k}$ (**independent of initial concentration!**)
- Example: Radioactive decay, decomposition of N₂O₅, hydrogenation of ethylene

### Characteristics of First-Order Reactions

| Property | Expression |
|----------|-----------|
| Rate law | Rate = k[A] |
| Integrated form | k = (2.303/t) log([A]₀/[A]) |
| Half-life | t₁/₂ = 0.693/k |
| Unit of k | s⁻¹ or min⁻¹ |
| Linear plot | ln[A] vs t |

### Pseudo First-Order Reactions

A reaction that is truly second-order but **appears first-order** because one reactant is in large excess.

**Example:** Hydrolysis of ethyl acetate

$$CH_3COOC_2H_5 + H_2O \\rightarrow CH_3COOH + C_2H_5OH$$

Rate = k[CH₃COOC₂H₅][H₂O]

But since water is in huge excess, [H₂O] ≈ constant:
Rate = k'[CH₃COOC₂H₅] where k' = k[H₂O]

Other examples: Inversion of sucrose, hydrolysis of methyl acetate

### How to Identify Reaction Order from Data

1. **Substitution method**: Substitute data into integrated rate equations; the one giving constant k is correct
2. **Graphical method**: Plot appropriate graphs; the one giving a straight line indicates the order
3. **Half-life method**: If t₁/₂ is constant → first order; if t₁/₂ ∝ 1/[A]₀ → second order

> **Board Exam Tip:** First-order kinetics is the most tested topic. Know the integrated equation, half-life formula, and pseudo first-order reactions. At least one 3-5 mark numerical is guaranteed.`,
    },
    {
      title: "Arrhenius Equation & Activation Energy",
      content: `## Arrhenius Equation

The Arrhenius equation quantitatively describes how the **rate constant k** depends on **temperature**:

$$k = A \\cdot e^{-E_a/RT}$$

Taking logarithm:

$$\\ln k = \\ln A - \\frac{E_a}{RT}$$

Or in log₁₀ form:

$$\\log k = \\log A - \\frac{E_a}{2.303 \\cdot R \\cdot T}$$

Where:
- k = rate constant
- A = **pre-exponential factor** (Arrhenius factor / frequency factor)
- E_a = **activation energy** (J/mol)
- R = 8.314 J K⁻¹ mol⁻¹
- T = temperature (K)

### Graphical Interpretation

Plot of **ln k vs 1/T** gives a **straight line**:
- Slope = −E_a/R
- Intercept = ln A

### Two-Temperature Form

$$\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303 R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

This is extremely useful for calculating E_a from rate constants at two temperatures.

### Activation Energy (E_a)

The **minimum energy** that reactant molecules must possess for a reaction to occur. Think of it as an **energy barrier** that must be overcome.

**Energy Profile:**
1. Reactants start at their energy level
2. Must reach the **transition state** (activated complex) at the top of the energy barrier
3. Products form at their energy level

- If E_a is **high** → reaction is **slow** (few molecules have enough energy)
- If E_a is **low** → reaction is **fast** (many molecules can cross the barrier)

### Effect of Catalyst on E_a

A catalyst provides an **alternative pathway** with a **lower activation energy**:
- More molecules can cross the lower energy barrier
- Rate increases without changing the overall ΔH of the reaction
- The catalyst is regenerated at the end

### Maxwell-Boltzmann Distribution

At any temperature, molecules have a **distribution of kinetic energies**:
- Most molecules have moderate energies
- Only a small fraction has energy ≥ E_a (these can react)
- At higher temperature, this fraction increases significantly

> **Exam Strategy:** The two-temperature Arrhenius equation is a guaranteed numerical (3 marks). Also, drawing and explaining the energy profile diagram with and without catalyst is a common 3-mark question.

> **Common Mistake:** Students think a catalyst changes ΔH (enthalpy change). It does NOT. It only lowers E_a and provides an alternative pathway.`,
    },
    {
      title: "Collision Theory of Chemical Reactions",
      content: `## Collision Theory

The collision theory explains the rate of reaction at the molecular level.

### Basic Postulates

1. Reactions occur when reactant molecules **collide** with each other
2. Not all collisions lead to a reaction — only **effective collisions** do
3. For a collision to be effective, two conditions must be met:
   - **Threshold energy**: Molecules must have energy ≥ E_a
   - **Proper orientation**: Molecules must be oriented correctly for bond formation/breaking

### Rate According to Collision Theory

$$k = p \\cdot Z_{AB} \\cdot e^{-E_a/RT}$$

Where:
- p = **steric factor** (probability factor) — accounts for proper orientation
- Z_AB = collision frequency — number of collisions per unit time per unit volume
- e^(-Ea/RT) = fraction of molecules with energy ≥ E_a

### Why Not All Collisions Are Effective?

Consider the reaction: NO₂ + NO₂ → N₂O₄

**Possible orientations:**

✅ **Effective collision**: O atoms of one NO₂ approach the N atom of another → bond forms
❌ **Ineffective collision**: Two O atoms collide → no bond formation

The steric factor p is typically much less than 1 (often 10⁻¹ to 10⁻⁸), meaning only a tiny fraction of correctly energized collisions have the right orientation.

### Threshold Energy and Activation Energy

- **Threshold energy** = minimum energy molecules must have to react
- **Activation energy (E_a)** = Threshold energy − Average kinetic energy of molecules
- E_a is the EXTRA energy needed above the average

### Limitations of Collision Theory

1. The steric factor (p) is difficult to predict theoretically
2. Works well for simple gaseous reactions but not for complex or solution-phase reactions
3. Does not explain reactions where orientation is critical
4. More advanced theories: **Transition State Theory** (Eyring) provides better predictions

### Summary of Kinetics Concepts

| Concept | What It Tells Us |
|---------|-----------------|
| Rate law | How rate depends on concentration |
| Integrated rate law | How concentration changes with time |
| Arrhenius equation | How rate constant depends on temperature |
| Collision theory | Why and when molecules react at molecular level |

> **Board Exam Tip:** Collision theory is usually asked as a 2-3 mark theory question. State the postulates clearly and explain effective vs ineffective collisions with orientation diagrams.

> **Key Takeaway:** Not every collision leads to reaction. Only those collisions that have (1) sufficient energy AND (2) proper orientation result in product formation.`,
    },
  ],
  notes: `# Chemical Kinetics — Comprehensive Notes

## Key Definitions
- **Rate of reaction**: Change in concentration of reactant/product per unit time
- **Order**: Sum of powers of concentration terms in rate law (experimental)
- **Molecularity**: Number of molecules in elementary step (theoretical)
- **Activation energy**: Minimum extra energy needed for reaction to occur

## Rate Expression
For aA + bB → cC + dD:
Rate = −(1/a)d[A]/dt = −(1/b)d[B]/dt = +(1/c)d[C]/dt = +(1/d)d[D]/dt

## Integrated Rate Laws
| Order | Equation | Half-life | Plot |
|-------|----------|-----------|------|
| 0 | [A] = [A]₀ − kt | [A]₀/2k | [A] vs t |
| 1 | k = (2.303/t)log([A]₀/[A]) | 0.693/k | ln[A] vs t |
| 2 | 1/[A] = 1/[A]₀ + kt | 1/k[A]₀ | 1/[A] vs t |

## Units of Rate Constant
k units = mol^(1-n) L^(n-1) s⁻¹ where n = order

## Key Equations
- **Arrhenius**: k = Ae^(-Ea/RT)
- **Two-temp form**: log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)
- **Collision theory**: k = pZ_AB · e^(-Ea/RT)

## Factors Affecting Rate
1. Concentration (Rate law)
2. Temperature (Arrhenius equation)
3. Nature of reactants
4. Catalyst (lowers Ea)
5. Surface area
6. Radiation/light

## Pseudo First-Order Reactions
- Hydrolysis of ester: CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH
- Inversion of sucrose: C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆

## Common Mistakes
1. Order ≠ stoichiometric coefficient (except elementary reactions)
2. Catalyst lowers Ea but does NOT change ΔH
3. Half-life of first-order is INDEPENDENT of [A]₀
4. Molecularity cannot be zero, fractional, or negative; order can be
5. Temperature coefficient ≈ 2-3 means rate roughly doubles per 10°C rise

## Board Exam Weightage: ~7-8 marks
- 1-mark: Definitions, order vs molecularity
- 2-mark: Factors affecting rate, collision theory
- 3-mark: Numerical (first-order, Arrhenius)
- 5-mark: Derivation + numerical`,
  questions2: [
    { question: "Define rate of a chemical reaction. How is it expressed?", answer: "**Rate of reaction** is the change in concentration of a reactant or product per unit time. For A → B: Rate = −d[A]/dt = +d[B]/dt. The negative sign for reactants indicates decreasing concentration. SI unit: **mol L⁻¹ s⁻¹**." },
    { question: "Distinguish between order and molecularity of a reaction.", answer: "**Order**: Sum of powers of concentration terms in the rate law; determined **experimentally**; can be 0, fractional, or negative. **Molecularity**: Number of reacting species in an elementary step; always a **positive integer** (1, 2, or 3); has theoretical significance." },
    { question: "What is a pseudo first-order reaction? Give an example.", answer: "A reaction that is of higher order but **behaves as first order** because one reactant is in large excess. Example: **Hydrolysis of ethyl acetate**: CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH. Water is in large excess, so its concentration remains nearly constant." },
    { question: "State the Arrhenius equation.", answer: "**k = Ae^(−Ea/RT)**, where k = rate constant, A = frequency/pre-exponential factor, Ea = activation energy, R = gas constant, T = temperature (K). Taking log: **ln k = ln A − Ea/RT** or log k = log A − Ea/(2.303RT)." },
    { question: "What is the effect of temperature on rate of reaction?", answer: "Rate **increases** with temperature. The **temperature coefficient** (rate at T+10/rate at T) is typically 2–3. According to Arrhenius equation, a 10°C rise roughly doubles the rate because more molecules gain energy ≥ Ea (activation energy)." },
    { question: "Define half-life of a reaction.", answer: "**Half-life (t₁/₂)** is the time in which the concentration of a reactant is reduced to **half** its initial value. For first-order: **t₁/₂ = 0.693/k** (independent of initial concentration). For zero-order: t₁/₂ = [A]₀/(2k)." }
  ],
  questions3: [
    { question: "Derive the integrated rate equation for a first-order reaction.", answer: "For first-order: Rate = −d[A]/dt = k[A]\n\nSeparating variables: d[A]/[A] = −k dt\n\nIntegrating from [A]₀ to [A] and 0 to t:\n\nln[A] − ln[A]₀ = −kt\n\n**ln([A]₀/[A]) = kt** or **k = (2.303/t) log([A]₀/[A])**\n\n**Half-life**: When [A] = [A]₀/2: kt₁/₂ = ln 2 → **t₁/₂ = 0.693/k**\n\nKey feature: t₁/₂ is **independent of initial concentration** for first-order reactions." },
    { question: "Explain collision theory of chemical reactions.", answer: "**Collision Theory** states that for a reaction to occur:\n\n1. **Reactant molecules must collide** (collision frequency Z)\n2. Collisions must have **sufficient energy** ≥ activation energy Ea\n3. Molecules must have **proper orientation** (steric factor P)\n\n**Rate = P × Z × e^(−Ea/RT)**\n\n**Effective collisions**: Only a small fraction of total collisions lead to products (those with E ≥ Ea and correct orientation).\n\n**Activation Energy (Ea)**: Minimum energy required for reactants to form the **activated complex** (transition state). Lower Ea → faster reaction." },
    { question: "A first-order reaction has k = 1.15 × 10⁻³ s⁻¹. How long will 5g reduce to 3g?", answer: "Given: k = 1.15 × 10⁻³ s⁻¹, [A]₀ = 5 g, [A] = 3 g\n\nUsing first-order equation:\nt = (2.303/k) × log([A]₀/[A])\n\nt = (2.303/1.15 × 10⁻³) × log(5/3)\n\nt = 2002.6 × log(1.667)\n\nt = 2002.6 × 0.2219\n\n**t = 444.38 s ≈ 444 s**" },
    { question: "What is activation energy? How does a catalyst affect it?", answer: "**Activation energy (Ea)** is the minimum extra energy that reactant molecules must possess over and above the average energy to undergo a successful collision and form products.\n\n**Effect of Catalyst**:\n- A catalyst provides an **alternative reaction pathway** with **lower activation energy**\n- More molecules have E ≥ Ea' (new, lower threshold) → rate increases\n- **Important**: Catalyst does NOT change ΔH (enthalpy change) or thermodynamic equilibrium — it only speeds up attainment of equilibrium\n- Catalyst lowers Ea for both forward and reverse reactions equally" }
  ],
  questions5: [
    { question: "Derive the integrated rate law for zero-order and first-order reactions. Compare their characteristics.", answer: "**Zero-Order Reaction**: Rate = k (independent of [A])\n\n−d[A]/dt = k → [A]₀ − [A] = kt → **[A] = [A]₀ − kt**\n\nHalf-life: t₁/₂ = [A]₀/(2k) — depends on [A]₀\nGraph: [A] vs t is a **straight line** with slope = −k\nExample: Decomposition of NH₃ on hot Pt surface\n\n**First-Order Reaction**: Rate = k[A]\n\n−d[A]/dt = k[A] → d[A]/[A] = −kdt\n\nIntegrating: **ln([A]₀/[A]) = kt** or k = (2.303/t)log([A]₀/[A])\n\nHalf-life: t₁/₂ = 0.693/k — **independent of [A]₀**\nGraph: ln[A] vs t is straight line with slope = −k\nExample: Radioactive decay, decomposition of N₂O₅\n\n**Comparison**:\n| Property | Zero Order | First Order |\n|----------|-----------|-------------|\n| Rate law | Rate = k | Rate = k[A] |\n| Units of k | mol L⁻¹ s⁻¹ | s⁻¹ |\n| Half-life | [A]₀/2k | 0.693/k |\n| t₁/₂ depends on [A]₀? | Yes | No |\n| Straight line plot | [A] vs t | ln[A] vs t |" },
    { question: "Explain the factors affecting the rate of a chemical reaction in detail.", answer: "**1. Concentration of Reactants**:\n- Higher concentration → more frequent collisions → faster rate\n- Rate law: Rate = k[A]ᵃ[B]ᵇ (experimentally determined)\n\n**2. Temperature**:\n- Rate roughly doubles per 10°C rise\n- Arrhenius equation: k = Ae^(−Ea/RT)\n- Higher T → more molecules with E ≥ Ea → more effective collisions\n\n**3. Nature of Reactants**:\n- Ionic reactions: Very fast (e.g., neutralisation)\n- Covalent bond breaking/forming: Slower\n- Surface area: Powdered reactants react faster than lumps\n\n**4. Catalyst**:\n- Provides alternative pathway with lower Ea\n- Positive catalyst increases rate; negative catalyst (inhibitor) decreases rate\n- Does not change ΔH or equilibrium position\n- Enzyme catalysis: highly specific, optimum pH and temperature\n\n**5. Surface Area**:\n- Greater surface area → more contact → faster reaction\n- Coal dust explodes; lump coal burns slowly\n\n**6. Radiation/Light**:\n- Photochemical reactions require light (e.g., H₂ + Cl₂ → 2HCl in presence of light)\n- Light provides activation energy for bond breaking" }
  ]
};
