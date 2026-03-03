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
## 5. Elementary operations: interchange, multiply, add multiple`
};
