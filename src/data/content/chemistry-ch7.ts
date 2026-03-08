import type { ChapterContent } from "./physics-ch1";

export const chemistryCh7: ChapterContent = {
  topics: [
    {
      title: "Introduction to Coordination Compounds",
      content: `## Coordination Compounds

### What are Coordination Compounds?
Compounds in which a central **metal atom or ion** is surrounded by a number of ions or molecules (called **ligands**) that donate electron pairs to the metal.

### Key Terminology
- **Central metal atom/ion**: The metal at the centre (e.g., Co³⁺, Pt²⁺, Fe³⁺)
- **Ligand**: Ion or molecule that donates a lone pair to the metal (Lewis base)
- **Coordination number (CN)**: Number of ligand donor atoms bonded to the central metal
- **Coordination sphere**: The central metal + ligands enclosed in square brackets [ ]
- **Counter ions**: Ions outside the coordination sphere that balance the charge
- **Coordination entity**: [Co(NH₃)₆]³⁺ is the coordination entity in [Co(NH₃)₆]Cl₃

### Examples
- [Co(NH₃)₆]Cl₃ → Coordination entity: [Co(NH₃)₆]³⁺, Counter ion: Cl⁻
- K₄[Fe(CN)₆] → Coordination entity: [Fe(CN)₆]⁴⁻, Counter ion: K⁺
- [Ni(CO)₄] → Neutral complex, no counter ions

> **Exam Tip**: Distinguishing between coordination sphere and counter ions is a frequently tested concept. Remember: anything inside [ ] is the coordination sphere.`
    },
    {
      title: "Types of Ligands",
      content: `## Classification of Ligands

### Based on Number of Donor Atoms

| Type | Donor Atoms | Examples |
|------|------------|---------|
| Monodentate | 1 | Cl⁻, NH₃, H₂O, CN⁻, CO, NO₂⁻ |
| Bidentate | 2 | en (ethylenediamine), ox²⁻ (oxalate), dmg |
| Tridentate | 3 | dien (diethylenetriamine) |
| Hexadentate | 6 | EDTA⁴⁻ (ethylenediaminetetraacetate) |

### Special Ligands
- **Ambidentate ligands**: Can coordinate through two different atoms
  - NO₂⁻: through N (nitro) or O (nitrito)
  - SCN⁻: through S (thiocyanato) or N (isothiocyanato)
  - CN⁻: through C (cyano) or N (isocyano)

- **Chelate ligands**: Bidentate/polydentate ligands that form ring structures with metal
  - Chelate complexes are more stable than non-chelate (chelate effect)

- **π-bonding ligands**: CO, NO, C₂H₄ — donate σ electrons and accept π back-donation

> **Board Tip**: EDTA is the most important hexadentate ligand — it wraps around metal like a cage. This is used extensively in complexometric titrations.`
    },
    {
      title: "IUPAC Nomenclature of Coordination Compounds",
      content: `## Naming Coordination Compounds (IUPAC Rules)

### Rules for Naming
1. **Cation first**, then anion (like ionic compounds)
2. Within coordination sphere:
   - Ligands named **alphabetically** (ignoring prefixes)
   - Anionic ligands end in **-o** (chlorido, cyanido, hydroxido)
   - Neutral ligands: aqua (H₂O), ammine (NH₃), carbonyl (CO), nitrosyl (NO)
   - Number indicated by di-, tri-, tetra- (simple) or bis-, tris-, tetrakis- (complex names)
3. Metal name: normal name for cation complex; ends in **-ate** for anion complex
4. Oxidation state in Roman numerals in parentheses

### Examples

| Formula | IUPAC Name |
|---------|-----------|
| [Co(NH₃)₆]Cl₃ | Hexaamminecobalt(III) chloride |
| K₃[Fe(CN)₆] | Potassium hexacyanidoferrate(III) |
| [Pt(NH₃)₂Cl₂] | Diamminedichloridoplatinum(II) |
| [CoCl₂(en)₂]Cl | Dichloridobis(ethylenediamine)cobalt(III) chloride |
| K₂[PdCl₄] | Potassium tetrachloridopalladate(II) |
| [Cr(NH₃)₃(H₂O)₃]Cl₃ | Triamminetriaquachromium(III) chloride |

> **Common Mistake**: "ammine" (with double m) is for NH₃ ligand, "amine" (single m) is for organic amines. This distinction costs marks!`
    },
    {
      title: "Werner's Theory and Isomerism",
      content: `## Werner's Theory & Isomerism

### Werner's Theory (1893)
- Metals have **two types of valences**: primary (ionisable, = oxidation state) and secondary (non-ionisable, = coordination number)
- Secondary valences are directed in space → fixed geometry
- CN 6 → octahedral; CN 4 → tetrahedral or square planar

### Types of Isomerism

#### Structural Isomerism
1. **Ionisation isomerism**: Exchange of ions inside/outside coordination sphere
   - [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br

2. **Linkage isomerism**: Different donor atom of ambidentate ligand
   - [Co(NH₃)₅ONO]²⁺ (nitrito-O) vs [Co(NH₃)₅NO₂]²⁺ (nitrito-N)

3. **Coordination isomerism**: Exchange of ligands between cation and anion
   - [Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆]

4. **Solvate/Hydrate isomerism**: Water inside vs outside coordination sphere
   - [Cr(H₂O)₆]Cl₃ (violet) vs [Cr(H₂O)₅Cl]Cl₂·H₂O (green)

#### Stereoisomerism
1. **Geometrical (cis-trans)**: In square planar and octahedral complexes
2. **Optical isomerism**: Non-superimposable mirror images

> **Exam Tip**: Hydrate isomerism of CrCl₃·6H₂O is a classic question. Three isomers give different numbers of Cl⁻ ions in solution — test with AgNO₃.`
    },
    {
      title: "Valence Bond Theory (VBT)",
      content: `## Valence Bond Theory of Coordination Compounds

### Postulates
1. Central metal provides empty hybrid orbitals
2. Ligands donate lone pairs into these orbitals
3. Type of hybridisation determines **geometry**
4. Inner orbital complexes (use inner d-orbitals) vs outer orbital complexes (use outer d-orbitals)

### Hybridisation and Geometry

| CN | Hybridisation | Geometry | Example |
|----|--------------|----------|---------|
| 4 | sp³ | Tetrahedral | [NiCl₄]²⁻ |
| 4 | dsp² | Square planar | [Ni(CN)₄]²⁻ |
| 6 | d²sp³ | Octahedral (inner) | [Co(NH₃)₆]³⁺ |
| 6 | sp³d² | Octahedral (outer) | [CoF₆]³⁻ |

### Magnetic Properties from VBT
- **Diamagnetic**: All electrons paired (e.g., [Co(NH₃)₆]³⁺ — d²sp³, inner orbital)
- **Paramagnetic**: Unpaired electrons present (e.g., [CoF₆]³⁻ — sp³d², outer orbital)

### Limitations of VBT
- Cannot explain colour of complexes
- Cannot predict whether a complex will be inner or outer orbital
- Does not explain spectra or distortions

> **Board Tip**: Be able to write the electronic configuration diagram showing d-orbital occupancy, hybridisation, and predict magnetic nature for common complexes like [Fe(CN)₆]⁴⁻ and [FeF₆]³⁻.`
    },
    {
      title: "Crystal Field Theory (CFT)",
      content: `## Crystal Field Theory

### Key Ideas
- Ligands are treated as **point charges** that create an electrostatic field around the metal
- d-orbitals, which are degenerate in free metal ion, **split** in the ligand field
- The energy gap between split levels is called **crystal field splitting energy (Δ)**

### Splitting in Octahedral Field
- d-orbitals split into two sets:
  - **t₂g** (lower energy): dxy, dxz, dyz
  - **eg** (higher energy): dx²-y², dz²
- Splitting energy = **Δ₀** (subscript 'o' for octahedral)

### Splitting in Tetrahedral Field
- Reverse of octahedral: **e** (lower) and **t₂** (higher)
- **Δt ≈ 4/9 Δ₀** (tetrahedral splitting is smaller)

### Spectrochemical Series (Δ order)
I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < ox²⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO

**Weak field ligands** (small Δ): halides → high spin complexes
**Strong field ligands** (large Δ): CN⁻, CO → low spin complexes

### Colour of Coordination Compounds
- d-d transitions: electrons absorb light = Δ₀ energy → jump from t₂g to eg
- Absorbed colour's complementary colour is observed
- d⁰ and d¹⁰ → colourless (no d-d transition possible)

> **Exam Tip**: Memorise the spectrochemical series — it's essential for predicting spin state, colour, and magnetic properties. "I Breathe Chlorine For Our Health, And Expect Nicely Cured CO" is a common mnemonic.`
    },
    {
      title: "Applications of Coordination Compounds",
      content: `## Applications of Coordination Compounds

### 1. In Medicine
- **cis-platin** [PtCl₂(NH₃)₂]: Anti-cancer drug (cis-isomer is active, trans is not)
- **EDTA**: Treatment of lead/mercury poisoning (chelation therapy)
- **Vitamin B₁₂**: Cobalt coordination compound essential for RBC production

### 2. In Analytical Chemistry
- **DMG test for Ni²⁺**: Ni²⁺ + dimethylglyoxime → bright red precipitate
- **AgCl dissolves in NH₃**: AgCl + 2NH₃ → [Ag(NH₃)₂]⁺ + Cl⁻
- **Hardness of water**: EDTA complexometry

### 3. In Industry
- **Extraction of metals**: Gold — [Au(CN)₂]⁻ complex in cyanide leaching
- **Electroplating**: [Ag(CN)₂]⁻ for silver plating, [Au(CN)₂]⁻ for gold plating
- **Photography**: Fixing with Na₂[Ag(S₂O₃)] (sodium argentothiosulphate)

### 4. In Biology
- **Haemoglobin**: Fe²⁺ porphyrin complex (O₂ transport)
- **Chlorophyll**: Mg²⁺ porphyrin complex (photosynthesis)

### 5. Catalysis
- **Wilkinson's catalyst**: [RhCl(PPh₃)₃] for hydrogenation of alkenes
- **Ziegler-Natta catalyst**: TiCl₄ + Al(C₂H₅)₃ for polymerisation

> **Board Tip**: The cisplatin example is frequently used to highlight the importance of geometrical isomerism — only the cis form has anti-cancer activity. This connects isomerism theory to real-world applications.`
    }
  ],
  notes: `# Coordination Compounds — Comprehensive Notes

## 1. Basics
- Central metal + ligands = coordination entity; enclosed in [ ]
- Coordination number = number of donor atoms bonded to metal
- Ligands classified by denticity: monodentate, bidentate, polydentate
- Ambidentate ligands: NO₂⁻, SCN⁻, CN⁻

## 2. Nomenclature (IUPAC)
- Ligands alphabetically, anionic end in -o, neutral: aqua/ammine/carbonyl
- Metal: normal name (cation complex), -ate suffix (anion complex)
- Oxidation state in Roman numerals

## 3. Isomerism
- Structural: ionisation, linkage, coordination, solvate/hydrate
- Stereoisomerism: geometrical (cis-trans) and optical
- Hydrate isomerism of CrCl₃·6H₂O — classic example

## 4. Bonding Theories
- VBT: hybridisation determines geometry; inner vs outer orbital complexes
- CFT: d-orbital splitting; Δ₀ (octahedral), Δt ≈ 4/9 Δ₀ (tetrahedral)
- Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO
- Colour: d-d transitions; complementary colour observed

## 5. Applications
- Medicine: cisplatin (anti-cancer), EDTA (chelation therapy), vitamin B₁₂
- Biology: haemoglobin (Fe²⁺), chlorophyll (Mg²⁺)
- Industry: cyanide leaching (Au), electroplating, photography`,
  questions2: [
    { question: "What is a coordination compound? Give an example.", answer: "A **coordination compound** contains a central metal atom/ion surrounded by molecules or ions called **ligands**, bonded by coordinate bonds. The metal with its ligands forms a **coordination entity**. Example: [Cu(NH₃)₄]SO₄ — tetraamminecopper(II) sulphate." },
    { question: "Define coordination number with an example.", answer: "**Coordination number** is the total number of **donor atoms** bonded to the central metal ion. In [Co(NH₃)₆]³⁺, each NH₃ donates one lone pair to Co³⁺, so CN = **6**. In [Ni(CO)₄], CN = 4." },
    { question: "What are ambidentate ligands? Give two examples.", answer: "**Ambidentate ligands** can coordinate through **two different donor atoms** (but only one at a time). Examples: (i) **NO₂⁻**: through N (nitro) or O (nitrito). (ii) **SCN⁻**: through S (thiocyanato) or N (isothiocyanato)." },
    { question: "Write the IUPAC name of [Cr(NH₃)₃(H₂O)₃]Cl₃.", answer: "**Triamminetriaquachromium(III) chloride**. Rules: ligands in alphabetical order (ammine before aqua), metal name with oxidation state in Roman numerals, anion after." },
    { question: "What is the spectrochemical series?", answer: "The **spectrochemical series** arranges ligands in order of increasing **crystal field splitting energy (Δ)**: I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO. **Weak field ligands** (left) cause small splitting; **strong field ligands** (right) cause large splitting." },
    { question: "What is chelation? Give an example.", answer: "**Chelation** is the formation of a ring-like structure when a **polydentate ligand** bonds to a metal through two or more donor atoms. **Chelate complexes** are more stable than non-chelate analogues. Example: [Cu(en)₂]²⁺ — ethylenediamine forms 5-membered chelate rings." }
  ],
  questions3: [
    { question: "Explain Crystal Field Theory for octahedral complexes.", answer: "**Crystal Field Theory (CFT)**:\n\nIn an octahedral complex, 6 ligands approach along the axes. The d-orbitals split into two sets:\n- **t₂g** (dₓᵧ, dᵧᵤ, dₓᵤ): lower energy (between axes)\n- **eₒ** (dₓ²₋ᵧ², dᵤ²): higher energy (along axes)\n\n**Splitting energy = Δₒ (or 10Dq)**\n\n**Filling**:\n- **Strong field ligands** (large Δₒ): electrons pair in t₂g first → low spin complex\n- **Weak field ligands** (small Δₒ): electrons fill all orbitals singly first → high spin complex\n\n**Colour**: d-d transition: electron absorbs light energy = Δₒ, jumps from t₂g → eₒ. Complementary colour is observed.\n\n**CFSE** = (−0.4n_t₂g + 0.6n_eₒ)Δₒ + pairing energy" },
    { question: "Explain geometrical isomerism in coordination compounds with examples.", answer: "**Geometrical (cis-trans) isomerism**: Different spatial arrangements of ligands around the central metal.\n\n**Square planar** [MA₂B₂]:\n- **cis**: Same ligands on same side (90°)\n- **trans**: Same ligands on opposite side (180°)\n- Example: [Pt(NH₃)₂Cl₂] — cis-platin (anti-cancer) vs trans-platin (inactive)\n\n**Octahedral** [MA₂B₄]:\n- **cis**: A ligands at 90°\n- **trans**: A ligands at 180°\n- Example: [Co(NH₃)₄Cl₂]⁺ — cis (violet) and trans (green)\n\n**Condition**: Must have at least two different types of ligands. [MA₆] cannot show geometrical isomerism." },
    { question: "Distinguish between inner orbital and outer orbital complexes.", answer: "**Inner Orbital Complex** (Low Spin):\n- Uses **(n−1)d** orbitals for hybridisation (along with ns, np)\n- Strong field ligands (CN⁻, CO, NH₃) force electron pairing\n- Fewer unpaired electrons → **less paramagnetic**\n- Example: [Co(NH₃)₆]³⁺ — d²sp³ hybridisation (inner 3d orbitals used)\n\n**Outer Orbital Complex** (High Spin):\n- Uses **nd** orbitals for hybridisation (along with ns, np)\n- Weak field ligands (Cl⁻, H₂O) → electrons remain unpaired\n- More unpaired electrons → **more paramagnetic**\n- Example: [CoF₆]³⁻ — sp³d² hybridisation (outer 4d orbitals used)\n\nMagnetic moment distinguishes the two: μ = √(n(n+2)) BM" }
  ],
  questions5: [
    { question: "Explain Werner's theory of coordination compounds. Discuss primary and secondary valencies with examples.", answer: "**Werner's Coordination Theory (1893)**:\n\nWerner proposed that metals show two types of valencies:\n\n**1. Primary Valency (Ionisable)**:\n- Corresponds to **oxidation state**\n- Satisfied by negative ions\n- Non-directional\n- Example: In CoCl₃·6NH₃, primary valency = 3 (three Cl⁻ ions)\n\n**2. Secondary Valency (Non-ionisable)**:\n- Corresponds to **coordination number**\n- Satisfied by ligands (neutral molecules or ions)\n- **Directional** → determines geometry\n- Example: In [Co(NH₃)₆]Cl₃, secondary valency = 6 (six NH₃ ligands)\n\n**Key Observations**:\n| Compound | Ionisable Cl⁻ | CN | Formula |\n|----------|-------------|-----|--------|\n| CoCl₃·6NH₃ | 3 | 6 | [Co(NH₃)₆]Cl₃ |\n| CoCl₃·5NH₃ | 2 | 6 | [Co(NH₃)₅Cl]Cl₂ |\n| CoCl₃·4NH₃ | 1 | 6 | [Co(NH₃)₄Cl₂]Cl |\n| CoCl₃·3NH₃ | 0 | 6 | [Co(NH₃)₃Cl₃] |\n\n**Werner's theory explained**: (i) Why same formula gives different properties, (ii) Existence of isomers, (iii) Coordination number concept. It earned him the Nobel Prize (1913)." },
    { question: "What is Crystal Field Theory? Explain the splitting of d-orbitals in octahedral and tetrahedral complexes. How does CFT explain the colour and magnetic properties of coordination compounds?", answer: "**Crystal Field Theory (CFT)**: Treats metal-ligand interaction as purely **electrostatic**. Ligands are point charges that create an electric field affecting d-orbital energies.\n\n**Octahedral Splitting**:\n- 6 ligands approach along x, y, z axes\n- d-orbitals split: **eₒ** (dₓ²₋ᵧ², dᵤ²) at higher energy; **t₂g** (dₓᵧ, dᵧᵤ, dₓᵤ) at lower energy\n- Splitting energy = **Δₒ**\n- CFSE = −0.4(n_t₂g) + 0.6(n_eₒ) × Δₒ\n\n**Tetrahedral Splitting**:\n- 4 ligands approach between axes\n- Splitting is **inverted**: t₂ at higher energy, e at lower energy\n- **Δt ≈ (4/9)Δₒ** → always small → always high spin (no pairing)\n\n**Colour Explanation**:\n- Partially filled d-orbitals allow **d-d transitions**\n- Electron absorbs light of energy = Δ (splitting energy)\n- Transmitted/reflected colour = **complementary** of absorbed colour\n- Example: [Ti(H₂O)₆]³⁺ absorbs green → appears **purple**\n- d⁰ and d¹⁰ complexes are **colourless** (no d-d transition)\n\n**Magnetic Properties**:\n- **Strong field ligands** (large Δₒ > pairing energy): electrons pair in t₂g → **low spin** → fewer unpaired electrons → less paramagnetic\n- **Weak field ligands** (small Δₒ < pairing energy): electrons spread out → **high spin** → more unpaired electrons → more paramagnetic\n- μ = √(n(n+2)) BM (spin-only formula)" }
  ]
};
