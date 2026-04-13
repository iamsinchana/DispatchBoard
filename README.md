# Dispatch Board

A dispatcher for handling incoming customer orders via email/WhatsApp, parsing them with Gemini + fallbacks, and tracking fulfillment state through Express + Postgres on the backend while surfacing a Supabase-backed Next.js dashboard on the frontend.

## Architecture

- **Backend (`backend/`)**: TypeScript + Express server that polls an IMAP inbox, accepts Twilio webhooks, normalizes orders via Gemini (with a heuristic fallback), and persists data to Postgres (`customers`, `orders`, `order_items`).  
- **Frontend (`frontend/`)**: Next.js + Tailwind UI that reads from Supabase to show order and fulfillment status; it relies on `NEXT_PUBLIC_*` env vars for the Supabase client.

## Setup

### Prerequisites

- Node.js (v18+ recommended)
- Access to a PostgreSQL instance
- Gemini API key (Gemini ’generateContent’ endpoint)
- IMAP inbox credentials for parsing incoming emails
- Supabase project for the frontend dashboard

### Install

```bash
# install root helpers (amazon SP API client)
npm install

# install dependencies in each package
cd backend && npm install
cd ../frontend && npm install
```

Leave the terminal in each directory while working on that service (or run each command in a separate shell/tab).

## Environment variables

### Backend (`backend/.env`)

- `DATABASE_URL` – Postgres connection string
- `IMAP_HOST`, `IMAP_PORT`, `IMAP_SECURE`, `IMAP_USER`, `IMAP_PASS` – credentials for polling your inbox
- `GEMINI_API_KEY` – required to call Gemini. `GEMINI_MODEL` may be set (defaults to `gemini-2.5-flash`)
- `PORT` – optional HTTP port (defaults to `4000`)

### Frontend (`frontend/.env`)

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Supabase is only used for the UI; ensure you also grant read access to whatever tables/roles the dashboard needs.

## Running

### Backend

```bash
cd backend
npm run dev      # tsx watcher for development
npm run build    # compile to dist/
npm start        # run the compiled server
```

- Polling runs every 2 minutes and logs progress to the console.
- Twilio webhooks are available at `POST /api/twilio-webhook`.

### Frontend

```bash
cd frontend
npm run dev      # Next.js dev server (default: http://localhost:3000)
npm run build
npm run start    # run the production build
```

