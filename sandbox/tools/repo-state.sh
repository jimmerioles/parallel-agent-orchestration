#!/usr/bin/env bash
set -euo pipefail

printf '%s\n' "$(git branch --show-current)"

if [ -n "$(git status --porcelain)" ]; then
  echo dirty
else
  echo clean
fi
