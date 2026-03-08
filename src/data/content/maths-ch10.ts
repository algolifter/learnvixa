import type { ChapterContent } from "./physics-ch1";

export const mathsCh10: ChapterContent = {
  topics: [
    {
      title: "Vectors – Basics and Operations",
      content: `## Vector Algebra

### Types of Vectors
- **Zero vector**: Magnitude 0, arbitrary direction
- **Unit vector**: Magnitude 1; â = a⃗/|a⃗|
- **Collinear**: Parallel (same or opposite direction)
- **Coplanar**: Lie in the same plane

### Operations

#### Addition
Triangle law or parallelogram law; component-wise: (a₁+b₁)î + (a₂+b₂)ĵ + (a₃+b₃)k̂

#### Scalar (Dot) Product
$$\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta = a_1b_1 + a_2b_2 + a_3b_3$$

- Commutative; distributive
- a⃗·b⃗ = 0 ⟺ perpendicular (θ = 90°)

#### Vector (Cross) Product
$$|\\vec{a} \\times \\vec{b}| = |a||b|\\sin\\theta$$

$$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$$

- **Not commutative**: a⃗×b⃗ = –(b⃗×a⃗)
- a⃗×b⃗ = 0⃗ ⟺ parallel

### Applications
- Area of triangle = ½|a⃗×b⃗|
- Area of parallelogram = |a⃗×b⃗|
- Projection of a⃗ on b⃗ = (a⃗·b⃗)/|b⃗|

### Scalar Triple Product
$$[\\vec{a} \\, \\vec{b} \\, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$$
= Volume of parallelepiped; = 0 ⟺ coplanar

> **Exam Tip**: Dot product gives a scalar (used for angle/projection), cross product gives a vector (used for area/perpendicular). Know when to use which.`
    }
  ],
  notes: `# Vector Algebra — Notes

## 1. Unit vector: â = a⃗/|a⃗|
## 2. Dot product: a⃗·b⃗ = |a||b|cosθ = a₁b₁+a₂b₂+a₃b₃
## 3. Cross product: |a⃗×b⃗| = |a||b|sinθ; area of parallelogram
## 4. Scalar triple product: volume of parallelepiped; 0 ⟺ coplanar
## 5. Projection = (a⃗·b⃗)/|b⃗|`,
  questions2: [
    { question: "Find the dot product of a⃗ = 2î + 3ĵ − k̂ and b⃗ = î − 2ĵ + 3k̂.", answer: "a⃗·b⃗ = (2)(1) + (3)(−2) + (−1)(3) = 2 − 6 − 3 = **−7**." },
    { question: "Find the magnitude of the cross product of a⃗ = î + ĵ + k̂ and b⃗ = 2î − ĵ + 3k̂.", answer: "a⃗ × b⃗ = |î ĵ k̂; 1 1 1; 2 −1 3| = î(3+1) − ĵ(3−2) + k̂(−1−2) = 4î − ĵ − 3k̂.\n|a⃗ × b⃗| = √(16+1+9) = **√26**." },
    { question: "When are two vectors perpendicular?", answer: "Two vectors a⃗ and b⃗ are perpendicular if their **dot product is zero**: a⃗·b⃗ = 0 (since cosθ = 0 for θ = 90°). Equivalently: a₁b₁ + a₂b₂ + a₃b₃ = 0." },
    { question: "What is the scalar triple product? What does it represent?", answer: "[a⃗ b⃗ c⃗] = a⃗·(b⃗ × c⃗) = determinant of the 3×3 matrix formed by components. It represents the **volume of the parallelepiped** formed by the three vectors. If [a⃗ b⃗ c⃗] = 0, the vectors are **coplanar**." }
  ],
  questions3: [
    { question: "Find the angle between a⃗ = 2î + 2ĵ − k̂ and b⃗ = 6î − 3ĵ + 2k̂.", answer: "cosθ = (a⃗·b⃗)/(|a⃗||b⃗|)\n\na⃗·b⃗ = 12 − 6 − 2 = 4\n\n|a⃗| = √(4+4+1) = 3; |b⃗| = √(36+9+4) = 7\n\ncosθ = 4/21\n\n**θ = cos⁻¹(4/21)**" },
    { question: "Prove that the area of a triangle with vertices having position vectors a⃗, b⃗, c⃗ is ½|a⃗×b⃗ + b⃗×c⃗ + c⃗×a⃗|.", answer: "Sides of triangle: AB⃗ = b⃗ − a⃗, AC⃗ = c⃗ − a⃗\n\nArea = ½|AB⃗ × AC⃗| = ½|(b⃗−a⃗) × (c⃗−a⃗)|\n\n= ½|b⃗×c⃗ − b⃗×a⃗ − a⃗×c⃗ + a⃗×a⃗|\n\nSince a⃗×a⃗ = 0 and −b⃗×a⃗ = a⃗×b⃗, −a⃗×c⃗ = c⃗×a⃗:\n\n= **½|a⃗×b⃗ + b⃗×c⃗ + c⃗×a⃗|**" }
  ],
  questions5: [
    { question: "Define scalar and vector products. Prove that |a⃗ × b⃗|² + (a⃗·b⃗)² = |a⃗|²|b⃗|².", answer: "**Scalar (Dot) Product**: a⃗·b⃗ = |a⃗||b⃗|cosθ; gives a scalar; represents projection.\n\n**Vector (Cross) Product**: a⃗×b⃗ = |a⃗||b⃗|sinθ n̂; gives a vector perpendicular to both; magnitude = area of parallelogram.\n\n**Proof**:\nLHS = |a⃗ × b⃗|² + (a⃗·b⃗)²\n= (|a⃗||b⃗|sinθ)² + (|a⃗||b⃗|cosθ)²\n= |a⃗|²|b⃗|²sin²θ + |a⃗|²|b⃗|²cos²θ\n= |a⃗|²|b⃗|²(sin²θ + cos²θ)\n= |a⃗|²|b⃗|² × 1\n= **|a⃗|²|b⃗|²** = RHS\n\nThis is known as **Lagrange's identity**. It's useful for finding |a⃗ × b⃗| when a⃗·b⃗ and magnitudes are known." }
  ]
};
