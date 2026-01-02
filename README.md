# PTN - MERN Replica

This workspace contains a minimal MERN scaffold to replicate the supplied website layout.

Structure:

- `backend/` - Express + optional MongoDB (Mongoose). Exposes `/api/tours` and `/api/contact`.
- `frontend/` - Vite + React app that fetches tours and shows a simple UI.

Quick start (in two terminals):

1. Backend

```bash
cd backend
npm install
# create .env or copy .env.example and set MONGO_URI if you want a DB
npm start
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the backend to be reachable at the same host (when running locally with both on default ports you may need a proxy or run frontend with `vite` and the backend on port 5000; calls are made to `/api/*` which works when using a dev proxy or launching both and setting `VITE_BASE`).

This is a minimal scaffold — tell me if you want full DB seeding, auth, or production build steps.
# Deployment: Render (API) + Vercel (Web)

Backend (Render):
- Root: `backend/`
- Build: `npm install`
- Start: `npm start`
- Environment: set `PORT` (Render provides), optional `MONGO_URI` if you wire up Mongo; otherwise JSON fallback works.

Frontend (Vercel):
- Root: `frontend/`
- Build command: `npm install && npm run build`
- Output: `dist`
- Environment variables: set `VITE_API_BASE` to your Render backend URL (e.g. `https://your-api.onrender.com`).

Domain (GoDaddy):
- Point your domain/subdomain to the Vercel project (apex via A/ANAME to Vercel’s IPs or use CNAME for subdomains). If you need `api.yourdomain.com` to hit Render, add a CNAME to the Render service URL or proxy through Vercel/NGINX.

Notes:
- Frontend calls now use `VITE_API_BASE` at build/runtime; without it they fall back to relative `/api/*` for local dev with the Vite proxy.
- Keep `node_modules/` and `frontend/dist/` out of git (see `.gitignore`).
# ptn# Build cache buster - Fri Jan  2 05:47:21 UTC 2026
