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
# ptn