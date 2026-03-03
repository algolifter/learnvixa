import type { ChapterContent } from "./physics-ch1";

export const mathsCh6: ChapterContent = {
  topics: [
    {
      title: "Rate of Change and Tangents",
      content: `## Applications of Derivatives

### Rate of Change
If y = f(x), then dy/dx represents the rate of change of y w.r.t. x.

**Related rates**: If both x and y depend on t:
$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$

### Tangent and Normal
At point (x₁, y₁):
- **Slope of tangent** = dy/dx at (x₁, y₁)
- **Equation of tangent**: y – y₁ = m(x – x₁)
- **Slope of normal** = –1/m
- **Equation of normal**: y – y₁ = (–1/m)(x – x₁)

> **Exam Tip**: Related rates problems are common — set up the relationship, differentiate w.r.t. time, then substitute known values.`
    },
    {
      title: "Increasing/Decreasing Functions and Maxima/Minima",
      content: `## Monotonicity

### Increasing Function
f'(x) > 0 on interval → f is **strictly increasing**

### Decreasing Function
f'(x) < 0 on interval → f is **strictly decreasing**

## Maxima and Minima

### First Derivative Test
1. Find f'(x) = 0 → critical points
2. Check sign change of f'(x):
   - + to – → **local maximum**
   - – to + → **local minimum**
   - No sign change → neither

### Second Derivative Test
At critical point c:
- f''(c) < 0 → **local maximum**
- f''(c) > 0 → **local minimum**
- f''(c) = 0 → test fails, use first derivative test

### Absolute Maximum/Minimum (Closed Interval)
1. Find all critical points in [a, b]
2. Evaluate f at critical points and endpoints
3. Largest = absolute max; smallest = absolute min

> **Board Tip**: For word problems (optimization), identify the function to maximize/minimize, express in one variable, differentiate, and verify using second derivative test. Always check endpoints for closed intervals.`
    }
  ],
  notes: `# Applications of Derivatives — Notes

## 1. Rate of change: dy/dx; related rates via chain rule
## 2. Tangent: y–y₁ = m(x–x₁); Normal: slope = –1/m
## 3. Increasing: f'>0; Decreasing: f'<0
## 4. First derivative test: sign change of f'
## 5. Second derivative test: f''<0→max, f''>0→min
## 6. Absolute extrema: check critical points + endpoints`
};
