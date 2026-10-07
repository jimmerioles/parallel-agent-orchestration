#!/usr/bin/env bash
set -euo pipefail

path=""
branch=""

while IFS= read -r line || [[ -n "$line" ]]; do
  case "$line" in
    worktree\ *)
      path="${line#worktree }"
      branch=""
      ;;
    branch\ *)
      branch="${line#branch refs/heads/}"
      ;;
    "")
      if [[ -n "$path" ]]; then
        printf '%s %s\n' "$branch" "$path"
      fi
      path=""
      branch=""
      ;;
  esac
done < <(git worktree list --porcelain)

if [[ -n "$path" ]]; then
  printf '%s %s\n' "$branch" "$path"
fi
