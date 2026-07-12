import type { ChapterContent, ChapterMeta } from "./types";

export const meta: Partial<ChapterMeta> = {
  subjectId: "cbse-class-1-english",
  classLevel: "1",
  board: "cbse",
  category: "school",
};

export const content: ChapterContent = {
  topics: [
    {
      title: "Saying Hello",
      content: `# Greetings 👋

A **greeting** is what we say when we meet someone. It shows we are polite and friendly.

## Greetings for Different Times of the Day

| Time of Day | What we say |
|-------------|-------------|
| Morning (before 12 noon) | **Good morning** ☀️ |
| Afternoon (12 to 5) | **Good afternoon** 🌤️ |
| Evening (after 5) | **Good evening** 🌆 |
| Before sleeping at night | **Good night** 🌙 |

We also say:
- **Hello** or **Hi** — anytime we meet someone.
- **Goodbye** or **Bye** — when we leave.
`,
    },
    {
      title: "Polite Words",
      content: `# Magic Words ✨

Some words are called **magic words** because they make people smile.

- **Please** — when you ask for something.
- **Thank you** — when someone helps you or gives you something.
- **Sorry** — when you make a mistake.
- **Excuse me** — when you want to speak or pass by.

## Example

- Ravi: "Please give me a pencil."
- Meena: "Here you go."
- Ravi: "**Thank you!**"
- Meena: "You are welcome."`,
    },
    {
      title: "Greeting Elders",
      content: `# Greeting Our Elders 🙏

In India we also say:
- **Namaste** — join your hands and bow a little.
- **Namaskar** — a respectful greeting.

We greet:
- Parents in the morning.
- Grandparents when we meet them.
- Teachers when we enter class — "**Good morning, teacher!**"
- Friends when we come to school — "Hi!"`,
    },
  ],
  notes: `# Chapter 2 — Greetings (Notes)

## What is a Greeting?
A greeting is a polite word we say when we meet or leave someone.

## Greetings by Time
- **Good morning** — before 12 noon.
- **Good afternoon** — 12 to 5.
- **Good evening** — after 5.
- **Good night** — before sleep.

## Magic Words
Please, Thank you, Sorry, Excuse me.

## Indian Greeting
**Namaste** 🙏 — join hands and greet respectfully.

## Values
- Be polite.
- Respect elders.
- Smile when you greet.
`,
  importantPoints: [
    "Say 'Good morning' in the morning.",
    "Say 'Good night' before sleeping.",
    "Use 'please', 'thank you' and 'sorry' — magic words.",
    "Greet elders with 'Namaste' 🙏.",
    "Always smile when you greet.",
  ],
  summary:
    "We learn polite ways to greet people at different times of the day, use magic words like please and thank you, and show respect to elders with Namaste.",
  questions2: [
    { question: "What do we say in the morning?", answer: "Good morning." },
    { question: "What do we say before sleeping?", answer: "Good night." },
    { question: "How do we greet elders in India?", answer: "We say 'Namaste' with folded hands." },
    { question: "Which word do we use to ask politely?", answer: "Please." },
  ],
  revision: {
    quickPoints: [
      "Morning → Good morning",
      "Evening → Good evening",
      "Night → Good night",
      "Magic words: Please, Thank you, Sorry",
      "Namaste 🙏 for elders",
    ],
  },
};
