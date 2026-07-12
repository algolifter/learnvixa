import type { ChapterContent, ChapterMeta } from "./types";

export const meta: Partial<ChapterMeta> = {
  subjectId: "cbse-class-1-maths",
  classLevel: "1",
  board: "cbse",
  category: "school",
};

export const content: ChapterContent = {
  topics: [
    {
      title: "Numbers 1 to 9",
      content: `# Mango Treat 🥭

Let's count mangoes!

| Number | Word | Picture |
|--------|------|---------|
| 1 | one   | 🥭 |
| 2 | two   | 🥭🥭 |
| 3 | three | 🥭🥭🥭 |
| 4 | four  | 🥭🥭🥭🥭 |
| 5 | five  | 🥭🥭🥭🥭🥭 |
| 6 | six   | 🥭🥭🥭🥭🥭🥭 |
| 7 | seven | 🥭🥭🥭🥭🥭🥭🥭 |
| 8 | eight | 🥭🥭🥭🥭🥭🥭🥭🥭 |
| 9 | nine  | 🥭🥭🥭🥭🥭🥭🥭🥭🥭 |

Point to each mango and count out loud: **one, two, three…**`,
    },
    {
      title: "Writing Numbers",
      content: `# How to Write 1 to 9 ✏️

- **1** — a straight line from top to bottom.
- **2** — a curve at the top, then a line at the bottom.
- **3** — two little humps facing left.
- **4** — down, right, then a long line down.
- **5** — a line down, a curve, a hat on top.
- **6** — a curve down that closes into a loop.
- **7** — a hat, then a line slanting down.
- **8** — two circles, one on top of the other.
- **9** — a small loop with a tail going down.

Trace the number in the air with your finger before writing it.`,
    },
    {
      title: "Number Order",
      content: `# What Comes Next? 🔢

The numbers go in a special order:

**1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9**

## Before and After

- The number **after 3** is **4**.
- The number **before 7** is **6**.
- The number **between 5 and 7** is **6**.

## Missing Numbers

Fill in the blanks (say them out loud):

1, _, 3, _, 5, _, 7, _, 9
`,
    },
  ],
  notes: `# Chapter 3 — Mango Treat (Notes)

## Numbers 1 to 9
- We can count 1, 2, 3, 4, 5, 6, 7, 8, 9.
- Each number has a **name** (one, two…) and a **symbol** (1, 2…).

## Order
Numbers go in order from **smallest (1)** to **biggest (9)**.

## Before / After / Between
- Before 4 → 3
- After 4 → 5
- Between 4 and 6 → 5

## Zero
- **0 (zero)** means "nothing".
- If you have 3 balloons and they all fly away, you have **0** balloons left.
`,
  importantPoints: [
    "Numbers 1 to 9 in order: 1, 2, 3, 4, 5, 6, 7, 8, 9.",
    "0 means 'nothing'.",
    "The number after 5 is 6.",
    "The number before 5 is 4.",
    "Match each number to its word: 1-one, 2-two … 9-nine.",
  ],
  examples: [
    "Ravi has 3 mangoes. Meena gives him 1 more. Now he has 4 mangoes.",
    "There are 5 birds. 2 fly away. 3 birds are left.",
  ],
  summary:
    "We learn to count, read and write numbers from 1 to 9, understand the order of numbers, and meet the special number 0 which means nothing.",
  questions2: [
    { question: "How many is 'three'?", answer: "3" },
    { question: "Which number comes after 6?", answer: "7" },
    { question: "Which number comes before 9?", answer: "8" },
    { question: "What does 0 mean?", answer: "Nothing — an empty group." },
  ],
  questions3: [
    { question: "Write the numbers from 1 to 9 in order.", answer: "1, 2, 3, 4, 5, 6, 7, 8, 9." },
    { question: "Ravi has 4 mangoes and eats 1. How many mangoes are left?", answer: "3 mangoes." },
  ],
  revision: {
    quickPoints: [
      "1-one, 2-two, 3-three, 4-four, 5-five",
      "6-six, 7-seven, 8-eight, 9-nine",
      "0 = zero (nothing)",
      "After adds 1. Before takes away 1.",
    ],
  },
};
