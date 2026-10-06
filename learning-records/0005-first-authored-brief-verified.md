# First self-authored brief, delegated and verified (Lesson 0004 exercise)

2026-10-05 (session 5).

The user wrote their own brief for `sandbox/tools/repo-state.sh`, submitted it for critique,
revised it across two iterations, delegated it to a worker, and ran the acceptance runbook.
Result: worker’s step-1 report matched exactly (`dsv41fmax` / `dirty` / exit 0); after the
accept commit (`31f3de9`, one file, mode 100755) the tool reported `clean`; an untracked file
flipped it to `dirty`; cleanup returned `clean`; `git status --porcelain` was empty. Teacher
re-ran the full sequence and reviewed the script: shebang, `set -euo pipefail`, and
`git status --porcelain` (correctly covering staged, unstaged, and untracked changes).

The decisive critique was the **self-untracked paradox** (the deliverable reports itself dirty
before commit); the user resolved it with the recommended “count untracked, expect dirty until
commit” semantics. They accepted all four recommended design decisions without pushback.

Implications for future sessions:
- The mission’s “done is provable” criterion is now demonstrated end-to-end: the user can
  specify, delegate, and verify. Lesson 5 (*The Fleet*) can assume brief-writing competence and
  should spend its challenge budget on WIP limits, independent-task selection, and
  `blocked`-state triage.
- The sandbox now contains a real tool (`sandbox/tools/repo-state.sh`) that reports checkout
  state — reuse it in *The Fleet* to show state across several worktrees at a glance.
- Evidence: worker report, runbook output, `31f3de9`, script contents, teacher re-verification.
