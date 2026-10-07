#!/usr/bin/env bash
set -euo pipefail

git worktree list --porcelain | grep -c '^worktree '
