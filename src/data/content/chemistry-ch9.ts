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
- Cleavage by HI; anisole undergoes EAS`,
  questions2: [
    { question: "Why are phenols more acidic than alcohols?", answer: "In phenols, the **phenoxide ion (C₆H₅O⁻)** is stabilised by **resonance** — the negative charge is delocalised over the benzene ring. In alcohols, the alkoxide ion (RO⁻) has no such stabilisation. Greater stability of conjugate base → greater acidity. pKa of phenol ≈ 10 vs ethanol ≈ 16." },
    { question: "What is Lucas test? How does it distinguish 1°, 2°, 3° alcohols?", answer: "**Lucas reagent** = conc. HCl + anhydrous ZnCl₂. 3° alcohol → **immediate turbidity** (fastest SN1, stable 3° carbocation). 2° alcohol → turbidity in **5 minutes**. 1° alcohol → turbidity only on **heating**. Turbidity is due to formation of insoluble alkyl chloride." },
    { question: "What happens when ethanol reacts with sodium metal?", answer: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑. Sodium ethoxide is formed with the evolution of **hydrogen gas**. This shows the acidic nature of the O–H bond in alcohols. Reactivity with Na: 1° > 2° > 3° (steric effect)." },
    { question: "Write the Kolbe's reaction.", answer: "**Kolbe's reaction**: Sodium phenoxide is treated with CO₂ at 125°C and 4-7 atm, followed by acidification: C₆H₅ONa + CO₂ → sodium salicylate → **salicylic acid** (2-hydroxybenzoic acid) on acidification. This is an electrophilic substitution at the ortho position." },
    { question: "What is Williamson's synthesis?", answer: "**Williamson's synthesis** is the preparation of **ethers** by treating an alkyl halide with sodium alkoxide: R–ONa + R'–X → R–O–R' + NaX. Best with **primary alkyl halides** (SN2 mechanism). Secondary/tertiary halides give elimination products instead." },
    { question: "What happens when phenol reacts with bromine water?", answer: "Phenol + Br₂(aq) → **2,4,6-tribromophenol** (white precipitate) + 3HBr. The –OH group strongly activates the benzene ring, so all three ortho/para positions are substituted. This is a **qualitative test** for phenol." }
  ],
  questions3: [
    { question: "Explain the mechanism of acid-catalysed dehydration of ethanol.", answer: "**Dehydration**: C₂H₅OH → CH₂=CH₂ + H₂O (conc. H₂SO₄, 443 K)\n\n**Mechanism (E1 for 2° and 3°; E2 for 1°)**:\nStep 1: **Protonation**: C₂H₅OH + H⁺ → C₂H₅OH₂⁺ (oxonium ion)\nStep 2: **Loss of water**: C₂H₅OH₂⁺ → C₂H₅⁺ + H₂O (carbocation forms)\nStep 3: **Elimination**: C₂H₅⁺ → CH₂=CH₂ + H⁺\n\n**Ease of dehydration**: 3° > 2° > 1° (follows carbocation stability)\nTemperature: 3° (343 K) < 2° (373 K) < 1° (443 K)\n\n**Saytzeff's rule**: More substituted alkene is the major product." },
    { question: "Compare the reactions of phenol with dilute and concentrated nitric acid.", answer: "**With dilute HNO₃** (mild conditions):\nC₆H₅OH + dil. HNO₃ → mixture of **o-nitrophenol + p-nitrophenol**\n- Electrophilic aromatic substitution; –OH directs ortho/para\n- o-nitrophenol is steam-volatile (intramolecular H-bonding), p-isomer is not\n\n**With concentrated HNO₃** (+ conc. H₂SO₄):\nC₆H₅OH + conc. HNO₃ → **2,4,6-trinitrophenol** (picric acid)\n- All three positions substituted\n- Picric acid is a strong acid and explosive\n- Yellow crystalline solid; used in burn treatment historically" },
    { question: "Explain the Reimer-Tiemann reaction.", answer: "**Reimer-Tiemann Reaction**: Phenol is treated with **CHCl₃ and NaOH** (aqueous) and then acidified.\n\nC₆H₅OH + CHCl₃ + 3NaOH → **salicylaldehyde** (o-hydroxybenzaldehyde) + 3NaCl + 2H₂O\n\n**Mechanism**:\n1. CHCl₃ + NaOH → :CCl₂ (**dichlorocarbene** — electrophile)\n2. Dichlorocarbene attacks the ortho position of phenoxide ion\n3. Hydrolysis of the –CHCl₂ group gives –CHO (aldehyde)\n\n**Key point**: If CCl₄ is used instead of CHCl₃ → **salicylic acid** is formed (Kolbe-type product). This is a useful distinction for board exams." }
  ],
  questions5: [
    { question: "Discuss the preparation and chemical reactions of phenol. Explain any three named reactions.", answer: "**Preparation of Phenol**:\n1. **From chlorobenzene (Dow's process)**: C₆H₅Cl + NaOH → C₆H₅OH (623 K, 320 atm)\n2. **From benzene sulphonic acid**: C₆H₅SO₃Na + NaOH(fuse) → C₆H₅ONa → C₆H₅OH\n3. **From diazonium salt**: C₆H₅N₂⁺Cl⁻ + H₂O (warm) → C₆H₅OH + N₂ + HCl\n4. **Cumene process** (industrial): C₆H₅CH(CH₃)₂ + O₂ → cumene hydroperoxide → phenol + acetone\n\n**Reactions of Phenol**:\n1. **Acidity**: Phenol + NaOH → C₆H₅ONa + H₂O (dissolves in NaOH, not NaHCO₃)\n2. **Bromination**: Br₂(aq) → 2,4,6-tribromophenol (white ppt)\n3. **Nitration**: dil. HNO₃ → o- and p-nitrophenol; conc. HNO₃ → picric acid\n\n**Named Reactions**:\n1. **Kolbe's Reaction**: C₆H₅ONa + CO₂ (125°C, 4-7 atm) → salicylic acid. Electrophilic substitution by CO₂ at ortho position of phenoxide.\n\n2. **Reimer-Tiemann Reaction**: C₆H₅OH + CHCl₃ + NaOH → salicylaldehyde. Dichlorocarbene (:CCl₂) attacks ortho position; hydrolysis gives –CHO.\n\n3. **Williamson's Synthesis** (for ethers): C₆H₅ONa + CH₃I → C₆H₅OCH₃ (anisole). SN2 reaction with primary alkyl halide." }
  ]
};
