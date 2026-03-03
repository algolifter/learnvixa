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
## 6. Galvanometer: τ = NIAB; ammeter (shunt ∥), voltmeter (R series)`
};
