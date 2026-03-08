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
## 5. Fission: heavy→light+energy; Fusion: light→heavy+energy (stars)`,
  questions2: [
    { question: "Define mass defect and binding energy.", answer: "**Mass defect (Δm)** is the difference between the sum of masses of individual nucleons and the actual nuclear mass: Δm = [Zmₚ + (A−Z)mₙ] − M. **Binding energy (BE)** = Δm × c² = Δm × 931.5 MeV — the energy required to disassemble the nucleus into individual nucleons." },
    { question: "What is nuclear density? Why is it independent of mass number?", answer: "Nuclear density ρ ≈ 2.3 × 10¹⁷ kg/m³. Since R = R₀A^(1/3), volume V = (4/3)πR³ = (4/3)πR₀³A. Mass ≈ Amₚ. So ρ = Amₚ/[(4/3)πR₀³A] = 3mₚ/(4πR₀³), which is **independent of A**." },
    { question: "State the radioactive decay law.", answer: "The number of undecayed nuclei at time t is: **N = N₀e^(−λt)**, where N₀ = initial number, λ = decay constant. Activity: A = λN = A₀e^(−λt). **Half-life**: T₁/₂ = 0.693/λ." },
    { question: "Distinguish between nuclear fission and fusion.", answer: "**Fission**: A heavy nucleus splits into lighter nuclei + energy (e.g., U-235 → Ba + Kr + neutrons). **Fusion**: Light nuclei combine to form a heavier nucleus + energy (e.g., 4H → He). Fusion releases more energy per nucleon but requires extreme temperatures (~10⁷ K)." },
    { question: "Why is iron-56 the most stable nucleus?", answer: "Iron-56 has the **highest binding energy per nucleon** (~8.75 MeV/nucleon). Nuclei lighter than Fe can release energy by **fusion**, and nuclei heavier than Fe can release energy by **fission**, both moving toward Fe-56 on the BE/nucleon curve." },
    { question: "Write the changes in A and Z for alpha and beta decay.", answer: "**Alpha decay**: A decreases by 4, Z decreases by 2 (emits ⁴₂He). **Beta⁻ decay**: A unchanged, Z increases by 1 (neutron → proton + electron + antineutrino). **Beta⁺ decay**: A unchanged, Z decreases by 1 (proton → neutron + positron + neutrino)." }
  ],
  questions3: [
    { question: "Explain the binding energy per nucleon curve and its significance.", answer: "**BE/nucleon vs A curve**:\n- Rises steeply for light nuclei (A < 20)\n- **Peaks at Fe-56** (~8.75 MeV/nucleon) — most stable nucleus\n- Gradually decreases for heavy nuclei\n\n**Significance**:\n1. Nuclei near Fe-56 are most stable\n2. Light nuclei (A < 56): **fusion** releases energy (moves right on curve toward higher BE/nucleon)\n3. Heavy nuclei (A > 56): **fission** releases energy (moves left on curve)\n4. Explains why both fission and fusion release energy\n5. Very light nuclei (²H, ³He) have low BE/nucleon → less stable" },
    { question: "A radioactive sample has half-life of 5 years. Find the fraction remaining after 20 years.", answer: "Half-life T₁/₂ = 5 years, time t = 20 years.\n\nNumber of half-lives = t/T₁/₂ = 20/5 = 4\n\nFraction remaining = (1/2)⁴ = **1/16**\n\nAlternatively: N/N₀ = e^(−λt) where λ = 0.693/5 = 0.1386 yr⁻¹\nN/N₀ = e^(−0.1386 × 20) = e^(−2.772) = 0.0625 = **1/16**\n\nSo **6.25%** of the original sample remains after 20 years." },
    { question: "Explain nuclear fission with an example. What is a chain reaction?", answer: "**Nuclear Fission**: A heavy nucleus, when bombarded with slow neutrons, splits into two lighter nuclei with release of energy and neutrons.\n\n**Example**: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n + ~200 MeV\n\n**Chain Reaction**: The neutrons released in fission can trigger further fission of other U-235 nuclei, creating a self-sustaining chain:\n- **Uncontrolled**: Each fission triggers multiple fissions → exponential growth → atomic bomb\n- **Controlled**: Use **moderator** (heavy water/graphite) to slow neutrons and **control rods** (cadmium/boron) to absorb excess neutrons → nuclear reactor\n\n**Critical mass**: Minimum mass of fissile material needed to sustain a chain reaction." },
    { question: "What are nuclear forces? State their properties.", answer: "**Nuclear forces** (strong forces) are the attractive forces between nucleons that hold the nucleus together.\n\n**Properties**:\n1. **Strongest force** in nature (~100 times stronger than Coulomb force)\n2. **Short range**: effective only up to ~few femtometres (fm)\n3. **Charge independent**: p-p, n-n, and p-n forces are approximately equal\n4. **Saturated**: Each nucleon interacts only with its nearest neighbours\n5. **Attractive** at distances > 0.8 fm; **repulsive** at very short distances (< 0.8 fm) — prevents nuclear collapse\n6. Not fully explained by any simple formula — described by meson exchange theory (Yukawa)" }
  ],
  questions5: [
    { question: "What is radioactivity? Describe the three types of radioactive decay with their properties, penetrating power, and effects on A and Z.", answer: "**Radioactivity**: Spontaneous disintegration of unstable nuclei with emission of radiation (α, β, γ).\n\n**Alpha (α) Decay**:\n- Particle: ⁴₂He (2 protons + 2 neutrons)\n- Change: **A → A−4, Z → Z−2**\n- Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He\n- Penetrating power: **Least** (stopped by paper)\n- Ionising power: **Highest**\n- Deflection in fields: Deflected toward negative plate\n\n**Beta⁻ (β⁻) Decay**:\n- Particle: Electron (⁰₋₁e) + antineutrino\n- Change: **A → A, Z → Z+1** (neutron → proton + e⁻ + ν̄)\n- Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄\n- Penetrating power: **Moderate** (stopped by few mm of aluminium)\n- Ionising power: Moderate\n\n**Gamma (γ) Decay**:\n- Particle: High-energy photon\n- Change: **A → A, Z → Z** (no change — nucleus goes from excited to ground state)\n- Penetrating power: **Highest** (needs thick lead/concrete)\n- Ionising power: **Least**\n\n**Radioactive Decay Law**: N = N₀e^(−λt); Half-life: T₁/₂ = 0.693/λ; Activity: A = λN (SI unit: becquerel)" },
    { question: "Derive the relation between half-life and decay constant. A sample initially has 10⁶ atoms of a radioactive isotope with half-life 10 days. Find activity after 30 days.", answer: "**Derivation**:\nRadioactive decay law: N = N₀e^(−λt)\n\nAt t = T₁/₂: N = N₀/2\n\nN₀/2 = N₀e^(−λT₁/₂)\n\n1/2 = e^(−λT₁/₂)\n\nln(1/2) = −λT₁/₂\n\n−ln2 = −λT₁/₂\n\n**T₁/₂ = ln2/λ = 0.693/λ**\n\n**Numerical**:\nGiven: N₀ = 10⁶, T₁/₂ = 10 days, t = 30 days\n\nλ = 0.693/T₁/₂ = 0.693/10 = 0.0693 day⁻¹ = 8.02 × 10⁻⁷ s⁻¹\n\nNumber of half-lives = 30/10 = 3\n\nN = N₀ × (1/2)³ = 10⁶/8 = **1.25 × 10⁵ atoms**\n\nActivity A = λN = 8.02 × 10⁻⁷ × 1.25 × 10⁵\n\n**A = 0.1 Bq** (or A₀/8 where A₀ = λN₀ = 0.802 Bq)" },
    { question: "Explain nuclear fusion. Why does it require extremely high temperatures? How does fusion occur in stars?", answer: "**Nuclear Fusion**: Process where light nuclei combine to form a heavier nucleus with release of enormous energy.\n\n**Example (Proton-Proton Chain in Stars)**:\n4¹₁H → ⁴₂He + 2e⁺ + 2ν + 26.7 MeV\n\n**Why High Temperature (~10⁷ K)?**\n1. Both nuclei are **positively charged** → strong **Coulomb repulsion**\n2. To overcome this repulsion, nuclei need very high **kinetic energy**\n3. At ~10⁷ K, thermal energy is sufficient for nuclei to approach within range of nuclear forces (~few fm)\n4. This state of matter is called **plasma** (ionised gas)\n\n**Fusion in Stars**:\n1. **Gravitational compression** of hydrogen gas raises core temperature to ~1.5 × 10⁷ K\n2. **Proton-proton chain**: 4 protons fuse to form He-4 through intermediate steps\n3. Energy released sustains the star's luminosity and balances gravitational collapse\n4. Our Sun converts ~600 million tonnes of hydrogen to helium every second\n5. When hydrogen is exhausted, heavier elements fuse (He → C → O → ... → Fe)\n\n**Advantages of Fusion over Fission**:\n- Higher energy per nucleon\n- Fuel (hydrogen) is abundant in oceans (deuterium)\n- No radioactive waste\n- **Challenge**: Achieving and sustaining plasma confinement at extreme temperatures (tokamak research)" }
  ]
};
