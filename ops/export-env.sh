#!/usr/bin/env bash
# Helper: source this to export env vars from ./ops/.env into current shell
set -euo pipefail
ENV_FILE="${1:-./.env}"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE"
  exit 1
fi
# shellcheck disable=SC2046
export $(grep -v '^#' "$ENV_FILE" | xargs -d '\n' -I{} bash -lc 'if [[ "$0" == *"="* ]]; then echo "$0"; fi' {})
echo "Environment loaded from $ENV_FILE"
