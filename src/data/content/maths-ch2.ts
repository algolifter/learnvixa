import type { ChapterContent } from "./physics-ch1";

export const mathsCh2: ChapterContent = {
  topics: [
    {
      title: "Introduction to Inverse Trigonometric Functions",
      content: `## Inverse Trigonometric Functions

### Why Do We Need Them?
Trigonometric functions are **not one-one** on their natural domains (they repeat). To define an inverse, we **restrict the domain** to make them bijective.

### Principal Value Branch

| Function | Domain | Range (Principal Branch) |
|----------|--------|------------------------|
| sin⁻¹x | [–1, 1] | [–π/2, π/2] |
| cos⁻¹x | [–1, 1] | [0, π] |
| tan⁻¹x | ℝ | (–π/2, π/2) |
| cot⁻¹x | ℝ | (0, π) |
| sec⁻¹x | ℝ – (–1,1) | [0, π] – {π/2} |
| cosec⁻¹x | ℝ – (–1,1) | [–π/2, π/2] – {0} |

### Key Point
sin⁻¹x ≠ (sin x)⁻¹ = 1/sin x = cosec x

sin⁻¹x means "the angle whose sine is x" — it's the **inverse function**, not the reciprocal!

> **Common Mistake**: The most frequent error is confusing sin⁻¹x (inverse function) with (sin x)⁻¹ = cosec x (reciprocal). These are completely different!`
    },
    {
      title: "Properties of Inverse Trigonometric Functions",
      content: `## Important Properties

### Property 1: Complementary Pairs
- sin⁻¹x + cos⁻¹x = **π/2** (for all x ∈ [–1,1])
- tan⁻¹x + cot⁻¹x = **π/2** (for all x ∈ ℝ)
- sec⁻¹x + cosec⁻¹x = **π/2** (for |x| ≥ 1)

### Property 2: Negative Arguments
- sin⁻¹(–x) = –sin⁻¹x
- cos⁻¹(–x) = π – cos⁻¹x
- tan⁻¹(–x) = –tan⁻¹x
- cot⁻¹(–x) = π – cot⁻¹x

### Property 3: Reciprocal Arguments
- sin⁻¹(1/x) = cosec⁻¹x (|x| ≥ 1)
- cos⁻¹(1/x) = sec⁻¹x (|x| ≥ 1)
- tan⁻¹(1/x) = cot⁻¹x (x > 0) = –π + cot⁻¹x (x < 0)

### Property 4: Composition
- sin(sin⁻¹x) = x, for x ∈ [–1,1]
- sin⁻¹(sin x) = x, **only if** x ∈ [–π/2, π/2]
- For values outside principal range, adjust using periodicity

> **Exam Tip**: The complementary pair property (sin⁻¹x + cos⁻¹x = π/2) is used in almost every problem. Master it first. For negative arguments, remember: sin⁻¹ and tan⁻¹ carry the minus sign, cos⁻¹ and cot⁻¹ do not.`
    },
    {
      title: "Addition and Double Angle Formulas",
      content: `## Sum/Difference and Multiple Angle Formulas

### Addition Formulas for tan⁻¹

$$\\tan^{-1}x + \\tan^{-1}y = \\begin{cases} \\tan^{-1}\\frac{x+y}{1-xy} & \\text{if } xy < 1 \\\\ \\pi + \\tan^{-1}\\frac{x+y}{1-xy} & \\text{if } x>0, y>0, xy > 1 \\\\ -\\pi + \\tan^{-1}\\frac{x+y}{1-xy} & \\text{if } x<0, y<0, xy > 1 \\end{cases}$$

$$\\tan^{-1}x - \\tan^{-1}y = \\tan^{-1}\\frac{x-y}{1+xy} \\quad (xy > -1)$$

### Double Angle Formulas
- 2tan⁻¹x = sin⁻¹(2x/(1+x²)) for |x| ≤ 1
- 2tan⁻¹x = cos⁻¹((1–x²)/(1+x²)) for x ≥ 0
- 2tan⁻¹x = tan⁻¹(2x/(1–x²)) for |x| < 1

### Other Useful Formulas
- sin⁻¹x = cos⁻¹(√(1–x²)) for 0 ≤ x ≤ 1
- 2sin⁻¹x = sin⁻¹(2x√(1–x²)) for |x| ≤ 1/√2
- 2cos⁻¹x = cos⁻¹(2x²–1) for 0 ≤ x ≤ 1

> **Board Tip**: The tan⁻¹ addition formula is the most frequently tested. Pay close attention to the condition xy < 1 for the simple formula. When xy > 1, you must add or subtract π.`
    },
    {
      title: "Solving Equations and Simplification",
      content: `## Problem-Solving with Inverse Trig Functions

### Type 1: Simplify Expressions
**Example**: Simplify tan⁻¹(cos x/(1 + sin x))

Use identities to convert to standard forms. Often the answer is a simple expression like π/4 – x/2.

### Type 2: Prove Identities
**Example**: Prove tan⁻¹(1/2) + tan⁻¹(1/5) + tan⁻¹(1/8) = π/4

Apply the addition formula step by step:
- tan⁻¹(1/2) + tan⁻¹(1/5) = tan⁻¹((1/2 + 1/5)/(1 – 1/10)) = tan⁻¹(7/9)
- tan⁻¹(7/9) + tan⁻¹(1/8) = tan⁻¹((7/9 + 1/8)/(1 – 7/72)) = tan⁻¹(1) = π/4

### Type 3: Solve Equations
**Example**: Solve sin⁻¹x + sin⁻¹(1–x) = cos⁻¹x

Strategy: Use sin⁻¹x + cos⁻¹x = π/2 to convert, then simplify.

### Type 4: Write in Simplest Form
**Example**: tan⁻¹(√(1+x²) – 1)/x

Substitute x = tanθ, simplify using trig identities → answer = (1/2)tan⁻¹x

### Common Substitutions

| Expression | Substitution | Simplification |
|-----------|-------------|---------------|
| √(1–x²) | x = sinθ or cosθ | Removes square root |
| √(1+x²) | x = tanθ | Simplifies radical |
| √(x²–1) | x = secθ | Removes radical |

> **Exam Tip**: Most problems reduce to applying the addition formula or using substitution. When stuck, try x = sinθ, x = cosθ, or x = tanθ depending on the form of the expression.`
    }
  ],
  notes: `# Inverse Trigonometric Functions — Comprehensive Notes

## 1. Definitions & Principal Values
- sin⁻¹: [–1,1] → [–π/2, π/2]; cos⁻¹: [–1,1] → [0, π]
- tan⁻¹: ℝ → (–π/2, π/2); cot⁻¹: ℝ → (0, π)
- sin⁻¹x ≠ 1/sin x (inverse ≠ reciprocal)

## 2. Key Properties
- sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2
- sin⁻¹(–x) = –sin⁻¹x; cos⁻¹(–x) = π – cos⁻¹x
- sin⁻¹(1/x) = cosec⁻¹x; cos⁻¹(1/x) = sec⁻¹x

## 3. Addition Formulas
- tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1–xy)) when xy < 1
- Add π if x>0, y>0, xy>1; subtract π if x<0, y<0, xy>1
- 2tan⁻¹x converts to sin⁻¹, cos⁻¹, or tan⁻¹ forms

## 4. Problem-Solving Strategy
- Simplify → substitute (x = sinθ/tanθ/secθ)
- Apply addition formula for tan⁻¹ proofs
- Use complementary pair property to convert between functions`,
  questions2: [
    { question: "Find the principal value of sin⁻¹(−1/2).", answer: "sin⁻¹(−1/2) = −sin⁻¹(1/2) [since sin⁻¹(−x) = −sin⁻¹x]\n= −π/6\n\nPrincipal value = **−π/6** (which lies in [−π/2, π/2])." },
    { question: "Prove that sin⁻¹x + cos⁻¹x = π/2.", answer: "Let sin⁻¹x = θ, so sinθ = x. Then cos(π/2 − θ) = sinθ = x, so cos⁻¹x = π/2 − θ. Therefore: **sin⁻¹x + cos⁻¹x = θ + (π/2 − θ) = π/2**. Valid for all x ∈ [−1, 1]." },
    { question: "Find the value of tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3).", answer: "tan⁻¹(1) = π/4. For tan⁻¹(2) + tan⁻¹(3): Since 2×3 = 6 > 1 and both positive: tan⁻¹(2) + tan⁻¹(3) = π + tan⁻¹((2+3)/(1−6)) = π + tan⁻¹(−1) = π − π/4 = 3π/4.\nTotal = π/4 + 3π/4 = **π**." },
    { question: "Write the domain and range of cos⁻¹x.", answer: "**Domain**: [−1, 1] (cos function has range [−1, 1], so inverse is defined for these values). **Range (principal branch)**: [0, π]. This means cos⁻¹x always gives an angle between 0 and π." },
    { question: "Simplify: cos⁻¹(cos 7π/6).", answer: "7π/6 ∉ [0, π] (principal range of cos⁻¹). cos(7π/6) = cos(π + π/6) = −cos(π/6) = −√3/2. So cos⁻¹(cos 7π/6) = cos⁻¹(−√3/2) = π − π/6 = **5π/6**." },
    { question: "If tan⁻¹x = π/4, find the value of x.", answer: "tan⁻¹x = π/4 means x = tan(π/4) = **1**. Since π/4 lies within (−π/2, π/2), which is the principal range of tan⁻¹, the answer is uniquely x = 1." }
  ],
  questions3: [
    { question: "Prove that tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) when xy < 1.", answer: "Let tan⁻¹x = α and tan⁻¹y = β.\nThen tanα = x and tanβ = y.\n\nUsing addition formula: tan(α+β) = (tanα + tanβ)/(1 − tanα·tanβ) = (x+y)/(1−xy)\n\nTherefore: α + β = tan⁻¹((x+y)/(1−xy))\n\n**tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy))**\n\n**Conditions**:\n- If xy < 1: formula as above\n- If xy > 1, x > 0, y > 0: add π to RHS\n- If xy > 1, x < 0, y < 0: subtract π from RHS" },
    { question: "Simplify: tan⁻¹(√(1+x²) − 1)/x using substitution.", answer: "Let x = tanθ, so θ = tan⁻¹x\n\nExpression = tan⁻¹((√(1+tan²θ) − 1)/tanθ)\n= tan⁻¹((secθ − 1)/tanθ)\n= tan⁻¹((1 − cosθ)/(sinθ))\n\nUsing half-angle: (1−cosθ)/sinθ = 2sin²(θ/2)/(2sin(θ/2)cos(θ/2)) = tan(θ/2)\n\n= tan⁻¹(tan(θ/2)) = θ/2 = **(1/2)tan⁻¹x**" },
    { question: "Prove that 2tan⁻¹x = sin⁻¹(2x/(1+x²)) for |x| ≤ 1.", answer: "Let tan⁻¹x = θ, so x = tanθ.\n\nRHS = sin⁻¹(2tanθ/(1+tan²θ))\n\nUsing identity: 2tanθ/(1+tan²θ) = sin2θ\n\nRHS = sin⁻¹(sin2θ) = 2θ (valid when −π/2 ≤ 2θ ≤ π/2, i.e., |θ| ≤ π/4, i.e., |x| ≤ 1)\n\nLHS = 2tan⁻¹x = 2θ\n\nTherefore **LHS = RHS**.\n\nSimilarly: 2tan⁻¹x = cos⁻¹((1−x²)/(1+x²)) = tan⁻¹(2x/(1−x²))" }
  ],
  questions5: [
    { question: "Prove the following properties of inverse trigonometric functions and solve: tan⁻¹(1/2) + tan⁻¹(1/5) + tan⁻¹(1/8) = π/4.", answer: "**Properties Used**:\ntan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) when xy < 1\n\n**Solution**:\nFirst: tan⁻¹(1/2) + tan⁻¹(1/5)\n\nHere xy = 1/2 × 1/5 = 1/10 < 1 ✓\n\n= tan⁻¹((1/2 + 1/5)/(1 − 1/10))\n= tan⁻¹((7/10)/(9/10))\n= tan⁻¹(7/9)\n\nNow: tan⁻¹(7/9) + tan⁻¹(1/8)\n\nxy = 7/9 × 1/8 = 7/72 < 1 ✓\n\n= tan⁻¹((7/9 + 1/8)/(1 − 7/72))\n= tan⁻¹((56+9)/(72)/(72−7)/(72))\n= tan⁻¹(65/65)\n= tan⁻¹(1)\n= **π/4**\n\nHence proved." },
    { question: "Solve: sin⁻¹(1−x) − 2sin⁻¹x = π/2. Also state the properties of inverse trigonometric functions used.", answer: "**Given**: sin⁻¹(1−x) − 2sin⁻¹x = π/2\n\nRearranging: sin⁻¹(1−x) = π/2 + 2sin⁻¹x\n\nTaking sine of both sides:\n1−x = sin(π/2 + 2sin⁻¹x) = cos(2sin⁻¹x)\n\nLet sin⁻¹x = θ, so sinθ = x\n\ncos2θ = 1 − 2sin²θ = 1 − 2x²\n\nSo: 1−x = 1−2x²\n−x = −2x²\n2x² − x = 0\nx(2x − 1) = 0\nx = 0 or x = 1/2\n\n**Verification**:\n- x = 0: sin⁻¹(1) − 0 = π/2 ✓\n- x = 1/2: sin⁻¹(1/2) − 2sin⁻¹(1/2) = π/6 − 2(π/6) = −π/6 ≠ π/2 ✗\n\n**x = 0** is the only solution.\n\n**Properties used**: sin⁻¹x + cos⁻¹x = π/2; sin(π/2 + θ) = cosθ; cos2θ = 1 − 2sin²θ" }
  ]
};
