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
## 6. Limitations: only for H-like atoms; no fine structure`,
  questions2: [
    { question: "State the two main observations of Rutherford's alpha scattering experiment.", answer: "(i) Most alpha particles passed **straight through** the gold foil — atom is mostly empty space. (ii) A very few (~1 in 8000) were deflected by **more than 90°** or bounced back — all positive charge and mass is concentrated in a tiny **nucleus**." },
    { question: "What are Bohr's quantisation conditions?", answer: "Bohr postulated that electrons orbit the nucleus in **stationary orbits** where angular momentum is quantised: **L = mvr = nh/2π** (n = 1, 2, 3...). Electrons in these orbits do not radiate energy." },
    { question: "Write the expression for energy of nth orbit of hydrogen atom.", answer: "**Eₙ = −13.6/n² eV** for hydrogen (Z = 1). For hydrogen-like atoms: Eₙ = −13.6Z²/n² eV. Ground state (n=1): E₁ = −13.6 eV. First excited state (n=2): E₂ = −3.4 eV." },
    { question: "What is the Rydberg formula?", answer: "**1/λ = RZ²(1/n₁² − 1/n₂²)** where R = Rydberg constant = 1.097 × 10⁷ m⁻¹, Z = atomic number, n₁ < n₂ are the principal quantum numbers of the two levels involved in the transition." },
    { question: "How many spectral lines are emitted when an electron drops from nth level to ground state?", answer: "Total number of spectral lines = **n(n−1)/2**. For n = 4: lines = 4×3/2 = 6. For n = 3: lines = 3×2/2 = 3. This formula counts all possible transitions between levels." },
    { question: "Define ionisation energy of hydrogen atom.", answer: "**Ionisation energy** is the minimum energy required to remove the electron from the ground state (n=1) to infinity (n=∞). For hydrogen: IE = E∞ − E₁ = 0 − (−13.6) = **13.6 eV** = 2.18 × 10⁻¹⁸ J." },
    { question: "What is the Balmer series? In which region does it lie?", answer: "The **Balmer series** corresponds to transitions from higher levels (n₂ = 3, 4, 5...) to n₁ = 2. It lies in the **visible region** of the electromagnetic spectrum. The first line (n=3→2) is called Hα (red), n=4→2 is Hβ (blue-green), etc." }
  ],
  questions3: [
    { question: "Explain the limitations of Rutherford's atomic model and how Bohr's model addressed them.", answer: "**Rutherford's Limitations**:\n1. An orbiting electron is **accelerating** (centripetal), so by Maxwell's theory it should continuously radiate energy\n2. This would cause the electron to **spiral inward** and collapse into the nucleus\n3. The model cannot explain the **discrete line spectrum** of hydrogen\n\n**Bohr's Solutions**:\n1. Electrons orbit in **stationary orbits** — no radiation in these orbits (postulate 1)\n2. Angular momentum is **quantised**: L = nh/2π — only certain orbits are allowed (postulate 2)\n3. Energy is emitted/absorbed only during **transitions**: hν = Eᵢ − Eⱼ — explains discrete spectral lines (postulate 3)" },
    { question: "Calculate the wavelength of the first line of the Lyman series (R = 1.097 × 10⁷ m⁻¹).", answer: "Lyman series: transitions to n₁ = 1. First line: n₂ = 2 → n₁ = 1.\n\n1/λ = R(1/n₁² − 1/n₂²) = 1.097 × 10⁷ (1/1² − 1/2²)\n\n1/λ = 1.097 × 10⁷ × (1 − 0.25) = 1.097 × 10⁷ × 0.75\n\n1/λ = 8.228 × 10⁶ m⁻¹\n\n**λ = 1.215 × 10⁻⁷ m = 121.5 nm**\n\nThis lies in the **ultraviolet region**." },
    { question: "Derive the expression for radius of nth Bohr orbit.", answer: "For an electron of mass m, charge e, orbiting with velocity v at radius r around nucleus of charge Ze:\n\n**Centripetal force = Coulomb force**:\nmv²/r = kZe²/r² → mv² = kZe²/r ... (1)\n\n**Bohr's quantisation**: mvr = nh/2π → v = nh/(2πmr) ... (2)\n\nSubstituting (2) in (1):\nm × n²h²/(4π²m²r²) = kZe²/r\n\nn²h²/(4π²mr) = kZe²\n\n**rₙ = n²h²/(4π²mkZe²) = n²a₀/Z**\n\nwhere a₀ = h²/(4π²mke²) = **0.529 Å** (Bohr radius)\n\nKey results: rₙ ∝ n²/Z" },
    { question: "Explain the hydrogen spectrum series with an energy level diagram.", answer: "When electron transitions between energy levels, photons are emitted/absorbed:\n\n**Energy levels**: Eₙ = −13.6/n² eV\n- n=1: −13.6 eV, n=2: −3.4 eV, n=3: −1.51 eV, n=4: −0.85 eV, n=∞: 0 eV\n\n**Spectral Series** (transitions TO level n₁):\n| Series | n₁ | Region | First line |\n|--------|----|---------|-----------|\n| Lyman | 1 | UV | 121.5 nm |\n| Balmer | 2 | Visible | 656.3 nm |\n| Paschen | 3 | IR | 1875 nm |\n| Brackett | 4 | IR | — |\n| Pfund | 5 | IR | — |\n\n**Key**: Larger energy gaps → shorter wavelength. Lyman series has the shortest wavelengths (highest energy transitions)." },
    { question: "What is excitation energy? Calculate the first and second excitation energies of hydrogen.", answer: "**Excitation energy** is the energy required to move an electron from the ground state to a higher energy level.\n\nFor hydrogen, Eₙ = −13.6/n² eV:\n- Ground state (n=1): E₁ = −13.6 eV\n- First excited state (n=2): E₂ = −3.4 eV\n- Second excited state (n=3): E₃ = −1.51 eV\n\n**First excitation energy** = E₂ − E₁ = −3.4 − (−13.6) = **10.2 eV**\n\n**Second excitation energy** = E₃ − E₁ = −1.51 − (−13.6) = **12.09 eV**\n\n**Ionisation energy** = E∞ − E₁ = 0 − (−13.6) = **13.6 eV**\n\nNote: Excitation potential (in volts) has the same numerical value as excitation energy (in eV) for hydrogen." }
  ],
  questions5: [
    { question: "Describe Bohr's model of hydrogen atom. Derive expressions for radius, velocity, and energy of the nth orbit.", answer: "**Bohr's Postulates**:\n1. Electrons revolve in **stationary circular orbits** without radiating energy\n2. Angular momentum is quantised: **L = mvr = nh/2π**\n3. Radiation occurs only during transitions: **hν = Eᵢ − Eⱼ**\n\n**Derivation of Radius**:\nCoulomb force = Centripetal force: kZe²/r² = mv²/r\n→ mv² = kZe²/r ... (1)\nFrom quantisation: v = nh/(2πmr) ... (2)\nSubstitute (2) in (1): **rₙ = n²h²/(4π²mkZe²) = n²a₀/Z**\nwhere a₀ = 0.529 Å\n\n**Derivation of Velocity**:\nFrom (2): **vₙ = Ze²/(2ε₀nh) = (c/137) × Z/n**\n→ vₙ ∝ Z/n\n\n**Derivation of Energy**:\nKE = ½mv² = kZe²/2r; PE = −kZe²/r = −2KE\nTotal E = KE + PE = −kZe²/2r\n\n**Eₙ = −13.6Z²/n² eV**\n\n**Summary**: rₙ ∝ n²/Z, vₙ ∝ Z/n, Eₙ ∝ Z²/n²" },
    { question: "Explain Rutherford's alpha scattering experiment, its observations, and conclusions. What were the drawbacks of Rutherford's model?", answer: "**Experimental Setup**:\nGeiger and Marsden directed a beam of **alpha particles** (⁴₂He²⁺) at a thin **gold foil** (~2.1 × 10⁻⁷ m thick) and observed scattering using a ZnS screen.\n\n**Observations**:\n1. **Most α-particles** passed straight through — atom is mostly **empty space**\n2. **Some were deflected** at small angles — repelled by a positive centre\n3. **Very few (~1 in 8000)** bounced back (θ > 90°) — encountered a massive, dense, positively charged core\n\n**Conclusions (Rutherford's Nuclear Model)**:\n1. Atom has a tiny, dense, positively charged **nucleus** (radius ~10⁻¹⁵ m)\n2. **Electrons orbit** the nucleus like planets around the sun\n3. Atom is mostly **empty space** (atomic radius ~10⁻¹⁰ m)\n4. Nucleus contains most of the atom's **mass**\n\n**Distance of closest approach**: r₀ = kZe × 2e / (½mv²)\n\n**Drawbacks**:\n1. Orbiting electron is **accelerating** → should radiate energy continuously (Maxwell's theory)\n2. Electron would **spiral into nucleus** → atoms should be unstable (contradicts reality)\n3. Cannot explain **discrete line spectrum** — continuous radiation expected\n4. Cannot predict **energy levels** or spectral lines of hydrogen" },
    { question: "Derive the expression for energy of nth Bohr orbit. Draw the energy level diagram and explain the origin of spectral series.", answer: "**Energy Derivation**:\nFor electron in nth orbit: Coulomb force = centripetal force\nkZe²/r² = mv²/r → KE = ½mv² = kZe²/(2r)\n\nPE = −kZe²/r (negative, attractive)\n\nTotal Energy: Eₙ = KE + PE = kZe²/(2r) − kZe²/r = **−kZe²/(2r)**\n\nSubstituting rₙ = n²a₀/Z:\n**Eₙ = −me⁴Z²/(8ε₀²h²n²) = −13.6Z²/n² eV**\n\n**Energy Level Diagram** (hydrogen, Z=1):\n- n=1: E₁ = −13.6 eV (ground state)\n- n=2: E₂ = −3.4 eV\n- n=3: E₃ = −1.51 eV\n- n=4: E₄ = −0.85 eV\n- n=∞: E∞ = 0 eV (free electron)\n\n**Origin of Spectral Series**:\nWhen electron jumps from higher (n₂) to lower (n₁) level:\nhν = Eₙ₂ − Eₙ₁ → **1/λ = R(1/n₁² − 1/n₂²)**\n\n| Series | n₁ | n₂ | Region |\n|--------|----|----|--------|\n| Lyman | 1 | 2,3,4... | UV |\n| Balmer | 2 | 3,4,5... | Visible |\n| Paschen | 3 | 4,5,6... | IR |\n| Brackett | 4 | 5,6,7... | IR |\n| Pfund | 5 | 6,7,8... | IR |\n\n**Key Points**: Higher energy gaps → shorter λ. Series limit: n₂ → ∞ gives shortest λ in each series." }
  ]
};
