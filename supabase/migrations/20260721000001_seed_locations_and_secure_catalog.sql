alter table public.cities enable row level security;
alter table public.branches enable row level security;
alter table public.experiences enable row level security;
alter table public.halls enable row level security;
alter table public.hall_media enable row level security;
alter table public.packages enable row level security;
alter table public.package_items enable row level security;
alter table public.addons enable row level security;

create policy "catalog readable" on public.cities for select using (is_active = true or public.is_admin());
create policy "admins manage cities" on public.cities for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog branches readable" on public.branches for select using (is_active = true or public.is_admin());
create policy "admins manage branches" on public.branches for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog experiences readable" on public.experiences for select using (is_active = true or public.is_admin());
create policy "admins manage experiences" on public.experiences for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog halls readable" on public.halls for select using (deleted_at is null or public.is_admin());
create policy "admins manage halls" on public.halls for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog hall media readable" on public.hall_media for select using (true);
create policy "admins manage hall media" on public.hall_media for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog packages readable" on public.packages for select using (is_active = true or public.is_admin());
create policy "admins manage packages" on public.packages for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog package items readable" on public.package_items for select using (true);
create policy "admins manage package items" on public.package_items for all using (public.is_admin()) with check (public.is_admin());
create policy "catalog addons readable" on public.addons for select using (is_active = true or public.is_admin());
create policy "admins manage addons" on public.addons for all using (public.is_admin()) with check (public.is_admin());

insert into public.cities(name,slug,is_active) values ('Chennai','chennai',true),('Pondicherry','pondicherry',true) on conflict (slug) do update set name=excluded.name,is_active=true;
