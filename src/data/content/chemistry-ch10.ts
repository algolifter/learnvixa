import type { ChapterContent } from "./physics-ch1";

export const chemistryCh10: ChapterContent = {
  topics: [
    {
      title: "Aldehydes and Ketones – Structure and Preparation",
      content: `## Aldehydes, Ketones and Carboxylic Acids

### Carbonyl Group
The **C=O** (carbonyl) group is the functional group of aldehydes and ketones.
- **Aldehydes**: Carbonyl at terminal position (R–CHO)
- **Ketones**: Carbonyl between two carbon groups (R–CO–R')

### Preparation of Aldehydes

#### 1. Oxidation of Primary Alcohols
- PCC (Pyridinium chlorochromate): R–CH₂OH → R–CHO (mild, stops at aldehyde)
- K₂Cr₂O₇/H₂SO₄: Goes further to carboxylic acid

#### 2. From Acyl Chlorides (Rosenmund Reduction)
R–COCl + H₂/Pd-BaSO₄ → R–CHO (BaSO₄ poisons catalyst, prevents over-reduction)

#### 3. From Nitriles (Stephen Reduction)
R–CN + SnCl₂/HCl → R–CH=NH → R–CHO (hydrolysis)

#### 4. Gattermann–Koch Reaction
C₆H₆ + CO + HCl → C₆H₅CHO (AlCl₃/CuCl catalyst; formylation of benzene)

### Preparation of Ketones
- Oxidation of 2° alcohols
- From acyl chlorides + R₂Cd (dialkylcadmium)
- Friedel–Crafts acylation: ArH + RCOCl → ArCOR (AlCl₃)

> **Exam Tip**: Rosenmund reduction specifically gives aldehydes. The "poisoned" Pd-BaSO₄ catalyst is what prevents further reduction — this detail is frequently tested.`
    },
    {
      title: "Nucleophilic Addition Reactions",
      content: `## Nucleophilic Addition to Carbonyl Group

The carbonyl carbon is **electrophilic** (δ+) due to the polar C=O bond. Nucleophiles attack this carbon.

### Reactivity Order
HCHO > other aldehydes > ketones (steric and electronic effects)

### Important Reactions

#### 1. With HCN (Cyanohydrin Formation)
R–CHO + HCN → R–CH(OH)CN (cyanohydrin)

#### 2. With NaHSO₃
R–CHO + NaHSO₃ → R–CH(OH)SO₃Na (bisulphite addition; used for purification)

#### 3. With Grignard Reagents
- HCHO + RMgX → 1° alcohol
- R'CHO + RMgX → 2° alcohol
- R'COR'' + RMgX → 3° alcohol

#### 4. With Alcohols
- Aldehydes + alcohol → hemiacetal → acetal (acid catalyst)
- Ketones + alcohol → hemiketal → ketal

#### 5. With NH₃ Derivatives
| Reagent | Product | Name |
|---------|---------|------|
| NH₂OH | C=N–OH | Oxime |
| NH₂–NH₂ | C=N–NH₂ | Hydrazone |
| C₆H₅NHNH₂ | C=N–NHC₆H₅ | Phenylhydrazone |
| 2,4-DNP | Yellow ppt | 2,4-DNP derivative |

> **Board Tip**: 2,4-DNP test gives a yellow/orange precipitate and is the standard test for detecting the carbonyl group.`
    },
    {
      title: "Other Reactions and Tests",
      content: `## Important Reactions

### Aldol Condensation
Aldehydes/ketones with α-hydrogen undergo base-catalysed self-condensation:
CH₃CHO + CH₃CHO → CH₃CH(OH)CH₂CHO (β-hydroxy aldehyde = aldol)
On heating → CH₃CH=CHCHO + H₂O (crotonaldehyde)

### Cannizzaro Reaction
Aldehydes **without α-hydrogen** undergo self-oxidation-reduction:
2HCHO + NaOH → HCOONa + CH₃OH (one oxidised, one reduced)

### Clemmensen Reduction
C=O → CH₂ using Zn-Hg/conc. HCl (acidic conditions)

### Wolff–Kishner Reduction
C=O → CH₂ using NH₂NH₂/KOH (basic conditions)

### Distinguishing Tests

| Test | Aldehyde | Ketone |
|------|----------|--------|
| Tollens' test (silver mirror) | ✓ Positive | ✗ |
| Fehling's test (red ppt) | ✓ Positive | ✗ |
| Iodoform test | Only CH₃CHO | Methyl ketones only |
| 2,4-DNP test | ✓ | ✓ |

### Carboxylic Acids — Key Points
- Most acidic organic functional group (among common ones)
- Acidity order: HCOOH is strongest among simple carboxylic acids
- Electron-withdrawing substituents increase acidity
- Hell–Volhard–Zelinsky (HVZ) reaction: α-halogenation using X₂/P

> **Exam Tip**: Aldol condensation (with α-H) vs Cannizzaro (without α-H) — know which aldehydes undergo which reaction. HCHO and C₆H₅CHO undergo Cannizzaro.`
    }
  ],
  notes: `# Aldehydes, Ketones and Carboxylic Acids — Notes

## 1. Structure
- Aldehydes: terminal C=O; Ketones: internal C=O
- Carbonyl carbon is electrophilic

## 2. Preparation
- Aldehydes: PCC oxidation, Rosenmund, Stephen, Gattermann–Koch
- Ketones: 2° alcohol oxidation, Friedel–Crafts acylation

## 3. Nucleophilic Addition
- Reactivity: HCHO > aldehydes > ketones
- HCN, NaHSO₃, Grignard, NH₃ derivatives

## 4. Key Reactions
- Aldol (with α-H) vs Cannizzaro (without α-H)
- Clemmensen (acidic) vs Wolff–Kishner (basic) reduction
- Tests: Tollens', Fehling's, iodoform, 2,4-DNP

## 5. Carboxylic Acids
- Acidic: EWG increases, EDG decreases acidity
- HVZ reaction for α-halogenation`,
  questions2: [
    { question: "What is Rosenmund reduction?", answer: "**Rosenmund reduction**: Acyl chloride is reduced to an **aldehyde** using H₂/Pd-BaSO₄ (poisoned catalyst): RCOCl + H₂ → RCHO + HCl. The catalyst is poisoned (deactivated by BaSO₄) to prevent further reduction to alcohol." },
    { question: "Distinguish between aldehydes and ketones using Tollens' test.", answer: "**Tollens' test**: Warm the compound with **ammoniacal AgNO₃** (Tollens' reagent). **Aldehydes** reduce Ag⁺ to metallic Ag → **silver mirror** on the test tube wall. **Ketones** do not react (no silver mirror). This is because aldehydes are easily oxidised; ketones resist mild oxidation." },
    { question: "What is the Cannizzaro reaction?", answer: "**Cannizzaro reaction**: Aldehydes **without α-hydrogen** undergo self-oxidation and reduction (disproportionation) in concentrated NaOH: 2HCHO + NaOH → HCOONa + CH₃OH. One molecule is oxidised to acid (salt), the other is reduced to alcohol." },
    { question: "What is an aldol condensation?", answer: "**Aldol condensation**: Aldehydes/ketones with **α-hydrogen** react with dilute NaOH to form **β-hydroxy aldehyde** (aldol), which on heating loses water to give **α,β-unsaturated aldehyde**: 2CH₃CHO → CH₃CH(OH)CH₂CHO → CH₃CH=CHCHO + H₂O." },
    { question: "Why are carboxylic acids more acidic than alcohols?", answer: "The **carboxylate ion (RCOO⁻)** is stabilised by **resonance** — the negative charge is equally distributed over both oxygen atoms. The alkoxide ion (RO⁻) lacks this delocalisation. Greater conjugate base stability → stronger acid. pKa of CH₃COOH ≈ 4.75 vs C₂H₅OH ≈ 16." },
    { question: "What is the iodoform test?", answer: "Compounds with **CH₃CO–** or **CH₃CH(OH)–** group give a **yellow precipitate of CHI₃** (iodoform) when treated with I₂/NaOH: CH₃COR + 3I₂ + 4NaOH → CHI₃↓ + RCOONa. Examples: acetone, ethanol, acetaldehyde. Methanol does NOT give this test." }
  ],
  questions3: [
    { question: "Explain nucleophilic addition mechanism to carbonyl compounds.", answer: "**Nucleophilic Addition to C=O**:\n\nCarbonyl carbon is **electrophilic** (δ+) due to C=O polarity.\n\n**Mechanism**:\nStep 1: Nucleophile (Nu⁻) attacks the electrophilic carbon from above or below the trigonal plane\nStep 2: π electrons shift to oxygen → alkoxide intermediate\nStep 3: Protonation gives the final product\n\n**Reactivity order**: HCHO > other aldehydes > ketones\n(More alkyl groups → more steric hindrance + electron donation → less electrophilic carbon)\n\n**Examples**:\n- HCN addition: R₂C=O + HCN → R₂C(OH)(CN) (cyanohydrin)\n- NaHSO₃: R₂C=O + NaHSO₃ → R₂C(OH)(SO₃Na)\n- Grignard: R₂C=O + R'MgX → R₂R'C–OMgX → R₂R'C–OH" },
    { question: "Compare Clemmensen and Wolff-Kishner reductions.", answer: "Both reduce **C=O to CH₂** (carbonyl to methylene):\n\n**Clemmensen Reduction** (Acidic conditions):\n- Reagent: Zn-Hg amalgam + conc. HCl\n- RCOR' → RCH₂R'\n- Cannot use with compounds sensitive to acid\n\n**Wolff-Kishner Reduction** (Basic conditions):\n- Reagent: NH₂NH₂ (hydrazine) + KOH/ethylene glycol (high boiling point)\n- RCOR' → RCH₂R' (via hydrazone intermediate)\n- Cannot use with compounds sensitive to base\n\n**Choice**: Use Clemmensen for base-sensitive substrates; Wolff-Kishner for acid-sensitive substrates.\n\n**Key**: Both give same product but under opposite conditions — a common comparison question in boards." },
    { question: "How does the nature of substituents affect the acidity of carboxylic acids?", answer: "**Acid strength depends on stability of carboxylate ion (RCOO⁻)**:\n\n**Electron-Withdrawing Groups (EWG)** — increase acidity:\n- Stabilise RCOO⁻ by dispersing negative charge\n- –NO₂, –Cl, –F, –CN, –CF₃\n- Closer to COOH → stronger effect\n- Example: Cl₃CCOOH > Cl₂CHCOOH > ClCH₂COOH > CH₃COOH\n\n**Electron-Donating Groups (EDG)** — decrease acidity:\n- Intensify negative charge on COO⁻ → destabilise\n- –CH₃, –C₂H₅, –OCH₃\n- (CH₃)₃CCOOH < (CH₃)₂CHCOOH < CH₃CH₂COOH < CH₃COOH\n\n**Benzoic acid**: –NO₂ at para > meta > ortho increases acidity; –OH, –NH₂ decrease acidity\n\n**Formic acid (HCOOH)** is stronger than acetic acid (CH₃COOH) because CH₃ is electron-donating." }
  ],
  questions5: [
    { question: "Discuss the preparation and reactions of aldehydes and ketones. Include mechanisms where possible.", answer: "**Preparation**:\n1. **Oxidation of alcohols**: 1° alcohol → aldehyde (PCC/mild); 2° alcohol → ketone (K₂Cr₂O₇/H₂SO₄)\n2. **Rosenmund reduction**: RCOCl + H₂/Pd-BaSO₄ → RCHO\n3. **Stephen's reaction**: RCN + SnCl₂/HCl → RCHO (via imine)\n4. **Ozonolysis**: Alkene + O₃ → ozonide → RCHO/R₂CO (Zn/H₂O)\n5. **Friedel-Crafts acylation**: C₆H₆ + RCOCl → C₆H₅COR (AlCl₃ catalyst)\n\n**Reactions**:\n\n**Nucleophilic Addition** (Mechanism: Nu⁻ attacks δ+ carbon → alkoxide → protonation):\n- HCN → cyanohydrin; NaHSO₃ → bisulphite adduct; RMgX → alcohol; NH₃ derivatives → various products\n\n**Oxidation**: Aldehydes → carboxylic acids (Tollens', Fehling's, K₂Cr₂O₇)\n- Tollens': RCHO + 2Ag(NH₃)₂⁺ → RCOO⁻ + 2Ag↓ (silver mirror)\n- Fehling's: RCHO + Cu²⁺ → RCOO⁻ + Cu₂O↓ (red ppt)\n\n**Reduction**: NaBH₄/LiAlH₄ → alcohol; Clemmensen (Zn-Hg/HCl) or Wolff-Kishner (N₂H₄/KOH) → CH₂\n\n**α-Hydrogen reactions**: Aldol condensation (with α-H); Cannizzaro (without α-H); Iodoform (CH₃CO– group)\n\n**Tests**: Tollens' (Ag mirror), Fehling's (Cu₂O red ppt), 2,4-DNP (yellow/orange ppt for all C=O), iodoform (yellow CHI₃ for CH₃CO–)" }
  ]
};
