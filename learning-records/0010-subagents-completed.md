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
- **Verified (2026-10-16): every finding held.** The user checked each claim and confirmed they
  were all true — the clean-context reviewer caught real defects the author had missed. Crucially
  they verified rather than accepting on plausibility, which is the trust-calibration discipline
  from Lesson 0006 working end-to-end: the reviewer contributes intelligence, the human decides.
- Candidate defects present in the toolkit (matching the pattern the reviewer would flag):
  `branches.sh` is the only tool missing `set -euo pipefail`; `worktree-count.sh`’s `grep -c`
  exits 1 on zero matches under `set -e`; `worktrees.sh` prints an empty branch field on
  detached HEAD.
- Graduated and published (2026-10-16): `master` fast-forwarded to the course head; public repo
  at https://github.com/jimmerioles/parallel-agent-orchestration with a README. Door 1 (real
  project) parked at the user’s request.

Evidence: `8751c42`, `.opencode/agents/reviewer.md`, user debrief.
