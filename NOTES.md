# Notes

Working notes for this teaching workspace. Preferences and verified machine facts only —
learning evidence lives in `learning-records/`.

## User preferences
- **Simple & effective** beats feature-maximalism. The smallest thing that works, taught well.
- Lessons: short (~10–15 min), one tangible terminal win each; **hands-on first, theory woven in**
  (chosen in intake, 2026-10-05).
- Wants the SE 3.0 paradigm understood, not just mechanics.
- Practice target: **this repo as sandbox** (learning workspace = practice ground).
- **WIP limit = 3** (user-calibrated 2026-10-07): three parallel agents feels right; keep fleet
  scenarios at ≤3 unless the user says otherwise.
- Prior teaching material from Oct 2026 exists elsewhere on disk. User chose **ignore it
  completely** — do not import from it, do not assume knowledge from it.
- Self-reported hands-on baseline (2026-10-05): has never split a pane, made a git worktree,
  run two agents at once, or merged an agent's branch. Teach primitives from zero.

## Machine facts (verified 2026-10-05)
- `herdr 0.8.2` server+client running; `HERDR_ENV=1` inside panes. Docs are at 0.9.3 — verify
  version-sensitive claims locally.
- This session: workspace `w1Y`, pane `w1Y:p1`, opencode 1.19.0, cwd = this worktree.
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
- **Blocked drill (verified 2026-10-05):** opencode's herdr integration maps
  `permission.asked` and `question.asked` → `blocked` (read the installed plugin at
  `~/.config/opencode/plugins/herdr-agent-state.js`). opencode defaults are permissive, so plain
  `opencode` only asks at guardrails — notably `external_directory` (paths outside cwd), which
  defaults to `ask`. `--auto` (Omarchy alias `c`) suppresses those asks. Lesson 0005 engineers a
  blocked agent by having a non-auto worker write outside its worktree.
- **Review drill branch (lesson 0006):** local branch `review-drill` held three planted defects —
  scope creep (`branches.sh` loses `| sort`), `refs/heads/` prefix bug, and `git diff --quiet`
  missing untracked/staged. **Deleted by the learner 2026-10-07 after the drill.** The rationale
  sidecar remains as a reference artifact at `reference/review-drill-rationale.json`. Design rule
  still holds: **do not commit to `dsv41fmax` while a branch-diff drill is in flight** (it
  pollutes the diff).
- **Resource recency audit (2026-10-07):** DORA 2025 still latest (no 2026 edition); hunk 0.23.0
  current; herdr 0.9.3 latest (machine 0.8.2 — update between lessons, re-verify card); opencode
  now **1.19.0** on the still-current v1 line (**v2 exists**) — verify config/agents before the
  subagents work. RESOURCES updated: Cognition 2026 sequel, Anthropic harness series +
  C-compiler capstone, Willison living guide, Osmani harness engineering, MAST counter-evidence.
- **`opencode agent create` broken (2026-10-07):** fails with `Request is missing
  x-opencode-session` (opencode-go routing) when it generates the agent prompt outside a session.
  Write agent markdown directly. Project agents: `.opencode/agents/<name>.md` (filename = agent
  name). Candidate upstream bug to report in the community step.
- **User preference (2026-10-07):** wants hunk’s differentiated features used — bundled review
  skill (`hunk skill path`), live agent comments (`hunk session ...`), human notes. Fold into
  Lesson 0007 as the reviewer-agent workflow. **Done: built into Lesson 0007.**
- **Orchestrator probe (verified 2026-10-07):** end-to-end flow works —
  `herdr worktree create --cwd <parent>` → parse `.result.root_pane.pane_id` →
  `herdr agent start NAME --kind opencode --pane ID --timeout 60000` →
  `herdr agent prompt NAME "…"` (**no `--wait`**: it errors `agent_prompt_stalled` on the fixed
  5s observation window) → `herdr agent wait NAME` (**default `until`**; `--until idle` misses
  opencode’s `done` and times out) → `herdr agent read NAME --lines N`. Worker settles as
  `done`; `agent focus` marks it seen.
- **Skill install (documented in Lesson 0007):** `herdr --skill > ~/.agents/skills/herdr/SKILL.md`
  and `ln -sf "$(hunk skill path)" ~/.agents/skills/hunk-review/SKILL.md`. Skills load at
  session start — new sessions only. Not yet installed on the machine as of this note.
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
5. ✅ completed — *The Fleet*: 3 agents under a WIP limit, one engineered `blocked` rescue (worked), sequential merge, retire. WIP=3 confirmed.
6. ✅ completed — *Review Craft*: trust calibration + five moves; drill scored **2/3** (missed the `git diff --quiet` silent semantic gap). `reference/shell-review-primer.html` added; live hunk features (skill, inline comments, human notes) deferred to #7.
7. ✅ completed — *The Orchestrator*: skills installed, orchestrator drove worktree→start→prompt→wait→read, worker committed (`c05459a`, FF-merged), live hunk review driven by an agent. User named the recursion: “the orchestrator behaves like me.” opencode-native subagents still uncovered.
8. ✅ completed — *SE 3.0 in Practice*: harness engineering, capstone committed (`f5c2792`, all six conventions in `AGENTS.md`), what stays human, subagents comparison, community step.

**Course complete (2026-10-07):** all eight lessons delivered and completed. Mission success
criteria met (see [[learning-records/0009-course-complete.md]]). Next options: bonus subagents
session · apply to a real project (revisit the sandbox constraint) · graduate `dsv41fmax` →
`master`.

**Bonus 9 ✅ completed — Subagents:** project-scoped read-only reviewer at `.opencode/agents/reviewer.md`
(`8751c42`), `@reviewer` invocation, child sessions, subagent-vs-worker comparison. The
clean-context reviewer **caught something the user missed** (finding TBD — see LR 0010).
`opencode agent create` is broken on this machine; the lesson writes the markdown directly.

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
