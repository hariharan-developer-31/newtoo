alter table public.business_settings enable row level security;
create policy "admins manage business settings" on public.business_settings for all using (public.is_admin()) with check (public.is_admin());
insert into public.business_settings(key,value) values ('booking_advance_amount','{"amount":5000}'::jsonb) on conflict (key) do nothing;
