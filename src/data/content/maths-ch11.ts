import type { ChapterContent } from "./physics-ch1";

export const mathsCh11: ChapterContent = {
  topics: [
    {
      title: "Lines and Planes in 3D",
      content: `## Three Dimensional Geometry

### Direction Cosines and Ratios
Direction cosines: l, m, n where l² + m² + n² = 1
Direction ratios: a, b, c (proportional to l, m, n)

### Equation of a Line

#### Vector Form
$$\\vec{r} = \\vec{a} + \\lambda \\vec{b}$$

#### Cartesian Form
$$\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$$

### Angle Between Two Lines
$$\\cos\\theta = \\frac{a_1a_2 + b_1b_2 + c_1c_2}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}}$$

### Shortest Distance Between Two Skew Lines
$$d = \\frac{|(\\vec{a_2} - \\vec{a_1}) \\cdot (\\vec{b_1} \\times \\vec{b_2})|}{|\\vec{b_1} \\times \\vec{b_2}|}$$

### Equation of a Plane
- Vector: r⃗·n̂ = d
- Cartesian: ax + by + cz = d
- Three-point form: determinant formula

### Distance from Point to Plane
$$d = \\frac{|ax_1 + by_1 + cz_1 - d|}{\\sqrt{a^2+b^2+c^2}}$$

### Angle Between Line and Plane
$$\\sin\\theta = \\frac{\\vec{b} \\cdot \\vec{n}}{|\\vec{b}||\\vec{n}|}$$

> **Exam Tip**: Shortest distance between skew lines is a standard 5-mark derivation. Distance from a point to a plane is a very common numerical. Always double-check signs.`
    }
  ],
  notes: `# Three Dimensional Geometry — Notes

## 1. Direction cosines: l²+m²+n²=1
## 2. Line: r⃗ = a⃗ + λb⃗; (x–x₁)/a = (y–y₁)/b = (z–z₁)/c
## 3. Shortest distance (skew lines): |(a₂–a₁)·(b₁×b₂)|/|b₁×b₂|
## 4. Plane: r⃗·n̂ = d; distance = |ax₁+by₁+cz₁–d|/√(a²+b²+c²)
## 5. Angle between line and plane: sinθ = b⃗·n⃗/(|b||n|)`,
  questions2: [
    { question: "Find the direction cosines of the line joining (1, 2, 3) and (4, 6, 8).", answer: "Direction ratios: (4−1, 6−2, 8−3) = (3, 4, 5). |DR| = √(9+16+25) = √50 = 5√2. Direction cosines: **l = 3/(5√2), m = 4/(5√2), n = 5/(5√2)** = (3, 4, 5)/(5√2)." },
    { question: "Write the equation of the line through (1, −1, 2) with direction ratios 2, 3, −1.", answer: "**Cartesian form**: (x−1)/2 = (y+1)/3 = (z−2)/(−1). **Vector form**: r⃗ = (î − ĵ + 2k̂) + λ(2î + 3ĵ − k̂)." },
    { question: "Find the distance of the point (2, 3, −5) from the plane x + 2y − 2z = 9.", answer: "Distance = |ax₁ + by₁ + cz₁ − d|/√(a²+b²+c²) = |2 + 6 + 10 − 9|/√(1+4+4) = |9|/3 = **3 units**." }
  ],
  questions3: [
    { question: "Find the shortest distance between the lines r⃗ = (1,1,1) + λ(2,−1,1) and r⃗ = (2,1,−1) + μ(3,−5,2).", answer: "a⃗₁ = (1,1,1), b⃗₁ = (2,−1,1), a⃗₂ = (2,1,−1), b⃗₂ = (3,−5,2)\n\na⃗₂ − a⃗₁ = (1, 0, −2)\n\nb⃗₁ × b⃗₂ = |î ĵ k̂; 2 −1 1; 3 −5 2| = î(−2+5) − ĵ(4−3) + k̂(−10+3) = 3î − ĵ − 7k̂\n\n|b⃗₁ × b⃗₂| = √(9+1+49) = √59\n\nSD = |(a⃗₂−a⃗₁)·(b⃗₁×b⃗₂)|/|b⃗₁×b⃗₂| = |3+0+14|/√59 = **17/√59 units**" },
    { question: "Find the equation of the plane through (1, 1, 1), (1, −1, 1), and (−7, 3, −5).", answer: "Two vectors in the plane:\nAB⃗ = (0, −2, 0), AC⃗ = (−8, 2, −6)\n\nNormal n⃗ = AB⃗ × AC⃗ = |î ĵ k̂; 0 −2 0; −8 2 −6| = î(12) − ĵ(0) + k̂(0−16) = 12î − 16k̂\n\nSimplify: 3î − 4k̂. Plane: 3(x−1) + 0(y−1) − 4(z−1) = 0 → **3x − 4z + 1 = 0**" }
  ],
  questions5: [
    { question: "Derive the formula for the shortest distance between two skew lines. Find the shortest distance between r⃗ = î+ĵ+λ(2î−ĵ+k̂) and r⃗ = 2î+ĵ−k̂+μ(3î−5ĵ+2k̂).", answer: "**Derivation**: Given two skew lines: L₁: r⃗ = a⃗₁ + λb⃗₁ and L₂: r⃗ = a⃗₂ + μb⃗₂\n\nThe shortest distance is perpendicular to both lines, so it's along b⃗₁ × b⃗₂.\n\nThe vector connecting a point on L₁ to a point on L₂ is a⃗₂ − a⃗₁.\n\nThe projection of this vector on b⃗₁ × b⃗₂ gives the shortest distance:\n\n**SD = |(a⃗₂ − a⃗₁)·(b⃗₁ × b⃗₂)| / |b⃗₁ × b⃗₂|**\n\n**Application**:\na⃗₁ = î+ĵ, b⃗₁ = 2î−ĵ+k̂, a⃗₂ = 2î+ĵ−k̂, b⃗₂ = 3î−5ĵ+2k̂\n\na⃗₂ − a⃗₁ = î − k̂\n\nb⃗₁ × b⃗₂ = |î ĵ k̂; 2 −1 1; 3 −5 2| = î(−2+5) − ĵ(4−3) + k̂(−10+3) = 3î − ĵ − 7k̂\n\n|b⃗₁ × b⃗₂| = √(9+1+49) = √59\n\n(a⃗₂−a⃗₁)·(b⃗₁×b⃗₂) = 1(3) + 0(−1) + (−1)(−7) = 10\n\n**SD = 10/√59 units**" }
  ]
};
