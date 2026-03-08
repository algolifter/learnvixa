import type { ChapterContent } from "./physics-ch1";

export const mathsCh9: ChapterContent = {
  topics: [
    {
      title: "Formation and Solution of Differential Equations",
      content: `## Differential Equations

### Definition
An equation involving derivatives of a dependent variable w.r.t. an independent variable.

### Order and Degree
- **Order**: Highest order derivative present
- **Degree**: Power of the highest order derivative (after making it polynomial in derivatives)

### Formation of DE
Given a family of curves with n arbitrary constants → differentiate n times → eliminate constants.

### Methods of Solving

#### 1. Variable Separable
$$f(x)dx = g(y)dy$$ → integrate both sides

#### 2. Homogeneous DE
dy/dx = f(y/x): substitute y = vx, dy/dx = v + x(dv/dx)

#### 3. Linear DE
$$\\frac{dy}{dx} + Py = Q$$ (P, Q are functions of x)

**Integrating Factor**: IF = e^(∫Pdx)

**Solution**: y·IF = ∫(Q·IF)dx + C

### Common Applications
- Growth/decay: dN/dt = kN → N = N₀eᵏᵗ
- Newton's law of cooling
- Population models

> **Exam Tip**: First identify the type (separable, homogeneous, linear), then apply the appropriate method. For linear DE, always find IF first. This is a guaranteed 5-mark question.`
    }
  ],
  notes: `# Differential Equations — Notes

## 1. Order: highest derivative; Degree: power of highest derivative
## 2. Variable separable: ∫f(x)dx = ∫g(y)dy
## 3. Homogeneous: substitute y = vx
## 4. Linear: dy/dx + Py = Q; IF = e^(∫Pdx); solution: y·IF = ∫Q·IF dx`,
  questions2: [
    { question: "Find the order and degree of d²y/dx² + (dy/dx)³ + y = 0.", answer: "**Order** = 2 (highest derivative is d²y/dx²). **Degree** = 1 (power of the highest order derivative d²y/dx² is 1). Note: degree of (dy/dx)³ is irrelevant — we look at the power of the *highest order* derivative." },
    { question: "Solve dy/dx = x/y.", answer: "Separable: y dy = x dx. Integrating: y²/2 = x²/2 + C₁ → **x² − y² = C** (or y² − x² = C, depending on sign convention). This represents a family of hyperbolas." },
    { question: "What is an integrating factor?", answer: "For a linear DE dy/dx + Py = Q, the **integrating factor (IF)** = e^(∫P dx). Multiplying the entire equation by IF makes the LHS an exact derivative: d/dx(y·IF) = Q·IF. Solution: **y·IF = ∫Q·IF dx + C**." }
  ],
  questions3: [
    { question: "Solve dy/dx + y/x = x² (linear DE).", answer: "This is linear: P = 1/x, Q = x²\n\nIF = e^(∫1/x dx) = e^(lnx) = x\n\nMultiply by IF: x·dy/dx + y = x³ → d/dx(xy) = x³\n\nIntegrate: xy = x⁴/4 + C\n\n**y = x³/4 + C/x**" },
    { question: "Solve the homogeneous DE dy/dx = (x + y)/x.", answer: "dy/dx = 1 + y/x (homogeneous — function of y/x)\n\nSubstitute y = vx, dy/dx = v + x·dv/dx:\n\nv + x(dv/dx) = 1 + v → x(dv/dx) = 1 → dv = dx/x\n\nIntegrate: v = lnx + C → y/x = lnx + C\n\n**y = x lnx + Cx**" }
  ],
  questions5: [
    { question: "Solve: (1 + x²)dy/dx + 2xy = 1/(1 + x²). Also identify the type and method.", answer: "Rewrite: dy/dx + 2x/(1+x²)·y = 1/(1+x²)²\n\n**Type**: First-order linear DE (dy/dx + Py = Q)\n\nP = 2x/(1+x²), Q = 1/(1+x²)²\n\n**IF** = e^(∫2x/(1+x²)dx) = e^(ln(1+x²)) = 1+x²\n\nMultiply by IF:\n(1+x²)dy/dx + 2xy = 1/(1+x²)\n\nd/dx[y(1+x²)] = 1/(1+x²)\n\nIntegrate: y(1+x²) = tan⁻¹x + C\n\n**y = (tan⁻¹x + C)/(1+x²)**\n\n**Method**: Identified as linear DE → found integrating factor e^(∫Pdx) → multiplied through → recognized LHS as exact derivative → integrated both sides." }
  ]
};
