# RHUL Engineering Society Website

Next.js site for the Royal Holloway Engineering Society: a landing page, a
linktree-style links page, and a password-protected admin panel for editing
all site content.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `ADMIN_PASSWORD` | Password required to log in at `/admin` |
| `SESSION_SECRET` | Random secret used to sign admin session cookies |
| `GITHUB_TOKEN` | Personal access token with contents read/write on this repo, used by the admin panel to commit content changes |
| `GITHUB_REPO` | `owner/repo` of this repository, e.g. `rhulengsoc/website` |
| `GITHUB_BRANCH` | Branch to commit content changes to (defaults to `main`) |

Copy these into a `.env.local` file for local development (never commit it).

## How content editing works

All site copy and links live in [`data/content.json`](data/content.json).
The `/admin` panel lets an editor change this data through a form; saving
posts the new JSON to the GitHub Contents API, which commits it straight to
this repo. Vercel is connected to auto-deploy on every push, so a save is
live within about a minute.

## Deployment

Deployed on Vercel's free tier, connected to auto-deploy from `main`.
