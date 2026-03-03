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
- Versatile synthetic intermediates`
};
