# DispatchBoard Project Documentation

## Overview
DispatchBoard is a touch-first order management and fulfillment system built around a single Kanban-style board. Orders can be manually entered or ingested from external channels (WhatsApp, email, marketplaces). The system supports payment gating, partial fulfillment, and sub-order spawning.

## Tech Stack
- Frontend: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, next-pwa
- Backend: Express (stub intake endpoints + parser integration)
- Database: Supabase Postgres + Realtime
- Parser: MCP-style parser server backed by OpenRouter
- Hosting: Vercel-ready (frontend)

## Repo Structure
- `frontend/` – Next.js UI
- `backend/` – Express backend + SQL schema
- `backend/sql/schema.sql` – schema, RLS, RPC
- `backend/mcp-server/` – MCP-style parser server
- `.env` – single source of environment variables

## Environment Configuration
All endpoints and secrets live in the root `.env`. Do **not** commit or share keys in chat.

Required keys:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)
- `OPENROUTER_API_KEY` (parser)
- `PARSER_MODEL` (e.g., `openrouter/anthropic/claude-3.5-sonnet`)
- `WATI_API_KEY`
- `WATI_WEBHOOK_SECRET`
- `IMAP_HOST`, `IMAP_USER`, `IMAP_PASS`
- `DATABASE_URL`
- `MCP_URL`, `MCP_PORT`

## Core Workflow
1. Order is created (manual or ingested).
2. Payment gate:
   - Regular customers skip payment.
   - Non-regular must be marked paid.
3. Fulfillment:
   - Partial fulfillment creates shipment and spawns sub-order (A/B/C).
4. Shipped and Done stages are tracked.

## Parser Pipeline (Current)
1. Backend receives webhook request.
2. Backend calls MCP parser at `MCP_URL`.
3. MCP server calls OpenRouter model to extract JSON.
4. Backend inserts order + items into Supabase.

Fallback: If MCP fails, backend uses direct OpenRouter or rule-based parser.

## Running the System
1) MCP Parser
```
cd backend/mcp-server
npm install
npm run dev
```

2) Backend API
```
cd backend
npm install
npm run dev
```

3) Frontend
```
cd frontend
npm install
npm run dev
```

## Testing (No Provider Setup Needed)
Use stub endpoints:

WhatsApp stub:
```
POST http://localhost:4000/api/wati-webhook
{ "text": "Arun: Product A x 2, Product B x 3" }
```

Email stub:
```
POST http://localhost:4000/api/email-poll
{ "text": "Customer: Arun. Product A x 2" }
```

Marketplace stub:
```
POST http://localhost:4000/api/marketplace/amazon
{ "items": [{ "product": "Product A", "qty": 2 }] }
```

## Wati Integration (When Ready)
1) Set `WATI_API_KEY` and `WATI_WEBHOOK_SECRET` in `.env`.
2) Configure Wati webhook to:
```
POST https://<your-domain>/api/wati-webhook
```
3) Validate signature using `WATI_WEBHOOK_SECRET` (to be implemented when moving live).

## Email / IMAP (When Ready)
1) Enable IMAP in mailbox.
2) Use app password if required.
3) Fill:
```
IMAP_HOST, IMAP_USER, IMAP_PASS
```
4) Add polling job (cron) to call `/api/email-poll`.

## Marketplace (When Ready)
1) Configure Amazon/Flipkart webhooks to:
```
/api/marketplace/amazon
/api/marketplace/flipkart
```
2) Map SKUs using SKU Mapping UI.

## Role-Based Access
`profiles` table exists, but RLS policies are permissive right now.
When enabling auth:
1) Restrict policies to authenticated users.
2) Add admin-only controls in UI.

## Deployment (Vercel)
1) Push repo.
2) Add `.env` keys in Vercel project settings.
3) Deploy.

## Current Completion Status
Core workflows done; provider integrations are stubbed and need credentials.
