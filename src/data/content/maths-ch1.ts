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
- Check closure first, then other properties`,
  importantPoints: [
    "**Types of Relations**: Empty (R=∅), Universal (R=A×A), Reflexive (aRa ∀a), Symmetric (aRb⇒bRa), Transitive (aRb∧bRc⇒aRc), Equivalence (all three).",
    "**One-One (Injective)**: f(a)=f(b) ⇒ a=b. No two elements have the same image.",
    "**Onto (Surjective)**: Range = Codomain. Every element of codomain has a pre-image.",
    "**Bijective**: Both one-one and onto. Only bijective functions are invertible.",
    "**Composition**: (gof)(x) = g(f(x)). Domain of gof = domain of f. Order matters: gof ≠ fog in general.",
    "**Inverse function**: f⁻¹ exists only if f is bijective. f⁻¹(f(x)) = x and f(f⁻¹(y)) = y.",
    "**Binary Operation**: *: A×A → A. Must satisfy closure. Check commutative (a*b = b*a), associative ((a*b)*c = a*(b*c)), identity (a*e = a), inverse (a*b = e).",
    "**Equivalence classes**: If R is an equivalence relation on A, the equivalence class [a] = {x ∈ A : xRa}. These partition A.",
  ],
  commonMistakes: [
    "**Confusing reflexive with symmetric**: Reflexive means every element is related to ITSELF (aRa). Symmetric means if aRb then bRa. They are independent properties.",
    "**Forgetting to check ALL conditions for equivalence**: Students check reflexive and symmetric but skip transitivity. Must verify all three.",
    "**One-one check error**: To show f is NOT one-one, find two DIFFERENT inputs giving same output. To show it IS one-one, prove f(a)=f(b) ⇒ a=b for ALL a,b.",
    "**Confusing domain and codomain with range**: Range ⊆ Codomain. For onto, Range must EQUAL Codomain.",
    "**Wrong order in composition**: (gof)(x) = g(f(x)) — f is applied FIRST, then g. Students often reverse this.",
    "**Binary operation — forgetting closure**: If a*b gives a result outside A, the operation is NOT a binary operation on A.",
  ],
  examStrategy: [
    "**2-mark**: Define types of relations with examples. Show whether a given relation is reflexive/symmetric/transitive.",
    "**3-mark**: Prove a function is one-one and onto. Find inverse of a bijective function. Verify equivalence relation.",
    "**5-mark**: Show a relation is equivalence and find equivalence classes. Prove composition properties. Find inverse of composite functions.",
    "**Common board patterns**: 'Show R is an equivalence relation on set A' — verify R, S, T separately with clear reasoning.",
    "**Tip**: For proving one-one, start with 'Let f(x₁) = f(x₂)' and show x₁ = x₂. For onto, start with 'Let y ∈ codomain' and find x such that f(x) = y.",
  ],
  examples: [
    "**Equivalence Relation**: R = {(a,b) : a−b is divisible by 3} on Z. Reflexive: a−a=0, divisible by 3 ✓. Symmetric: if 3|(a−b), then 3|(b−a) ✓. Transitive: if 3|(a−b) and 3|(b−c), then 3|(a−c) ✓.",
    "**One-one & Onto**: f: R→R, f(x) = 2x+3. One-one: f(x₁)=f(x₂) ⇒ 2x₁+3 = 2x₂+3 ⇒ x₁=x₂ ✓. Onto: y = 2x+3 ⇒ x = (y−3)/2 ∈ R for all y ∈ R ✓. Hence bijective.",
    "**Inverse**: f(x) = (4x+3)/(6x−4). Let y = (4x+3)/(6x−4), solve for x: x = (4y+3)/(6y−4). So f⁻¹(x) = (4x+3)/(6x−4). Notice f⁻¹ = f (self-inverse)!",
    "**Composition**: f(x) = x², g(x) = 2x+1. (gof)(x) = g(f(x)) = g(x²) = 2x²+1. (fog)(x) = f(g(x)) = f(2x+1) = (2x+1)². Note: gof ≠ fog.",
    "**Binary Operation**: On Z, a*b = a+b−ab. Closure: a+b−ab ∈ Z ✓. Commutative: a*b = a+b−ab = b+a−ba = b*a ✓. Identity: a*e = a ⇒ a+e−ae = a ⇒ e(1−a) = 0 ⇒ e = 0.",
  ],
  summary: "**Relations and Functions** covers: (1) **Relations** — subsets of A×B; types: empty, universal, reflexive, symmetric, transitive, equivalence. (2) **Functions** — special relations where each input has exactly one output. Types: one-one (injective), onto (surjective), bijective (both). (3) **Composition**: (gof)(x) = g(f(x)). Not commutative. (4) **Inverse**: Only bijective functions are invertible. (5) **Binary Operations**: Closed operations on a set; check commutative, associative, identity, inverse.\n\n**Board weightage**: 6-8 marks. Most common: 'Show R is equivalence relation' (3-5 marks), 'Prove f is bijective and find inverse' (3-5 marks).",
  questions2: [
    { question: "Define an equivalence relation. Give an example.", answer: "A relation R on a set A is called an equivalence relation if it is reflexive (aRa ∀a∈A), symmetric (aRb ⇒ bRa), and transitive (aRb ∧ bRc ⇒ aRc).\nExample: R = {(a,b) : a = b} on any set A." },
    { question: "What is a bijective function?", answer: "A function f: A→B is bijective if it is both one-one (injective) and onto (surjective). This means every element of B has exactly one pre-image in A. Only bijective functions are invertible." },
    { question: "If f: R→R is defined by f(x) = 3x + 5, find f⁻¹(x).", answer: "Let y = 3x + 5. Then x = (y−5)/3.\nSo f⁻¹(x) = (x−5)/3.\nVerification: f(f⁻¹(x)) = 3·(x−5)/3 + 5 = x ✓" },
    { question: "Is the relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)} on A = {1,2,3} an equivalence relation?", answer: "Reflexive: (1,1), (2,2), (3,3) ∈ R ✓\nSymmetric: (1,2) ∈ R and (2,1) ∈ R ✓\nTransitive: (1,2) ∈ R, (2,1) ∈ R, (1,1) ∈ R ✓\nYes, R is an equivalence relation." },
    { question: "Define a binary operation. Give an example of a binary operation on N that is not commutative.", answer: "A binary operation * on set A is a function *: A×A → A (closure property). Example: Subtraction on Z is a binary operation (but not on N since a−b may be negative). Exponentiation a^b on N: 2³ = 8 ≠ 3² = 9, so not commutative." },
    { question: "Check if f: N→N defined by f(x) = x² is one-one and onto.", answer: "One-one: f(x₁) = f(x₂) ⇒ x₁² = x₂² ⇒ x₁ = x₂ (since x₁, x₂ ∈ N, both positive). So f is one-one ✓\nOnto: Is every n ∈ N an image? f(x) = n ⇒ x = √n. But √2 ∉ N. So f is NOT onto ✗." },
  ],
  questions3: [
    { question: "Show that the relation R on the set Z of integers defined by R = {(a,b) : 2 divides (a−b)} is an equivalence relation.", answer: "Reflexive: a − a = 0, and 2|0 ✓. So (a,a) ∈ R for all a ∈ Z.\nSymmetric: If (a,b) ∈ R, then 2|(a−b), so a−b = 2k. Then b−a = −2k = 2(−k), so 2|(b−a). Hence (b,a) ∈ R ✓.\nTransitive: If (a,b) ∈ R and (b,c) ∈ R, then a−b = 2k₁ and b−c = 2k₂. Adding: a−c = 2(k₁+k₂), so 2|(a−c). Hence (a,c) ∈ R ✓.\nSince R is reflexive, symmetric, and transitive, R is an equivalence relation." },
    { question: "Let f: R→R be defined by f(x) = x² + 1. Check whether f is one-one and onto.", answer: "One-one: f(1) = 2, f(−1) = 2. Since f(1) = f(−1) but 1 ≠ −1, f is NOT one-one ✗.\nOnto: For y ∈ R, f(x) = y ⇒ x² = y−1 ⇒ x = ±√(y−1). For y < 1, there is no real x. For example, y = 0 gives x² = −1, impossible. So f is NOT onto ✗.\nRange of f = [1, ∞) ≠ R." },
    { question: "Find gof and fog if f(x) = |x| and g(x) = |5x − 2|.", answer: "(gof)(x) = g(f(x)) = g(|x|) = |5|x| − 2|\nFor x = 1: gof(1) = |5(1) − 2| = |3| = 3\nFor x = −1: gof(−1) = |5(1) − 2| = |3| = 3\n\n(fog)(x) = f(g(x)) = f(|5x−2|) = ||5x−2|| = |5x−2|\nFor x = 0: fog(0) = |−2| = 2\nFor x = 1: fog(1) = |3| = 3\n\nNote: gof ≠ fog in general." },
  ],
  questions5: [
    { question: "Show that the relation R on A = {1,2,3,...,12} defined by R = {(a,b) : |a−b| is a multiple of 4} is an equivalence relation. Find the equivalence classes.", answer: "Reflexive: |a−a| = 0, and 4|0 ✓. So (a,a) ∈ R ∀a.\n\nSymmetric: If (a,b) ∈ R, then 4 | |a−b|. Since |a−b| = |b−a|, we have 4 | |b−a|, so (b,a) ∈ R ✓.\n\nTransitive: If (a,b) ∈ R and (b,c) ∈ R, then |a−b| = 4m and |b−c| = 4n.\nNow a−c = (a−b) + (b−c). Since 4|(a−b) and 4|(b−c), we have 4|(a−c), so 4||a−c|. Hence (a,c) ∈ R ✓.\n\nEquivalence classes:\n[1] = {1, 5, 9} (differ by 4)\n[2] = {2, 6, 10} (differ by 4)\n[3] = {3, 7, 11} (differ by 4)\n[4] = {4, 8, 12} (differ by 4)\n\nThese 4 classes partition A = {1,2,...,12}." },
    { question: "Let f: N→R be defined by f(x) = (4x²+12x+15)/(9). Show that f is one-one but not onto. Also find the range of f.", answer: "f(x) = (4x²+12x+15)/9 = (4x²+12x+9+6)/9 = ((2x+3)²+6)/9\n\nOne-one: Let f(x₁) = f(x₂)\n⇒ (2x₁+3)² + 6 = (2x₂+3)² + 6\n⇒ (2x₁+3)² = (2x₂+3)²\nSince x₁, x₂ ∈ N, 2x+3 > 0 always.\n⇒ 2x₁+3 = 2x₂+3\n⇒ x₁ = x₂ ✓\nSo f is one-one.\n\nNot onto: f(x) = ((2x+3)²+6)/9\nFor x ∈ N, minimum value of 2x+3 is 5 (when x=1).\nSo minimum f(1) = (25+6)/9 = 31/9.\nValues like 0 or 1 have no pre-image in N.\nSo f is not onto (range ≠ R).\n\nRange = {((2n+3)²+6)/9 : n ∈ N} = [31/9, ∞) ∩ {specific rational values}" },
  ],
  revision: {
    quickPoints: [
      "**Relation**: R ⊆ A×B. On set A: R ⊆ A×A.",
      "**Reflexive**: (a,a) ∈ R for all a. **Symmetric**: (a,b) ∈ R ⇒ (b,a) ∈ R. **Transitive**: (a,b),(b,c) ∈ R ⇒ (a,c) ∈ R.",
      "**Equivalence** = Reflexive + Symmetric + Transitive. Creates equivalence classes that partition the set.",
      "**One-one**: Different inputs → different outputs. **Onto**: Every element of codomain is an image.",
      "**Bijective** = One-one + Onto. Only bijective functions have inverses.",
      "**Composition**: (gof)(x) = g(f(x)). Apply f first, then g. Not commutative.",
      "**Inverse**: f⁻¹ exists iff f is bijective. To find: let y = f(x), solve for x in terms of y.",
      "**Binary Operation**: *: A×A → A (closure). Check: commutative, associative, identity, inverse.",
    ],
    formulas: [
      "(gof)(x) = g(f(x))",
      "f⁻¹(f(x)) = x and f(f⁻¹(y)) = y",
      "(gof)⁻¹ = f⁻¹ ∘ g⁻¹ (reverse order)",
      "Number of relations from A to B = 2^(|A|×|B|)",
      "Number of functions from A to B = |B|^|A|",
    ],
    tipsAndTricks: [
      "**Quick equivalence check**: Modular arithmetic relations (like a−b divisible by n) are almost always equivalence relations.",
      "**One-one shortcut for real functions**: If f is strictly increasing or strictly decreasing, it is one-one.",
      "**Onto check**: Find range of f and compare with codomain. Range = Codomain ⇒ onto.",
      "**Inverse shortcut**: For f(x) = (ax+b)/(cx+d), swap x and y, solve for y. Result: f⁻¹(x) = (dx−b)/(−cx+a).",
    ],
  },
};
