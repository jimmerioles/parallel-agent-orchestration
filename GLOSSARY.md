# Parallel Agent Orchestration Glossary

Canonical vocabulary for this workspace. A term is added only once it has been taught in a
lesson. Definitions stay tight and reuse earlier terms.

## Terms

**SE 3.0 (Agentic Software Engineering)**:
The shift from AI-assisted coding to intent-centric engineering with autonomous AI teammates:
you specify intent, agents execute whole tasks, and you orchestrate and verify. The academic
frame names your workstation an *Agent Command Environment*.
_Avoid_: “AI coding”, “vibe coding”, “assisted development”
_Source_: [Hassan et al., 2024](https://arxiv.org/abs/2410.06107); [SASE framework, 2025](https://arxiv.org/abs/2509.06216)
_Taught_: [Lesson 0001](lessons/0001-make-it-two.html)

**Coding agent**:
A CLI program (opencode, Claude Code, Codex, …) that can read and write files, run commands,
and pursue a task goal with a model behind it. Herdr detects coding agents inside panes and
tracks their state.
_Avoid_: bot, assistant, copilot
_Source_: [herdr docs — agents](https://herdr.dev/docs/agents/)
_Taught_: [Lesson 0001](lessons/0001-make-it-two.html)

**Agent state**:
Herdr’s live classification of an agent in a pane: `working` (running), `blocked` (needs
human input), `idle` (turn finished), `done` (completed and unviewed), `unknown`. The sidebar
rolls states up, so it works as your review queue.
_Avoid_: status, mode
_Source_: [herdr docs — agents](https://herdr.dev/docs/agents/)
_Taught_: [Lesson 0001](lessons/0001-make-it-two.html)

**Review bandwidth**:
The human’s limited capacity to inspect, verify, and accept agent output. The binding
constraint on parallel throughput — agents scale almost free, review does not.
_Avoid_: attention span, “watching the agent”
_Source_: [Willison, Oct 2025](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/)
_Taught_: [Lesson 0001](lessons/0001-make-it-two.html)

**Orchestration loop**:
The atom of this practice: brief → delegate → agents run in parallel → review → accept/merge.
Every larger fleet repeats this loop with more workers.
_Avoid_: workflow, pipeline
_Source_: synthesis of Willison (2025) and Anthropic (2025)
_Taught_: [Lesson 0001](lessons/0001-make-it-two.html)

**The Rule**:
The gate for parallelizing a task: it must be independent, precisely specified,
machine-verifiable, and low-stakes. If any leg is missing, fix it before adding agents.
_Avoid_: “good candidate”, “parallel-safe”
_Source_: distilled from Willison (2025), Anthropic (2024/2025)
_Taught_: [Lesson 0001](lessons/0001-make-it-two.html)
