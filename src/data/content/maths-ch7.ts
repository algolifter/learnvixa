import type { ChapterContent } from "./physics-ch1";

export const mathsCh7: ChapterContent = {
  topics: [
    {
      title: "Integration – Methods",
      content: `## Integrals

### Basic Formulas

| f(x) | ∫f(x)dx |
|------|---------|
| xⁿ | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| sin x | –cos x + C |
| cos x | sin x + C |
| sec²x | tan x + C |

### Methods of Integration

#### 1. Substitution
If integrand contains f(g(x))·g'(x), let t = g(x)

#### 2. Integration by Parts
$$\\int u \\, dv = uv - \\int v \\, du$$
Choose u by **ILATE**: Inverse trig → Log → Algebraic → Trig → Exponential

#### 3. Partial Fractions
For rational functions P(x)/Q(x) where degree P < degree Q:
- Linear factors: A/(x–a) + B/(x–b)
- Repeated: A/(x–a) + B/(x–a)²
- Quadratic: (Ax+B)/(x²+bx+c)

### Special Integrals
$$\\int e^x[f(x) + f'(x)]dx = e^x f(x) + C$$

> **Exam Tip**: ILATE rule for integration by parts is essential. The special integral eˣ[f(x)+f'(x)] = eˣf(x) is a very common shortcut.`
    },
    {
      title: "Definite Integrals",
      content: `## Definite Integrals

### Fundamental Theorem of Calculus
$$\\int_a^b f(x)dx = F(b) - F(a)$$

### Important Properties
1. ∫ₐᵇ f(x)dx = –∫ᵇₐ f(x)dx
2. ∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᶜᵇ f(x)dx
3. ∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b–x)dx
4. ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a–x)dx (**King's rule** — most useful!)
5. ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx if f is **even**; = 0 if f is **odd**
6. ∫₀²ᵃ f(x)dx = 2∫₀ᵃ f(x)dx if f(2a–x) = f(x); = 0 if f(2a–x) = –f(x)

### Walli's Formula (for ∫₀^(π/2) sinⁿx dx or cosⁿx dx)
Used for powers of sin and cos — reduces the integral step by step.

> **Board Tip**: Property 4 (King's rule) solves many seemingly difficult integrals. Always try it when limits are 0 to a. Properties 5 and 6 are useful for even/odd functions.`
    }
  ],
  notes: `# Integrals — Notes

## 1. Basic: ∫xⁿdx = xⁿ⁺¹/(n+1); ∫eˣdx = eˣ
## 2. Methods: substitution, by parts (ILATE), partial fractions
## 3. Special: ∫eˣ[f(x)+f'(x)]dx = eˣf(x)
## 4. Definite: F(b)–F(a); King's rule: ∫₀ᵃf(x)dx = ∫₀ᵃf(a–x)dx
## 5. Even/odd function properties for symmetric limits`,
  questions2: [
    { question: "Evaluate ∫(x² + 1)dx.", answer: "∫(x² + 1)dx = x³/3 + x + C, where C is the constant of integration." },
    { question: "Evaluate ∫₀^π sinx dx.", answer: "∫₀^π sinx dx = [−cosx]₀^π = −cosπ − (−cos0) = −(−1) − (−1) = 1 + 1 = **2**." },
    { question: "State the ILATE rule for integration by parts.", answer: "**ILATE** is the order of priority for choosing the first function in ∫u·v dx = u∫v dx − ∫(u'∫v dx)dx: **I**nverse trig > **L**ogarithmic > **A**lgebraic > **T**rigonometric > **E**xponential. The function appearing first in ILATE is taken as 'u'." },
    { question: "Evaluate ∫eˣ(sinx + cosx)dx.", answer: "Using the property ∫eˣ[f(x) + f'(x)]dx = eˣf(x) + C:\n\nHere f(x) = sinx, f'(x) = cosx.\n\nSo ∫eˣ(sinx + cosx)dx = **eˣsinx + C**." }
  ],
  questions3: [
    { question: "Evaluate ∫dx/(x² + 4x + 13).", answer: "Complete the square: x² + 4x + 13 = (x+2)² + 9 = (x+2)² + 3²\n\nLet t = x + 2, dt = dx\n\n∫dt/(t² + 3²) = (1/3)tan⁻¹(t/3) + C\n\n= **(1/3)tan⁻¹((x+2)/3) + C**" },
    { question: "Evaluate ∫₀^(π/2) log(sinx) dx.", answer: "Let I = ∫₀^(π/2) log(sinx)dx\n\nUsing King's property: I = ∫₀^(π/2) log(cosx)dx\n\n2I = ∫₀^(π/2) [log(sinx) + log(cosx)]dx = ∫₀^(π/2) log(sinx·cosx)dx\n\n= ∫₀^(π/2) log(sin2x/2)dx = ∫₀^(π/2) log(sin2x)dx − ∫₀^(π/2) log2 dx\n\nLet 2x = t: first integral = (1/2)∫₀^π log(sint)dt = (1/2)·2I = I\n\nSo 2I = I − (π/2)log2\n\n**I = −(π/2)log2**" },
    { question: "Evaluate ∫x²eˣ dx using integration by parts.", answer: "Using ILATE: u = x², dv = eˣdx\n\n∫x²eˣdx = x²eˣ − ∫2xeˣdx\n\nAgain by parts: ∫2xeˣdx = 2xeˣ − ∫2eˣdx = 2xeˣ − 2eˣ\n\nSo: ∫x²eˣdx = x²eˣ − 2xeˣ + 2eˣ + C = **eˣ(x² − 2x + 2) + C**" }
  ],
  questions5: [
    { question: "Evaluate ∫dx/(sinx + sin2x). Also state the methods of integration used.", answer: "∫dx/(sinx + 2sinxcosx) = ∫dx/(sinx(1 + 2cosx))\n\nMultiply numerator and denominator by sinx:\n∫sinx dx/(sin²x(1+2cosx)) = ∫sinx dx/((1−cos²x)(1+2cosx))\n\nLet cosx = t, −sinx dx = dt:\n\n= −∫dt/((1−t²)(1+2t)) = −∫dt/((1−t)(1+t)(1+2t))\n\n**Partial fractions**: 1/((1−t)(1+t)(1+2t)) = A/(1−t) + B/(1+t) + C/(1+2t)\n\nSolving: A = 1/6, B = −1/2, C = 4/3\n\n= −[1/6·(−ln|1−t|) − 1/2·ln|1+t| + 4/3·(1/2)ln|1+2t|] + C\n\n= **(1/6)ln|1−cosx| − (1/2)ln|1+cosx| + (2/3)ln|1+2cosx| + C**\n\n**Methods used**: (1) Trigonometric identity, (2) Substitution (cosx = t), (3) Partial fraction decomposition, (4) Standard logarithmic integrals." }
  ]
};
