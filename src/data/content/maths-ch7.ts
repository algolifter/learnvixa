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
## 5. Even/odd function properties for symmetric limits`
};
