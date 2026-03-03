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
## 5. Projection = (a⃗·b⃗)/|b⃗|`
};
