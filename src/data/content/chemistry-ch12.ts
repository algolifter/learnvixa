import type { ChapterContent } from "./physics-ch1";

export const chemistryCh12: ChapterContent = {
  topics: [
    {
      title: "Carbohydrates",
      content: `## Biomolecules

### Carbohydrates
Polyhydroxy aldehydes or ketones, or compounds that produce them on hydrolysis.
General formula: Cₓ(H₂O)ᵧ

### Classification

| Type | Definition | Examples |
|------|-----------|----------|
| Monosaccharides | Cannot be hydrolysed further | Glucose, Fructose |
| Disaccharides | Give 2 monosaccharides on hydrolysis | Sucrose, Maltose, Lactose |
| Polysaccharides | Give many monosaccharides | Starch, Cellulose, Glycogen |

### Glucose (C₆H₁₂O₆)
- **Open chain**: Polyhydroxy aldehyde (aldohexose)
- **Cyclic form**: Exists as α-D-glucose and β-D-glucose (Haworth structure)
- **Anomers**: α and β forms differ at C-1 (anomeric carbon)
- Gives positive **Tollens' test** and **Fehling's test** (reducing sugar)

### Fructose
- Ketohexose (C=O at C-2); also a reducing sugar (due to enolisation)

### Sucrose
- Glucose + Fructose (α-1,2 glycosidic linkage)
- **Non-reducing sugar** (anomeric carbons of both are involved in bond)
- Inversion of sucrose: sucrose + H₂O → glucose + fructose (invert sugar)

> **Exam Tip**: Sucrose is non-reducing because both anomeric carbons are involved in the glycosidic bond. This is the most tested point about disaccharides.`
    },
    {
      title: "Amino Acids and Proteins",
      content: `## Amino Acids

### Structure
Contain both **–NH₂** (amino) and **–COOH** (carboxyl) groups.
General formula: H₂N–CHR–COOH (α-amino acids)

### Zwitterionic Form
At physiological pH, amino acids exist as dipolar ions:
H₃N⁺–CHR–COO⁻ (zwitterion)

### Essential Amino Acids
Cannot be synthesised by the body; must be obtained from diet (e.g., valine, leucine, isoleucine, phenylalanine, etc.)

### Peptide Bond
Formed by condensation of –COOH of one amino acid with –NH₂ of another:
–CO–NH– (amide/peptide bond)

## Proteins

### Classification by Shape
- **Fibrous**: Polypeptide chains run parallel, held by H-bonds (keratin, collagen) — insoluble in water
- **Globular**: Chains folded into spherical shape (albumin, haemoglobin) — soluble, functional

### Structure Levels
1. **Primary**: Sequence of amino acids
2. **Secondary**: α-helix or β-pleated sheet (H-bonding)
3. **Tertiary**: 3D folding (H-bonds, disulphide, ionic, hydrophobic interactions)
4. **Quaternary**: Multiple polypeptide subunits (e.g., haemoglobin = 4 subunits)

### Denaturation
Loss of secondary/tertiary structure by heat, pH change, or chemicals. Protein loses biological activity. Example: coagulation of egg white on boiling.

> **Board Tip**: The four levels of protein structure are a standard 3–5 mark question. Always mention the forces involved at each level.`
    },
    {
      title: "Vitamins, Nucleic Acids and Enzymes",
      content: `## Vitamins
Organic compounds required in small amounts; the body cannot synthesise most of them.

### Classification

| Type | Vitamins | Key Point |
|------|----------|-----------|
| Water-soluble | B complex, C | Excreted in urine; need regular supply |
| Fat-soluble | A, D, E, K | Stored in liver and adipose tissue |

### Important Vitamins

| Vitamin | Deficiency Disease | Source |
|---------|-------------------|--------|
| A | Night blindness | Carrots, fish oil |
| B₁ | Beri-beri | Cereals, pulses |
| C | Scurvy | Citrus fruits |
| D | Rickets | Sunlight, fish oil |
| E | Reproductive issues | Vegetable oils |
| K | Slow blood clotting | Green leafy vegetables |

## Nucleic Acids (DNA and RNA)
- Polymers of **nucleotides** (base + sugar + phosphate)
- DNA: deoxyribose sugar; bases A, T, G, C; double helix (Chargaff's rule: A=T, G=C)
- RNA: ribose sugar; bases A, U, G, C; single-stranded; types: mRNA, tRNA, rRNA

## Enzymes
- Biological catalysts (proteins); highly specific
- Lock and key model: substrate fits into active site
- Sensitive to temperature and pH (optimum conditions)
- Named by adding "-ase" to substrate (e.g., maltase, lactase)

> **Exam Tip**: Classify vitamins as water-soluble vs fat-soluble and know at least 4 deficiency diseases — this is a guaranteed short-answer question.`
    }
  ],
  notes: `# Biomolecules — Notes

## 1. Carbohydrates
- Mono-, di-, polysaccharides
- Glucose: aldohexose, reducing sugar; Fructose: ketohexose
- Sucrose: non-reducing (both anomeric C involved)

## 2. Amino Acids & Proteins
- Zwitterionic at physiological pH
- Peptide bond: –CO–NH–
- Protein structure: primary → quaternary
- Denaturation: loss of 3D structure

## 3. Vitamins: water-soluble (B, C) vs fat-soluble (A, D, E, K)

## 4. Nucleic Acids: DNA (double helix, ATGC), RNA (single, AUGC)

## 5. Enzymes: specific biological catalysts; lock-and-key model`,
  questions2: [
    { question: "What is the difference between globular and fibrous proteins?", answer: "**Globular proteins**: Polypeptide chain coils into a **spherical shape**; soluble in water; function as enzymes, hormones, antibodies. Example: insulin, haemoglobin. **Fibrous proteins**: Chains form **long fibres/sheets**; insoluble in water; structural role. Example: keratin (hair), collagen (tendons)." },
    { question: "What are essential and non-essential amino acids?", answer: "**Essential amino acids**: Cannot be synthesised by the body; must be obtained from diet (e.g., valine, leucine, isoleucine — 10 total). **Non-essential amino acids**: Can be synthesised by the body from other compounds (e.g., glycine, alanine)." },
    { question: "What is denaturation of proteins?", answer: "**Denaturation** is the loss of the biological activity of a protein due to disruption of its **secondary, tertiary, and quaternary structures** by heat, pH change, chemicals, etc. Primary structure (peptide bonds) remains intact. Example: boiling an egg coagulates albumin." },
    { question: "Distinguish between DNA and RNA.", answer: "**DNA**: Deoxyribose sugar, bases A-T-G-C, **double-stranded** helix, stores genetic information. **RNA**: Ribose sugar, bases A-U-G-C, **single-stranded**, involved in protein synthesis. DNA is in the nucleus; RNA is in cytoplasm and nucleus." },
    { question: "What are reducing and non-reducing sugars?", answer: "**Reducing sugars**: Have a **free anomeric carbon** (hemiacetal/hemiketal) → can reduce Tollens'/Fehling's reagent. Examples: glucose, fructose, maltose, lactose. **Non-reducing sugars**: Anomeric carbons of both units are involved in glycosidic bond → no free reducing group. Example: sucrose." },
    { question: "What are vitamins? Classify them.", answer: "**Vitamins** are organic compounds required in small quantities for normal metabolism; deficiency causes diseases. **Water-soluble**: B-complex and C (cannot be stored; excess excreted). **Fat-soluble**: A, D, E, K (stored in liver and fatty tissue; excess can be toxic)." }
  ],
  questions3: [
    { question: "Describe the four levels of protein structure.", answer: "**Primary Structure**: Sequence of amino acids in the polypeptide chain linked by **peptide bonds** (–CO–NH–). Determines all higher structures.\n\n**Secondary Structure**: Polypeptide folds into regular patterns:\n- **α-helix**: Right-handed coil stabilised by H-bonds between C=O and N–H (every 4th residue)\n- **β-pleated sheet**: Chains lie side by side; H-bonds between adjacent strands\n\n**Tertiary Structure**: Overall **3D shape** of the polypeptide. Stabilised by disulphide bonds, ionic interactions, hydrophobic interactions, H-bonds.\n\n**Quaternary Structure**: Association of **two or more polypeptide subunits**. Example: haemoglobin has 4 subunits (2α + 2β). Not all proteins have quaternary structure." },
    { question: "Explain the structure of DNA (Watson-Crick model).", answer: "**Watson-Crick Model of DNA (1953)**:\n\n1. DNA is a **double helix** — two antiparallel polynucleotide strands wound around each other\n2. **Backbone**: Sugar (deoxyribose) – phosphate chain on the outside\n3. **Bases**: Point inward; paired by **hydrogen bonds**:\n   - A = T (2 H-bonds) — adenine with thymine\n   - G ≡ C (3 H-bonds) — guanine with cytosine\n4. **Complementary base pairing** → Chargaff's rule: [A] = [T], [G] = [C]\n5. Pitch of helix = 3.4 nm; 10 base pairs per turn; distance between base pairs = 0.34 nm\n6. **Replication**: Strands separate; each serves as template for new complementary strand (semi-conservative)\n\nDNA carries the **genetic code** and transmits hereditary information." },
    { question: "What are carbohydrates? Classify them with examples.", answer: "**Carbohydrates**: Polyhydroxy aldehydes/ketones or compounds that give these on hydrolysis. General formula: Cₓ(H₂O)ᵧ.\n\n**Classification**:\n1. **Monosaccharides** (cannot be hydrolysed): Glucose (C₆H₁₂O₆, aldohexose), Fructose (ketohexose), Ribose (aldopentose)\n\n2. **Disaccharides** (give 2 monosaccharides on hydrolysis):\n   - Sucrose: glucose + fructose (non-reducing)\n   - Maltose: glucose + glucose (reducing)\n   - Lactose: glucose + galactose (reducing)\n\n3. **Polysaccharides** (give many monosaccharides):\n   - Starch: storage in plants (amylose + amylopectin)\n   - Cellulose: structural in plants (β-glucose polymer)\n   - Glycogen: storage in animals (\"animal starch\")" }
  ],
  questions5: [
    { question: "Discuss the classification, structure, and biological importance of carbohydrates. Explain the cyclic structure of glucose.", answer: "**Classification**: Monosaccharides (glucose, fructose), Disaccharides (sucrose, maltose), Polysaccharides (starch, cellulose)\n\n**Open-chain Structure of Glucose** (C₆H₁₂O₆):\n- CHO at C-1 (aldehyde) + 4 secondary –OH groups (C2-C5) + 1 primary –OH at C6\n- Evidence: Reacts with HCN (CHO present), acetic anhydride (5 –OH groups), mild oxidation gives 6-carbon acid\n\n**Cyclic Structure (Haworth projection)**:\n- C-1 (CHO) reacts with C-5 (OH) → **hemiacetal** → 6-membered pyranose ring\n- Two anomers: **α-glucose** (–OH at C1 below ring plane) and **β-glucose** (–OH at C1 above ring plane)\n- Anomers interconvert in solution (**mutarotation**): α ⇌ open chain ⇌ β\n\n**Biological Importance**:\n1. **Energy source**: Glucose is the primary fuel for cellular respiration (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP)\n2. **Structural**: Cellulose (β-glucose polymer) forms plant cell walls; chitin in insect exoskeletons\n3. **Storage**: Starch in plants, glycogen in animals — glucose reserves\n4. **Nucleic acids**: Ribose (in RNA) and deoxyribose (in DNA) are pentose sugars\n5. **Cell recognition**: Glycoproteins on cell surfaces involved in immune response\n6. **Sucrose**: Transport sugar in plants (phloem); commercial sugar source" }
  ]
};
