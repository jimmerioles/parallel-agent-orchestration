# Baseline: zero hands-on primitives, fresh start

Established 2026-10-05 (intake session).

The user asked to learn “simple & effective” parallel agent orchestration on their Omarchy
machine and explicitly reported having **never** split a pane, created a git worktree, run two
agents at once, or merged an agent’s branch. They also chose to **ignore prior teaching
material** (two Oct 2026 workspaces elsewhere on disk) and to use **this repo as the practice
sandbox**, with lessons that are mostly hands-on and ~10–15 minutes. The environment is
tool-rich: herdr 0.8.2 with the opencode integration installed, opencode daily driver, plus
claude/codex/gemini, and Omarchy tmux fallbacks.

Implications for future sessions:
- Teach every primitive physically, one action at a time; mouse/keyboard alternatives both
  given, but assume no muscle memory. Never say “just split a pane.”
- The machine is not the constraint — frame all limits as attention, review bandwidth, and
  rate limits from day one.
- The sandbox is this repo itself, so exercises may leave artifacts here; keep them
  intentional (e.g. `sandbox/`) and use them as the raw material for worktree/merge lessons.
- Evidence: direct answers in the 2026-10-05 intake (4 questions); local verification of
  herdr/opencode versions, integrations, keybindings, and installed CLIs — see [[NOTES.md]].
