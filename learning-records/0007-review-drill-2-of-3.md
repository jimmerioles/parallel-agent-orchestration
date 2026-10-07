# Review drill completed: 2/3, semantic-gap blind spot identified

2026-10-07 (session 7).

The user completed Lesson 0006 and the planted-defect drill: caught the scope creep (#1) and the
`refs/heads/` porcelain prefix bug (#2), and missed the `git diff --quiet` semantic gap (#3) —
untracked and staged changes read as `clean`. Their own explanation: not yet expert with bash/git
commands. Drill branch deleted; repo clean. They also observed that hunk’s differentiated features
(review skill, agent comments, human notes) are the reason to use it, and want them used.

Implications for future sessions:
- The miss is the most valuable kind: a silent semantic gap that the stated verification cannot
  catch — exactly the “plausible-but-wrong” class the lesson exists to teach. Address it with a
  dedicated reference (built: `reference/shell-review-primer.html`) and include at least one
  shell-semantics defect in future review drills until the gap closes.
- Fold hunk’s live-session workflow (skill-driven navigation + inline agent comments, human notes)
  into Lesson 0007 (agent-driven orchestration): the teacher agent can drive a live hunk window.
- Resource audit (2026-10-07) applied in the same pass: Cognition 2026 follow-up, Anthropic 2026
  harness series + C-compiler capstone, Willison’s living guide, Osmani harness engineering, MAST
  counter-evidence. Tool drift noted: herdr 0.9.3 available (machine 0.8.2); opencode v2 exists
  alongside the current v1 line — verify before the subagents lesson.
- Evidence: user’s self-reported score and reasoning; branch/worktree state; repo clean.
