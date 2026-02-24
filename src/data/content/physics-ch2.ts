import type { ChapterContent } from "./physics-ch1";

export const physicsCh2: ChapterContent = {
  topics: [
    {
      title: "Electrostatic Potential",
      content: `## Electrostatic Potential

### Definition
The **electrostatic potential** at a point is the work done by an external agency to bring a unit positive charge from **infinity** to that point (against the electric field), without any acceleration.

$$V = \\frac{W}{q_0} = \\frac{kQ}{r}$$

- SI unit: **volt (V)** = J/C
- Scalar quantity (unlike electric field which is a vector)

### Potential Due to a Point Charge
$$V = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{r}$$

- Positive charge → positive potential (decreases with distance)
- Negative charge → negative potential (increases toward zero with distance)

### Potential Due to a System of Charges
$$V = \\frac{1}{4\\pi\\varepsilon_0} \\sum \\frac{q_i}{r_i}$$

Superposition principle applies — potentials add algebraically (scalars).

### Potential Difference
$$V_A - V_B = \\frac{W_{B→A}}{q_0}$$

Current flows from higher to lower potential (conventional current).

> **Exam Tip**: Potential is a scalar, so calculations are simpler than field. Always check the sign of charges when computing net potential.`
    },
    {
      title: "Equipotential Surfaces",
      content: `## Equipotential Surfaces

### Definition
A surface where the potential is the **same at every point**. No work is done in moving a charge along an equipotential surface.

### Key Properties
1. **Electric field is always perpendicular** to equipotential surfaces
2. No two equipotential surfaces intersect
3. Closer surfaces → stronger field (steeper potential gradient)
4. Work done moving charge on equipotential surface = **zero**

### Shapes of Equipotential Surfaces

| Source | Equipotential Shape | Field Lines |
|--------|-------------------|-------------|
| Point charge | Concentric spheres | Radial |
| Infinite plane sheet | Parallel planes | Perpendicular |
| Uniform field | Parallel planes | Parallel straight lines |
| Dipole | Complex curved shapes | Complex |

### Relation Between E and V
$$E = -\\frac{dV}{dr}$$

The electric field points in the direction of **decreasing potential** (steepest descent).

> **Board Tip**: The negative sign in E = –dV/dr is frequently asked. It means E points from high to low potential. This relationship connects the vector (E) and scalar (V) descriptions of the field.`
    },
    {
      title: "Potential Energy and Work",
      content: `## Potential Energy of a System of Charges

### Two-Charge System
$$U = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r_{12}}$$

- If both charges same sign → U > 0 (repulsive, energy stored)
- If opposite signs → U < 0 (attractive, energy released)

### Three-Charge System
$$U = \\frac{1}{4\\pi\\varepsilon_0} \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_2 q_3}{r_{23}} + \\frac{q_1 q_3}{r_{13}} \\right)$$

### Potential Energy of a Dipole in Uniform Field
$$U = -pE\\cos\\theta = -\\vec{p} \\cdot \\vec{E}$$

- θ = 0° → U = –pE (minimum, stable equilibrium)
- θ = 90° → U = 0
- θ = 180° → U = +pE (maximum, unstable equilibrium)

### Work Done in Rotating Dipole
$$W = pE(\\cos\\theta_1 - \\cos\\theta_2)$$

> **Common Mistake**: Students forget the sign convention. U = –pEcosθ means potential energy is MINIMUM (most negative) when dipole is aligned with the field.`
    },
    {
      title: "Capacitors and Capacitance",
      content: `## Capacitors

### What is a Capacitor?
A device that stores electric charge and energy. Consists of two conductors (plates) separated by an insulator (dielectric).

### Capacitance
$$C = \\frac{Q}{V}$$

- SI unit: **farad (F)** — 1 F = 1 C/V
- Practical units: μF (10⁻⁶), nF (10⁻⁹), pF (10⁻¹²)

### Parallel Plate Capacitor
$$C = \\frac{\\varepsilon_0 A}{d}$$

Where A = area of plates, d = separation between them.

### With Dielectric
$$C = \\frac{K\\varepsilon_0 A}{d} = KC_0$$

Where K = dielectric constant (always ≥ 1).

### Factors Affecting Capacitance
1. **Area of plates** (C ∝ A)
2. **Distance between plates** (C ∝ 1/d)
3. **Dielectric medium** (C ∝ K)

> **Exam Tip**: The formula C = εA/d applies only to parallel plate capacitors. For spherical or cylindrical capacitors, different formulae apply. Board exams focus mostly on parallel plate.`
    },
    {
      title: "Combination of Capacitors",
      content: `## Series and Parallel Combinations

### Capacitors in Series
- Same charge Q on each capacitor
- Voltages add: V = V₁ + V₂ + V₃

$$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$$

- Equivalent capacitance is **less than the smallest** individual capacitance

### Capacitors in Parallel
- Same voltage V across each capacitor
- Charges add: Q = Q₁ + Q₂ + Q₃

$$C_{eq} = C_1 + C_2 + C_3$$

- Equivalent capacitance is **greater than the largest** individual capacitance

### Key Comparison

| Feature | Series | Parallel |
|---------|--------|----------|
| Charge | Same | Different |
| Voltage | Different | Same |
| Formula | 1/C reciprocal sum | C direct sum |
| Effect | Decreases C | Increases C |

> **Board Tip**: Capacitors in series behave opposite to resistors in series (resistors add directly in series, capacitors add reciprocally). This contrast is a common conceptual question.`
    },
    {
      title: "Energy Stored in Capacitors",
      content: `## Energy Stored in a Capacitor

### Formula
$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$$

All three forms are equivalent; choose based on known quantities.

### Energy Density
Energy per unit volume of the electric field:
$$u = \\frac{1}{2}\\varepsilon_0 E^2$$

This shows energy is stored **in the electric field** between the plates.

### Effect of Dielectric
#### Battery connected (V constant):
- C increases by K → Q increases by K → U increases by K
- U = ½KCV² = KU₀

#### Battery disconnected (Q constant):
- C increases by K → V decreases by K → U decreases by K
- U = Q²/(2KC) = U₀/K

### Common Applications
- Camera flash: capacitor charged slowly, discharged rapidly
- Defibrillators: large capacitor discharge through heart
- Smoothing circuits in power supplies

> **Common Mistake**: Whether U increases or decreases with dielectric depends on whether the battery stays connected. With battery: U increases. Without battery: U decreases. This is a very frequently tested distinction.`
    }
  ],
  notes: `# Electrostatic Potential and Capacitance — Comprehensive Notes

## 1. Electrostatic Potential
- V = kQ/r; scalar quantity; SI unit: volt
- Superposition: potentials add algebraically
- E = –dV/dr (field points from high to low potential)

## 2. Equipotential Surfaces
- Same potential everywhere on surface; E ⊥ to surface
- No work done moving charge along equipotential surface
- Point charge → concentric spheres; uniform field → parallel planes

## 3. Potential Energy
- Two charges: U = kq₁q₂/r; like charges → U > 0
- Dipole in field: U = –pEcosθ; stable at θ = 0°

## 4. Capacitance
- C = Q/V; parallel plate: C = ε₀A/d; with dielectric: C = Kε₀A/d
- Series: 1/C = Σ(1/Cᵢ); Parallel: C = ΣCᵢ
- Energy: U = ½CV² = ½QV = Q²/2C
- Energy density: u = ½ε₀E²
- Dielectric effect depends on battery connection (V constant vs Q constant)`
};
