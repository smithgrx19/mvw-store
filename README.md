
# MVW Store — Monorepo (Frontend + Backend + Prisma)

This repository contains:
- `frontend/` — Next.js 14 + Tailwind + Framer Motion
- `backend/` — NestJS API + Prisma
- `prisma/`   — Prisma schema and migrations
- `.github/`  — GitHub Actions (CI)

---

## 0) One-time: Create the GitHub repo (browser only)

1. Go to GitHub ➜ **New repository** ➜ Name: **mvw-store** (Private).
2. Add description: `MVW Store — bespoke ecommerce (Next.js + NestJS + Prisma + Axxess DB)`.
3. Choose **MIT License** and add a Node `.gitignore` (optional; this zip includes .gitignore).
4. Click **Create repository**.

## 1) Upload this starter

- On your Mac (browser): Download the ZIP, unpack, then click **"Add file" → "Upload files"** in GitHub and drag the **folder contents** in.  
  (Or, upload the ZIP and use GitHub's UI to commit after extraction locally.)

> **Alternative (Terminal):**
> ```bash
> cd ~/Downloads/mvw-store
> git init
> git remote add origin git@github.com:YOUR_USERNAME/mvw-store.git
> git add .
> git commit -m "chore: bootstrap mvw-store scaffolds"
> git branch -M main
> git push -u origin main
> ```

## 2) Branch hygiene

- Create a protected **main** branch.
- Create a **dev** branch for integration:
  - In GitHub: Branch dropdown → create `dev`.
- Work on short-lived feature branches (e.g., `feature/auth`, `feat/products`), raise PRs into `dev`, then PR `dev` → `main` for releases.

## 3) Frontend setup (Next.js)

**Local (when you’re on the PC later):**
```bash
cd frontend
npm i
npm run dev
# http://localhost:3000
```

**Environment variables:** create `frontend/.env.local` if needed (not required for local dev yet).

## 4) Backend setup (NestJS + Prisma)

**Install deps & generate Prisma Client:**
```bash
cd backend
npm i
npm run prisma:generate
```

**Create `.env` in /backend** (copy `.env.example`):
```
DATABASE_URL="mysql://USER:PASS@HOST:PORT/DBNAME?sslmode=require"
JWT_SECRET="change_me"
```

**Run dev:**
```bash
npm run start:dev
```

## 5) Prisma schema & migration (Axxess)

**Edit DB creds in `/backend/.env`** then:
```bash
# from repo root
npm run prisma:push --workspace=backend
# or
cd prisma && npx prisma migrate dev --name init
```

> We keep schema in `/prisma/schema.prisma` and reference it from backend via Prisma Client.

## 6) CI/CD

- **Frontend:** Vercel (connect repo → select `frontend/` folder).
- **Backend:** Railway/Render (root dir `backend/`, set `DATABASE_URL`, `JWT_SECRET`).

**GitHub Secrets to add (`Settings → Secrets`):**
- `VERCEL_TOKEN` (if using GitHub Action deploy)
- `RAILWAY_TOKEN` or service-specific deployment secrets
- (Optional) `SENTRY_AUTH_TOKEN` if you wire up Sentry later

## 7) Yoco (Sandbox)

Add Yoco test keys to **backend** env later for checkout integration. For MVP you can stub the payment call and log payloads.

## 8) Conventions

- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`)
- Code style: Prettier + ESLint (preconfigured)
- Pull Requests: short description + “Screenshots/Notes” section
- Issues: use labels `bug`, `feature`, `tech-debt`, `design`

---

Happy building! 🚀
