import type { ChapterContent } from "./physics-ch1";

export const chemistryCh11: ChapterContent = {
  topics: [
    {
      title: "Classification and Preparation of Amines",
      content: `## Amines

### Classification
- **Primary (1°)**: R–NH₂ (one alkyl group on N)
- **Secondary (2°)**: R₂NH (two alkyl groups)
- **Tertiary (3°)**: R₃N (three alkyl groups)

### Preparation

#### 1. Ammonolysis of Alkyl Halides
R–X + NH₃ → R–NH₂ → R₂NH → R₃N → R₄N⁺X⁻
(Mixture of products; use excess NH₃ for 1° amine)

#### 2. Gabriel Phthalimide Synthesis
Gives **pure primary amines** only.
Phthalimide + KOH → potassium phthalimide + R–X → N-alkylphthalimide → R–NH₂ (hydrolysis)

#### 3. Reduction of Nitro Compounds
R–NO₂ + 3H₂ → R–NH₂ + 2H₂O (Ni/Pt catalyst or Sn/HCl)
C₆H₅NO₂ → C₆H₅NH₂ (aniline) — most important for aromatic amines

#### 4. Hoffmann Bromamide Degradation
R–CONH₂ + Br₂ + 4NaOH → R–NH₂ + Na₂CO₃ + 2NaBr + 2H₂O
Product has **one less carbon** than starting amide.

> **Exam Tip**: Gabriel synthesis gives only 1° amines. Hoffmann degradation reduces chain length by one carbon — both are named reactions asked frequently.`
    },
    {
      title: "Properties and Reactions of Amines",
      content: `## Physical and Chemical Properties

### Basicity of Amines
In aqueous solution: **Aliphatic amines > NH₃ > Aromatic amines**

In gas phase: 3° > 2° > 1° (inductive effect only)
In aqueous solution: 2° > 1° > 3° (steric + solvation effects)

Aromatic amines are weaker bases because the lone pair is delocalised into the ring.

### Important Reactions

#### 1. Acylation
R–NH₂ + CH₃COCl → R–NHCOCH₃ + HCl (acetylation)

#### 2. Carbylamine Test (Isocyanide Test)
**Only primary amines** give this test:
R–NH₂ + CHCl₃ + 3KOH → R–NC (foul-smelling isocyanide) + 3KCl + 3H₂O

#### 3. Reaction with Nitrous Acid (HNO₂)
- **1° aliphatic**: R–NH₂ + HNO₂ → R–OH + N₂ + H₂O (unstable diazonium)
- **1° aromatic**: ArNH₂ + HNO₂ → ArN₂⁺Cl⁻ (stable diazonium salt, 273–278 K)
- **2° amine**: → N-nitrosoamine (yellow oily substance)
- **3° amine**: aromatic gives p-nitroso compound; aliphatic forms salt

#### 4. Hinsberg Test
Distinguishes 1°, 2°, 3° amines using benzenesulphonyl chloride (C₆H₅SO₂Cl):
- 1°: Dissolves in NaOH (acidic H on N)
- 2°: Insoluble product
- 3°: No reaction

> **Board Tip**: Carbylamine test = only 1° amines. Hinsberg test = distinguishes all three types. Diazonium salt formation = only 1° aromatic amines at low temperature.`
    },
    {
      title: "Diazonium Salts and Their Reactions",
      content: `## Diazonium Salts

### Formation
ArNH₂ + NaNO₂ + 2HCl → ArN₂⁺Cl⁻ + NaCl + 2H₂O (at 273–278 K)
This process is called **diazotisation**.

### Reactions Involving Loss of N₂

| Reaction | Reagent | Product |
|----------|---------|---------|
| Sandmeyer | CuCl/HCl | ArCl |
| Sandmeyer | CuBr/HBr | ArBr |
| Sandmeyer | CuCN/KCN | ArCN |
| Gattermann | Cu/HCl | ArCl |
| Balz–Schiemann | HBF₄ | ArF |
| With H₃PO₂ | — | ArH (reduction) |
| With H₂O | warm | ArOH |
| With KI | — | ArI |

### Reactions Retaining N₂ (Coupling Reactions)
ArN₂⁺ + C₆H₅OH → Ar–N=N–C₆H₄OH (azo dye, para product)
ArN₂⁺ + C₆H₅NH₂ → Ar–N=N–C₆H₄NH₂

Coupling occurs at **para position** of the activated ring. Azo dyes are coloured compounds used as indicators (methyl orange) and dyes.

### Importance
Diazonium salts are versatile intermediates — they allow introduction of –OH, –X, –CN, –H, –NO₂ groups onto benzene ring that may be difficult to introduce directly.

> **Exam Tip**: Sandmeyer reaction (CuX) and coupling reactions are board favourites. Remember: diazonium salts must be used immediately as they are unstable. Azo coupling occurs with phenols and amines (activated rings).`
    }
  ],
  notes: `# Amines — Notes

## 1. Classification: 1° (R–NH₂), 2° (R₂NH), 3° (R₃N)

## 2. Preparation
- Ammonolysis, Gabriel synthesis (1° only), Hoffmann degradation
- Reduction of nitro compounds (most important for ArNH₂)

## 3. Basicity
- Aliphatic > NH₃ > aromatic; in solution: 2° > 1° > 3°

## 4. Tests
- Carbylamine: 1° only; Hinsberg: distinguishes all three

## 5. Diazonium Salts
- From 1° aromatic amines at 273–278 K
- Sandmeyer, Gattermann, coupling reactions
- Versatile synthetic intermediates`,
  questions2: [
    { question: "What is Gabriel phthalimide synthesis? What is its limitation?", answer: "**Gabriel synthesis**: Phthalimide + KOH → potassium phthalimide + R–X → N-alkylphthalimide → hydrolysis → **pure 1° amine** + phthalic acid. **Limitation**: Can prepare only **primary amines**; fails for 2° and 3° amines." },
    { question: "Why is aniline a weaker base than methylamine?", answer: "In **aniline**, the lone pair on nitrogen is **delocalised into the benzene ring** by resonance, making it less available for protonation. In **methylamine**, the –CH₃ group is electron-donating (+I effect), increasing electron density on N → more basic. So aliphatic amines > NH₃ > aromatic amines." },
    { question: "What is the carbylamine test?", answer: "**Carbylamine (isocyanide) test**: R–NH₂ + CHCl₃ + 3KOH → R–NC (isocyanide) + 3KCl + 3H₂O. It gives a **foul-smelling** isocyanide product. This test is specific for **primary amines only** (both aliphatic and aromatic)." },
    { question: "What is diazotisation?", answer: "**Diazotisation**: Treatment of a **primary aromatic amine** with nitrous acid (NaNO₂ + HCl) at **273–278 K** (0–5°C) to form a **diazonium salt**: ArNH₂ + NaNO₂ + 2HCl → ArN₂⁺Cl⁻ + NaCl + 2H₂O. Low temperature is essential to prevent decomposition." },
    { question: "Why are amines basic in nature?", answer: "Amines have a **lone pair of electrons** on nitrogen, which can be donated to a proton (H⁺) or Lewis acid. This makes them **Lewis bases** and **Brønsted bases**: R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻. The basicity depends on electron density on N." },
    { question: "What is Hoffmann bromamide degradation?", answer: "**Hoffmann degradation**: An amide is treated with Br₂ and NaOH to give a **primary amine** with one **fewer carbon**: RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O. Example: CH₃CONH₂ → CH₃NH₂." }
  ],
  questions3: [
    { question: "Explain the Hinsberg test for distinguishing 1°, 2°, and 3° amines.", answer: "**Hinsberg's reagent**: Benzenesulphonyl chloride (C₆H₅SO₂Cl)\n\n**1° Amine**: RNH₂ + C₆H₅SO₂Cl → RNHSO₂C₆H₅ (sulphonamide)\n- Product has acidic N–H → **dissolves in NaOH** (forms soluble sodium salt)\n\n**2° Amine**: R₂NH + C₆H₅SO₂Cl → R₂NSO₂C₆H₅\n- Product has no N–H → **insoluble** in NaOH\n\n**3° Amine**: R₃N + C₆H₅SO₂Cl → **No reaction** (no H on N)\n- Amine separates as an oily layer\n\nThis test clearly distinguishes all three types based on solubility of the product." },
    { question: "Explain why the basicity order in aqueous solution is 2° > 1° > 3° for aliphatic amines.", answer: "Basicity depends on:\n1. **Inductive effect (+I)**: More alkyl groups → more electron density on N → stronger base (3° > 2° > 1°)\n2. **Solvation/Hydration**: More H atoms on N⁺ → better stabilised by water molecules (1° > 2° > 3°)\n3. **Steric hindrance**: Bulky groups around N hinder protonation (3° most hindered)\n\nIn **aqueous solution**, solvation and steric effects dominate over inductive effect:\n- 2° amine: good balance of +I effect and solvation → **most basic**\n- 1° amine: good solvation but less +I\n- 3° amine: strongest +I but **poor solvation** and steric hindrance → least basic of the three\n\n**In gas phase** (no solvation): 3° > 2° > 1° (purely inductive effect)" },
    { question: "Describe the reactions of diazonium salts involving replacement of N₂.", answer: "Diazonium salt (ArN₂⁺Cl⁻) undergoes reactions where N₂ is lost:\n\n| Reaction | Reagent | Product |\n|----------|---------|--------|\n| **Sandmeyer** | CuCl/HCl | ArCl |\n| **Sandmeyer** | CuBr/HBr | ArBr |\n| **Sandmeyer** | CuCN/KCN | ArCN |\n| **Gattermann** | Cu/HCl | ArCl |\n| **Balz-Schiemann** | HBF₄ | ArF |\n| Reduction | H₃PO₂ | ArH |\n| Hydrolysis | warm H₂O | ArOH |\n| With KI | KI | ArI |\n\n**Importance**: Diazonium salts are versatile **synthetic intermediates** — they allow introduction of groups (–OH, –F, –CN, –I) onto the benzene ring that cannot be directly introduced by electrophilic substitution." }
  ],
  questions5: [
    { question: "Discuss the preparation, properties, and reactions of diazonium salts in detail. Explain coupling reactions with examples.", answer: "**Preparation (Diazotisation)**:\nArNH₂ + NaNO₂ + 2HCl → ArN₂⁺Cl⁻ + NaCl + 2H₂O\nConditions: **273–278 K** (0–5°C); below this → slow; above → decomposition (N₂ loss)\n\n**Properties**:\n- Ionic compound; soluble in water\n- **Unstable** at room temperature → must be used immediately\n- Aryl diazonium salts are more stable than alkyl (resonance with ring)\n\n**Reactions with loss of N₂**:\n1. Sandmeyer: CuX/HX → ArX (X = Cl, Br, CN)\n2. Gattermann: Cu/HCl → ArCl (similar but uses Cu powder)\n3. Balz-Schiemann: HBF₄ → ArF (important route to ArF)\n4. H₃PO₂ → ArH (reduction — removes NH₂ group)\n5. H₂O (warm) → ArOH; KI → ArI\n\n**Coupling Reactions (N₂ retained)**:\nDiazonium ion acts as a **weak electrophile** and attacks activated benzene rings:\n\n1. **With phenol**: ArN₂⁺ + C₆H₅OH → Ar–N=N–C₆H₄OH (para) + H⁺\n   - Orange/red **azo dye**; occurs in weakly alkaline medium\n\n2. **With aniline**: ArN₂⁺ + C₆H₅NH₂ → Ar–N=N–C₆H₄NH₂ (para)\n   - Yellow azo compound; occurs in weakly acidic medium\n\n**Coupling occurs at para position** of the activated ring (phenol/amine). If para is blocked, coupling occurs at ortho.\n\n**Applications of azo dyes**: Methyl orange (indicator), Congo red, alizarin yellow — widely used in textile industry.\n\n**Significance**: Diazonium salts bridge the gap between aromatic amines and numerous functional groups, making them indispensable in organic synthesis." }
  ]
};
