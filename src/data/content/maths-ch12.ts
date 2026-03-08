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
## 5. Special cases: unbounded region, multiple optimal solutions`,
  questions2: [
    { question: "What is an objective function in LPP?", answer: "The **objective function** is a linear function Z = ax + by that is to be **maximised or minimised** subject to the given constraints. Here a, b are constants and x, y are decision variables." },
    { question: "State the corner point theorem.", answer: "**Corner Point Theorem**: If the feasible region is bounded, then the optimal value (maximum or minimum) of the objective function occurs at a **corner point (vertex)** of the feasible region. We evaluate Z at each corner point and compare." },
    { question: "What is a feasible region?", answer: "The **feasible region** is the set of all points (x, y) that satisfy ALL the given constraints simultaneously. It is the common region (intersection) of all the half-planes defined by the constraint inequalities. It may be bounded or unbounded." }
  ],
  questions3: [
    { question: "Maximise Z = 3x + 4y subject to x + y ≤ 4, x ≥ 0, y ≥ 0.", answer: "Constraints define: x + y = 4 line, first quadrant.\n\n**Corner points**: (0, 0), (4, 0), (0, 4)\n\nZ at (0,0) = 0; Z at (4,0) = 12; Z at (0,4) = 16\n\n**Maximum Z = 16 at (0, 4)**." },
    { question: "Minimise Z = x + 2y subject to 2x + y ≥ 3, x + 2y ≥ 6, x ≥ 0, y ≥ 0.", answer: "Find intersection: 2x+y=3 and x+2y=6 → solving: x = 0, y = 3. Corner points: (6, 0), (0, 3), and intersection with axes.\n\nActually: from 2x+y=3: (0,3), (1.5,0); from x+2y=6: (0,3), (6,0).\n\nIntersection of 2x+y=3 and x+2y=6: subtract: x−y = −3 → x = y−3. Substituting: (y−3)+2y=6 → y=3, x=0. Point (0,3).\n\nCorner points of feasible region: (0, 3) and (6, 0)\n\nZ at (0,3) = 0+6 = 6; Z at (6,0) = 6+0 = 6\n\n**Minimum Z = 6** (at both points — multiple optimal solutions)." }
  ],
  questions5: [
    { question: "A manufacturer makes two products A and B. Each unit of A requires 2 hrs on machine I and 1 hr on machine II. Each unit of B requires 1 hr on machine I and 2 hrs on machine II. Machines I and II are available for 10 and 8 hrs respectively. Profit: ₹5/unit of A, ₹6/unit of B. Formulate as LPP and solve graphically.", answer: "**Formulation**:\nLet x = units of A, y = units of B\n\n**Maximise** Z = 5x + 6y\n\n**Subject to**:\n2x + y ≤ 10 (Machine I)\nx + 2y ≤ 8 (Machine II)\nx ≥ 0, y ≥ 0\n\n**Graphical Solution**:\nLine 2x+y=10: passes through (5,0) and (0,10)\nLine x+2y=8: passes through (8,0) and (0,4)\n\nIntersection: 2x+y=10 and x+2y=8\nFrom first: y=10−2x. Substitute: x+2(10−2x)=8 → x+20−4x=8 → −3x=−12 → x=4, y=2\n\n**Corner points**: (0,0), (5,0), (4,2), (0,4)\n\n| Point | Z = 5x+6y |\n|-------|----------|\n| (0,0) | 0 |\n| (5,0) | 25 |\n| (4,2) | 20+12=32 |\n| (0,4) | 24 |\n\n**Maximum profit = ₹32 at (4, 2)**: Make 4 units of A and 2 units of B." }
  ]
};
