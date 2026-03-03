import type { ChapterContent } from "./physics-ch1";

export const physicsCh13: ChapterContent = {
  topics: [
    {
      title: "Nuclear Properties and Mass-Energy",
      content: `## Nuclei

### Nuclear Size
$$R = R_0 A^{1/3}$$ where R₀ ≈ 1.2 × 10⁻¹⁵ m, A = mass number

### Nuclear Density
$$\\rho = \\frac{3m_p}{4\\pi R_0^3} \\approx 2.3 \\times 10^{17} \\text{ kg/m}^3$$
**Independent of A** — all nuclei have same density!

### Mass Defect and Binding Energy
$$\\Delta m = [Zm_p + (A-Z)m_n] - M_{nucleus}$$
$$BE = \\Delta m \\times c^2 = \\Delta m \\times 931.5 \\text{ MeV}$$

### Binding Energy per Nucleon
- Peaks at **Fe-56** (~8.75 MeV/nucleon) — most stable
- Light nuclei (A < 56): fusion releases energy
- Heavy nuclei (A > 56): fission releases energy

### Nuclear Forces
- **Strong nuclear force**: short range (~few fm), attractive, charge-independent
- Strongest force in nature; holds nucleus together against Coulomb repulsion

> **Exam Tip**: BE/nucleon curve explains both fission and fusion. Iron is the most stable nucleus — always reference this in answers about nuclear stability.`
    },
    {
      title: "Radioactivity and Nuclear Reactions",
      content: `## Radioactivity

### Types of Decay

| Type | Particle | Change in A | Change in Z |
|------|----------|-------------|-------------|
| Alpha (α) | ⁴₂He | –4 | –2 |
| Beta⁻ (β⁻) | Electron | 0 | +1 |
| Beta⁺ (β⁺) | Positron | 0 | –1 |
| Gamma (γ) | Photon | 0 | 0 |

### Radioactive Decay Law
$$N = N_0 e^{-\\lambda t}$$

### Half-Life
$$T_{1/2} = \\frac{0.693}{\\lambda}$$

### Activity
$$A = \\lambda N = A_0 e^{-\\lambda t}$$
SI unit: **becquerel (Bq)** = 1 decay/s

## Nuclear Fission
Heavy nucleus splits into lighter nuclei + energy
$$^{235}_{92}U + ^1_0n \\rightarrow ^{141}_{56}Ba + ^{92}_{36}Kr + 3^1_0n + \\text{Energy}$$

## Nuclear Fusion
Light nuclei combine to form heavier nucleus + energy
$$4^1_1H \\rightarrow ^4_2He + 2e^+ + 2\\nu + 26.7 \\text{ MeV}$$

Requires extreme temperature (~10⁷ K) — occurs in stars.

> **Board Tip**: Radioactive decay law, half-life formula, and nuclear reaction equations are standard 5-mark questions. Always check mass number and charge conservation in nuclear equations.`
    }
  ],
  notes: `# Nuclei — Notes

## 1. Size: R = R₀A^(1/3); density ~2.3×10¹⁷ kg/m³ (constant)
## 2. BE = Δmc²; BE/nucleon peaks at Fe-56
## 3. Decay: α(A–4,Z–2), β⁻(Z+1), β⁺(Z–1), γ(no change)
## 4. N = N₀e^(–λt); T₁/₂ = 0.693/λ
## 5. Fission: heavy→light+energy; Fusion: light→heavy+energy (stars)`
};
