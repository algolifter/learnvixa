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
## 5. MVT: f'(c) = (f(b)–f(a))/(b–a)`,
  questions2: [
    { question: "Define continuity of a function at a point.", answer: "A function f(x) is **continuous at x = a** if: (i) f(a) is defined, (ii) lim(x→a) f(x) exists, (iii) **lim(x→a) f(x) = f(a)**. Equivalently: LHL = RHL = f(a). If any condition fails, f is discontinuous at a." },
    { question: "Is every differentiable function continuous?", answer: "**Yes**, every differentiable function is continuous. If f is differentiable at x = a, then f is continuous at a. **But the converse is NOT true**: f(x) = |x| is continuous at x = 0 but not differentiable there (sharp corner; left derivative = −1, right derivative = +1)." },
    { question: "Find dy/dx if y = sin⁻¹(2x√(1−x²)).", answer: "Substitute x = sinθ: y = sin⁻¹(2sinθcosθ) = sin⁻¹(sin2θ) = 2θ = 2sin⁻¹x.\n\n**dy/dx = 2/√(1−x²)**." },
    { question: "State Rolle's theorem.", answer: "If f is (i) **continuous** on [a,b], (ii) **differentiable** on (a,b), (iii) **f(a) = f(b)**, then there exists at least one c ∈ (a,b) such that **f'(c) = 0**. Geometrically: there's at least one point where the tangent is horizontal." },
    { question: "Differentiate log(log x) with respect to x.", answer: "Let y = log(logx). Using chain rule:\ndy/dx = (1/logx) × d(logx)/dx = (1/logx) × (1/x) = **1/(x logx)**." }
  ],
  questions3: [
    { question: "If y = (sinx)^x, find dy/dx.", answer: "Take log: log y = x log(sinx)\n\nDifferentiate both sides w.r.t. x:\n(1/y)(dy/dx) = log(sinx) + x × (cosx/sinx)\n\n(1/y)(dy/dx) = log(sinx) + x cotx\n\n**dy/dx = (sinx)^x [log(sinx) + x cotx]**\n\nThis is **logarithmic differentiation** — essential when variable appears in both base and exponent." },
    { question: "Verify Rolle's theorem for f(x) = x² − 4x + 3 on [1, 3].", answer: "**Check conditions**:\n1. f(x) is a polynomial → continuous on [1, 3] ✓\n2. Differentiable on (1, 3) ✓\n3. f(1) = 1 − 4 + 3 = 0; f(3) = 9 − 12 + 3 = 0; f(1) = f(3) ✓\n\n**Find c**: f'(x) = 2x − 4 = 0 → x = 2\n\nc = 2 ∈ (1, 3) ✓\n\n**Rolle's theorem is verified** with c = 2." },
    { question: "Find dy/dx if x = a(t − sint), y = a(1 − cost) (parametric).", answer: "dx/dt = a(1 − cost)\ndy/dt = a(sint)\n\ndy/dx = (dy/dt)/(dx/dt) = a sint / a(1−cost)\n\nUsing half-angle: sint = 2sin(t/2)cos(t/2); 1−cost = 2sin²(t/2)\n\ndy/dx = 2sin(t/2)cos(t/2) / 2sin²(t/2) = cos(t/2)/sin(t/2) = **cot(t/2)**" }
  ],
  questions5: [
    { question: "State and prove the Mean Value Theorem. Verify it for f(x) = x³ − 5x² + 3x on [1, 3].", answer: "**Mean Value Theorem (Lagrange's)**: If f is (i) continuous on [a,b] and (ii) differentiable on (a,b), then there exists c ∈ (a,b) such that:\n**f'(c) = (f(b) − f(a))/(b − a)**\n\n**Proof Sketch**: Define g(x) = f(x) − [(f(b)−f(a))/(b−a)](x−a) − f(a). Then g(a) = 0, g(b) = 0, and g satisfies Rolle's theorem conditions. So ∃ c ∈ (a,b) with g'(c) = 0, giving f'(c) = (f(b)−f(a))/(b−a).\n\n**Verification**: f(x) = x³ − 5x² + 3x on [1, 3]\n\nf(1) = 1 − 5 + 3 = −1; f(3) = 27 − 45 + 9 = −9\n\n(f(b)−f(a))/(b−a) = (−9−(−1))/(3−1) = −8/2 = −4\n\nf'(x) = 3x² − 10x + 3\n\nSolve f'(c) = −4: 3c² − 10c + 3 = −4 → 3c² − 10c + 7 = 0\n\nc = (10 ± √(100−84))/6 = (10 ± 4)/6 → c = 7/3 or c = 1\n\nc = 7/3 ∈ (1, 3) ✓. **MVT verified.**" }
  ]
};
