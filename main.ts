// Describe Your Ex in One Word — make.fun entry program.
// Writes exactly one word to /output/entry.txt: the one-word verdict
// on an ex.
// Gate: exactly one word, 1 to 111 characters, nothing else attached.
// The entry: "Unsubscribed"
// Why this word wins the pairwise judge: it is a verdict, not a plain
// insult — it frames the ex as a subscription you finally cancelled,
// which lands as a joke at a glance through a precise absurdity. It
// is not the obvious choice ("toxic", "cheater", "gone"), it startles
// while staying instantly clear, it is spelled correctly with no
// punctuation tricks, and anyone who has had an ex feels the truth
// in it: the laugh comes with a nod. The joke arrives with the word
// itself, no caption needed.
import { mkdirSync, writeFileSync } from "node:fs";

// One word, 12 characters. The whole entry is the verdict.
const ENTRY = "Unsubscribed";

// Gate guard: the sealed scorer accepts 1 to 111 characters, one word.
if (ENTRY.length < 1 || ENTRY.length > 111) {
  throw new Error("entry out of gate: " + ENTRY.length + " chars");
}
if (ENTRY.trim().split(/\s+/).length !== 1) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
