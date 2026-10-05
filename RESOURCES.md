# Parallel Agent Orchestration Resources

Curated 2026-10-05. The patterns here outlive the tools; re-verify tool claims against the
installed versions before teaching them.

## Knowledge

### The frame: what SE 3.0 means
- [Paper: Hassan et al. — “Towards AI-Native Software Engineering (SE 3.0)” (arXiv 2410.06107, 2024)](https://arxiv.org/abs/2410.06107)
  The academic origin of “SE 3.0”: intent-centric, conversation-oriented development with AI
  teammates instead of task-driven copilots. Use for: vocabulary, the long view. Skim §§2–3.
- [Paper: Hassan et al. — “Agentic Software Engineering: Foundational Pillars and a Research Roadmap” (arXiv 2509.06216, 2025)](https://arxiv.org/abs/2509.06216)
  The SASE framework: SE for Humans vs SE for Agents; Agent Command Environment (where you
  orchestrate) vs Agent Execution Environment (where agents act). Use for: naming what herdr is.
- [Paper: Li, Zhang, Hassan — “The Rise of AI Teammates in SE 3.0” (arXiv 2507.15003, 2025)](https://arxiv.org/abs/2507.15003)
  Empirical grounding: 456k+ agent-authored PRs (AIDev dataset) — where agents work, where
  human review is still the gate. Use for: evidence that this is already the norm.
- [Post: Addy Osmani — “Agentic Engineering” (2026)](https://addyosmani.com/blog/agentic-engineering/)
  Practitioner definition of the discipline: agents implement; the human owns architecture,
  quality, correctness. Use for: the working definition of your new role.

### The craft: how to orchestrate well
- [Post: Simon Willison — “Embracing the parallel coding agent lifestyle” (Oct 2025)](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/)
  ★ The judgment layer: review bandwidth is the bottleneck; what actually parallelizes
  (research, small maintenance, carefully specified work); what doesn’t. Use for: every
  “should this be parallel?” decision. Lesson 0001’s primary source.
- [Article: Anthropic — “Building effective agents” (2024)](https://www.anthropic.com/engineering/building-effective-agents)
  The canonical workflow/agent taxonomy, incl. orchestrator–workers. Use for: deciding
  *whether* a task needs agents and naming the pattern you’re using.
- [Article: Anthropic — “How we built our multi-agent research system” (2025)](https://www.anthropic.com/engineering/multi-agent-research-system)
  Production orchestrator–worker case study: decomposition, parallel subagents, and the real
  token economics (multi-agent ≈ 15× chat tokens). Use for: delegation design and cost intuition.
- [Article: Anthropic — “Claude Code: Best practices for agentic coding” (living doc)](https://www.anthropic.com/engineering/claude-code-best-practices)
  Verification loops, task scoping, context discipline, parallel sessions. Use for: almost any
  concrete “how do I brief/verify this” lesson; concepts transfer to opencode.
- [Post: Cognition — “Don’t Build Multi-Agents” (2025)](https://cognition.com/blog/dont-build-multi-agents)
  The essential counterpoint: naive parallel writer swarms fail because actions carry implicit
  decisions and context isn’t shared. Use for: why writes stay isolated and verification gates exist.
- [Post: Gergely Orosz — “New trend: programming by kicking off parallel AI agents” (Oct 2025)](https://blog.pragmaticengineer.com/new-trend-programming-by-kicking-off-parallel-ai-agents/)
  Counterpoint data: senior+ engineers benefit most (delegation/review skills transfer);
  review fatigue is real. Use for: keeping the course honest about downsides.
- [Post: Mitchell Hashimoto — “My AI Adoption Journey” (2026)](https://mitchellh.com/writing/my-ai-adoption-journey)
  Origin of “harness engineering”: when an agent errs, fix its environment so the error can’t
  recur. Use for: the improvement-loop lesson.
- [Talk: Karpathy — “Software Is Changing (Again)” (YC AI Startup School, 2025)](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
  Software 3.0 framing: prompts as programs, LLMs as a new kind of computer, generation →
  verification loops. Use for: the big-picture why, in plain language.

### The tools on this machine
- [Docs: herdr — concepts](https://herdr.dev/docs/concepts/) · [agents](https://herdr.dev/docs/agents/) · [agent automation](https://herdr.dev/docs/agent-automation/)
  Primary source for the control room: session → workspace → tab → pane → agent; states
  working/blocked/done/idle; sidebar rollups; CLI/socket for scripted orchestration.
  Local: `herdr --version` (0.8.2) — verify before teaching version-sensitive details.
- [Docs: opencode — agents](https://opencode.ai/docs/agents/)
  Primary + subagent config, per-agent models and permissions; the in-harness path to
  parallelism. Use for: subagent lessons (none configured on this machine yet).
- [Manual: Omarchy — shell functions](https://omarchy.org/manual/shell-functions/) · [terminal chapter](https://learn.omacom.io/2/the-omarchy-manual/106/terminal)
  `tdl` / `tds` / `tsl` tmux layouts and `ga` / `gd` worktree helpers — the fallback control
  room and a source of useful one-liners. Use for: Omarchy-native workflows alongside herdr.
- [Manual: git worktree](https://git-scm.com/docs/git-worktree)
  The isolation primitive for parallel agents. Use for: lesson 2 onward.
- [Tool: hunk — terminal diff viewer for agent-authored changesets (Omarchy 4 default)](https://github.com/modem-dev/hunk) · [hunk.dev](https://hunk.dev)
  Local: `hunk 0.23.0`. Reviews working tree, staged changes, branch-vs-base, history; accepts
  an `--agent-context` JSON rationale sidecar; aliases `hdw` (watch) and `hsa` (all changes).
  Use for: the review step of every loop — the leverage against review bandwidth.

## Wisdom (Communities)
- [opencode Discord](https://opencode.ai/discord)
  Builder-dense; best for subagent configs, TUI workflow, plugin questions.
- [Hacker News](https://news.ycombinator.com/)
  Comment sections stress-test orchestration claims; search “multi-agent orchestration.”
- [Latent.Space](https://www.latent.space/)
  Early, primary-source-driven coverage of agent tooling and practice.
- Omarchy Discord (invite via [omarchy.org](https://omarchy.org/))
  Omarchy/Hyprland-specific setup and agent-workflow threads.

## Gaps
- No high-quality primary source yet on **herdr-specific orchestration patterns** — it is
  young. Derive from its docs + local experimentation and record what works in learning records.
- No trusted source on **review technique itself** (reading agent diffs fast without
  rubber-stamping). Partially addressed: `hunk --agent-context` (agent rationale sidecars) is a
  technique lead; research properly when a lesson needs review craft.
