# Bonus subagents completed; clean-context reviewer found something the author missed

2026-10-16 (session 10).

The user completed the bonus Subagents lesson: created the project-scoped read-only reviewer at
`.opencode/agents/reviewer.md` (committed `8751c42`), invoked it via `@reviewer` against the
`sandbox/tools/` toolkit, and reported that the clean-context reviewer **caught something** the
user had not. First empirical confirmation of the clean-context reviewer pattern on their own
artifacts — the reviewer sees what the author cannot.

Also established: `opencode agent create` is broken on this machine (`Request is missing
x-opencode-session`, opencode-go routing) — write agent markdown directly; a candidate upstream
bug for the community step.

Implications:
- The reviewer agent is now part of the repo harness; future sessions inherit it.
- Pending detail: which finding it was, and whether it was true (trust calibration — verify the
  claim, don’t just accept it). Candidate real defects in the toolkit, for matching against the
  report: `branches.sh` is the only tool missing `set -euo pipefail`; `worktree-count.sh`’s
  `grep -c` exits 1 on zero matches under `set -e`; `worktrees.sh` prints an empty branch field
  on detached HEAD.
- Next: graduate the course branch (fast-forward `dsv41fmax` → `master`), then a real project.

Evidence: `8751c42`, `.opencode/agents/reviewer.md`, user debrief.
