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
- Omarchy 4.0.0.alpha (quattro) with tmux 3.7c + shell functions (`tdl`, `tds`, `tslm`, `tsl`,
  `ga`, `gd`) — fallback control room if herdr is unavailable.
- Repo: this worktree is branch `dsv41fmax`; main checkout at `~/Work/parallel-agent-orchestration`
  (branch `master`). No git remote configured. Workspace files stay on this branch until merged.
- Openers available: `xdg-open`, `omarchy-launch-browser`. Screenshot QA: `chromium --headless`.

## Course sketch (working — revise as learning records accumulate)
1. ✅ built — *Make It Two*: two opencode workers, independent files, sidebar states, review.
2. *Two Agents, One File*: the collision problem → git worktrees (`herdr worktree create`).
3. *The Brief*: specification + verification so done is provable.
4. *Merge & Review*: integrating parallel work; review technique.
5. *The Fleet*: 3–5 agents, WIP limits, blocked-state triage.
6. *Agent-Driven Orchestration*: `herdr` CLI/socket from an orchestrator agent; opencode subagents.
7. *SE 3.0 in Practice*: ACE/AEE framing, harness engineering, what stays human.

## Teaching conventions
- Quiz options matched in word count; immediate feedback; retrieval from memory.
- Every lesson: one primary source, one review step, reminder to ask follow-ups.
- Keep the vocabulary: GLOSSARY.md terms only, once taught.
