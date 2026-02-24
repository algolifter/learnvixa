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
- Use complementary pair property to convert between functions`
};
