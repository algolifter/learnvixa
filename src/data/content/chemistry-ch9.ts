import type { ChapterContent } from "./physics-ch1";

export const chemistryCh9: ChapterContent = {
  topics: [
    {
      title: "Classification of Alcohols",
      content: `## Alcohols, Phenols and Ethers

### Alcohols
**Alcohols** contain a hydroxyl group (–OH) attached to a saturated carbon atom.

### Classification by Carbon Type
- **Primary (1°)**: –OH on a primary carbon (CH₃CH₂OH)
- **Secondary (2°)**: –OH on a secondary carbon ((CH₃)₂CHOH)
- **Tertiary (3°)**: –OH on a tertiary carbon ((CH₃)₃COH)

### Classification by Number of –OH Groups
- **Monohydric**: One –OH (ethanol)
- **Dihydric**: Two –OH (ethylene glycol)
- **Trihydric**: Three –OH (glycerol)

### Phenols
–OH group attached directly to a **benzene ring**. More acidic than alcohols due to resonance stabilisation of phenoxide ion.

### Ethers
General formula: R–O–R' (two alkyl/aryl groups linked by oxygen).
- **Simple ethers**: Both groups same (diethyl ether)
- **Mixed ethers**: Different groups (methyl ethyl ether)

> **Exam Tip**: Phenols are more acidic than alcohols because the phenoxide ion is resonance-stabilised. This comparison is a very common board question.`
    },
    {
      title: "Preparation of Alcohols and Phenols",
      content: `## Preparation Methods

### Alcohols

#### 1. From Alkenes (Hydration)
- **Acid-catalysed hydration**: Markovnikov addition
  - CH₂=CH₂ + H₂O → CH₃CH₂OH (H₂SO₄ catalyst)
- **Hydroboration-oxidation**: Anti-Markovnikov addition
  - CH₂=CH₂ → (with B₂H₆, then H₂O₂/NaOH) → CH₃CH₂OH

#### 2. From Carbonyl Compounds (Reduction)
- Aldehydes → Primary alcohols (NaBH₄ or LiAlH₄)
- Ketones → Secondary alcohols
- Carboxylic acids/esters → Primary alcohols (LiAlH₄ only)

#### 3. From Grignard Reagents
- HCHO + RMgX → 1° alcohol
- R'CHO + RMgX → 2° alcohol
- R'COR'' + RMgX → 3° alcohol

### Phenols

#### 1. From Haloarenes (Dow's Process)
C₆H₅Cl + NaOH → C₆H₅OH (623 K, 320 atm)

#### 2. From Benzenesulphonic Acid
C₆H₅SO₃H + NaOH → C₆H₅ONa → C₆H₅OH

#### 3. From Diazonium Salts
C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl (warm)

> **Board Tip**: Grignard reagent reactions are high-weightage. Remember: HCHO gives 1°, other aldehydes give 2°, ketones give 3° alcohols.`
    },
    {
      title: "Reactions of Alcohols",
      content: `## Chemical Reactions of Alcohols

### 1. Reactions Involving Cleavage of O–H Bond
- **With sodium**: 2R–OH + 2Na → 2R–ONa + H₂ (reactivity: 1° > 2° > 3°)
- **Esterification**: R–OH + R'COOH ⇌ R'COOR + H₂O (H⁺ catalyst)
- **Acidity order**: 1° > 2° > 3° (opposite of carbocation stability)

### 2. Reactions Involving Cleavage of C–O Bond
- **With HX**: R–OH + HX → R–X + H₂O (reactivity: HI > HBr > HCl)
  - Lucas test: 3° reacts immediately, 2° in 5 min, 1° requires heating
- **With PCl₅**: R–OH + PCl₅ → R–Cl + POCl₃ + HCl
- **Dehydration**: Forms alkenes (H₂SO₄, heat)
  - 1° alcohol: 443 K; 2°: 373 K; 3°: 343 K (Saytzeff rule applies)

### 3. Oxidation
- **1° alcohol** → Aldehyde → Carboxylic acid (PCC gives only aldehyde)
- **2° alcohol** → Ketone
- **3° alcohol** → Resistant (requires strong oxidants → cleavage)

### Victor Meyer's Test
Distinguishes 1°, 2°, 3° alcohols by colour:
- 1°: Red; 2°: Blue; 3°: No colour

> **Exam Tip**: Dehydration ease: 3° > 2° > 1° (follows carbocation stability). Lucas test and Victor Meyer's test are favourite short-answer questions.`
    },
    {
      title: "Reactions of Phenols and Ethers",
      content: `## Phenol Reactions

### Electrophilic Aromatic Substitution
–OH is a strong **activating** and **ortho/para directing** group.

- **Nitration**: Dilute HNO₃ → o- and p-nitrophenol; Conc. HNO₃ → 2,4,6-trinitrophenol (picric acid)
- **Halogenation**: Br₂ water → 2,4,6-tribromophenol (white precipitate) — used as a test
- **Kolbe's Reaction**: PhONa + CO₂ → salicylic acid (ortho-hydroxybenzoic acid)
- **Reimer–Tiemann Reaction**: PhOH + CHCl₃ + NaOH → salicylaldehyde (o-hydroxybenzaldehyde)

### Acidity of Phenols
- Phenol (pKa ~10) > Water > Alcohols
- Electron-withdrawing groups (–NO₂) increase acidity
- Electron-donating groups (–CH₃) decrease acidity

## Ether Reactions

### Cleavage by HI
- R–O–R' + HI → R–I + R'–OH (excess HI → both form R–I)
- Mechanism: SN2 for 1° alkyl; SN1 for 3° alkyl

### Electrophilic Substitution in Anisole
–OCH₃ is activating and ortho/para directing (like –OH but weaker).

> **Board Tip**: Kolbe's reaction and Reimer–Tiemann reaction are named reactions frequently asked. Memorise products and conditions carefully.`
    }
  ],
  notes: `# Alcohols, Phenols and Ethers — Notes

## 1. Classification
- Alcohols: 1°, 2°, 3° based on carbon type
- Phenols: –OH on benzene ring; more acidic than alcohols
- Ethers: R–O–R'; simple or mixed

## 2. Preparation
- Alcohols: hydration, reduction, Grignard reagents
- Phenols: Dow's process, from diazonium salts

## 3. Reactions of Alcohols
- O–H cleavage: Na metal, esterification
- C–O cleavage: HX, PCl₅, dehydration
- Oxidation: 1°→aldehyde→acid; 2°→ketone

## 4. Phenol Reactions
- EAS: nitration, bromination, Kolbe's, Reimer–Tiemann
- Acidity: phenol > water > alcohol

## 5. Ethers
- Cleavage by HI; anisole undergoes EAS`
};
