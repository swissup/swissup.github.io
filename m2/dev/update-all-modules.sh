#!/usr/bin/env bash
# Run inside the folder that contains your swissup module repos
# (e.g. vendor/swissup), or pass it as $1.
set -o pipefail
cd "${1:-.}" || exit 1

for module in */; do
    cd "$module" 2>/dev/null || continue
    if [ -d ".git" ]; then
        if [ -n "$(git status --porcelain)" ]; then
            echo "SKIP (dirty): $module"
        else
            git checkout master -q 2>/dev/null && git pull -q && echo "OK: $module"
        fi
    fi
    cd ..
done
