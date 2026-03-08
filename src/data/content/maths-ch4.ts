import type { ChapterContent } from "./physics-ch1";

export const mathsCh4: ChapterContent = {
  topics: [
    {
      title: "Determinants – Definition and Properties",
      content: `## Determinants

### Definition
A determinant is a scalar value associated with a **square matrix**.

### 2×2 Determinant
$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$

### 3×3 Determinant (Expansion along first row)
$$|A| = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

### Properties
1. |Aᵀ| = |A|
2. Interchanging rows/columns → sign changes
3. Two identical rows/columns → |A| = 0
4. Multiplying a row by k → determinant multiplied by k
5. |kA| = kⁿ|A| (for n×n matrix)
6. |AB| = |A|·|B|
7. Row/column can be split as sum → determinant splits

> **Exam Tip**: Property 5 is a common trap: |3A| for a 3×3 matrix = 27|A|, not 3|A|. Always remember the power equals the order.`
    },
    {
      title: "Minors, Cofactors and Applications",
      content: `## Minors and Cofactors

### Minor (Mᵢⱼ)
Determinant obtained by deleting the ith row and jth column.

### Cofactor (Aᵢⱼ)
$$A_{ij} = (-1)^{i+j} M_{ij}$$

### Expansion Formula
$$|A| = \\sum_{j=1}^{n} a_{ij} A_{ij}$$ (along any row i)

### Adjoint
adj(A) = transpose of cofactor matrix
$$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$$

### Properties of Adjoint
- A·adj(A) = |A|·I
- |adj(A)| = |A|ⁿ⁻¹ (for n×n matrix)

## Solving Linear Equations (Cramer's Rule)
For AX = B:
$$x = \\frac{D_1}{D}, \\quad y = \\frac{D_2}{D}, \\quad z = \\frac{D_3}{D}$$

Where D = |A|, D₁ = |A| with first column replaced by B, etc.

### Consistency
- D ≠ 0: Unique solution
- D = 0, D₁ = D₂ = D₃ = 0: Infinite solutions
- D = 0, any Dᵢ ≠ 0: No solution

> **Board Tip**: Finding inverse using adj(A) and solving equations using Cramer's rule or A⁻¹ are standard 5-mark questions. Practice both methods.`
    }
  ],
  notes: `# Determinants — Notes

## 1. 2×2: ad–bc; 3×3: expand along any row/column
## 2. Properties: |Aᵀ|=|A|; |kA|=kⁿ|A|; |AB|=|A||B|
## 3. Cofactor: Aᵢⱼ = (–1)^(i+j)Mᵢⱼ
## 4. A⁻¹ = adj(A)/|A|; A·adj(A) = |A|I
## 5. Cramer's rule: x=D₁/D, y=D₂/D, z=D₃/D`,
  questions2: [
    { question: "Find the determinant of [[1, 2], [3, 4]].", answer: "|A| = 1×4 − 2×3 = 4 − 6 = **−2**." },
    { question: "If |A| = 5, find |3A| where A is a 2×2 matrix.", answer: "For an n×n matrix: |kA| = kⁿ|A|. Here n = 2, k = 3: |3A| = 3² × 5 = 9 × 5 = **45**." },
    { question: "What is the cofactor of an element aᵢⱼ?", answer: "**Cofactor** Aᵢⱼ = (−1)^(i+j) × Mᵢⱼ, where Mᵢⱼ is the **minor** (determinant of the submatrix obtained by deleting the ith row and jth column). The sign alternates in a checkerboard pattern: +, −, +, −, ..." },
    { question: "State the property: |AB| = |A|·|B|.", answer: "For two square matrices A and B of the same order: **|AB| = |A| × |B|**. This means the determinant of a product equals the product of determinants. Consequence: |A⁻¹| = 1/|A| (since |AA⁻¹| = |I| = 1)." },
    { question: "When is a system of linear equations inconsistent?", answer: "A system AX = B is **inconsistent** (no solution) when |A| = 0 AND (adj A)B ≠ 0. If |A| = 0 and (adj A)B = 0, the system has **infinitely many solutions**. If |A| ≠ 0, the system has a **unique solution**." }
  ],
  questions3: [
    { question: "Solve using Cramer's rule: 2x + 3y = 5, 3x + 2y = 5.", answer: "D = |2 3; 3 2| = 4 − 9 = −5\n\nD₁ = |5 3; 5 2| = 10 − 15 = −5\n\nD₂ = |2 5; 3 5| = 10 − 15 = −5\n\nx = D₁/D = −5/−5 = **1**\ny = D₂/D = −5/−5 = **1**\n\nSolution: **(x, y) = (1, 1)**. Verification: 2(1)+3(1) = 5 ✓, 3(1)+2(1) = 5 ✓." },
    { question: "Prove that |A·adj(A)| = |A|ⁿ for an n×n matrix.", answer: "We know that **A · adj(A) = |A| · I**\n\nTaking determinants of both sides:\n|A · adj(A)| = ||A| · I|\n\nLHS = |A| · |adj(A)|\n\nRHS = |A|ⁿ · |I| = |A|ⁿ (since |kI| = kⁿ and |I| = 1)\n\nTherefore: |A| · |adj(A)| = |A|ⁿ\n\nIf |A| ≠ 0: **|adj(A)| = |A|^(n−1)**\n\nAlso: **|A · adj(A)| = |A|ⁿ** as required." },
    { question: "Find the area of a triangle with vertices (1, 0), (6, 0), (4, 3) using determinants.", answer: "Area = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|\n\n= ½|1(0−3) + 6(3−0) + 4(0−0)|\n\n= ½|−3 + 18 + 0|\n\n= ½ × 15 = **7.5 sq. units**\n\nAlternatively using determinant: ½|det[[1, 0, 1], [6, 0, 1], [4, 3, 1]]| = ½|1(0−3) − 0(6−4) + 1(18−0)| = ½|−3+18| = 7.5" }
  ],
  questions5: [
    { question: "State and prove the properties of determinants. Use properties to evaluate a determinant without expanding.", answer: "**Key Properties**:\n1. |Aᵀ| = |A|\n2. Interchanging rows/columns changes sign\n3. If two rows/columns are identical, |A| = 0\n4. Scalar multiple of a row: k comes out as factor\n5. |kA| = kⁿ|A| for n×n matrix\n6. Sum property: if each element of a row is sum of two terms, det splits into sum of two dets\n7. Adding scalar multiple of one row to another doesn't change det\n8. |AB| = |A||B|\n\n**Example**: Evaluate without expanding:\n|a, b, c|\n|a+2x, b+2y, c+2z|\n|x, y, z|\n\nR₂ → R₂ − R₁: |a, b, c; 2x, 2y, 2z; x, y, z|\n\nTake 2 from R₂: 2|a, b, c; x, y, z; x, y, z|\n\nR₂ = R₃ → determinant = **0** (identical rows)\n\nProperties 3 and 7 are most useful for simplification without expansion." }
  ]
};
