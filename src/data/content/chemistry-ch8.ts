import type { ChapterContent } from "./physics-ch1";

export const chemistryCh8: ChapterContent = {
  topics: [
    {
      title: "Classification of Haloalkanes and Haloarenes",
      content: `## Haloalkanes and Haloarenes

### What are they?
Compounds obtained by replacing one or more H atoms of hydrocarbons by halogen atoms (F, Cl, Br, I).

- **Haloalkanes (alkyl halides)**: Halogen attached to sp³ carbon (R–X)
- **Haloarenes (aryl halides)**: Halogen attached to sp² carbon of benzene ring (Ar–X)

### Classification of Haloalkanes

#### By Number of Halogen Atoms
- Mono-, di-, tri-, tetra-haloalkanes

#### By Type of Carbon
| Type | Carbon bonded to X | Example |
|------|-------------------|---------|
| Primary (1°) | –CH₂X | CH₃CH₂Cl |
| Secondary (2°) | –CHX– | (CH₃)₂CHCl |
| Tertiary (3°) | –CX– | (CH₃)₃CCl |

### Nomenclature (IUPAC)
- Name as halo- prefix + parent alkane
- CH₃CH₂Br → Bromoethane
- CH₂=CHCl → Chloroethene (vinyl chloride)
- C₆H₅Cl → Chlorobenzene

> **Board Tip**: The classification as 1°, 2°, or 3° is crucial because it directly determines the mechanism of substitution (SN1 vs SN2) and elimination reactions.`
    },
    {
      title: "Preparation of Haloalkanes",
      content: `## Methods of Preparation

### 1. From Alcohols
- R–OH + HX → R–X + H₂O (reactivity: HI > HBr > HCl)
- R–OH + PCl₅ → R–Cl + POCl₃ + HCl
- 3R–OH + PCl₃ → 3R–Cl + H₃PO₃
- R–OH + SOCl₂ → R–Cl + SO₂ + HCl (**Darzen's method** — best, gaseous byproducts escape)

### 2. From Alkenes
- **Addition of HX** (Markovnikov): CH₃CH=CH₂ + HBr → CH₃CHBrCH₃
- **Anti-Markovnikov** (with peroxide): CH₃CH=CH₂ + HBr → CH₃CH₂CH₂Br (Kharasch effect)
- Addition of X₂: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br

### 3. Halogen Exchange
- **Finkelstein reaction**: R–Cl + NaI → R–I + NaCl (acetone solvent, NaCl precipitates)
- **Swarts reaction**: R–Cl + AgF → R–F + AgCl (for fluorides)

### 4. From Hydrocarbons
- Free radical halogenation: CH₄ + Cl₂ → CH₃Cl + HCl (UV light)
- Reactivity: 3° H > 2° H > 1° H

> **Exam Tip**: Darzen's method (SOCl₂) is preferred because both byproducts (SO₂, HCl) are gases and escape, giving pure product. This is a common "reason" question in boards.`
    },
    {
      title: "SN1 and SN2 Reactions",
      content: `## Nucleophilic Substitution Reactions

### SN2 Mechanism (Substitution, Nucleophilic, Bimolecular)
- **One step**: Bond breaking and bond making occur simultaneously
- Rate = k[R–X][Nu⁻] → depends on BOTH reactant and nucleophile
- **Walden inversion**: Complete inversion of configuration at chiral centre
- Backside attack by nucleophile
- Favoured by: **1° halides**, strong nucleophile, polar aprotic solvents

### SN1 Mechanism (Substitution, Nucleophilic, Unimolecular)
- **Two steps**: Step 1 — formation of carbocation (slow); Step 2 — nucleophilic attack (fast)
- Rate = k[R–X] → depends ONLY on substrate
- Racemisation occurs (attack from both sides of planar carbocation)
- Favoured by: **3° halides**, weak nucleophile, polar protic solvents

### Reactivity Order
- SN2: CH₃X > 1° > 2° > 3° (steric hindrance increases)
- SN1: 3° > 2° > 1° > CH₃X (carbocation stability)

### Comparison Table

| Feature | SN1 | SN2 |
|---------|-----|-----|
| Steps | Two | One |
| Rate law | First order | Second order |
| Intermediate | Carbocation | Transition state |
| Stereochemistry | Racemisation | Inversion |
| Substrate preference | 3° | 1°, CH₃ |

> **Common Mistake**: Students confuse inversion (SN2, 100% inverted) with racemisation (SN1, ~50:50 mixture). These are fundamentally different stereochemical outcomes.`
    },
    {
      title: "Elimination Reactions",
      content: `## Elimination Reactions

### What are Elimination Reactions?
Removal of HX from adjacent carbons to form a **double bond** (alkene).

### E1 Mechanism
- Two-step: Carbocation formed first, then base removes H⁺
- Follows same pattern as SN1 — competes with SN1 for 3° halides
- Favoured by: high temperature, weak base, 3° substrates

### E2 Mechanism
- One-step: Base removes H while X leaves simultaneously
- Anti-periplanar geometry required (H and X on opposite sides)
- Follows same pattern as SN2 — competes with SN2
- Favoured by: strong bulky base, high temperature

### Zaitsev's Rule
The alkene with the **most substituted double bond** (most stable) is the major product.

Example: CH₃CHBrCH₂CH₃ → CH₃CH=CHCH₃ (major, more substituted) + CH₃CH₂CH=CH₂ (minor)

### SN vs E Competition
| Condition | Favoured Reaction |
|-----------|------------------|
| Strong nucleophile, low temp | SN2 |
| Strong bulky base, high temp | E2 |
| Weak nucleophile, polar protic, 3° | SN1 / E1 |

> **Board Tip**: Zaitsev's rule and the competition between substitution and elimination are high-value conceptual questions. Always state both the conditions AND the reasoning.`
    },
    {
      title: "Reactions of Haloarenes",
      content: `## Reactions of Haloarenes (Aryl Halides)

### Low Reactivity of C–X bond in Aryl Halides
Aryl halides are much **less reactive** than alkyl halides toward nucleophilic substitution because:
1. **Resonance**: Lone pair of halogen delocalises into the ring → partial double bond character
2. **sp² carbon**: Shorter, stronger C–X bond
3. **Phenyl cation unstable**: Cannot form via SN1

### Nucleophilic Substitution (Special Conditions)
- **Dow's process**: C₆H₅Cl + NaOH → C₆H₅OH (623 K, 300 atm — harsh!)
- **With electron-withdrawing groups**: Reactivity increases (e.g., 2,4-dinitrochlorobenzene reacts easily with mild NaOH)

### Electrophilic Substitution
Halogens are **ortho/para directing** but **deactivating** (withdraw electrons by induction, donate by resonance)

- Friedel-Crafts alkylation/acylation
- Nitration, sulphonation, halogenation all give o/p products

### Ullmann Reaction
2C₆H₅I + Cu → C₆H₅–C₆H₅ (biphenyl) — coupling of aryl halides

### Wurtz-Fittig Reaction
C₆H₅Br + CH₃Br + 2Na → C₆H₅CH₃ + 2NaBr

> **Exam Tip**: The reason for low reactivity of aryl halides (resonance + sp² bond) is a 3-mark favourite. Always draw the resonance structures showing C=X partial double bond.`
    },
    {
      title: "Polyhalogen Compounds and Environmental Effects",
      content: `## Important Polyhalogen Compounds

### Dichloromethane (CH₂Cl₂ / Methylene chloride)
- Good solvent, used in paint removers and aerosol propellants
- Lower toxicity compared to chloroform and CCl₄

### Chloroform (CHCl₃)
- Used as solvent and anaesthetic (historically)
- Slowly oxidised by air to **phosgene** (COCl₂ — toxic!): 2CHCl₃ + O₂ → 2COCl₂ + 2HCl
- Stored in dark bottles with ethanol (prevents phosgene formation)

### Carbon Tetrachloride (CCl₄)
- Fire extinguisher, solvent, refrigerant
- Causes liver damage (toxic)
- Depletes ozone layer

### Freons (CFCs — Chlorofluorocarbons)
- Freon-12 (CCl₂F₂): Refrigerant, aerosol propellant
- **Ozone depletion**: CFCs release Cl radicals in stratosphere
  - CF₂Cl₂ → CF₂Cl + Cl• (UV)
  - Cl• + O₃ → ClO + O₂
  - ClO + O → Cl• + O₂ (Cl• regenerated — chain reaction)

### DDT (Dichlorodiphenyltrichloroethane)
- First synthetic insecticide, Nobel Prize to Paul Müller
- Non-biodegradable → **bioaccumulation** and **biomagnification**
- Banned in many countries due to environmental persistence

> **Board Tip**: Environmental effects of CFCs (ozone depletion mechanism) and DDT (biomagnification) are important for both chemistry and environmental science questions.`
    }
  ],
  notes: `# Haloalkanes and Haloarenes — Comprehensive Notes

## 1. Classification
- Haloalkanes: R–X (sp³ C); Haloarenes: Ar–X (sp² C)
- 1°, 2°, 3° based on carbon type

## 2. Preparation
- From alcohols: HX, PCl₅, PCl₃, SOCl₂ (Darzen's — best)
- From alkenes: HX addition (Markovnikov/anti-Markovnikov)
- Finkelstein (R–Cl → R–I with NaI), Swarts (R–Cl → R–F with AgF)

## 3. Nucleophilic Substitution
- SN2: one-step, inversion, 1° preferred, strong nucleophile
- SN1: two-step via carbocation, racemisation, 3° preferred, weak nucleophile
- Leaving group ability: I⁻ > Br⁻ > Cl⁻ > F⁻

## 4. Elimination
- E2: one-step, anti-periplanar, strong base
- E1: two-step via carbocation, weak base
- Zaitsev's rule: more substituted alkene is major product

## 5. Haloarenes
- Less reactive: resonance + sp² C–X bond
- Ortho/para directing but deactivating
- React under harsh conditions (Dow's process)

## 6. Polyhalogen Compounds
- CHCl₃ → phosgene (store in dark with ethanol)
- CFCs → ozone depletion (Cl radical chain)
- DDT → bioaccumulation, banned`,
  questions2: [
    { question: "Why are alkyl halides more reactive than aryl halides?", answer: "In **alkyl halides**, C–X bond is sp³ with no resonance → relatively easy to break. In **aryl halides**, the lone pair on halogen is delocalised into the benzene ring (**resonance**), giving partial double bond character to C–X → shorter, stronger bond → less reactive." },
    { question: "What is Walden inversion?", answer: "**Walden inversion** is the inversion of configuration at the chiral carbon during an **SN2 reaction**. The nucleophile attacks from the **back side** of the leaving group, causing the molecule to flip like an umbrella turning inside out, producing the opposite stereochemical configuration." },
    { question: "Arrange SN1 reactivity: CH₃X, C₂H₅X, (CH₃)₂CHX, (CH₃)₃CX.", answer: "**(CH₃)₃CX > (CH₃)₂CHX > C₂H₅X > CH₃X**. SN1 proceeds via carbocation intermediate. Stability of carbocation: 3° > 2° > 1° > methyl. More stable carbocation → faster SN1 reaction." },
    { question: "What is Saytzeff's rule?", answer: "**Saytzeff's (Zaitsev's) rule**: In elimination reactions, the more **substituted alkene** (with more alkyl groups on the double bond) is the **major product**. Example: 2-bromobutane + alc. KOH → but-2-ene (major) + but-1-ene (minor)." },
    { question: "Why is CHCl₃ stored in dark bottles with a little ethanol?", answer: "CHCl₃ (chloroform) slowly oxidises in sunlight and air to form **phosgene (COCl₂)**, a poisonous gas: 2CHCl₃ + O₂ → 2COCl₂ + 2HCl. **Ethanol** acts as a scavenger, converting any phosgene formed to harmless diethyl carbonate." },
    { question: "What is the Finkelstein reaction?", answer: "**Finkelstein reaction**: Treatment of an alkyl chloride/bromide with **NaI in acetone** to form an alkyl iodide: R–Cl + NaI → R–I + NaCl↓. The reaction is driven forward because **NaCl precipitates** out of acetone (insoluble), shifting equilibrium." }
  ],
  questions3: [
    { question: "Compare SN1 and SN2 mechanisms.", answer: "| Feature | SN1 | SN2 |\n|---------|-----|-----|\n| Steps | Two (carbocation intermediate) | One (concerted) |\n| Rate law | Rate = k[RX] | Rate = k[RX][Nu⁻] |\n| Substrate | 3° > 2° > 1° | CH₃X > 1° > 2° |\n| Stereochemistry | Racemisation | Walden inversion |\n| Solvent | Polar protic (favours) | Polar aprotic |\n| Nucleophile | Weak/strong both | Strong nucleophile needed |\n| Carbocation rearrangement | Possible | Not possible |" },
    { question: "Explain the Wurtz reaction and Fittig reaction.", answer: "**Wurtz Reaction**: Two alkyl halides react with **sodium in dry ether** to form a higher alkane:\n2R–X + 2Na → R–R + 2NaX\n\nExample: 2CH₃CH₂Br + 2Na → CH₃CH₂CH₂CH₃ + 2NaBr\n\n**Limitation**: Mixture of products with different alkyl halides (cross-coupling).\n\n**Fittig Reaction**: Similar but uses **aryl halides**:\n2ArX + 2Na → Ar–Ar + 2NaX (in dry ether)\nExample: 2C₆H₅Cl + 2Na → C₆H₅–C₆H₅ (biphenyl)\n\n**Wurtz-Fittig Reaction**: Mixed alkyl and aryl halide: ArX + RX + 2Na → Ar–R + 2NaX (aryl-alkyl coupling preferentially)" },
    { question: "Explain why vinyl halides and aryl halides are less reactive towards nucleophilic substitution.", answer: "**Aryl halides** (C₆H₅X):\n1. **Resonance**: Lone pair on X delocalises into benzene ring → C–X gets partial double bond character → shorter, stronger bond\n2. **sp² carbon**: C–X bond in ArX is sp² (stronger than sp³ in RX)\n3. **Phenyl cation** is very unstable → SN1 difficult\n4. **Steric hindrance**: Ring blocks backside attack → SN2 difficult\n\n**Vinyl halides** (CH₂=CHX):\n1. Same resonance effect: lone pair on X conjugates with C=C\n2. sp² C–X bond is stronger\n3. Vinyl cation is very unstable (SN1 difficult)\n4. π-electron cloud repels nucleophile (SN2 difficult)\n\nBoth react only under **drastic conditions** (high T, pressure, or special reagents like NaNH₂)." }
  ],
  questions5: [
    { question: "Discuss the preparation of haloalkanes by: (i) halogenation of alkanes, (ii) from alcohols, (iii) Sandmeyer's reaction. Give mechanism of any one.", answer: "**Preparation of Haloalkanes**:\n\n**(i) Free Radical Halogenation of Alkanes**:\nR–H + X₂ → R–X + HX (UV light or heat)\nReactivity of halogens: F₂ > Cl₂ > Br₂ > I₂\nReactivity of H: 3° > 2° > 1° (stability of radical)\n\n**(ii) From Alcohols**:\n- R–OH + HX → R–X + H₂O (reactivity: HI > HBr > HCl)\n- R–OH + PCl₅ → R–Cl + POCl₃ + HCl\n- R–OH + SOCl₂ → R–Cl + SO₂ + HCl (**best method** — gaseous byproducts escape)\n- 3R–OH + PBr₃ → 3R–Br + H₃PO₃\n\n**(iii) Sandmeyer's Reaction**:\nArN₂⁺Cl⁻ + CuCl/HCl → ArCl + N₂\nArN₂⁺Cl⁻ + CuBr/HBr → ArBr + N₂\nArN₂⁺Cl⁻ + CuCN/KCN → ArCN + N₂\n\n**Mechanism of SN2 (from alcohols + HBr)**:\nStep 1: R–OH + H⁺ → R–OH₂⁺ (protonation)\nStep 2: Br⁻ attacks C from backside while H₂O leaves → R–Br + H₂O\nConcerted for 1° alcohols; via carbocation (SN1) for 3° alcohols." },
    { question: "What are polyhalogen compounds? Discuss the preparation, properties, and environmental effects of DDT, chloroform, and freons.", answer: "**Polyhalogen Compounds** contain multiple halogen atoms.\n\n**1. Chloroform (CHCl₃)**:\n- Preparation: CH₄ + 3Cl₂ → CHCl₃ + 3HCl (excess Cl₂); or acetone + bleaching powder\n- Properties: Sweet-smelling liquid; anaesthetic (historically)\n- Oxidises to **phosgene** (COCl₃) in air/light → toxic; stored in dark bottles with ethanol\n- Used as solvent and in synthesis\n\n**2. Freons (CFCs, e.g., CCl₂F₂)**:\n- Preparation: SbF₃/SbCl₅ catalyst (Swarts reaction on CCl₄)\n- Properties: Non-toxic, non-flammable, stable — ideal refrigerants\n- **Environmental effect**: In stratosphere, UV breaks C–Cl bond → Cl radical destroys ozone: Cl + O₃ → ClO + O₂; ClO + O → Cl + O₂ (chain reaction). One Cl atom destroys thousands of O₃ molecules → **ozone hole**\n- **Montreal Protocol** (1987): Phased out CFCs\n\n**3. DDT (Dichlorodiphenyltrichloroethane)**:\n- Preparation: Chlorobenzene + trichloroacetaldehyde (chloral) + H₂SO₄\n- Properties: Effective insecticide (Paul Müller, Nobel 1948)\n- **Environmental effect**: Not biodegradable → **bioaccumulation** through food chain → toxic to wildlife and humans\n- Banned in many countries; replaced by biodegradable alternatives" }
  ]
};
