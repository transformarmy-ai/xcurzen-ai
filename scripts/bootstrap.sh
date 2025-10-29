#!/usr/bin/env bash
set -euo pipefail
echo "Transform Army AI — bootstrap (v1.1.1)"
echo "1) cp ops/.env.example ops/.env && edit values"
echo "2) cd apps/web && npm i && npm run dev"
echo "3) Optional: docker compose -f ops/docker-compose.local.yml up -d"
echo "4) Optional: docker compose -f ops/docker-compose.hub.yml up -d"
