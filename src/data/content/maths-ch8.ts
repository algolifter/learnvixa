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
## 4. Always sketch first; find intersection points for limits`
};
