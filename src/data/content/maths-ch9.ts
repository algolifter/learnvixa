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
## 4. Linear: dy/dx + Py = Q; IF = e^(∫Pdx); solution: y·IF = ∫Q·IF dx`
};
