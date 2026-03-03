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
## 5. Cramer's rule: x=D₁/D, y=D₂/D, z=D₃/D`
};
