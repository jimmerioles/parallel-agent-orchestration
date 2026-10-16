# Parallel Agent Orchestration — an SE 3.0 learning workspace

> A self-contained course and toolkit for running a small fleet of AI coding agents on
> [Omarchy](https://omarchy.org/) — built with [herdr](https://herdr.dev/), opencode, and
> [hunk](https://hunk.dev/) while learning the discipline in public.

The premise, in one line: **agents scale; review doesn’t.** Everything here exists to spend
agent throughput without spending your judgment — brief with verification, isolate with git
worktrees, merge deliberately, and review by risk.

## What’s in here

| Path | What it is |
| --- | --- |
| `lessons/0001…0009.html` | The course — eight lessons plus a subagents bonus. Each is one hands-on win. |
| `reference/herdr-control-room.html` | Printable card: herdr concepts, agent states, keybindings, orchestrator commands. |
| `reference/shell-review-primer.html` | What `git diff`, `git status`, and porcelain output actually check. |
| `sandbox/tools/` | A small fleet toolkit built by the agents during the course. |
| `GLOSSARY.md` | The course vocabulary, one term per taught lesson. |
| `AGENTS.md` | Harness conventions — what every agent in this repo must obey. |
| `learning-records/` | Decision-grade insights, ADR-style, one per session. |
| `MISSION.md` · `NOTES.md` · `RESOURCES.md` | Why this exists, working notes, and curated sources. |
| `.opencode/agents/reviewer.md` | A read-only, clean-context reviewer subagent (`@reviewer`). |

## The course

| Lesson | The win |
| --- | --- |
| [0001 Make It Two](lessons/0001-make-it-two.html) | Two agents in parallel; the sidebar as a review queue. |
| [0002 Two Agents, One File](lessons/0002-two-agents-one-file.html) | Feel a lost update, then fix it with git worktrees. |
| [0003 Merge Day](lessons/0003-merge-day.html) | Accept branches, resolve a real conflict, retire worktrees. |
| [0004 The Brief](lessons/0004-the-brief.html) | Write specs with verification so “done” is provable. |
| [0005 The Fleet](lessons/0005-the-fleet.html) | Three agents under a WIP limit; triage a blocked worker. |
| [0006 Review Craft](lessons/0006-review-craft.html) | Trust calibration; a planted-defect review drill. |
| [0007 The Orchestrator](lessons/0007-the-orchestrator.html) | An agent that provisions, staffs, waits, and reports. |
| [0008 SE 3.0 in Practice](lessons/0008-se3-in-practice.html) | Harness engineering; what stays human. |
| [0009 Subagents](lessons/0009-subagents.html) | A clean-context reviewer you `@`-mention. |

Lessons are static HTML; open them in a browser:

```bash
xdg-open lessons/0001-make-it-two.html
# or serve the folder: python3 -m http.server 8000
```

## Quick start

Requirements: Omarchy (or any Linux/macOS box), `git`, [herdr](https://herdr.dev/),
opencode, and [hunk](https://hunk.dev/).

```bash
# the fleet toolkit
./sandbox/tools/repo-state.sh        # current branch + clean/dirty
./sandbox/tools/worktrees.sh         # every worktree: branch + path
./sandbox/tools/branches.sh          # local branches
./sandbox/tools/agents.sh            # installed coding-agent CLIs
./sandbox/tools/worktree-count.sh    # how many checkouts

# install the agent skills used by the course
mkdir -p ~/.agents/skills/herdr ~/.agents/skills/hunk-review
herdr --skill > ~/.agents/skills/herdr/SKILL.md
ln -sf "$(hunk skill path)" ~/.agents/skills/hunk-review/SKILL.md
```

## The doctrine

From `AGENTS.md` — the rules the agents in this repo work under:

- One task · one branch · one worktree · one agent. Writes stay single-threaded; merge deliberately.
- Every brief includes Goal, Deliverable, Constraints, Verification, Report. No verification command, no delegation.
- Commit = accept. Agent output is committed only after the human runs the verification.
- Parallelize only independent, precisely specified, machine-verifiable, low-stakes work. WIP limit: 3.
- Control room is herdr: `agent prompt` without `--wait`; `agent wait` with the default until; parse IDs from JSON responses.
- Rationale is a claim, not evidence. Agent notes and sidecars must be verified against the diff and the acceptance command.

## Sources

The course is grounded in primary sources, not vibes — see `RESOURCES.md`. A few anchors:

- Simon Willison — [*Agentic Engineering Patterns*](https://simonwillison.net/guides/agentic-engineering-patterns/) (living)
- Cognition — [*Multi-Agents: What’s Actually Working*](https://cognition.com/blog/multi-agents-working) (2026)
- JetBrains Research — [*Reviewing AI-Generated Code*](https://blog.jetbrains.com/research/2026/10/review-ai-generated/) (2026)
- Anthropic — [*Harness design for long-running applications*](https://www.anthropic.com/engineering/harness-design-long-running-apps) (2026)
- DORA — [*State of AI-assisted Software Development*](https://dora.dev/research/2025/dora-report/) (2025)

## License

No license has been declared. If you want to reuse this, add one (e.g. MIT).
