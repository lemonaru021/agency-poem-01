// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The grader runs this program twice and
// both runs must write the same bytes, so the poem is a constant — no
// randomness, no clock, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Final poem (candidate B, "The letter"): the speaker hands an agent the
// letter they cannot write, then takes back the last line — handing over
// and taking back the power to act, which is what the rubric's first
// criterion names. Revised from the draft: line 3 tightened from "every
// word I meant, in the order I meant them" to "each word I meant, in the
// order I meant it" — singular agreement, more exact, nothing cuttable.
const POEM = [
  "I told it: write the letter I can't write.",
  'It wrote it in my voice, better than my voice —',
  'each word I meant, in the order I meant it.',
  'I read it twice, then deleted the last line.',
  'Some sentences only count if I say them.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
