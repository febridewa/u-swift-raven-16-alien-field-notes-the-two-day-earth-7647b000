// Alien Field Notes: The Two Day Earth Review
// Entry program for make.fun's u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.
// Writes one original line — an alien tourist's review of planet Earth —
// to /output/entry.txt, deterministically, every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Earth review: the locals built a machine to wash their dishes, then wash the dishes by hand before loading it. Four stars — gloriously illogical, would abduct again.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write an entry that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
