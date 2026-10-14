## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues, driven by the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles map 1:1 to the default label strings. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: a root `GLOSSARY.md` plus `docs/adr/`. See `docs/agents/domain.md`.

## Orchestration conventions (this repo)

- One task · one branch · one worktree · one agent. Writes stay single-threaded; merge deliberately.
- Every brief includes Goal, Deliverable, Constraints, Verification, Report. No verification command, no delegation.
- Commit = accept. Agent output is committed only after the human runs the verification.
- Parallelize only independent, precisely specified, machine-verifiable, low-stakes work. WIP limit: 3.
- Control room is herdr: agent prompt without --wait; agent wait with the default until; parse IDs from JSON responses.
- Rationale is a claim, not evidence. Agent notes and sidecars must be verified against the diff and the acceptance command.
