// Converts "decorative" LaTeX made only of \text{...} words (e.g. \text{A} + \text{B} = \text{Marks})
// into normal readable text. Genuine equations (with variables, numbers, symbols) are left untouched.
const MATH = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|\$([^$\n]+?)\$/g;

function toPlain(inner: string): string | null {
  const stripped = inner.replace(/\\(?:text|textbf|mathrm|textit)\s*\{[^{}]*\}/g, "").replace(/[\s+=,\-→&:\\]|\\quad|\\rightarrow/g, "");
  if (!/\\(?:text|textbf|mathrm|textit)\s*\{/.test(inner) || stripped.replace(/rightarrow|quad/g, "").length > 0) return null;
  const words = [...inner.matchAll(/\\(?:text|textbf|mathrm|textit)\s*\{([^{}]*)\}/g)].map((m) => m[1].trim()).filter(Boolean);
  if (!words.length) return null;
  const hasEq = /=|\\rightarrow|→/.test(inner);
  if (hasEq && words.length > 1) {
    const result = words[words.length - 1];
    const parts = words.slice(0, -1);
    const list = parts.length > 1 ? `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}` : parts[0];
    return `${list} together lead to ${result}.`;
  }
  return words.length > 1 ? `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}` : words[0];
}

export function cleanFakeMath(text: string): string {
  if (!text) return text;
  return text.replace(MATH, (full, a, b, c, d) => toPlain(a ?? b ?? c ?? d ?? "") ?? full);
}
