#!/bin/bash
# Decap CMS local setup for Astro (run from your project root)

set -e

echo "🚀 Starting Astro dev server..."
npm run dev &

ASTRO_PID=$!

sleep 5

echo "🔌 Starting Decap proxy on http://localhost:8081"
npx decap-server &

echo "➡️  Open http://localhost:4321/admin/"
echo "✅ Local CMS ready!"

wait $ASTRO_PID