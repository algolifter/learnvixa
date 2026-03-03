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
## 5. Binomial: P(X=r) = C(n,r)pʳqⁿ⁻ʳ; mean=np, var=npq`
};
