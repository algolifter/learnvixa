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
- HVZ reaction for α-halogenation`
};
