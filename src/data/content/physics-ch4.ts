import type { ChapterContent } from "./physics-ch1";

export const physicsCh4: ChapterContent = {
  topics: [
    {
      title: "Biot-Savart Law",
      content: `## Moving Charges and Magnetism

### Biot-Savart Law
The magnetic field **dB** due to a small current element Idl at a point P:

$$dB = \\frac{\\mu_0}{4\\pi} \\frac{I \\, dl \\sin\\theta}{r^2}$$

- Direction: given by **right-hand screw rule** (dl × r̂)
- μ₀ = 4π × 10⁻⁷ T·m/A (permeability of free space)

### Magnetic Field Due to a Straight Conductor
$$B = \\frac{\\mu_0 I}{4\\pi a}(\\sin\\phi_1 + \\sin\\phi_2)$$

For infinitely long wire:
$$B = \\frac{\\mu_0 I}{2\\pi a}$$

### Magnetic Field at Centre of Circular Loop
$$B = \\frac{\\mu_0 I}{2R}$$ (single loop)

$$B = \\frac{\\mu_0 N I}{2R}$$ (N turns)

### On the Axis of Circular Loop
$$B = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}$$

> **Exam Tip**: Compare Biot-Savart law with Coulomb's law — both are inverse-square laws, but Biot-Savart involves vector product while Coulomb's involves scalar product.`
    },
    {
      title: "Ampere's Circuital Law and Solenoid",
      content: `## Ampere's Circuital Law

### Statement
The line integral of magnetic field around any closed loop equals μ₀ times the total current enclosed:

$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}$$

### Applications

#### Solenoid
$$B = \\mu_0 n I$$ (inside, uniform)

Where n = N/L (turns per unit length). Field is **zero outside** an ideal solenoid.

#### Toroid
$$B = \\mu_0 n I$$ (inside the toroid)

Field is zero both inside the cavity and outside the toroid.

### Comparison

| Property | Biot-Savart | Ampere's Law |
|----------|-------------|--------------|
| Applicability | Any current configuration | Symmetric configurations |
| Analogous to | Coulomb's law | Gauss's law |
| Gives | B at a point | Line integral of B |

> **Board Tip**: Solenoid and toroid derivations using Ampere's law are high-weightage (5 marks). Always draw the Amperian loop clearly.`
    },
    {
      title: "Force on a Moving Charge and Current-Carrying Conductor",
      content: `## Lorentz Force

### Force on a Moving Charge
$$\\vec{F} = q(\\vec{v} \\times \\vec{B})$$

- Magnitude: F = qvB sinθ
- Direction: right-hand rule (perpendicular to both v and B)
- **Magnetic force does no work** (always perpendicular to velocity)

### Motion in Magnetic Field
- **v ⊥ B**: Circular motion; radius r = mv/(qB); period T = 2πm/(qB)
- **v at angle to B**: Helical motion (combination of circular + linear)
- **v ∥ B**: No force; straight line motion

### Cyclotron
- Accelerates charged particles using oscillating electric field and magnetic field
- Resonance condition: frequency of applied field = cyclotron frequency
- $$f_c = \\frac{qB}{2\\pi m}$$ (independent of velocity!)
- Cannot accelerate electrons (relativistic effects) or neutral particles

### Force on Current-Carrying Conductor
$$\\vec{F} = I(\\vec{L} \\times \\vec{B})$$

Magnitude: F = BIL sinθ

> **Exam Tip**: The cyclotron frequency is independent of the radius and velocity — this is why the same frequency works as the particle spirals outward.`
    },
    {
      title: "Force Between Parallel Conductors and Galvanometer",
      content: `## Force Between Parallel Current-Carrying Conductors

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

- **Same direction currents**: Attract
- **Opposite direction currents**: Repel

### Definition of Ampere
One ampere is the current which, when flowing through two infinitely long parallel conductors 1 m apart in vacuum, produces a force of 2 × 10⁻⁷ N per metre length.

## Moving Coil Galvanometer

### Principle
Current-carrying coil in a magnetic field experiences a torque: τ = NIAB

### At Equilibrium
NIAB = kφ (k = torsional constant, φ = deflection)
$$I = \\frac{k}{NAB}\\phi$$

### Current Sensitivity
$$\\frac{\\phi}{I} = \\frac{NAB}{k}$$

### Conversion
- **To ammeter**: Connect low resistance (shunt S) in **parallel**
  - S = IgG/(I – Ig)
- **To voltmeter**: Connect high resistance R in **series**
  - R = V/Ig – G

> **Board Tip**: Galvanometer to ammeter (parallel shunt) and to voltmeter (series resistance) conversion is a standard 3-mark numerical. Remember: ammeter has very low resistance, voltmeter has very high resistance.`
    }
  ],
  notes: `# Moving Charges and Magnetism — Notes

## 1. Biot-Savart Law: dB = (μ₀/4π)(Idl sinθ/r²)
## 2. Ampere's Law: ∮B·dl = μ₀I; Solenoid: B = μ₀nI
## 3. Lorentz Force: F = qv×B; circular motion r = mv/qB
## 4. Cyclotron: f = qB/2πm (independent of v)
## 5. Parallel conductors: F/L = μ₀I₁I₂/2πd; same direction → attract
## 6. Galvanometer: τ = NIAB; ammeter (shunt ∥), voltmeter (R series)`,
  importantPoints: [
    "**Biot-Savart Law**: dB = (μ₀/4π)(Idl sinθ/r²) — magnetic analog of Coulomb's law",
    "**Long straight wire**: B = μ₀I/(2πa). **Centre of loop**: B = μ₀NI/(2R)",
    "**Ampere's Law**: ∮B·dl = μ₀I_enc. **Solenoid**: B = μ₀nI (inside), 0 (outside)",
    "**Lorentz Force**: F = qv×B; magnitude F = qvBsinθ; F does no work (⊥ to v always)",
    "**Circular motion in B**: r = mv/(qB); T = 2πm/(qB); f = qB/(2πm) — independent of v!",
    "**Force on conductor**: F = BILsinθ. **Parallel wires**: F/L = μ₀I₁I₂/(2πd); same direction → attract",
    "**Galvanometer**: τ = NIAB = kφ. To ammeter: shunt S in parallel. To voltmeter: R in series"
  ],
  commonMistakes: [
    "**Direction confusion**: B due to straight wire → right-hand thumb rule (thumb = current, curl = B field direction)",
    "**F = qv×B does NO work**: Since F ⊥ v always, the magnetic force cannot change speed, only direction",
    "**Cyclotron frequency is independent of velocity and radius** — this is why the same oscillating frequency works throughout",
    "**Ampere's law sign**: Current direction determines sign — use right-hand rule for the Amperian loop",
    "**Parallel wires**: Same direction ATTRACT (not repel) — opposite to what intuition might suggest"
  ],
  examStrategy: [
    "**5-mark**: Derive B on axis of circular loop using Biot-Savart; Derive B inside solenoid using Ampere's law; Force between parallel conductors",
    "**3-mark**: Cyclotron working + frequency derivation; Galvanometer conversion to ammeter/voltmeter with numerical",
    "**2-mark**: State Biot-Savart law, Ampere's law, definition of ampere; Compare Biot-Savart with Coulomb's law"
  ],
  examples: [
    "**Field at centre of coil**: N=100, R=5cm, I=0.5A. B = μ₀NI/(2R) = 4π×10⁻⁷×100×0.5/(2×0.05) = **6.28×10⁻⁴ T**",
    "**Solenoid field**: n=1000/m, I=2A. B = μ₀nI = 4π×10⁻⁷×1000×2 = **2.51×10⁻³ T**",
    "**Circular motion**: Proton (m=1.67×10⁻²⁷kg) in B=0.5T, v=10⁷m/s. r = mv/(qB) = 1.67×10⁻²⁷×10⁷/(1.6×10⁻¹⁹×0.5) = **0.209 m**",
    "**Galvanometer to ammeter**: G=100Ω, I_g=1mA, I=1A. S = I_gG/(I−I_g) = 0.001×100/(1−0.001) = **0.1 Ω**"
  ],
  summary: "**Moving Charges and Magnetism** connects electricity to magnetism.\n\n**Key Concepts**: (1) Biot-Savart law for B due to current element. (2) Ampere's law for symmetric configurations. (3) Lorentz force F = qv×B. (4) Cyclotron. (5) Force between parallel conductors defines the ampere. (6) Galvanometer conversion.\n\n**Board Weightage**: 8-10 marks.",
  questions2: [
    { question: "State Biot-Savart law.", answer: "The magnetic field dB at a point due to a current element Idl is: dB = (μ₀/4π)(Idl sinθ/r²), where θ is the angle between dl and r, and r is the distance from the element to the point. Direction is given by dl × r̂." },
    { question: "Define one ampere using force between parallel conductors.", answer: "One ampere is that steady current which, when flowing through each of two infinitely long parallel straight conductors placed 1 m apart in vacuum, produces a force of 2 × 10⁻⁷ N per metre length on each conductor." },
    { question: "Why does a magnetic force not do any work on a moving charged particle?", answer: "The magnetic force F = qv×B is always perpendicular to the velocity v. Since work W = F·d and F ⊥ v, the work done is zero. Hence magnetic force can change direction but not speed." },
    { question: "Write the expression for the cyclotron frequency.", answer: "f = qB/(2πm). This frequency is independent of the velocity and radius of the charged particle, which is the key principle behind the cyclotron's operation." },
    { question: "Write the magnetic field at the centre of a circular loop of radius R carrying current I.", answer: "B = μ₀I/(2R). For N turns: B = μ₀NI/(2R). Direction is given by the right-hand rule — curl fingers in the direction of current, thumb gives direction of B." },
    { question: "Compare Biot-Savart law with Coulomb's law (any two points).", answer: "(i) Both obey inverse square law (1/r²). (ii) Coulomb's law gives electric field due to charge; Biot-Savart gives magnetic field due to current element. (iii) Coulomb's law is scalar in nature (E along r̂), but Biot-Savart involves a cross product (dl × r̂)." },
    { question: "A circular coil of 100 turns and radius 10 cm carries a current of 5A. Find the magnetic field at its centre.", answer: "B = μ₀NI/(2R) = 4π×10⁻⁷ × 100 × 5 / (2 × 0.1) = 4π×10⁻⁷ × 500 / 0.2 = π×10⁻³ T ≈ 3.14 × 10⁻³ T" },
    { question: "What is the force experienced by a current-carrying conductor in a magnetic field?", answer: "F = BIL sinθ, where B = magnetic field, I = current, L = length of conductor, θ = angle between current direction and B. Direction is given by Fleming's left-hand rule." },
    { question: "State Ampere's circuital law.", answer: "The line integral of magnetic field B around any closed loop is equal to μ₀ times the total current enclosed by the loop: ∮B·dl = μ₀I_enc. It is the magnetic analog of Gauss's law." },
    { question: "What is the force per unit length between two parallel wires carrying currents in opposite directions?", answer: "F/L = μ₀I₁I₂/(2πd). When currents are in opposite directions, the force is repulsive. This is because the magnetic fields between the wires are in the same direction, creating a higher field region between them." }
  ],
  questions3: [
    { question: "Derive the expression for the magnetic field at the centre of a circular current loop.", answer: "Consider a circular loop of radius R carrying current I.\nFor a small element dl at distance R from centre:\ndB = (μ₀/4π)(Idl sin90°/R²) = μ₀Idl/(4πR²)\n\nAll elements are at same distance R, and dl ⊥ r̂ always (sin90°=1).\nBy symmetry, all dB components point along the axis.\n\nB = ∫dB = (μ₀I/4πR²)∫dl = (μ₀I/4πR²)(2πR) = **μ₀I/(2R)**\n\nFor N turns: B = μ₀NI/(2R)" },
    { question: "A galvanometer of resistance 50Ω showing full-scale deflection for 1mA is to be converted to (i) an ammeter of range 5A, (ii) a voltmeter of range 10V. Find the required resistances.", answer: "(i) Ammeter: Shunt S in parallel\nS = I_gG/(I−I_g) = 0.001×50/(5−0.001) ≈ 50/5000 = **0.01 Ω**\n\n(ii) Voltmeter: High resistance R in series\nR = V/I_g − G = 10/0.001 − 50 = 10000 − 50 = **9950 Ω**" },
    { question: "Explain the principle and working of a cyclotron. Why can't it accelerate electrons?", answer: "**Principle**: A charged particle in magnetic field moves in a circle. Cyclotron frequency f = qB/(2πm) is independent of speed and radius.\n\n**Working**: Two D-shaped hollow electrodes (dees) in magnetic field B. Oscillating electric field accelerates the particle each time it crosses the gap between dees. Particle spirals outward gaining energy.\n\nRadius: r = mv/(qB). Maximum energy: E = q²B²R²/(2m)\n\n**Why not electrons**: Electrons are very light (m = 9.1×10⁻³¹ kg), so they quickly reach relativistic speeds where mass increases. The cyclotron frequency changes, and the fixed oscillator frequency can no longer synchronise with the electron's motion." },
    { question: "Derive the force between two parallel straight conductors carrying currents I₁ and I₂ separated by distance d.", answer: "Wire 1 carrying I₁ creates field at wire 2: B₁ = μ₀I₁/(2πd)\n\nForce on length L of wire 2 in this field:\nF = B₁I₂L = [μ₀I₁/(2πd)] × I₂L\n\nF/L = μ₀I₁I₂/(2πd)\n\nDirection: By Fleming's left-hand rule:\n- Same direction currents → Attractive force\n- Opposite direction currents → Repulsive force\n\nThis is used to define the ampere: When I₁ = I₂ = 1A, d = 1m, F/L = 2×10⁻⁷ N/m." },
    { question: "An electron moving with velocity 10⁷ m/s enters a magnetic field of 0.1 T at 30° to the field. Find the radius and pitch of the helical path.", answer: "Components: v∥ = vcos30° = 10⁷×(√3/2) = 8.66×10⁶ m/s; v⊥ = vsin30° = 5×10⁶ m/s\n\nRadius: r = mv⊥/(eB) = (9.1×10⁻³¹ × 5×10⁶)/(1.6×10⁻¹⁹ × 0.1) = **2.84×10⁻⁴ m**\n\nTime period: T = 2πm/(eB) = 2π×9.1×10⁻³¹/(1.6×10⁻¹⁹×0.1) = **3.57×10⁻¹⁰ s**\n\nPitch = v∥ × T = 8.66×10⁶ × 3.57×10⁻¹⁰ = **3.09×10⁻³ m**" }
  ],
  questions5: [
    { question: "Using Ampere's circuital law, derive the expression for the magnetic field inside a solenoid.", answer: "**Ampere's Law**: ∮B·dl = μ₀I_enc\n\n**Setup**: Solenoid with n turns per unit length, current I. Choose a rectangular Amperian loop ABCD where AB is inside, CD is outside.\n\n**Evaluation of ∮B·dl**:\n- Along AB (inside, length l): B·l (B is along AB)\n- Along BC and DA (perpendicular to B): 0\n- Along CD (outside, B≈0): 0\n\nSo ∮B·dl = Bl\n\n**Current enclosed**: Number of turns in length l = nl\nI_enc = nlI\n\n**Applying Ampere's law**:\nBl = μ₀nlI\n**B = μ₀nI** (inside solenoid)\n\nThis field is uniform inside and independent of position. Outside, B ≈ 0 for an ideal solenoid." },
    { question: "Derive the expression for the magnetic field at a point on the axis of a circular current-carrying coil. What is the field at the centre?", answer: "**Setup**: Circular coil of radius R, N turns, current I. Point P on axis at distance x from centre.\n\nConsider element dl: dB = (μ₀/4π)(NIdl/r²) where r = √(R²+x²)\n\nThe component perpendicular to axis cancels by symmetry.\nAxial component: dB_x = dB × cosα = dB × R/r = dB × R/√(R²+x²)\n\nIntegrating over full loop:\nB = (μ₀NIR²)/(2(R²+x²)^(3/2))\n\n**At centre** (x=0): B = μ₀NI/(2R)\n\n**Far from coil** (x>>R): B = μ₀NIA/(2πx³) = μ₀m/(2πx³) where m = NIA (magnetic dipole moment).\n\nThis shows a current loop behaves like a magnetic dipole at large distances." }
  ],
  revision: {
    quickPoints: [
      "**Biot-Savart**: dB = (μ₀/4π)(Idl sinθ/r²)",
      "**Long wire**: B = μ₀I/(2πa); **Coil centre**: B = μ₀NI/(2R)",
      "**Ampere's law**: ∮B·dl = μ₀I_enc; **Solenoid**: B = μ₀nI",
      "**Lorentz force**: F = qv×B; F does no work",
      "**Circular motion**: r = mv/(qB); f = qB/(2πm)",
      "**Parallel wires**: F/L = μ₀I₁I₂/(2πd); same direction → attract",
      "**Ammeter**: shunt S = I_gG/(I−I_g) in parallel",
      "**Voltmeter**: R = V/I_g − G in series"
    ],
    formulas: [
      "dB = (μ₀/4π)(Idl sinθ/r²)",
      "B = μ₀I/(2πa) (long wire)",
      "B = μ₀NI/(2R) (coil centre)",
      "B = μ₀nI (solenoid)",
      "F = qvBsinθ; r = mv/(qB)",
      "f = qB/(2πm) (cyclotron)",
      "F/L = μ₀I₁I₂/(2πd)",
      "S = I_gG/(I−I_g); R = V/I_g − G"
    ],
    tipsAndTricks: [
      "Right-hand thumb rule: thumb = current direction, curled fingers = field direction",
      "Compare Biot-Savart (any geometry) vs Ampere's law (needs symmetry) — like Coulomb vs Gauss",
      "Cyclotron can't accelerate electrons (too light, relativistic) or neutral particles (no charge)"
    ]
  }
};
