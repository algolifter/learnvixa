import type { ChapterContent } from "./physics-ch1";

export const mathsCh5: ChapterContent = {
  topics: [
    {
      title: "Continuity",
      content: `## Continuity and Differentiability

### Continuity at a Point
f(x) is continuous at x = a if:
1. f(a) is defined
2. lim(x→a) f(x) exists
3. lim(x→a) f(x) = f(a)

### Important Results
- Every polynomial function is continuous everywhere
- Every rational function is continuous in its domain
- sin x, cos x, eˣ are continuous everywhere
- |x| is continuous but not differentiable at x = 0

### Algebra of Continuous Functions
If f and g are continuous at a, then:
- f ± g, f·g, f/g (g(a)≠0) are continuous
- fog is continuous if f is continuous at g(a)

> **Exam Tip**: To check continuity, always verify LHL = RHL = f(a). For piecewise functions, check at the boundary points.`
    },
    {
      title: "Differentiability and Derivatives",
      content: `## Differentiability

### Definition
f is differentiable at x = a if:
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$ exists.

**If differentiable → continuous** (converse NOT true; e.g., |x| at x=0)

### Standard Derivatives

| f(x) | f'(x) |
|------|-------|
| xⁿ | nxⁿ⁻¹ |
| sin x | cos x |
| cos x | –sin x |
| tan x | sec²x |
| eˣ | eˣ |
| ln x | 1/x |
| sin⁻¹x | 1/√(1–x²) |
| tan⁻¹x | 1/(1+x²) |

### Chain Rule
$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

### Logarithmic Differentiation
For y = [f(x)]^g(x): Take log both sides, then differentiate.

### Parametric Differentiation
If x = f(t), y = g(t): dy/dx = (dy/dt)/(dx/dt)

> **Board Tip**: Inverse trigonometric derivatives and logarithmic differentiation are high-frequency questions. For log differentiation, always take ln of both sides first.`
    },
    {
      title: "Higher Order Derivatives and Rolle's/MVT",
      content: `## Second Order Derivatives
$$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$$

For parametric form:
$$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$$

## Rolle's Theorem
If f is:
1. Continuous on [a, b]
2. Differentiable on (a, b)
3. f(a) = f(b)

Then there exists c ∈ (a, b) such that **f'(c) = 0**.

## Mean Value Theorem (Lagrange's)
If f is continuous on [a, b] and differentiable on (a, b), then:
$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

for some c ∈ (a, b).

### Geometric Meaning
There exists a point where the tangent is parallel to the secant joining (a, f(a)) and (b, f(b)).

> **Exam Tip**: Rolle's theorem is a special case of MVT where f(a) = f(b). To apply these theorems: verify conditions first, then find c. This is a standard 4-mark question.`
    }
  ],
  notes: `# Continuity and Differentiability — Notes

## 1. Continuity: LHL = RHL = f(a)
## 2. Differentiable → continuous (not converse)
## 3. Chain rule, log differentiation, parametric differentiation
## 4. Rolle's: f(a)=f(b) → f'(c)=0
## 5. MVT: f'(c) = (f(b)–f(a))/(b–a)`
};
