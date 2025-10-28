#!/usr/bin/env bash
set -e
echo "Transform Army AI bootstrap"
echo "1) Copy ops/.env.example -> ops/.env and fill values."
echo "2) Start web: (cd apps/web && npm i && npm run dev)"
echo "3) Optional: (cd ops && docker compose -f docker-compose.local.yml up -d)"
