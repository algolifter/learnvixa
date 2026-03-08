import type { ChapterContent } from "./physics-ch1";

export const mathsCh8: ChapterContent = {
  topics: [
    {
      title: "Area Under Curves",
      content: `## Applications of Integrals

### Area Under a Curve
Area between curve y = f(x), x-axis, and lines x = a, x = b:
$$A = \\int_a^b |f(x)| \\, dx$$

**Important**: Use |f(x)| — area below x-axis is negative, so take absolute value.

### Area Between Two Curves
If f(x) ≥ g(x) on [a, b]:
$$A = \\int_a^b [f(x) - g(x)] \\, dx$$

### Standard Areas

| Curve | Area |
|-------|------|
| Circle x²+y²=r² | πr² |
| Ellipse x²/a²+y²/b²=1 | πab |
| Parabola y²=4ax, 0 to x=a | (4/3)a² |

### Steps for Area Problems
1. Sketch the curves (identify intersection points)
2. Determine which curve is on top
3. Set up the integral with correct limits
4. Evaluate

> **Exam Tip**: Always sketch the region first. The most common mistake is getting the limits wrong or not taking the absolute value when the curve goes below the x-axis.`
    }
  ],
  notes: `# Applications of Integrals — Notes

## 1. Area under curve: A = ∫|f(x)|dx
## 2. Area between curves: A = ∫[f(x)–g(x)]dx (upper – lower)
## 3. Standard: circle πr², ellipse πab
## 4. Always sketch first; find intersection points for limits`,
  questions2: [
    { question: "Find the area enclosed by the circle x² + y² = 4.", answer: "y = √(4−x²) (upper semicircle). Area = 4∫₀² √(4−x²)dx = 4 × [x√(4−x²)/2 + 2sin⁻¹(x/2)]₀² = 4 × [0 + 2·π/2] = 4 × π = **4π sq. units**. (General: area of circle = πr² = π(2²) = 4π.)" },
    { question: "Find the area bounded by y = x², x-axis, and x = 1 to x = 3.", answer: "A = ∫₁³ x² dx = [x³/3]₁³ = 27/3 − 1/3 = 9 − 1/3 = **26/3 sq. units**." },
    { question: "What is the formula for area between two curves?", answer: "If f(x) ≥ g(x) on [a,b], area = **∫ₐᵇ [f(x) − g(x)] dx** (upper curve minus lower curve). Always sketch first to identify which is upper and where they intersect." }
  ],
  questions3: [
    { question: "Find the area enclosed between y = x² and y = x.", answer: "Intersection: x² = x → x(x−1) = 0 → x = 0, 1. On [0,1]: x ≥ x² (line above parabola).\n\nA = ∫₀¹ (x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = **1/6 sq. units**." },
    { question: "Find the area of the region bounded by x² + y² = 1 in the first quadrant.", answer: "First quadrant: x from 0 to 1, y = √(1−x²)\n\nA = ∫₀¹ √(1−x²)dx = [x√(1−x²)/2 + sin⁻¹x/2]₀¹ = 0 + π/4 = **π/4 sq. units**\n\n(This is 1/4 of the total circle area = πr²/4 = π/4.)" }
  ],
  questions5: [
    { question: "Find the area of the region enclosed by the ellipse x²/a² + y²/b² = 1.", answer: "By symmetry, total area = 4 × (area in first quadrant)\n\nFrom the equation: y = b√(1 − x²/a²) = (b/a)√(a² − x²)\n\nA = 4∫₀ᵃ (b/a)√(a² − x²)dx\n\n= (4b/a) × [x√(a²−x²)/2 + (a²/2)sin⁻¹(x/a)]₀ᵃ\n\n= (4b/a) × [0 + (a²/2)(π/2) − 0]\n\n= (4b/a) × (πa²/4)\n\n= **πab sq. units**\n\nFor circle (a = b = r): area = πr² ✓\n\n**Method**: Used symmetry to reduce to first quadrant, then standard integral ∫√(a²−x²)dx = x√(a²−x²)/2 + (a²/2)sin⁻¹(x/a) + C." }
  ]
};
