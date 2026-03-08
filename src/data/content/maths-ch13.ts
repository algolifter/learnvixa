import type { ChapterContent } from "./physics-ch1";

export const mathsCh13: ChapterContent = {
  topics: [
    {
      title: "Conditional Probability and Bayes' Theorem",
      content: `## Probability

### Conditional Probability
$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) \\neq 0$$

### Multiplication Theorem
$$P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$$

### Independent Events
A and B are independent if P(A∩B) = P(A)·P(B)
Equivalently: P(A|B) = P(A)

### Total Probability Theorem
If B₁, B₂, ..., Bₙ partition the sample space:
$$P(A) = \\sum_{i=1}^{n} P(B_i) \\cdot P(A|B_i)$$

### Bayes' Theorem
$$P(B_i|A) = \\frac{P(B_i) \\cdot P(A|B_i)}{\\sum_{j=1}^{n} P(B_j) \\cdot P(A|B_j)}$$

> **Exam Tip**: Bayes' theorem is one of the most important topics — expect a 5-mark question. Set up the problem clearly: identify the events, prior probabilities, and likelihoods before applying the formula.`
    },
    {
      title: "Random Variables and Distributions",
      content: `## Random Variables

### Definition
A real-valued function defined on the sample space of a random experiment.

### Probability Distribution
A table showing all possible values of X and their probabilities.
Condition: ΣP(xᵢ) = 1; P(xᵢ) ≥ 0

### Mean (Expected Value)
$$E(X) = \\mu = \\sum x_i P(x_i)$$

### Variance
$$Var(X) = E(X^2) - [E(X)]^2 = \\sum x_i^2 P(x_i) - \\mu^2$$

### Standard Deviation
$$\\sigma = \\sqrt{Var(X)}$$

### Bernoulli Trials and Binomial Distribution
- n independent trials, each with P(success) = p, P(failure) = q = 1–p
$$P(X = r) = \\binom{n}{r} p^r q^{n-r}$$

- Mean = np
- Variance = npq

> **Board Tip**: Binomial distribution questions are guaranteed in boards. Identify n (number of trials), p (probability of success), and use the formula. Mean = np and variance = npq are standard results.`
    }
  ],
  notes: `# Probability — Notes

## 1. Conditional: P(A|B) = P(A∩B)/P(B)
## 2. Independent: P(A∩B) = P(A)P(B)
## 3. Bayes' theorem: P(Bᵢ|A) = P(Bᵢ)P(A|Bᵢ)/ΣP(Bⱼ)P(A|Bⱼ)
## 4. Mean: E(X) = Σxᵢp(xᵢ); Var = E(X²)–[E(X)]²
## 5. Binomial: P(X=r) = C(n,r)pʳqⁿ⁻ʳ; mean=np, var=npq`,
  questions2: [
    { question: "State Bayes' theorem.", answer: "If B₁, B₂, ..., Bₙ are mutually exclusive and exhaustive events, then for any event A: **P(Bᵢ|A) = P(Bᵢ)P(A|Bᵢ) / Σⱼ P(Bⱼ)P(A|Bⱼ)**. It updates the probability of Bᵢ given that A has occurred (posterior probability)." },
    { question: "If P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.12, are A and B independent?", answer: "For independence: P(A∩B) = P(A)·P(B). Check: P(A)·P(B) = 0.4 × 0.3 = 0.12 = P(A∩B). **Yes, A and B are independent.**" },
    { question: "Find E(X) if X takes values 1, 2, 3 with probabilities 0.2, 0.5, 0.3.", answer: "E(X) = Σxᵢp(xᵢ) = 1(0.2) + 2(0.5) + 3(0.3) = 0.2 + 1.0 + 0.9 = **2.1**." },
    { question: "Define conditional probability.", answer: "**Conditional probability** P(A|B) is the probability of event A occurring given that B has already occurred: **P(A|B) = P(A∩B)/P(B)**, provided P(B) ≠ 0." }
  ],
  questions3: [
    { question: "A bag has 3 red and 4 black balls. Two balls are drawn without replacement. Find P(both red).", answer: "P(1st red) = 3/7\nP(2nd red | 1st red) = 2/6 = 1/3\n\nP(both red) = P(1st red) × P(2nd red | 1st red) = 3/7 × 1/3 = **1/7**\n\nAlternatively: C(3,2)/C(7,2) = 3/21 = 1/7 ✓" },
    { question: "Find the mean and variance of a binomial distribution with n = 6, p = 1/3.", answer: "For Binomial distribution B(n, p):\n\n**Mean** = np = 6 × 1/3 = **2**\n\n**Variance** = npq = 6 × 1/3 × 2/3 = **4/3**\n\n**Standard deviation** = √(4/3) = 2/√3 ≈ 1.155" },
    { question: "A factory has machines A, B, C producing 50%, 30%, 20% of items. Defective rates: 2%, 3%, 5%. An item is defective. Find probability it came from C.", answer: "Let events: A (from machine A), B (from B), C (from C), D (defective)\n\nP(A)=0.5, P(B)=0.3, P(C)=0.2\nP(D|A)=0.02, P(D|B)=0.03, P(D|C)=0.05\n\nP(D) = 0.5(0.02) + 0.3(0.03) + 0.2(0.05) = 0.01 + 0.009 + 0.01 = 0.029\n\nP(C|D) = P(C)P(D|C)/P(D) = 0.2(0.05)/0.029 = 0.01/0.029 = **10/29 ≈ 0.345**" }
  ],
  questions5: [
    { question: "State and prove Bayes' theorem. A man is known to speak truth 3/4 of the time. He throws a die and reports it's a six. Find the probability it's actually a six.", answer: "**Bayes' Theorem**: For events B₁, B₂, ..., Bₙ forming a partition of sample space S, and any event A with P(A) > 0:\n\n**P(Bᵢ|A) = P(Bᵢ)P(A|Bᵢ) / Σⱼ₌₁ⁿ P(Bⱼ)P(A|Bⱼ)**\n\n**Proof**: P(Bᵢ|A) = P(Bᵢ∩A)/P(A) = P(Bᵢ)P(A|Bᵢ)/P(A)\n\nUsing total probability: P(A) = Σ P(Bⱼ)P(A|Bⱼ)\n\nSubstituting gives Bayes' formula. ∎\n\n**Application**:\nLet E₁ = die shows 6, E₂ = die doesn't show 6, A = man reports 6\n\nP(E₁) = 1/6, P(E₂) = 5/6\nP(A|E₁) = 3/4 (tells truth when it IS 6)\nP(A|E₂) = 1/4 (lies when it's NOT 6)\n\nP(E₁|A) = P(E₁)P(A|E₁) / [P(E₁)P(A|E₁) + P(E₂)P(A|E₂)]\n\n= (1/6)(3/4) / [(1/6)(3/4) + (5/6)(1/4)]\n\n= (3/24) / (3/24 + 5/24)\n\n= 3/8 = **3/8**\n\nProbability it's actually a six = **3/8 = 0.375**" }
  ]
};
