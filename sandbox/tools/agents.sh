#!/usr/bin/env bash
set -euo pipefail

for name in opencode claude codex gemini crush copilot cursor-agent; do
  if command -v "$name" >/dev/null 2>&1; then
    printf '%s\n' "$name"
  fi
done | sort
