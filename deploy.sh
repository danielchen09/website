#!/usr/bin/env bash
# Build the resume, build the site, deploy to Cloudflare, and push to GitHub.
# Usage: ./deploy.sh ["commit message"]
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"

echo "==> Compiling resume..."
if command -v pdflatex >/dev/null 2>&1; then
  (cd resume && pdflatex -interaction=nonstopmode resume.tex >/dev/null)
  cp resume/resume.pdf public/resume.pdf
  echo "    resume.pdf compiled and copied to public/"
else
  echo "    pdflatex not found, skipping resume compile (using existing public/resume.pdf)"
fi

echo "==> Building site..."
npm run build

echo "==> Deploying to Cloudflare..."
npx wrangler deploy

echo "==> Committing and pushing..."
git add -A
if git diff --cached --quiet; then
  echo "    no changes to commit"
else
  msg="${1:-Update site $(date '+%Y-%m-%d %H:%M')}"
  git commit -m "$msg"
  git push origin master
  echo "    committed and pushed: $msg"
fi

echo "Deployed: https://weihanchen.com"
