# DispatchBoard (Free Stack)

## Structure
- `frontend` Next.js App Router + Tailwind UI (Supabase client)
- `backend` Express API for WhatsApp Cloud webhook + Gmail IMAP polling + Gemini parsing

## Backend setup
1) Create `backend/.env` from `backend/.env.example` and set:
   - `DATABASE_URL` (Supabase Postgres connection string)
   - `GEMINI_API_KEY`
   - `WHATSAPP_VERIFY_TOKEN`
   - `IMAP_*` (Gmail app password + host)
2) Apply schema in Supabase SQL editor:

```sql
\i backend/sql/schema.sql
```

3) Install deps and run:

```bash
cd backend
npm install
npm run dev
```

API runs on `http://localhost:4000`.

## Frontend setup
1) Create `frontend/.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_INTAKE_API_URL=http://localhost:4000
```

2) Install deps and run:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## PWA
- Service worker auto-registers `/sw.js` for install/offline behavior.

## WhatsApp Cloud API (free test number)
- Webhook URL: `http://<your-public-url>/api/whatsapp-webhook`
- Verify token: must match `WHATSAPP_VERIFY_TOKEN`

## Email (Gmail IMAP)
- Enable IMAP + create Gmail App Password.
- Trigger polling: `POST /api/email-poll`

## Marketplace webhooks (free stub)
- Amazon: `POST /api/marketplace/amazon`
- Flipkart: `POST /api/marketplace/flipkart`
- Set `SKU_MAPPING_MODE=manual|auto` in `backend/.env`
  - `manual`: uses external SKU as product name and marks needs_review
  - `auto`: auto-creates mappings using provided product_name or SKU fallback

## Supabase Edge Function (free)
- Function path: `supabase/functions/parse-order`
- Env vars: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `GEMINI_API_KEY`, `GEMINI_MODEL`
- Payload: `{ text, customer_name, channel, notes }`

## Supabase setup
- Run `backend/sql/schema.sql` in Supabase SQL editor.
- Enable Realtime for `orders` and `order_items`.
- RLS policies are permissive for anon + authenticated.

## Test checklist (manual)
- Partial fulfillment spawns sub-order with remaining quantities.
- Multi-partial from sub-order spawns next suffix.
- Payment gate blocks fulfillment until marked paid.
- Regular distributor bypasses payment.
- WhatsApp webhook creates order within 1s.
- Email poll pulls unread mail and inserts orders.
- SKU mapping: manual mode marks needs_review; auto mode inserts mapping.
- Realtime sync across two tabs within 1s.
- Offline actions queue and sync when back online.
