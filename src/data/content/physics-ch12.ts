import type { ChapterContent } from "./physics-ch1";

export const physicsCh12: ChapterContent = {
  topics: [
    {
      title: "Atomic Models and Bohr's Theory",
      content: `## Atoms

### Rutherford's Model
- Alpha particle scattering: most pass through, few deflect, very few bounce back
- Atom has a tiny, dense, positive **nucleus** with electrons orbiting
- **Failure**: Cannot explain stability (accelerating electron should radiate and spiral in)

### Bohr's Model (for hydrogen-like atoms)

#### Postulates
1. Electrons orbit in **stationary orbits** (no radiation)
2. Angular momentum is quantised: L = nh/2π
3. Energy emitted/absorbed only during transitions: E = hν = Eᵢ – Eⱼ

#### Radius of nth Orbit
$$r_n = \\frac{n^2 a_0}{Z}$$ where a₀ = 0.529 Å (Bohr radius)

#### Energy of nth Orbit
$$E_n = -\\frac{13.6 Z^2}{n^2} \\text{ eV}$$

#### Velocity
$$v_n = \\frac{Z e^2}{2\\varepsilon_0 n h}$$

### Hydrogen Spectrum Series

| Series | Transition to | Region |
|--------|-------------|--------|
| Lyman | n = 1 | UV |
| Balmer | n = 2 | Visible |
| Paschen | n = 3 | IR |
| Brackett | n = 4 | IR |
| Pfund | n = 5 | IR |

> **Exam Tip**: Eₙ = –13.6/n² eV for hydrogen. Ground state (n=1) = –13.6 eV. The energy level diagram and spectral series are guaranteed questions.`
    },
    {
      title: "Limitations and Line Spectra",
      content: `## Limitations of Bohr's Model
1. Works only for **single-electron** species (H, He⁺, Li²⁺)
2. Cannot explain **fine structure** of spectral lines
3. Cannot explain **Zeeman effect** (splitting in magnetic field) or **Stark effect** (in electric field)
4. Does not account for **intensity variation** of spectral lines

## Important Calculations

### Wavelength of Emitted Radiation
$$\\frac{1}{\\lambda} = RZ^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$

R = Rydberg constant = 1.097 × 10⁷ m⁻¹

### Number of Spectral Lines
From level n: total lines = n(n–1)/2

### Ionisation Energy
Energy to remove electron from ground state to infinity:
For hydrogen: 13.6 eV

### Excitation Energy
Energy to move from ground state to higher level:
1st excitation energy (n=1→2) = –3.4 – (–13.6) = 10.2 eV

> **Board Tip**: The formula for number of spectral lines n(n–1)/2 and Rydberg formula for wavelength are standard numericals. For n=4, total lines = 6. Always verify which series (Lyman/Balmer etc.) the question asks about.`
    }
  ],
  notes: `# Atoms — Notes

## 1. Rutherford: nucleus model; fails to explain stability
## 2. Bohr: quantised orbits; L = nh/2π; Eₙ = –13.6Z²/n² eV
## 3. Radius: rₙ = n²a₀/Z; velocity: vₙ ∝ Z/n
## 4. Series: Lyman(UV), Balmer(visible), Paschen/Brackett/Pfund(IR)
## 5. Rydberg: 1/λ = RZ²(1/n₁²–1/n₂²)
## 6. Limitations: only for H-like atoms; no fine structure`
};
