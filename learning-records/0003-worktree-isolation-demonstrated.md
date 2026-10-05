# Worktree isolation demonstrated (Lesson 0002 completed)

2026-10-05 (session 3 intake).

The user completed Lesson 0002: two agents wrote the same logical file
(`sandbox/shared/notes.md`) in separate worktrees and both versions survived. Verified on disk:
branches `worker-a` and `worker-b` (both at `d9d4b3c`), checkouts under
`~/.herdr/worktrees/parallel-agent-orchestration/`, files matching their briefs, both still
**untracked** (no accept commits yet). The parent-workspace restriction
(`linked_worktree_source`) was hit and resolved with the documented `--cwd` workaround; the
lesson was updated and the reference card now carries it. No other friction reported.

Implications for future sessions:
- Next: Lesson 0003 (*Merge Day*). Sequence matters: remove the stale collision artifact in the
  teaching worktree (`?? sandbox/shared/`), commit per worker branch, then merge — expect a
  fast-forward for `worker-a` and an add/add **conflict** for `worker-b`, resolved by keeping
  both lines. This is the deliberate contrast to Lesson 0002’s silent lost update.
- The user is new to `git commit`/`merge` output; keep commands exact and explain what each
  output means. `jq` is installed for extracting herdr workspace IDs during cleanup.
- Evidence: `git worktree list`, branch list, both `notes.md` contents, `git status` per
  worktree; user completion report.
