# Fleet completed; WIP limit calibrated at three

2026-10-07 (session 6).

The user completed Lesson 0005 end-to-end: three worktrees provisioned, three briefs delegated,
one engineered `blocked` rescue (reported working exactly as described), three clean merges
(`fleet-a` fast-forward, `fleet-b`/`fleet-c` merge commits), worktrees retired, branches deleted,
working tree clean. Verified on disk: `sandbox/tools/{worktrees,branches,agents}.sh` all present,
executable, and producing correct output alongside `repo-state.sh`; the external cache
`~/.cache/parallel-fleet/agents.txt` exists (the blocked drill’s target).

The user reported that **three feels like the right WIP cap** — record this as their working
limit; future fleet exercises should stay at ≤3.

The blocked drill is confirmed as a reliable teaching technique: plain `opencode` (no `--auto`)
plus an external-directory write → `permission.asked` → sidebar `blocked` → approve once →
`working`. Reuse it whenever triage is the lesson.

Implications for future sessions:
- Next is *Review Craft* (roadmap #6) — hunk in depth, agent rationale, and reading diffs
  without rubber-stamping. The user has used hunk twice and it clicked, so this is the natural
  depth step on the mission’s actual bottleneck.
- Keep the WIP limit at three in any future fleet scenario unless the user changes it.
- Evidence: tool outputs, git graph (`576a3f1`, `fc6d9ed`, `9d7403e`), worktree/branch state,
  cache file, user debrief on the blocked rescue and the cap.
