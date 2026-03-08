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
## 6. Absolute extrema: check critical points + endpoints`,
  questions2: [
    { question: "Find the rate of change of area of a circle with respect to radius when r = 5 cm.", answer: "A = πr². dA/dr = 2πr. At r = 5: **dA/dr = 10π cm²/cm**. The area increases at rate 10π ≈ 31.42 cm² per cm increase in radius." },
    { question: "Find the slope of tangent to y = x³ − x at x = 2.", answer: "dy/dx = 3x² − 1. At x = 2: slope = 3(4) − 1 = **11**. Equation of tangent: y − 6 = 11(x − 2) → y = 11x − 16." },
    { question: "Find the intervals in which f(x) = 2x³ − 3x² − 12x + 1 is increasing.", answer: "f'(x) = 6x² − 6x − 12 = 6(x² − x − 2) = 6(x−2)(x+1)\n\nf'(x) > 0 when x < −1 or x > 2.\n\nf is increasing on **(−∞, −1) ∪ (2, ∞)**." },
    { question: "What is the second derivative test for maxima and minima?", answer: "At critical point x = c (where f'(c) = 0): If **f''(c) < 0** → local **maximum**. If **f''(c) > 0** → local **minimum**. If f''(c) = 0 → test fails, use first derivative test." }
  ],
  questions3: [
    { question: "Find the local maxima and minima of f(x) = x³ − 6x² + 9x + 15.", answer: "f'(x) = 3x² − 12x + 9 = 3(x² − 4x + 3) = 3(x−1)(x−3)\n\nCritical points: x = 1, x = 3\n\nf''(x) = 6x − 12\n\nAt x = 1: f''(1) = 6 − 12 = −6 < 0 → **local maximum** = f(1) = 1−6+9+15 = **19**\n\nAt x = 3: f''(3) = 18 − 12 = 6 > 0 → **local minimum** = f(3) = 27−54+27+15 = **15**" },
    { question: "A ladder 5m long leans against a wall. Bottom slides away at 2 cm/s. How fast is the top sliding down when bottom is 4m from wall?", answer: "Let x = distance of bottom from wall, y = height of top.\n\nx² + y² = 25 (Pythagoras)\n\nDifferentiate: 2x(dx/dt) + 2y(dy/dt) = 0\n\nWhen x = 4: y = √(25−16) = 3m\n\n2(4)(2) + 2(3)(dy/dt) = 0\n\n16 + 6(dy/dt) = 0\n\n**dy/dt = −8/3 cm/s** (negative = sliding down)\n\nThe top slides down at **8/3 cm/s ≈ 2.67 cm/s**." }
  ],
  questions5: [
    { question: "Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius r.", answer: "Let the rectangle have sides 2x and 2y inscribed in a circle of radius r.\n\nConstraint: x² + y² = r² (diagonal = diameter = 2r)\n\n**Area**: A = 4xy = 4x√(r² − x²)\n\ndA/dx = 4[√(r²−x²) + x·(−2x)/(2√(r²−x²))]\n= 4[(r²−x²−x²)/√(r²−x²)]\n= 4(r²−2x²)/√(r²−x²)\n\nSet dA/dx = 0: r² − 2x² = 0 → x = r/√2\n\nThen y = √(r² − r²/2) = r/√2\n\nSo x = y = r/√2 → sides: 2x = 2y = r√2\n\n**The rectangle is a square** with side r√2.\n\nMaximum area = (r√2)² = **2r²**.\n\nd²A/dx² at x = r/√2 is negative (verify), confirming maximum." }
  ]
};
