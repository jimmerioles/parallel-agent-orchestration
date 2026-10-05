# Mission: Parallel Agent Orchestration (SE 3.0, on Omarchy)

## Why
Become the orchestrator of a small fleet of coding agents instead of a single-agent
operator — so side projects ship faster, output on real work multiplies, and the SE 3.0
shift is something I lead with rather than follow. Practice ground: this repo
(`parallel-agent-orchestration`), which doubles as learning workspace and sandbox.

## Success looks like
- Runs two or more coding agents in parallel as a normal working habit, using herdr + the
  agent CLIs already installed on this machine.
- Isolates parallel work with git worktrees and merges results without collisions or chaos.
- Writes briefs with built-in verification, so “done” is provable rather than vibes.
- Treats review bandwidth as the consciously managed bottleneck, and knows when *not* to
  parallelize.
- Can explain the SE 3.0 shift (intent-centric work, AI teammates, Agent Command
  Environment) in my own words, grounded in primary sources.

## Constraints
- Simple & effective over maximal tooling; no orchestration frameworks to build.
- Omarchy defaults are the platform: herdr (prefix `ctrl+space`), opencode as daily driver,
  Claude Code / Codex / Gemini installed, tmux + Omarchy shell functions as fallback.
- Hands-on first: short lessons (~10–15 min) ending in one tangible terminal win; theory
  woven in, not lectured.
- Starting from zero on the physical primitives: never split panes, never made a git
  worktree, never ran two agents at once.
- Machine: 12 cores / 23 GiB — hardware is not the limit; attention and rate limits are.

## Out of scope
- Cloud agent fleets / fully autonomous “dark factory” setups (revisit much later).
- Building orchestration frameworks from scratch.
- GUI orchestrator apps.
- Model benchmarking; chasing “the best model” as an end in itself.
