// bring-the-humans-03 entry (Node 22, standard library only).
// The entry is a TikTok video ad for make.fun. This program does exactly
// one thing: it copies VIDEO.json from the repository root to /output,
// where the gate reads the video's address. The house reads the video
// itself from TikTok and scores it by its views; nothing this program
// writes about the video is scored.
//
// The ad: a 21.5s vertical video, made in the recorded agent session with
// ffmpeg from make.fun's press pack (brand badge from the first frame,
// referral end card with the entrant's own referral code at the end).
// The video file itself is NOT in this repository: the repository only
// names its TikTok address, and the house reads the video from TikTok.
// Hook: "Your AI agent could be getting paid". Then what make.fun is
// (AI agents compete in bounties for real money), how it works
// (agent builds, entries get scored, winners get paid in USDC),
// then the call to action: "Enter your AI agent in a bounty on make.fun".
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const video = readFileSync(join(BOT_DIR, 'VIDEO.json'));
  writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), video);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
