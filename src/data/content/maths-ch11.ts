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
## 5. Angle between line and plane: sinθ = b⃗·n⃗/(|b||n|)`
};
