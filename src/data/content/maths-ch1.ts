import type { ChapterContent } from "./physics-ch1";

export const mathsCh1: ChapterContent = {
  topics: [
    {
      title: "Relations – Types and Properties",
      content: `## Relations and Functions

### Relation
A **relation** R from set A to set B is a subset of A × B (Cartesian product).

If (a, b) ∈ R, we write aRb ("a is related to b").

### Types of Relations (on a set A)

#### 1. Empty Relation
R = ∅ — no element of A is related to any element.

#### 2. Universal Relation
R = A × A — every element is related to every element.

#### 3. Reflexive
(a, a) ∈ R for **every** a ∈ A.
Example: "is equal to" on ℤ → reflexive (a = a always true)

#### 4. Symmetric
If (a, b) ∈ R then (b, a) ∈ R.
Example: "is a friend of" — if A is friend of B, B is friend of A

#### 5. Transitive
If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R.
Example: "is less than" on ℝ → if a < b and b < c, then a < c

#### 6. Equivalence Relation
A relation that is **reflexive, symmetric, AND transitive**.
Example: "has same remainder when divided by n" (congruence mod n)

> **Exam Tip**: To prove a relation is an equivalence relation, you must verify ALL three properties independently. Missing even one means it's NOT an equivalence relation.`
    },
    {
      title: "Equivalence Classes",
      content: `## Equivalence Classes and Partitions

### Equivalence Class
Given an equivalence relation R on set A, the **equivalence class** of element a is:

[a] = {x ∈ A : (a, x) ∈ R}

The set of all elements related to a.

### Properties of Equivalence Classes
1. Every element belongs to exactly one equivalence class
2. Two equivalence classes are either **identical** or **disjoint**
3. The union of all equivalence classes = A (partition of A)

### Example
Relation: "a ≡ b (mod 3)" on ℤ
- [0] = {..., –6, –3, 0, 3, 6, 9, ...}
- [1] = {..., –5, –2, 1, 4, 7, 10, ...}
- [2] = {..., –4, –1, 2, 5, 8, 11, ...}

These three classes partition all integers.

### Practical Example
"Has same birthday month" on a set of people:
- 12 equivalence classes (one per month)
- Each person in exactly one class

> **Board Tip**: When asked about equivalence classes, always identify the equivalence relation first, then list the distinct classes. The number of classes equals the number of distinct "types" defined by the relation.`
    },
    {
      title: "Functions – Types",
      content: `## Functions

### Definition
A **function** f: A → B is a special relation where every element of A has **exactly one** image in B.
- A = domain, B = codomain
- f(A) = range ⊆ codomain

### Types of Functions

#### 1. One-One (Injective)
f(a₁) = f(a₂) ⟹ a₁ = a₂ (distinct elements map to distinct images)

**Test**: If f(a₁) = f(a₂) leads to a₁ = a₂, function is one-one.

#### 2. Onto (Surjective)
For every b ∈ B, there exists a ∈ A such that f(a) = b.
Range = Codomain.

#### 3. Bijective (One-One AND Onto)
Every element in codomain has exactly one pre-image.
|A| = |B| for finite sets.

### Examples

| Function | Domain → Codomain | One-One? | Onto? |
|----------|-------------------|----------|-------|
| f(x) = 2x | ℝ → ℝ | Yes | Yes |
| f(x) = x² | ℝ → ℝ | No | No |
| f(x) = x² | ℝ⁺ → ℝ⁺ | Yes | Yes |
| f(x) = sin x | ℝ → [–1,1] | No | Yes |

> **Common Mistake**: Whether a function is one-one or onto depends on its domain AND codomain. f(x) = x² is not one-one on ℝ but IS one-one on ℝ⁺ = [0,∞).`
    },
    {
      title: "Composition and Invertible Functions",
      content: `## Composition of Functions

### Definition
If f: A → B and g: B → C, then **gof**: A → C is defined as:
(gof)(x) = g(f(x))

### Properties
- Composition is **NOT commutative**: gof ≠ fog in general
- Composition is **associative**: ho(gof) = (hog)of
- If f and g are one-one → gof is one-one
- If f and g are onto → gof is onto
- If f and g are bijective → gof is bijective

### Invertible Functions
A function f: A → B is **invertible** if there exists g: B → A such that gof = I_A and fog = I_B.

**Key theorem**: f is invertible **if and only if** f is **bijective**.

### Finding Inverse
1. Write y = f(x)
2. Solve for x in terms of y
3. Replace y with x to get f⁻¹(x)

**Example**: f(x) = 2x + 3
- y = 2x + 3 → x = (y – 3)/2
- f⁻¹(x) = (x – 3)/2

### Properties of Inverse
- (f⁻¹)⁻¹ = f
- (gof)⁻¹ = f⁻¹og⁻¹
- f⁻¹of = I (identity function on domain)
- fof⁻¹ = I (identity function on codomain)

> **Exam Tip**: To prove a function is invertible, prove it's bijective first, then find the inverse. The formula (gof)⁻¹ = f⁻¹og⁻¹ (reverse order) is a common exam question.`
    },
    {
      title: "Binary Operations",
      content: `## Binary Operations

### Definition
A **binary operation** * on set A is a function *: A × A → A.
It takes two elements and produces another element **of the same set** (closure).

### Properties

#### 1. Commutative
a * b = b * a for all a, b ∈ A
Example: + and × on ℝ are commutative; – and ÷ are not

#### 2. Associative
(a * b) * c = a * (b * c) for all a, b, c ∈ A
Example: + is associative; – is not (e.g., (5–3)–1 ≠ 5–(3–1))

#### 3. Identity Element
An element e ∈ A such that a * e = e * a = a for all a ∈ A
- For +: identity is 0
- For ×: identity is 1

#### 4. Inverse
For each a ∈ A, there exists b ∈ A such that a * b = b * a = e
- Inverse of a under + is –a
- Inverse of a under × is 1/a (if a ≠ 0)

### Operation Table
For finite sets, binary operations can be represented by a table:

| * | a | b |
|---|---|---|
| a | a | b |
| b | b | a |

Check closure (all entries in table must be from the set), commutativity (table is symmetric about diagonal).

> **Board Tip**: When checking if * is a binary operation, always verify **closure** first — the result must belong to the same set. For example, subtraction on ℕ is NOT a binary operation (3 – 5 = –2 ∉ ℕ).`
    }
  ],
  notes: `# Relations and Functions — Comprehensive Notes

## 1. Relations
- Relation R from A to B ⊆ A × B
- Types: empty, universal, reflexive, symmetric, transitive
- Equivalence relation = reflexive + symmetric + transitive
- Equivalence classes partition the set

## 2. Functions
- f: A → B; every element of A has exactly one image in B
- One-one (injective): distinct elements → distinct images
- Onto (surjective): range = codomain
- Bijective = one-one + onto

## 3. Composition
- (gof)(x) = g(f(x)); not commutative; associative
- Bijective functions are invertible
- (gof)⁻¹ = f⁻¹og⁻¹ (reverse order)

## 4. Binary Operations
- *: A × A → A (must have closure)
- Properties: commutative, associative, identity, inverse
- Check closure first, then other properties`
};
