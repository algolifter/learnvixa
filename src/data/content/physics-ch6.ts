import type { ChapterContent } from "./physics-ch1";

export const physicsCh6: ChapterContent = {
  topics: [
    {
      title: "Faraday's Laws of Electromagnetic Induction",
      content: `## Electromagnetic Induction

### Magnetic Flux
$$\\Phi_B = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$$
SI unit: **weber (Wb)** = T·m²

### Faraday's First Law
Whenever the magnetic flux through a circuit changes, an EMF is induced.

### Faraday's Second Law
The induced EMF equals the **negative rate of change** of magnetic flux:
$$\\varepsilon = -\\frac{d\\Phi_B}{dt}$$

For N turns: ε = –N(dΦ/dt)

### Lenz's Law
The induced current opposes the **change** that produces it. (Conservation of energy)
- Flux increasing → induced current creates opposing field
- Flux decreasing → induced current supports the field

### Methods of Changing Flux
1. Change B (magnitude of field)
2. Change A (area of loop)
3. Change θ (orientation)
4. Any combination

> **Exam Tip**: Lenz's law gives the direction; Faraday's law gives the magnitude. The negative sign in Faraday's law IS Lenz's law mathematically.`
    },
    {
      title: "Motional EMF and Eddy Currents",
      content: `## Motional EMF

A conductor of length L moving with velocity v perpendicular to field B:
$$\\varepsilon = BvL$$

### Derivation
Force on charge q: F = qvB
Work done per unit charge = vBL = EMF

### AC Generator (Alternator)
A coil rotating in a magnetic field:
$$\\varepsilon = NBA\\omega\\sin(\\omega t) = \\varepsilon_0\\sin(\\omega t)$$

Where ε₀ = NBAω (peak EMF)

## Eddy Currents
When a bulk conductor is placed in a changing magnetic field, currents are induced in the body — called **eddy currents** (Foucault currents).

### Applications
- **Electromagnetic braking** (trains, roller coasters)
- **Induction furnace** (heating metals)
- **Electric meters** (damping oscillations)
- **Electromagnetic shielding**

### Minimising Eddy Currents
Use **laminated cores** (thin sheets separated by insulation) to increase resistance and reduce eddy current magnitude.

> **Board Tip**: Motional EMF derivation (ε = BvL) is a standard 3-mark derivation. For AC generator, the key formula is ε = NBAω sinωt.`
    },
    {
      title: "Inductance – Self and Mutual",
      content: `## Self-Inductance

### Definition
When current through a coil changes, it induces an EMF in **itself**:
$$\\varepsilon = -L\\frac{dI}{dt}$$

L = self-inductance (SI unit: **henry, H**)

### For a Solenoid
$$L = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}$$

### Energy Stored in Inductor
$$U = \\frac{1}{2}LI^2$$

## Mutual Inductance

When current in one coil changes, it induces EMF in a **nearby coil**:
$$\\varepsilon_2 = -M\\frac{dI_1}{dt}$$

M = mutual inductance

### For Two Coaxial Solenoids
$$M = \\mu_0 n_1 n_2 A l$$

### Coefficient of Coupling
$$M = k\\sqrt{L_1 L_2}$$ where 0 ≤ k ≤ 1

- k = 1: perfect coupling (all flux linked)
- k < 1: flux leakage

### Analogy with Capacitance

| Inductor | Capacitor |
|----------|-----------|
| L (henry) | C (farad) |
| U = ½LI² | U = ½CV² |
| Opposes change in I | Opposes change in V |

> **Exam Tip**: Self-inductance of a solenoid and energy stored (½LI²) are standard derivations. Remember the analogy: inductor stores energy in magnetic field, capacitor in electric field.`
    }
  ],
  notes: `# Electromagnetic Induction — Notes

## 1. Faraday's Law: ε = –dΦ/dt; Lenz's law gives direction
## 2. Motional EMF: ε = BvL
## 3. AC Generator: ε = NBAω sinωt
## 4. Eddy currents: minimised by lamination
## 5. Self-inductance: ε = –LdI/dt; L = μ₀n²Al; U = ½LI²
## 6. Mutual inductance: ε₂ = –MdI₁/dt; M = k√(L₁L₂)`
};
