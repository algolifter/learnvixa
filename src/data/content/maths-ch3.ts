import type { ChapterContent } from "./physics-ch1";

export const mathsCh3: ChapterContent = {
  topics: [
    {
      title: "Introduction to Matrices",
      content: `## Matrices

### Definition
A **matrix** is a rectangular array of numbers arranged in rows and columns.
Order: m × n (m rows, n columns)

### Types of Matrices
- **Row matrix**: 1 × n
- **Column matrix**: m × 1
- **Square matrix**: m = n
- **Diagonal matrix**: All non-diagonal elements are zero
- **Scalar matrix**: Diagonal matrix with all diagonal elements equal
- **Identity matrix (I)**: Diagonal elements = 1, rest = 0
- **Zero/Null matrix**: All elements = 0
- **Symmetric**: A = Aᵀ
- **Skew-symmetric**: A = –Aᵀ (diagonal elements must be 0)

### Important Result
Every square matrix can be expressed as the sum of a symmetric and a skew-symmetric matrix:
$$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$$

> **Exam Tip**: The decomposition into symmetric + skew-symmetric is a standard 2-mark question. Always verify by checking: symmetric part = (A+Aᵀ)/2.`
    },
    {
      title: "Operations on Matrices",
      content: `## Matrix Operations

### Addition/Subtraction
- Only for matrices of **same order**
- Element-wise: (A ± B)ᵢⱼ = aᵢⱼ ± bᵢⱼ

### Scalar Multiplication
(kA)ᵢⱼ = k·aᵢⱼ

### Matrix Multiplication
A (m×n) × B (n×p) = C (m×p)
$$c_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

### Properties
- AB ≠ BA in general (**not commutative**)
- (AB)C = A(BC) (**associative**)
- A(B+C) = AB + AC (**distributive**)
- AI = IA = A (identity)
- (AB)ᵀ = BᵀAᵀ (reverse order)

### Transpose Properties
- (Aᵀ)ᵀ = A
- (A+B)ᵀ = Aᵀ + Bᵀ
- (kA)ᵀ = kAᵀ

> **Board Tip**: Matrix multiplication is NOT commutative — this is tested frequently. Also, AB = 0 does NOT imply A = 0 or B = 0.`
    },
    {
      title: "Elementary Operations and Invertible Matrices",
      content: `## Elementary Row/Column Operations

### Types
1. **Rᵢ ↔ Rⱼ**: Interchange two rows
2. **Rᵢ → kRᵢ**: Multiply a row by non-zero scalar
3. **Rᵢ → Rᵢ + kRⱼ**: Add k times one row to another

### Invertible Matrices
A square matrix A is invertible if there exists B such that AB = BA = I. Then B = A⁻¹.

### Properties of Inverse
- (A⁻¹)⁻¹ = A
- (AB)⁻¹ = B⁻¹A⁻¹ (reverse order)
- (Aᵀ)⁻¹ = (A⁻¹)ᵀ

### Finding Inverse Using Row Operations
Write [A | I] and perform row operations to get [I | A⁻¹].

### Condition for Invertibility
A is invertible if and only if |A| ≠ 0 (non-singular).

> **Exam Tip**: To find inverse by elementary operations, always operate on rows only (or columns only), never mix. Show each step clearly for full marks.`
    }
  ],
  notes: `# Matrices — Notes

## 1. Types: row, column, square, diagonal, scalar, identity, symmetric, skew-symmetric
## 2. A = (A+Aᵀ)/2 + (A–Aᵀ)/2 (symmetric + skew-symmetric)
## 3. Multiplication: not commutative; (AB)ᵀ = BᵀAᵀ
## 4. Inverse: exists iff |A| ≠ 0; (AB)⁻¹ = B⁻¹A⁻¹
## 5. Elementary operations: interchange, multiply, add multiple`,
  questions2: [
    { question: "If A is a 3×2 matrix and B is a 2×4 matrix, what is the order of AB?", answer: "AB is defined because columns of A (2) = rows of B (2). Order of AB = **3×4** (rows of A × columns of B). BA is NOT defined because columns of B (4) ≠ rows of A (3)." },
    { question: "What is a symmetric matrix? Give an example.", answer: "A square matrix A is **symmetric** if **A = Aᵀ** (i.e., aᵢⱼ = aⱼᵢ for all i, j). Example: A = [[1, 2], [2, 3]] — here A = Aᵀ. Elements are symmetric about the main diagonal." },
    { question: "Express any square matrix as sum of symmetric and skew-symmetric matrices.", answer: "Any square matrix A can be written as: **A = ½(A + Aᵀ) + ½(A − Aᵀ)**, where ½(A + Aᵀ) is **symmetric** and ½(A − Aᵀ) is **skew-symmetric**. This decomposition is unique." },
    { question: "If A = [[1, 2], [3, 4]], find A².", answer: "A² = A × A = [[1×1+2×3, 1×2+2×4], [3×1+4×3, 3×2+4×4]] = [[1+6, 2+8], [3+12, 6+16]] = **[[7, 10], [15, 22]]**." },
    { question: "What is a scalar matrix?", answer: "A **scalar matrix** is a diagonal matrix in which all diagonal elements are **equal**: kI, where k is a scalar and I is the identity matrix. Example: [[3, 0], [0, 3]] = 3I₂. When k = 1, it becomes the identity matrix." }
  ],
  questions3: [
    { question: "Prove that (AB)ᵀ = BᵀAᵀ.", answer: "Let A = [aᵢⱼ]ₘₓₙ and B = [bⱼₖ]ₙₓₚ. Then AB = [cᵢₖ]ₘₓₚ where cᵢₖ = Σⱼ aᵢⱼbⱼₖ.\n\n(AB)ᵀ has (k,i) element = cᵢₖ = Σⱼ aᵢⱼbⱼₖ\n\nBᵀAᵀ: (Bᵀ)ₖⱼ = bⱼₖ and (Aᵀ)ⱼᵢ = aᵢⱼ\n\n(BᵀAᵀ)ₖᵢ = Σⱼ (Bᵀ)ₖⱼ(Aᵀ)ⱼᵢ = Σⱼ bⱼₖ·aᵢⱼ = Σⱼ aᵢⱼbⱼₖ = cᵢₖ\n\nSince elements match: **(AB)ᵀ = BᵀAᵀ**. This is the **reversal law for transposes**." },
    { question: "Find the inverse of A = [[2, 3], [1, 2]] using elementary operations.", answer: "Write [A | I]: [[2, 3 | 1, 0], [1, 2 | 0, 1]]\n\nR₁ ↔ R₂: [[1, 2 | 0, 1], [2, 3 | 1, 0]]\n\nR₂ → R₂ − 2R₁: [[1, 2 | 0, 1], [0, −1 | 1, −2]]\n\nR₂ → −R₂: [[1, 2 | 0, 1], [0, 1 | −1, 2]]\n\nR₁ → R₁ − 2R₂: [[1, 0 | 2, −3], [0, 1 | −1, 2]]\n\n**A⁻¹ = [[2, −3], [−1, 2]]**\n\nVerification: AA⁻¹ = [[2×2+3×(−1), 2×(−3)+3×2], [1×2+2×(−1), 1×(−3)+2×2]] = [[1, 0], [0, 1]] = I ✓" },
    { question: "Prove that for a skew-symmetric matrix, all diagonal elements are zero.", answer: "For a skew-symmetric matrix A: **Aᵀ = −A**, which means aⱼᵢ = −aᵢⱼ for all i, j.\n\nFor diagonal elements, put i = j:\naᵢᵢ = −aᵢᵢ\n2aᵢᵢ = 0\naᵢᵢ = 0\n\nTherefore **all diagonal elements of a skew-symmetric matrix are zero**.\n\nConsequence: trace of a skew-symmetric matrix = 0. Also, determinant of an odd-order skew-symmetric matrix = 0." }
  ],
  questions5: [
    { question: "Define types of matrices. Prove that any square matrix can be uniquely expressed as the sum of a symmetric and a skew-symmetric matrix.", answer: "**Types of Matrices**:\n1. **Row matrix**: 1×n; **Column matrix**: m×1\n2. **Square matrix**: m = n; **Diagonal**: aᵢⱼ = 0 for i ≠ j\n3. **Scalar**: kI; **Identity**: diagonal elements = 1\n4. **Symmetric**: A = Aᵀ; **Skew-symmetric**: A = −Aᵀ\n5. **Zero matrix**: all elements 0\n\n**Proof of Decomposition**:\nFor any square matrix A, define:\nP = ½(A + Aᵀ) and Q = ½(A − Aᵀ)\n\n**P is symmetric**: Pᵀ = ½(A + Aᵀ)ᵀ = ½(Aᵀ + A) = P ✓\n\n**Q is skew-symmetric**: Qᵀ = ½(A − Aᵀ)ᵀ = ½(Aᵀ − A) = −½(A − Aᵀ) = −Q ✓\n\n**P + Q = ½(A + Aᵀ) + ½(A − Aᵀ) = A** ✓\n\n**Uniqueness**: Suppose A = P₁ + Q₁ = P₂ + Q₂. Then P₁ − P₂ = Q₂ − Q₁. LHS is symmetric, RHS is skew-symmetric. A matrix that is both symmetric and skew-symmetric must be the zero matrix. So P₁ = P₂ and Q₁ = Q₂." }
  ]
};
