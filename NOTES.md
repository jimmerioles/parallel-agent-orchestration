# Notes

Working notes for this teaching workspace. Preferences and verified machine facts only —
learning evidence lives in `learning-records/`.

## User preferences
- **Simple & effective** beats feature-maximalism. The smallest thing that works, taught well.
- Lessons: short (~10–15 min), one tangible terminal win each; **hands-on first, theory woven in**
  (chosen in intake, 2026-10-05).
- Wants the SE 3.0 paradigm understood, not just mechanics.
- Practice target: **this repo as sandbox** (learning workspace = practice ground).
- Prior teaching material from Oct 2026 exists elsewhere on disk. User chose **ignore it
  completely** — do not import from it, do not assume knowledge from it.
- Self-reported hands-on baseline (2026-10-05): has never split a pane, made a git worktree,
  run two agents at once, or merged an agent's branch. Teach primitives from zero.

## Machine facts (verified 2026-10-05)
- `herdr 0.8.2` server+client running; `HERDR_ENV=1` inside panes. Docs are at 0.9.3 — verify
  version-sensitive claims locally.
- This session: workspace `w1Y`, pane `w1Y:p1`, opencode 1.18.34, cwd = this worktree.
- opencode herdr integration **installed and current (v10)** → native state reporting.
  claude/codex/gemini integrations are *not* installed (screen detection only).
- herdr prefix = `ctrl+space`. Splits: `prefix v` / `alt+shift+enter` = right;
  `prefix h` / `alt+enter` = down. Mouse: right-click → split. Sidebar: `prefix b`.
  Detach: `prefix d`. Help: `prefix ?`. Config mirrors Omarchy tmux bindings.
- Agent CLIs installed: opencode, claude, codex, gemini, crush, copilot, cursor-agent, grok,
  hermes, muse, omp, pi. Omarchy aliases: `c` = `opencode --auto`; `cx` = claude auto.
- **hunk 0.23.0** — Omarchy 4 default terminal diff viewer, explicitly built for agent-authored
  changesets (`--agent-context` JSON rationale sidecar). Aliases: `hdw` = `hunk diff --watch`,
  `hsa` = diff vs empty tree. Integrated into Lesson 0003 review step + control-room card
  (2026-10-05, prompted by the user — a review-tool lesson of its own may be warranted later).
- Omarchy 4.0.0.alpha (quattro) with tmux 3.7c + shell functions (`tdl`, `tds`, `tslm`, `tsl`,
  `ga`, `gd`) — fallback control room if herdr is unavailable.
- Repo: this worktree is branch `dsv41fmax`; main checkout at `~/Work/parallel-agent-orchestration`
  (branch `master`). No git remote configured. Workspace files stay on this branch until merged.
- **Worktree quirk (verified 2026-10-05):** `herdr worktree create` refuses to run from a linked
  worktree — error `linked_worktree_source`, “start from the repo parent workspace.” Verified
  workaround from inside this worktree: `--cwd /home/jimmerioles/Work/parallel-agent-orchestration`
  plus explicit `--base` (otherwise the base is the parent checkout’s HEAD, i.e. `master`).
  Lesson 0002 uses the workaround.
- Openers available: `xdg-open`, `omarchy-launch-browser`. Screenshot QA: `chromium --headless`.

## Course roadmap (working — revise as learning records accumulate)
1. ✅ completed — *Make It Two*: two opencode workers, independent files, sidebar states, review.
2. ✅ completed — *Two Agents, One File*: deliberate lost update, then worktree isolation.
3. ✅ completed — *Merge Day*: accept each branch, conflict resolved by hand, worktrees retired; hunk used for both reviews.
4. ✅ completed — *The Brief*: Goal/Deliverable/Constraints/Verification/Report; user authored, teacher critiqued, worker executed, runbook verified. Sandbox now has `sandbox/tools/repo-state.sh` (reuse in #5).
5. *The Fleet*: 3–5 agents, WIP limits, blocked-state triage, shared task state.
6. *Review craft*: hunk deep dive, `--agent-context` rationale sidecars, review technique.
7. *Agent-driven orchestration*: an orchestrator agent driving workers via herdr CLI/socket; opencode subagents.
8. *SE 3.0 in practice*: ACE/AEE framing, harness engineering (AGENTS.md), what stays human.

## Teaching conventions
- Quiz options matched in word count; immediate feedback; retrieval from memory.
- Every lesson: one primary source, one review step, reminder to ask follow-ups.
- Keep the vocabulary: GLOSSARY.md terms only, once taught.
- **Git convention:** committing agent output IS the “accept” step of the orchestration loop
  (lesson 0001: `7a442cf`). Course material is committed as separate milestones.
- **Freeze the course branch during exercises:** do NOT commit to `dsv41fmax` while a lesson is
  in flight — lesson 0003’s predicted fast-forward became a merge commit because of a mid-lesson
  course commit. If a fix is needed mid-lesson, warn the learner first.
- The teacher-as-critic loop (learner drafts, teacher critiques before the worker sees it) is a
  strong tight feedback loop — used in *The Brief*, worth reusing.
