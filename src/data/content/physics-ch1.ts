// Physics Chapter 1: Electric Charges and Fields
// Pre-written content based on NCERT Class 12 Physics, expanded beyond textbook level

export interface TopicPage {
  title: string;
  content: string; // Markdown
}

export interface QuestionItem {
  question: string;
  answer?: string;
}

export interface ChapterContent {
  topics: TopicPage[];
  notes: string; // Full markdown notes
  importantPoints?: string[];
  commonMistakes?: string[];
  examStrategy?: string[];
  examples?: string[];
  summary?: string;
  questions2?: QuestionItem[];
  questions3?: QuestionItem[];
  questions5?: QuestionItem[];
  revision?: {
    quickPoints: string[];
    formulas?: string[];
    diagrams?: string[];
    tipsAndTricks?: string[];
  };
}

export const physicsCh1: ChapterContent = {
  topics: [
    {
      title: "Introduction to Electrostatics",
      content: `## Introduction to Electrostatics

We all experience static electricity in daily life — the spark when removing a synthetic sweater in dry weather, the crackle of clothes, or the shock when touching a car door handle. Lightning during thunderstorms is another dramatic example of electric discharge.

### What is Electrostatics?

**Electrostatics** is the branch of physics that deals with the study of **forces, fields, and potentials** arising from **static charges** — charges that are at rest and not in motion.

The word "electricity" itself comes from the Greek word **elektron**, meaning **amber**. Around **600 BC**, the Greek philosopher **Thales of Miletus** discovered that amber rubbed with wool attracted light objects like straw and feathers.

### Why Study This Chapter?

- It forms the **foundation** for understanding electric circuits, magnetism, and electromagnetic waves
- Concepts like Coulomb's law and electric field are **essential for JEE and NEET**
- CBSE boards typically award **8-12 marks** from this chapter
- The chapter introduces the **superposition principle**, which is used throughout physics

### Key Phenomena

| Phenomenon | Cause |
|---|---|
| Spark from sweater | Discharge of accumulated static charges |
| Lightning | Large-scale charge separation in clouds |
| Shock from car door | Charge transfer through body to ground |
| Comb attracting paper | Charging by friction (rubbing) |

> **Board Exam Tip:** The introduction section often appears as a 1-mark question asking you to define electrostatics or name the scientist who first observed electric attraction.`,
    },
    {
      title: "Electric Charge",
      content: `## Electric Charge

### Discovery and Types of Charge

When a **glass rod** is rubbed with **silk cloth**, the rod acquires a charge. If two such charged glass rods are brought close, they **repel** each other. Similarly, two **plastic rods** rubbed with **cat's fur** also repel each other.

However, a **glass rod repels another glass rod** but **attracts a plastic rod**. This led scientists to conclude:

> There are exactly **two kinds** of electric charge: **positive** and **negative**.

### Fundamental Rules

1. **Like charges repel** each other
2. **Unlike charges attract** each other

### Sign Convention (Benjamin Franklin)

| Material | Charge acquired |
|---|---|
| Glass rod (rubbed with silk) | **Positive (+)** |
| Silk cloth | **Negative (−)** |
| Plastic/Ebonite rod (rubbed with fur) | **Negative (−)** |
| Cat's fur/wool | **Positive (+)** |

### How Does Charging Happen?

All matter is made of atoms containing **protons (+)**, **electrons (−)**, and **neutrons (neutral)**. Normally, the number of protons equals electrons, making the body **electrically neutral**.

When two bodies are rubbed together:
- **Electrons are transferred** from one body to the other
- The body that **loses electrons** becomes **positively charged**
- The body that **gains electrons** becomes **negatively charged**
- **No new charge is created** — only transferred

**Example:** When glass is rubbed with silk, electrons move from the glass rod to the silk. The glass rod becomes positive (deficit of electrons) and silk becomes negative (excess of electrons).

### Gold-Leaf Electroscope

A **gold-leaf electroscope** is a device used to detect electric charge:
- It consists of a **metal rod** with **two thin gold leaves** at the bottom, housed in a glass case
- When a charged body touches the metal knob, charge flows to the leaves
- Both leaves acquire the **same charge** and **diverge** (repel)
- Greater charge → greater divergence

> **CBSE Important:** The electroscope can detect the presence and magnitude of charge, but not directly its sign. To determine the sign, you need to use a known charged body.`,
    },
    {
      title: "Conductors and Insulators",
      content: `## Conductors and Insulators

### Conductors

**Conductors** are materials that allow electric charges (electrons) to flow freely through them.

**Examples:** Metals (copper, aluminium, iron), human body, earth/ground, graphite, salt solutions

**Key properties:**
- Have **free electrons** that can move throughout the material
- When charge is placed on a conductor, it **spreads uniformly** over the entire surface
- The electric field **inside** a conductor is **zero** in electrostatic equilibrium
- All the charge resides on the **outer surface**

### Insulators (Dielectrics)

**Insulators** are materials that do not allow charges to flow freely.

**Examples:** Glass, rubber, plastic, wood (dry), porcelain, nylon, mica, pure water

**Key properties:**
- Electrons are **tightly bound** to atoms — cannot move freely
- When charge is placed on an insulator, it **stays at the same spot**
- This is why you can charge a plastic comb but not a metal spoon by rubbing

### Why Can't You Charge a Metal Spoon by Rubbing?

When you rub a metal spoon, any charge generated immediately **leaks through your body** (also a conductor) **to the ground**. However, if you hold the metal rod with a **plastic or wooden handle** (insulator), the charge remains — because the insulating handle prevents charge leakage.

### Semiconductors

There is a third category — **semiconductors** (like silicon, germanium) — that have conductivity **between** conductors and insulators. Their conductivity can be controlled, making them essential for electronics.

| Property | Conductor | Insulator | Semiconductor |
|---|---|---|---|
| Free electrons | Many | Almost none | Few (controllable) |
| Charge distribution | Spreads over surface | Stays localised | Varies |
| Examples | Copper, Silver | Glass, Rubber | Silicon, Germanium |
| Resistivity | Very low | Very high | Moderate |

> **Board Exam Tip:** The distinction between conductors and insulators is frequently asked as a 2-mark question. Always give at least two examples of each.`,
    },
    {
      title: "Basic Properties of Electric Charge",
      content: `## Basic Properties of Electric Charge

Electric charge has three fundamental properties that are critical for understanding electrostatics.

---

### 1. Additivity of Charges

The total charge of a system is the **algebraic sum** of all individual charges.

If a system has charges q₁, q₂, q₃, ..., qₙ:

> **Q_total = q₁ + q₂ + q₃ + ... + qₙ**

- Charge is a **scalar quantity** (has magnitude but no direction)
- Proper signs (+ or −) must be used during addition

**Example:** A system has charges +1 μC, +2 μC, −3 μC, +4 μC, and −5 μC.
Total charge = (+1) + (+2) + (−3) + (+4) + (−5) = **−1 μC**

---

### 2. Conservation of Charge

> **The total charge of an isolated system always remains constant.**

- Charge can neither be **created** nor **destroyed** — only **transferred** from one body to another
- When glass is rubbed with silk, the positive charge on glass equals the negative charge on silk. Net charge = 0 (before and after)
- Even in nuclear reactions, charge is conserved:
  - Neutron → Proton + Electron (charge: 0 → +1 + (−1) = 0) ✓

**This is one of the fundamental conservation laws of physics**, alongside conservation of energy and momentum.

---

### 3. Quantisation of Charge

> **All free charges are integral multiples of a basic unit of charge, e.**

**q = ne**

Where:
- **n** = any integer (positive or negative): 0, ±1, ±2, ±3, ...
- **e** = 1.6 × 10⁻¹⁹ C (charge of one proton/electron)

This means charge always comes in **discrete packets** — you can have charge of 1e, 2e, 3e, etc., but **never 1.5e or 0.7e**.

**Why is quantisation ignored at macroscopic level?**
At everyday scales, even 1 μC = 6.25 × 10¹² electrons. The "steps" of e are so tiny that charge appears continuous — like a dotted line that looks smooth from far away.

| Property | Statement | Key Point |
|---|---|---|
| Additivity | Q = Σqᵢ | Algebraic sum with signs |
| Conservation | Q_initial = Q_final | No creation or destruction |
| Quantisation | q = ne | Discrete multiples of e |

> **Board Exam Tip:** "State and explain the three basic properties of electric charge" is a very common 3-mark or 5-mark question. Learn each with one example.`,
    },
    {
      title: "Coulomb's Law",
      content: `## Coulomb's Law

Coulomb's law is the **quantitative expression** for the force between two point charges. It was experimentally discovered by **Charles-Augustin de Coulomb** in 1785 using a **torsion balance**.

### Statement

> The electrostatic force between two point charges is **directly proportional** to the product of their magnitudes and **inversely proportional** to the square of the distance between them. The force acts along the line joining the two charges.

### Mathematical Expression

$$F = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{|q_1 q_2|}{r^2}$$

Where:
- **F** = force between charges (in Newtons)
- **q₁, q₂** = magnitudes of the two charges (in Coulombs)
- **r** = distance between them (in metres)
- **ε₀** = permittivity of free space = **8.854 × 10⁻¹² C² N⁻¹ m⁻²**
- **k = 1/(4πε₀)** = **9 × 10⁹ N m² C⁻²** (Coulomb's constant)

### Vector Form

For charges q₁ at position **r₁** and q₂ at position **r₂**:

**F₂₁** = (1/4πε₀) × (q₁q₂/r₂₁²) × **r̂₂₁**

Where **r̂₂₁** is the unit vector from q₁ to q₂.

### Key Points

1. **Like charges (both + or both −):** Force is **repulsive** (F is positive, along r̂₂₁)
2. **Unlike charges (one + and one −):** Force is **attractive** (F is negative, along −r̂₂₁)
3. The force obeys **Newton's Third Law**: F₁₂ = −F₂₁
4. Valid for **point charges** — when charge dimensions << separation distance
5. Works in **vacuum**; in a medium with dielectric constant K: F_medium = F_vacuum / K

### Comparison with Gravitational Force

| Feature | Coulomb's Law | Newton's Gravitation |
|---|---|---|
| Formula | F = kq₁q₂/r² | F = Gm₁m₂/r² |
| Nature | Attractive or Repulsive | Always Attractive |
| Constant | k = 9 × 10⁹ | G = 6.67 × 10⁻¹¹ |
| Strength | Much stronger | Much weaker |
| Ratio (e⁻ - p⁺) | ~2.3 × 10³⁹ times gravitational | — |

### Solved Example

**Q:** Two charges of 2 × 10⁻⁷ C and 3 × 10⁻⁷ C are placed 30 cm apart. Find the force.

**Given:** q₁ = 2 × 10⁻⁷ C, q₂ = 3 × 10⁻⁷ C, r = 0.30 m

**Solution:**
F = k|q₁q₂|/r²
F = (9 × 10⁹ × 2 × 10⁻⁷ × 3 × 10⁻⁷) / (0.30)²
F = (9 × 10⁹ × 6 × 10⁻¹⁴) / 0.09
F = 5.4 × 10⁻⁴ / 0.09
**F = 6 × 10⁻³ N = 0.006 N** (repulsive, if like charges)

> **Board Exam Tip:** Coulomb's law derivation in vector form is a frequent 5-mark question. Always state the law, write the formula, explain each symbol, and draw the diagram showing both charges with force vectors.`,
    },
    {
      title: "Superposition Principle",
      content: `## Superposition Principle

### Statement

> The net force on any charge due to a number of other charges is the **vector sum** of the individual forces exerted by each charge separately. Each force is calculated independently using Coulomb's law — the presence of other charges does not affect the pair-wise force.

### Mathematical Expression

For a charge q₁ experiencing forces from charges q₂, q₃, ..., qₙ:

**F₁ = F₁₂ + F₁₃ + F₁₄ + ... + F₁ₙ**

Each Fᵢⱼ is calculated using Coulomb's law independently.

### Why is This Important?

The superposition principle is powerful because:
1. Forces between charges are **independent** of the presence of other charges
2. We can solve complex multi-charge problems by **breaking them into pairs**
3. It applies to both **forces and electric fields**

### Solved Example

**Q:** Three charges q₁ = +1 μC, q₂ = +2 μC, and q₃ = −3 μC are placed at the vertices of an equilateral triangle with side 10 cm. Find the net force on q₁.

**Solution:**

**Step 1:** Calculate F₁₂ (force on q₁ due to q₂)
- Both positive → repulsive → away from q₂
- F₁₂ = k × 1×10⁻⁶ × 2×10⁻⁶ / (0.1)²
- F₁₂ = 9×10⁹ × 2×10⁻¹² / 0.01 = **1.8 N** (repulsive)

**Step 2:** Calculate F₁₃ (force on q₁ due to q₃)
- q₁ positive, q₃ negative → attractive → towards q₃
- F₁₃ = k × 1×10⁻⁶ × 3×10⁻⁶ / (0.1)²
- F₁₃ = 9×10⁹ × 3×10⁻¹² / 0.01 = **2.7 N** (attractive)

**Step 3:** Find the vector sum using parallelogram/component method.

Resolve along x and y axes, add components, find resultant magnitude and direction.

> **Key Insight:** The superposition principle means we never need to solve "all-at-once" — always reduce to pair-by-pair, then add vectors.

> **Board Exam Tip:** Questions on 3-4 charges arranged in geometric shapes (triangle, square, line) are very common 3-5 mark questions. Always draw the force diagram first.`,
    },
    {
      title: "Electric Field",
      content: `## Electric Field

### What is an Electric Field?

When a charge Q is placed in space, it modifies the space around it. Any other charge brought into this region experiences a force. This "modified space" is described by the concept of **electric field**.

### Definition

> The **electric field** at a point is defined as the **force experienced by a unit positive test charge** placed at that point, without disturbing the source charge.

**E = F / q₀**

Where:
- **E** = electric field (N/C or V/m)
- **F** = force on the test charge
- **q₀** = test charge (infinitesimally small positive charge)

### Electric Field Due to a Point Charge

For a point charge Q, the electric field at distance r is:

**E = (1/4πε₀) × Q/r²  ×  r̂**

- If Q is **positive**: E points **radially outward** (away from Q)
- If Q is **negative**: E points **radially inward** (towards Q)
- The magnitude decreases as **1/r²** (inverse square law)

### Electric Field is a Vector

The electric field has both **magnitude and direction**. The direction is:
- Away from positive charges
- Towards negative charges

### Superposition of Electric Fields

The net electric field at any point due to multiple charges is the **vector sum** of the fields due to each charge:

**E = E₁ + E₂ + E₃ + ...**

### Physical Significance

The electric field concept is crucial because:
1. It eliminates the need for **action at a distance** — the field mediates the force
2. It is especially important for **time-varying situations** where electromagnetic waves propagate through the field
3. The field exists even when no test charge is present

### Units and Dimensions

- **SI Unit:** N/C (Newton per Coulomb) or V/m (Volt per metre)
- **Dimensions:** [MLT⁻³A⁻¹]

> **Board Exam Tip:** "Define electric field and derive its expression for a point charge" is a standard 3-mark question. Always mention that the test charge must be infinitesimally small so as not to disturb the source charge distribution.`,
    },
    {
      title: "Electric Field Lines",
      content: `## Electric Field Lines

### What Are Electric Field Lines?

**Electric field lines** (or lines of force) are imaginary curves drawn in space such that the **tangent** at any point on the curve gives the **direction of the electric field** at that point.

They were introduced by **Michael Faraday** as a visual way to represent electric fields.

### Properties of Electric Field Lines

1. **Start from positive charges** and **end on negative charges**
2. The **tangent** at any point gives the direction of **E** at that point
3. **Density of lines** (number of lines per unit area perpendicular to the lines) is proportional to the **magnitude of E** — closer lines = stronger field
4. **Never cross** each other — because at the crossing point there would be two directions of E, which is impossible
5. **Continuous curves** — no sudden breaks (charge moves smoothly, so field is continuous)
6. **Do not form closed loops** in electrostatics (they do in magnetism)
7. Lines are **perpendicular** to the surface of a conductor at every point
8. **No field lines** exist **inside a conductor** (E = 0 inside)

### Field Line Patterns

**Single positive charge (+Q):**
- Lines radiate **outward** symmetrically in all directions
- Like rays from a sun

**Single negative charge (−Q):**
- Lines point **inward** toward the charge
- Like arrows converging to a point

**Two equal positive charges (+Q, +Q):**
- Lines repel in the middle region
- A **neutral point** exists midway where E = 0

**Electric dipole (+Q, −Q):**
- Lines go from the positive charge to the negative charge
- The pattern is symmetric about the perpendicular bisector
- At large distances, the field resembles that of a single charge

**Uniform field (parallel plates):**
- Lines are **parallel, equidistant, and straight**
- Field magnitude is the same everywhere

### Key Distinction from Magnetic Field Lines

| Property | Electric Field Lines | Magnetic Field Lines |
|---|---|---|
| Origin/End | Start on +, end on − | No start/end (closed loops) |
| Closed loops? | No | Yes |
| Inside conductor? | No field lines | Lines pass through |

> **Board Exam Tip:** Drawing field line diagrams is a very common question (2-3 marks). Practice drawing clean, symmetric field lines for single charges, dipoles, and parallel plates. Label the direction with arrows.`,
    },
    {
      title: "Electric Dipole",
      content: `## Electric Dipole

### Definition

An **electric dipole** is a pair of **equal and opposite charges** (+q and −q) separated by a small distance **2a**.

### Dipole Moment

The **electric dipole moment** is defined as:

**p = q × 2a**

- Direction: From the **negative charge** to the **positive charge**
- SI Unit: **C·m** (Coulomb-metre)
- It is a **vector quantity**

### Electric Field Due to a Dipole

#### (a) On the Axial Line (End-on position)

At a point P at distance r from the centre of the dipole (r >> a):

**E_axial = (1/4πε₀) × 2p/r³**

Direction: Along the direction of **p** (from −q to +q extended)

#### (b) On the Equatorial Line (Broadside-on position)

At a point P at distance r from the centre on the perpendicular bisector (r >> a):

**E_equatorial = (1/4πε₀) × p/r³**

Direction: **Opposite** to the direction of **p** (from +q to −q)

#### Key Relationship

**E_axial = 2 × E_equatorial** (at the same distance r >> a)

This means the field on the axis is always **twice** the field on the equatorial line at the same distance.

### Dipole in a Uniform External Field

When a dipole is placed in a uniform electric field **E**:

1. **Net Force = 0** (equal and opposite forces on +q and −q cancel)
2. **Net Torque ≠ 0** (forces create a couple)

**Torque:** τ = p × E = pE sinθ

Where θ is the angle between **p** and **E**.

- Maximum torque when θ = 90° → **τ_max = pE**
- Zero torque when θ = 0° or 180° (aligned or anti-aligned)

### Practical Examples of Dipoles

- **Water molecule (H₂O):** The oxygen atom is more electronegative, creating a permanent dipole
- **HCl molecule:** Chlorine pulls electrons, making it a polar molecule
- **CO₂ molecule:** Symmetric → no net dipole moment (individual dipoles cancel)

> **Board Exam Tip:** Derivation of electric field on the axial or equatorial line of a dipole is one of the **most frequently asked 5-mark questions** in CBSE boards. Practice it until you can write it from memory in under 5 minutes.`,
    },
    {
      title: "Electric Flux and Gauss's Law",
      content: `## Electric Flux

### Definition

**Electric flux** (Φ) is a measure of the total electric field passing through a given surface. It is proportional to the number of field lines passing through the surface.

**Φ = E · A = EA cosθ**

Where:
- **E** = electric field magnitude
- **A** = area of the surface
- **θ** = angle between E and the **outward normal** to the surface
- SI Unit: **N·m²/C** or **V·m**

### Key Cases

- **θ = 0°** (E perpendicular to surface, along normal): **Φ = EA** (maximum)
- **θ = 90°** (E parallel to surface): **Φ = 0** (no flux)
- **θ = 180°** (E opposite to normal): **Φ = −EA**

---

## Gauss's Law

### Statement

> The total electric flux through any **closed surface** is equal to **1/ε₀** times the **total charge enclosed** within that surface.

**Φ = ∮ E · dA = q_enclosed / ε₀**

### Key Points About Gauss's Law

1. It applies to any **closed surface** (called a **Gaussian surface**)
2. Only the charge **inside** the surface contributes to the flux
3. Charges **outside** the surface contribute zero net flux
4. The shape of the Gaussian surface doesn't matter — choose one that exploits **symmetry**
5. It is most useful for calculating E in cases with **high symmetry**: spherical, cylindrical, or planar

### Applications of Gauss's Law

#### (a) Infinite Line Charge (linear charge density λ)

Using a cylindrical Gaussian surface:

**E = λ / (2πε₀r)**

The field decreases as **1/r** (not 1/r²!)

#### (b) Infinite Plane Sheet of Charge (surface charge density σ)

Using a pillbox Gaussian surface:

**E = σ / (2ε₀)**

The field is **uniform** — independent of distance! This is remarkable.

#### (c) Uniformly Charged Spherical Shell (total charge Q)

- **Outside** (r > R): E = (1/4πε₀) × Q/r² — behaves like a point charge
- **Inside** (r < R): **E = 0** — no field inside a uniformly charged shell!

### Solved Example

**Q:** A cube of side 10 cm has a charge of +10 μC at its centre. Find the flux through one face.

**Solution:**
Total flux through the cube = q/ε₀ = 10 × 10⁻⁶ / 8.854 × 10⁻¹² = **1.13 × 10⁶ N·m²/C**

By symmetry, flux through each face = Total/6 = **1.88 × 10⁵ N·m²/C**

> **Board Exam Tip:** Gauss's Law and its applications (especially infinite line charge and charged spherical shell) are **very high-weightage** topics. The derivation of E for a spherical shell using Gauss's law is asked almost every year as a 5-mark question.`,
    },
    {
      title: "Continuous Charge Distributions",
      content: `## Continuous Charge Distributions

When charge is spread over a body rather than concentrated at a point, we describe it using **charge density**.

### Types of Charge Density

#### 1. Linear Charge Density (λ)

For charge distributed along a **line** (wire, rod):

**λ = dq/dl** (charge per unit length)

- SI Unit: **C/m**
- Example: Uniformly charged infinite wire

#### 2. Surface Charge Density (σ)

For charge distributed over a **surface** (plate, sphere surface):

**σ = dq/dA** (charge per unit area)

- SI Unit: **C/m²**
- Example: Charged conducting plate, surface of a charged sphere

#### 3. Volume Charge Density (ρ)

For charge distributed throughout a **volume** (solid sphere, cloud):

**ρ = dq/dV** (charge per unit volume)

- SI Unit: **C/m³**
- Example: Uniformly charged solid sphere, charge cloud

### Calculating Electric Field for Continuous Distributions

For continuous charge distributions, we replace the summation in the superposition principle with an **integral**:

**E = ∫ dE = ∫ (1/4πε₀) × (dq/r²) × r̂**

### Example: Electric Field Due to a Uniformly Charged Ring

At a point P on the axis of a ring of radius R carrying total charge Q, at distance x from the centre:

**E = (1/4πε₀) × Qx / (R² + x²)^(3/2)**

Key observations:
- At the **centre** (x = 0): **E = 0** (by symmetry, all contributions cancel)
- At **large distances** (x >> R): E ≈ kQ/x² (behaves like a point charge)
- **Maximum E** occurs at x = R/√2

### Summary Table

| Distribution | Symbol | Unit | Example |
|---|---|---|---|
| Linear | λ | C/m | Charged wire |
| Surface | σ | C/m² | Charged plate |
| Volume | ρ | C/m³ | Charged sphere |

> **Board Exam Tip:** Questions on charge densities and their definitions are common 2-mark questions. The derivation of the electric field due to a uniformly charged ring on its axis is an important 3-mark question. Always state the type of density, its formula, and SI unit.`,
    },
  ],

  notes: `## Chapter 1: Electric Charges and Fields — Comprehensive Notes

### Chapter Overview
This chapter introduces the study of **electrostatics** — forces, fields, and potentials arising from static charges. It is one of the highest-weightage chapters in CBSE Physics (8-12 marks) and forms the foundation for chapters on Electrostatic Potential, Current Electricity, and Electromagnetic Induction.

---

## 1. Electric Charge

**Definition:** Electric charge is a fundamental property of matter that causes it to experience a force in an electromagnetic field.

**Two types:** Positive (+) and Negative (−)
- **Like charges repel**, unlike charges attract
- By convention: charge on glass rod rubbed with silk = positive

**How charging occurs:** Transfer of electrons (not protons — protons are bound in the nucleus)
- Body losing electrons → positive
- Body gaining electrons → negative

---

## 2. Conductors and Insulators

| Property | Conductors | Insulators |
|---|---|---|
| Charge flow | Free | Restricted |
| Examples | Metals, human body, earth | Glass, rubber, plastic |
| Charge distribution | Spreads over surface | Stays localised |

**Semiconductors** (Si, Ge) have intermediate conductivity.

---

## 3. Basic Properties of Electric Charge

### (a) Additivity
Total charge = algebraic sum: **Q = q₁ + q₂ + ... + qₙ**

### (b) Conservation
Charge can neither be created nor destroyed. In an isolated system, total charge remains constant.

### (c) Quantisation
**q = ne**, where n is an integer and **e = 1.6 × 10⁻¹⁹ C**

At macroscopic levels, quantisation is negligible since charges involved are ~10¹² times e.

---

## 4. Coulomb's Law

**F = (1/4πε₀) × |q₁q₂|/r²**

- **k = 9 × 10⁹ N m² C⁻²**
- **ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²**
- In vector form: **F₂₁ = k(q₁q₂/r²₂₁) r̂₂₁**
- In a medium: F_medium = F_vacuum / K (K = dielectric constant)

---

## 5. Superposition Principle

The net force on a charge = vector sum of all individual Coulomb forces:
**F = F₁₂ + F₁₃ + ... + F₁ₙ**

Each pair-wise force is independent of other charges.

---

## 6. Electric Field

**Definition:** Force per unit positive test charge: **E = F/q₀**

For a point charge Q: **E = (1/4πε₀) × Q/r²**

- Direction: away from + charge, towards − charge
- SI Unit: N/C or V/m

---

## 7. Electric Field Lines

**Properties:**
1. Start on +, end on −
2. Tangent gives direction of E
3. Density ∝ magnitude of E
4. Never cross
5. Perpendicular to conductor surface
6. No field lines inside a conductor

---

## 8. Electric Dipole

**p = q × 2a** (from − to +), SI Unit: C·m

**Field on axial line (r >> a):** E = (1/4πε₀) × 2p/r³

**Field on equatorial line (r >> a):** E = (1/4πε₀) × p/r³

**E_axial = 2 × E_equatorial**

**Torque in uniform field:** τ = pE sinθ

---

## 9. Electric Flux and Gauss's Law

**Flux:** Φ = E·A cosθ, Unit: N·m²/C

**Gauss's Law:** Φ = q_enclosed / ε₀

### Applications:
- **Infinite line charge:** E = λ/(2πε₀r)
- **Infinite plane sheet:** E = σ/(2ε₀)
- **Spherical shell:** E = kQ/r² (outside), E = 0 (inside)

---

## 10. Charge Densities

| Type | Symbol | Formula | Unit |
|---|---|---|---|
| Linear | λ | dq/dl | C/m |
| Surface | σ | dq/dA | C/m² |
| Volume | ρ | dq/dV | C/m³ |

---

## Key Formulas at a Glance

| Formula | Description |
|---|---|
| q = ne | Quantisation of charge |
| F = kq₁q₂/r² | Coulomb's law |
| E = F/q₀ = kQ/r² | Electric field (point charge) |
| E_axial = 2kp/r³ | Dipole axial field |
| E_equat = kp/r³ | Dipole equatorial field |
| τ = pE sinθ | Torque on dipole |
| Φ = EA cosθ | Electric flux |
| Φ = q/ε₀ | Gauss's law |
| E = λ/(2πε₀r) | Field due to line charge |
| E = σ/(2ε₀) | Field due to infinite sheet |

---

## Board Exam Analysis (2015-2025)

- **Most repeated:** Coulomb's law derivation (vector form), Gauss's law applications, Electric dipole field derivation
- **Mark distribution:** 2-mark (definitions, state laws) + 3-mark (numericals) + 5-mark (derivations with diagrams)
- **Common question types:** Assertion-Reason on field lines, Numerical on Coulomb's law, Case-study on charging

---

## Common Mistakes to Avoid

1. Forgetting to convert cm to m in Coulomb's law calculations
2. Using scalar formula when vector addition is needed (superposition)
3. Not stating units in the final answer
4. Confusing E_axial and E_equatorial formulas
5. Forgetting that E = 0 inside a conducting shell
6. Drawing field lines that cross each other`,
  importantPoints: [
    "**Coulomb's Law**: F = kq₁q₂/r² — valid for point charges in vacuum. In a medium with dielectric constant K, F_medium = F_vacuum/K",
    "**Superposition Principle**: Net force on a charge = vector sum of individual forces from all other charges. Each pair is independent.",
    "**Electric Field**: E = F/q₀ = kQ/r². Direction: away from +ve, towards −ve. SI unit: N/C or V/m",
    "**Electric Dipole Moment**: p = q × 2a (vector from −q to +q). SI unit: C·m. Tells strength of dipole",
    "**Dipole Field**: E_axial = 2kp/r³ (along p), E_equatorial = kp/r³ (opposite to p). For r >> a only.",
    "**Torque on Dipole**: τ = p × E = pE sinθ. Maximum at θ=90°, zero at θ=0° (stable) and θ=180° (unstable)",
    "**Gauss's Law**: Total flux through closed surface = q_enclosed/ε₀. Powerful for symmetric charge distributions.",
    "**Applications of Gauss's Law**: (i) Infinite line charge: E = λ/2πε₀r (ii) Infinite plane: E = σ/2ε₀ (iii) Spherical shell: E = kQ/r² outside, E = 0 inside",
    "**Electric Field Lines**: Start on +ve, end on −ve. Never cross. Density ∝ field strength. Perpendicular to conductor surface.",
    "**Quantisation of Charge**: q = ne where e = 1.6 × 10⁻¹⁹ C. Charge is always a whole-number multiple of e.",
    "**Conservation of Charge**: Total charge in an isolated system remains constant. Charge is neither created nor destroyed.",
    "**Continuous Charge Distribution**: Linear (λ = dq/dl), Surface (σ = dq/dA), Volume (ρ = dq/dV)",
  ],
  commonMistakes: [
    "**Forgetting unit conversion**: Using cm instead of m in Coulomb's law. Always convert to SI units first! r = 30 cm = 0.30 m",
    "**Scalar vs Vector addition**: Adding forces as scalars instead of vectors in superposition problems. You MUST resolve into components.",
    "**Sign errors in dipole field**: E_axial is along p̂ but E_equatorial is opposite to p̂. Students often get the direction wrong.",
    "**Confusing flux with field**: Flux (Φ = EA cosθ) is a scalar, field (E) is a vector. Gauss's law gives flux, not field directly.",
    "**Wrong Gaussian surface**: Choosing a surface that doesn't exploit symmetry. The surface must match the charge distribution's symmetry.",
    "**E inside conductor ≠ 0 always**: E = 0 inside a conductor only in electrostatic equilibrium. During current flow, E ≠ 0.",
    "**Ignoring conditions for dipole formula**: E_axial = 2kp/r³ is valid ONLY when r >> 2a (far field). Don't use for nearby points.",
    "**Missing units in final answer**: CBSE deducts marks if the final numerical answer doesn't have correct SI units.",
    "**Drawing field lines that cross**: Field lines NEVER cross — at the intersection there would be two directions of E, which is impossible.",
    "**Confusing E_axial magnitude**: At same distance r, E_axial = 2 × E_equatorial. Students mix up which is larger.",
  ],
  examStrategy: [
    "**5-mark derivation**: Coulomb's law in vector form OR Gauss's law applications (line charge / plane / shell). Practice writing complete derivation with diagram in under 8 minutes.",
    "**3-mark numericals**: Superposition problems with 3 charges in triangle/line arrangement. Always draw force diagram first, resolve into x-y components.",
    "**2-mark definitions**: Define electric field, electric flux, electric dipole moment, Gauss's law. Use NCERT exact wording.",
    "**Diagram questions**: Field lines for (i) single +ve charge (ii) dipole (iii) two +ve charges (iv) uniform field. Practice clean, symmetric diagrams.",
    "**Assertion-Reason**: Common AR: 'Field inside conductor is zero' (True) because 'free electrons redistribute until equilibrium' (True, correct explanation).",
    "**Case-study pattern**: A real-world scenario (lightning, Van de Graaff, photocopier) followed by 4-5 MCQs testing concepts from this chapter.",
    "**Time allocation**: Spend max 10 min on 5-mark, 5 min on 3-mark, 3 min on 2-mark. Don't exceed — move on and come back if time permits.",
    "**Scoring keywords**: 'Inverse square law', 'principle of superposition', 'Gaussian surface', 'electrostatic equilibrium' — use these exact terms.",
  ],
  examples: [
    "**Coulomb's Law Numerical**: Two charges 3μC and −4μC are 20cm apart. Force = k|q₁q₂|/r² = 9×10⁹ × 3×10⁻⁶ × 4×10⁻⁶ / (0.2)² = **2.7 N** (attractive)",
    "**Superposition**: Three charges +q, +q, −q at vertices of equilateral triangle (side a). Net force on −q: Each +q attracts with F = kq²/a². Resultant = 2F cos30° = √3 kq²/a² directed towards midpoint of +q charges.",
    "**Electric Field**: At what distance from a 5μC charge is E = 1000 N/C? Using E = kQ/r², r = √(kQ/E) = √(9×10⁹ × 5×10⁻⁶/1000) = **6.7 m**",
    "**Dipole field**: A dipole with p = 2×10⁻⁸ C·m. At r = 0.1m on axis: E_axial = 2kp/r³ = 2×9×10⁹×2×10⁻⁸/(0.1)³ = **3.6 × 10⁵ N/C**. On equatorial line at same r: E = half = 1.8 × 10⁵ N/C",
    "**Gauss's Law — Sphere**: Charge Q on conducting sphere radius R. For r > R: E = kQ/r² (same as point charge). For r < R: E = 0 (no enclosed charge).",
    "**Flux calculation**: Cube of side 10cm encloses charge 1μC. Total flux = q/ε₀ = 10⁻⁶/(8.854×10⁻¹²) = **1.13 × 10⁵ N·m²/C**. Flux through each face = total/6.",
    "**Force between parallel plates**: Two large plates with σ = ±10⁻⁶ C/m². Field between = σ/ε₀ = 10⁻⁶/(8.854×10⁻¹²) ≈ **1.13 × 10⁵ N/C**",
  ],
  summary: "**Electric Charges and Fields** is the first chapter of Class 12 Physics and the foundation of electrostatics.\n\n**Key Concepts**: (1) Two types of charge: positive & negative. Like repel, unlike attract. (2) **Coulomb's Law**: F = kq₁q₂/r², where k = 9 × 10⁹ N·m²/C². (3) **Superposition**: Net force = vector sum of individual pair forces. (4) **Electric Field** E = F/q₀ = kQ/r² — the force per unit positive test charge. (5) **Electric Dipole**: Two equal and opposite charges separated by distance 2a. Moment p = q(2a). (6) **Gauss's Law**: Φ = q_enclosed/ε₀ — relates flux through a closed surface to the enclosed charge.\n\n**Most Important for Boards**: Coulomb's law (vector form derivation), electric field due to dipole (axial & equatorial), Gauss's law applications (line charge, plane sheet, spherical shell), properties of field lines.\n\n**Typical Marks**: 8-12 marks in board exams. At least one 5-mark derivation + one 3-mark numerical + 2-mark definitions.",
  questions2: [
    { question: "Define electric field intensity. Write its SI unit.", answer: "Electric field intensity at a point is defined as the force experienced by a unit positive test charge placed at that point, without disturbing the source charge. E = F/q₀. SI unit: N/C or V/m." },
    { question: "State Coulomb's law in electrostatics.", answer: "The electrostatic force between two point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them. F = kq₁q₂/r², where k = 1/4πε₀ = 9 × 10⁹ N m² C⁻²." },
    { question: "What is an electric dipole? Define electric dipole moment.", answer: "An electric dipole consists of two equal and opposite charges (+q and −q) separated by a small distance 2a. Electric dipole moment p = q × 2a (vector from −q to +q). SI unit: C·m." },
    { question: "State Gauss's law in electrostatics.", answer: "The total electric flux through any closed surface is equal to 1/ε₀ times the total charge enclosed by the surface. Φ = q_enclosed/ε₀. It is applicable for any closed surface (Gaussian surface)." },
    { question: "Why do electric field lines never cross each other?", answer: "If two field lines crossed, there would be two directions of the electric field at the point of intersection, which is impossible as the field at a point has a unique direction." },
    { question: "What is the electric field inside a charged conducting sphere?", answer: "The electric field inside a charged conducting sphere is zero. This is because in electrostatic equilibrium, all charge resides on the surface, and by Gauss's law, the enclosed charge for any Gaussian surface inside is zero." },
    { question: "Define quantisation of charge.", answer: "Quantisation of charge means that the total charge on a body is always an integral multiple of the basic unit of charge e (1.6 × 10⁻¹⁹ C). q = ne, where n is an integer." },
    { question: "What is the ratio of electric field at an axial point to that at an equatorial point of a dipole at the same distance?", answer: "E_axial/E_equatorial = (2kp/r³)/(kp/r³) = 2:1. The axial field is twice the equatorial field at the same distance." },
    { question: "State the principle of superposition of electric charges.", answer: "The net force on a charge due to multiple other charges is the vector sum of the individual forces exerted by each charge independently. Each pair-wise force is unaffected by the presence of other charges." },
    { question: "Why is the electric field inside a hollow conductor zero?", answer: "By Gauss's law, for a Gaussian surface inside the conductor, the enclosed charge is zero (all charge is on the outer surface). Hence Φ = 0, which means E = 0 inside." },
    { question: "What are the SI units of (i) electric charge and (ii) permittivity of free space?", answer: "(i) SI unit of electric charge: Coulomb (C). (ii) SI unit of permittivity of free space (ε₀): C² N⁻¹ m⁻² or F/m (Farad per metre)." },
    { question: "Draw the electric field lines for a system of two positive charges.", answer: "Field lines emerge from both positive charges and spread outward. In the region between the charges, lines repel and curve away. There is a neutral point (E = 0) at the midpoint of the line joining them (for equal charges)." },
  ],
  questions3: [
    { question: "Derive the expression for the electric field due to a point charge using Coulomb's law.", answer: "Consider a point charge Q at origin. Place a small test charge q₀ at distance r.\nBy Coulomb's law: F = (1/4πε₀)(Qq₀/r²) r̂\nElectric field E = F/q₀\n∴ E = (1/4πε₀)(Q/r²) r̂\nDirection: radially outward for +Q, inward for −Q.\nMagnitude decreases as 1/r² (inverse square law)." },
    { question: "Two point charges 5 × 10⁻⁸ C and −3 × 10⁻⁸ C are placed 16 cm apart. At what point on the line joining them is the electric field zero?", answer: "Let E = 0 at distance x from the +5 × 10⁻⁸ C charge (between them won't work since fields are in same direction).\nPoint must be outside, beyond the −3 × 10⁻⁸ C charge.\nk(5×10⁻⁸)/x² = k(3×10⁻⁸)/(x−0.16)²\n5(x−0.16)² = 3x²\n5x² − 1.6x + 0.128 = 3x²\n2x² − 1.6x + 0.128 = 0\nSolving: x = 0.4 m = 40 cm from the positive charge (i.e., 24 cm beyond the negative charge)." },
    { question: "Derive the expression for torque experienced by an electric dipole in a uniform electric field.", answer: "Consider a dipole (charges +q and −q, separation 2a) in uniform field E at angle θ.\nForce on +q: F₁ = qE (along E)\nForce on −q: F₂ = qE (opposite to E)\nNet force = 0 (translational equilibrium).\nBut forces form a couple.\nTorque = force × perpendicular distance = qE × 2a sinθ\n∴ τ = pE sinθ (where p = q × 2a)\nIn vector form: τ = p × E\nMaximum torque at θ = 90°: τ_max = pE\nZero torque at θ = 0° (stable) and θ = 180° (unstable)." },
    { question: "Using Gauss's law, derive the electric field due to an infinite plane sheet of charge with surface charge density σ.", answer: "Consider an infinite plane sheet with surface charge density σ.\nChoose a cylindrical Gaussian surface with the sheet passing through its middle, cross-sectional area A.\nBy symmetry, E is perpendicular to the sheet and equal on both sides.\nFlux through curved surface = 0 (E ⊥ to area vector)\nFlux through two flat faces = EA + EA = 2EA\nCharge enclosed = σA\nBy Gauss's law: 2EA = σA/ε₀\n∴ E = σ/2ε₀\nThis is independent of distance from the sheet." },
    { question: "State and explain the properties of electric field lines.", answer: "Properties:\n1. Field lines start from positive charges and end on negative charges.\n2. The tangent at any point gives the direction of E at that point.\n3. Field lines never cross each other (uniqueness of E direction).\n4. Density of lines ∝ magnitude of E (closer lines = stronger field).\n5. Lines are continuous curves; no sudden breaks.\n6. They don't form closed loops in electrostatics.\n7. Perpendicular to the surface of a conductor.\n8. No field lines inside a conductor (E = 0)." },
    { question: "Three charges +q, +q, and −2q are placed at the vertices of an equilateral triangle of side 'a'. What is the dipole moment of this arrangement?", answer: "The system has net charge = +q + q − 2q = 0.\n−2q can be split as (−q) + (−q).\nThis creates two dipoles:\nDipole 1: +q and −q along one side, moment p₁ = qa\nDipole 2: +q and −q along another side, moment p₂ = qa\nAngle between p₁ and p₂ = 60°\nResultant: p = √(p₁² + p₂² + 2p₁p₂cos60°) = √(q²a² + q²a² + q²a²) = qa√3\nDirection: along the perpendicular from −2q vertex to the opposite side." },
    { question: "Explain the concept of electric flux. What is its SI unit? What is its physical significance?", answer: "Electric flux (Φ) through a surface is the total number of electric field lines passing through that surface.\nΦ = ∫ E · dA = ∫ E dA cosθ\nFor uniform field and flat surface: Φ = EA cosθ\nwhere θ = angle between E and the area vector (outward normal).\n\nSI unit: N·m²/C or V·m\n\nPhysical significance: It measures the total 'flow' of electric field through a surface. By Gauss's law, flux through a closed surface tells us the enclosed charge." },
    { question: "A charge of 5 μC is placed at the centre of a cube of side 10 cm. Calculate (i) total flux through the cube, (ii) flux through each face.", answer: "(i) By Gauss's law:\nΦ_total = q/ε₀ = 5 × 10⁻⁶ / (8.854 × 10⁻¹²)\nΦ_total = 5.65 × 10⁵ N·m²/C\n\n(ii) By symmetry, flux is equally distributed through all 6 faces:\nΦ_face = Φ_total / 6 = 5.65 × 10⁵ / 6\nΦ_face = 9.42 × 10⁴ N·m²/C\n\nNote: The result is independent of the size of the cube — only the enclosed charge matters." },
  ],
  questions5: [
    { question: "State Gauss's law. Using it, derive the expression for the electric field due to a uniformly charged thin spherical shell at (i) a point outside the shell, and (ii) a point inside the shell.", answer: "**Gauss's Law**: The total electric flux through any closed surface equals 1/ε₀ times the total charge enclosed. Φ = ∮E·dA = q_enc/ε₀\n\n**Setup**: Consider a thin spherical shell of radius R with total charge Q uniformly distributed.\n\n**(i) Point outside (r > R)**:\nChoose Gaussian surface: sphere of radius r, concentric with shell.\nBy symmetry, E is radial and constant on this surface.\n∮E·dA = E × 4πr²\nEnclosed charge = Q\nBy Gauss's law: E × 4πr² = Q/ε₀\n∴ **E = Q/(4πε₀r²) = kQ/r²** (same as point charge)\n\n**(ii) Point inside (r < R)**:\nGaussian surface: sphere of radius r (r < R), concentric with shell.\nAll charge is on the shell (at R), so enclosed charge = 0\nBy Gauss's law: E × 4πr² = 0\n∴ **E = 0** inside the shell\n\n**Graph**: E increases as 1/r² for r > R, jumps from 0 to kQ/R² at r = R, and is 0 for r < R." },
    { question: "Derive the expression for the electric field at a point on the axial line and equatorial line of an electric dipole.", answer: "**Electric Dipole**: Two charges +q and −q separated by 2a. Dipole moment p = q(2a).\n\n**Axial Line** (point P at distance r from centre, on the axis):\nField due to +q at P: E₊ = kq/(r−a)² (away from +q)\nField due to −q at P: E₋ = kq/(r+a)² (towards −q)\nNet field E = E₊ − E₋ = kq[1/(r−a)² − 1/(r+a)²]\n= kq × 4ar/(r²−a²)²\nFor r >> a: E_axial = kq × 4ar/r⁴ = k(2qa)(2)/r³\n∴ **E_axial = 2kp/r³** (along p̂, i.e., from −q to +q)\n\n**Equatorial Line** (point P at distance r from centre, on perpendicular bisector):\nDistance from each charge to P = √(r²+a²)\nE₊ and E₋ have equal magnitudes = kq/(r²+a²)\nVertical components cancel, horizontal components add.\nE_eq = 2 × kq/(r²+a²) × a/√(r²+a²) = 2kqa/(r²+a²)^(3/2)\nFor r >> a: **E_equat = kp/r³** (opposite to p̂)\n\n**Ratio**: E_axial/E_equat = 2:1 at the same distance." },
    { question: "State Coulomb's law in vector form. What are the key features of the electrostatic force? A charge of 5μC experiences a force of 50N when placed 10cm from another charge. Find the magnitude of the second charge.", answer: "**Coulomb's Law (Vector Form)**:\nF₁₂ = (1/4πε₀) × (q₁q₂/r₁₂²) × r̂₁₂\nwhere F₁₂ = force on charge 1 due to charge 2\nr̂₁₂ = unit vector from charge 2 to charge 1\n\n**Key Features**:\n1. Central force — acts along the line joining two charges\n2. Conservative force — work done is path-independent\n3. Follows Newton's third law: F₁₂ = −F₂₁\n4. Obeys superposition principle\n5. Much stronger than gravitational force (by factor ~10³⁹ for e-p)\n6. Can be attractive or repulsive\n7. In a medium: F = kq₁q₂/(Kr²), where K is dielectric constant\n\n**Numerical**:\nGiven: q₁ = 5 × 10⁻⁶ C, F = 50 N, r = 0.10 m\nUsing F = kq₁q₂/r²:\n50 = 9 × 10⁹ × 5 × 10⁻⁶ × q₂ / (0.10)²\n50 = 9 × 10⁹ × 5 × 10⁻⁶ × q₂ / 0.01\n50 = 4.5 × 10⁶ × q₂\nq₂ = 50 / (4.5 × 10⁶) = 1.11 × 10⁻⁵ C\n∴ **q₂ ≈ 11.1 μC**" },
    { question: "Using Gauss's law, derive the expression for electric field due to a long straight uniformly charged wire. Draw the field lines pattern.", answer: "**Setup**: Consider an infinitely long straight wire with uniform linear charge density λ (charge per unit length).\n\n**Gaussian Surface**: Choose a cylindrical surface of radius r and length l, coaxial with the wire.\n\n**Symmetry Analysis**:\n- By symmetry, E is radial (perpendicular to wire) and constant at distance r\n- E is parallel to the curved surface's normal\n- E is perpendicular to the flat end caps\n\n**Flux Calculation**:\n- Flux through curved surface = E × 2πrl (E is constant, parallel to dA)\n- Flux through end caps = 0 (E ⊥ dA)\n- Total flux = E × 2πrl\n\n**Charge Enclosed**: q_enc = λl\n\n**Applying Gauss's Law**:\nE × 2πrl = λl/ε₀\n∴ **E = λ/(2πε₀r)**\n\nThe field decreases as 1/r (not 1/r²).\n\n**Direction**: Radially outward for +λ, inward for −λ.\n\n**Field Lines**: Radial lines emanating perpendicular to the wire in all directions, like spokes of a wheel when viewed end-on. Density decreases with distance." },
    { question: "Explain the three basic properties of electric charge with examples. Why is charge quantisation not observed at macroscopic level?", answer: "**1. Additivity of Charge**:\nThe total charge of a system is the algebraic sum of all individual charges: Q = q₁ + q₂ + ... + qₙ\nExample: A system with charges +3μC, −5μC, +2μC has net charge = 0.\n\n**2. Conservation of Charge**:\nThe total charge of an isolated system always remains constant. Charge can neither be created nor destroyed, only transferred.\nExample: When a glass rod is rubbed with silk, the positive charge on the rod equals the negative charge on the silk. Net charge = 0 (before and after).\nExample: In nuclear reaction: n → p + e⁻ + ν̄ (charge: 0 = +1 − 1 + 0) ✓\n\n**3. Quantisation of Charge**:\nAll charges are integral multiples of the elementary charge e = 1.6 × 10⁻¹⁹ C.\nq = ne, where n = 0, ±1, ±2, ...\nYou cannot have charge = 1.5e or 0.7e.\n\n**Why not observed at macroscopic level?**\nAt everyday scales, even 1μC contains ~6.25 × 10¹² electrons. The discrete steps of e are incredibly small compared to the charges we handle. The 'granularity' is invisible — like a dotted line that appears smooth from a distance. Thus, charge appears continuous at macroscopic level." },
  ],
  revision: {
    quickPoints: [
      "**Two types of charge**: Positive (glass rubbed with silk) and Negative (ebonite rubbed with fur). Like repel, unlike attract.",
      "**Coulomb's Law**: F = kq₁q₂/r². k = 9 × 10⁹ N·m²/C². Valid for point charges in vacuum.",
      "**Superposition**: Net force = vector sum of all pair-wise forces. Each force independent of others.",
      "**Electric Field**: E = F/q₀ = kQ/r². Unit: N/C or V/m. Direction: away from +, towards −.",
      "**Dipole**: p = q(2a). Axial field: 2kp/r³. Equatorial field: kp/r³. Ratio = 2:1.",
      "**Torque on dipole**: τ = pE sinθ. Max at 90°, zero at 0° (stable) and 180° (unstable).",
      "**Gauss's Law**: Φ = q_enclosed/ε₀. Use cylindrical symmetry for line charge, planar for sheet, spherical for shell.",
      "**Field lines**: Start on +, end on −. Never cross. Density ∝ E. Perpendicular to conductor surface.",
      "**Inside conductor**: E = 0 in electrostatic equilibrium. All charge on outer surface.",
      "**Quantisation**: q = ne. Conservation: charge neither created nor destroyed.",
    ],
    formulas: [
      "F = kq₁q₂/r² (Coulomb's law, k = 9 × 10⁹)",
      "E = kQ/r² (Field due to point charge)",
      "E_axial = 2kp/r³ (Dipole axial field, r >> a)",
      "E_equat = kp/r³ (Dipole equatorial field, r >> a)",
      "τ = pE sinθ (Torque on dipole in uniform E)",
      "Φ = EA cosθ (Electric flux)",
      "Φ = q/ε₀ (Gauss's law)",
      "E = λ/(2πε₀r) (Infinite line charge)",
      "E = σ/(2ε₀) (Infinite plane sheet)",
      "E = σ/ε₀ (Between two parallel plates)",
    ],
    diagrams: [
      "**Field lines of single +ve charge**: Radial lines pointing outward symmetrically",
      "**Field lines of dipole**: Lines from + to −, symmetric about perpendicular bisector",
      "**Gaussian surface for line charge**: Cylinder coaxial with wire, E along curved surface",
      "**Gaussian surface for plane sheet**: Cylinder perpendicular to sheet, flux through 2 flat faces",
      "**E vs r graph for spherical shell**: E = 0 for r < R, E = kQ/r² for r > R",
    ],
    tipsAndTricks: [
      "**Quick check**: If F = kq₁q₂/r² gives a very large or very small number, verify your unit conversion (cm → m).",
      "**Dipole shortcut**: At same distance, axial field is always TWICE the equatorial field.",
      "**Gauss's law**: Works best with high symmetry — don't use it for arbitrary charge distributions.",
      "**Direction convention**: p is from −q to +q (not the other way!). E_equatorial is anti-parallel to p.",
      "**Flux through half-sphere**: If charge q is at centre of sphere, flux through hemisphere = q/(2ε₀).",
      "**Conductor facts**: E = 0 inside, σ ∝ 1/R (curvature), E just outside = σ/ε₀.",
    ],
  },
};
