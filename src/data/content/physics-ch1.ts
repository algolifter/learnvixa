// Physics Chapter 1: Electric Charges and Fields
// Pre-written content based on NCERT Class 12 Physics, expanded beyond textbook level

export interface TopicPage {
  title: string;
  content: string; // Markdown
}

export interface ChapterContent {
  topics: TopicPage[];
  notes: string; // Full markdown notes
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
};
