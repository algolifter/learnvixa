import type { ChapterContent } from "./physics-ch1";

export const mathsCh12: ChapterContent = {
  topics: [
    {
      title: "Linear Programming Problems",
      content: `## Linear Programming

### Definition
Optimisation of a linear objective function subject to linear constraints (inequalities).

### Terminology
- **Objective function**: Z = ax + by (to maximise or minimise)
- **Constraints**: Linear inequalities (ax + by ≤ c, x ≥ 0, y ≥ 0)
- **Feasible region**: Set of all points satisfying all constraints
- **Feasible solution**: Any point in the feasible region
- **Optimal solution**: Feasible solution that optimises Z

### Corner Point Theorem
If the feasible region is **bounded**, the optimal value of Z occurs at a **corner point** (vertex) of the feasible region.

### Steps to Solve
1. Formulate the problem (define variables, objective function, constraints)
2. Graph the constraints → identify feasible region
3. Find corner points of the feasible region
4. Evaluate Z at each corner point
5. Identify maximum/minimum value

### Types of Problems
- **Manufacturing**: Maximise profit given resource constraints
- **Diet**: Minimise cost meeting nutritional requirements
- **Transportation**: Minimise cost of shipping

### Special Cases
- **Unbounded region**: Optimal solution may or may not exist (check if Z can increase/decrease indefinitely)
- **Multiple optimal solutions**: When Z is parallel to a constraint boundary

> **Exam Tip**: LPP is typically a 5-6 mark question. Always draw the graph neatly, shade the feasible region, and make a table of corner points with Z values. This is a scoring chapter.`
    }
  ],
  notes: `# Linear Programming — Notes

## 1. Objective function: Z = ax+by (optimise)
## 2. Constraints: linear inequalities
## 3. Corner point theorem: optimal at vertices of feasible region
## 4. Steps: formulate → graph → corner points → evaluate Z
## 5. Special cases: unbounded region, multiple optimal solutions`
};
