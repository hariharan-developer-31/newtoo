# House of Surprise

Luxury private-event booking platform built with React 19, Vite, TypeScript, Tailwind v4 and Supabase.

## Start locally

1. Copy `.env.example` to `.env.local` and add the public Supabase values.
2. Apply `supabase/migrations/20260721000000_house_of_surprise.sql` in the Supabase SQL editor or CLI.
3. Run `npm install`, then `npm run dev`.

## Production checklist

- Configure Supabase Auth: email, Google, phone OTP and Vercel redirect URLs.
- Add Razorpay order/webhook Edge Functions. Verify webhook signatures server-side before confirming a booking.
- Configure Resend, Google Maps, Sentry and analytics in Vercel environment variables.
- Create private Supabase Storage buckets for invoices and hall media with signed URLs.
- Replace stock imagery and legal placeholder copy with licensed brand assets and reviewed content.

`vercel.json` supplies SPA routing and baseline security headers. Never expose service-role, Razorpay secret, Resend or Sentry auth keys in client variables.
