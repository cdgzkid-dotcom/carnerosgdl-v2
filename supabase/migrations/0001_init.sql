-- Carneros Football Club — initial schema
-- Tables: posts (blog), matches (calendario), registrations (inscripciones)

create extension if not exists "pgcrypto";

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  cover_image text,
  content text not null,
  category text,
  author text,
  published_at timestamptz,
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists matches (
  id uuid primary key default gen_random_uuid(),
  date timestamptz not null,
  category text not null,
  opponent text not null,
  location text,
  home_away text check (home_away in ('home','away')),
  result text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  player_name text not null,
  birth_date date,
  category text not null,
  parent_name text not null,
  parent_email text not null,
  parent_phone text not null,
  school text,
  medical_notes text,
  accepted_terms boolean not null default false,
  status text default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz default now()
);

create index if not exists idx_posts_slug on posts(slug);
create index if not exists idx_posts_published on posts(is_published, published_at desc);
create index if not exists idx_matches_date on matches(date);
create index if not exists idx_registrations_status on registrations(status, created_at desc);

-- Row Level Security
alter table posts enable row level security;
alter table matches enable row level security;
alter table registrations enable row level security;

-- Public read policies for published content
drop policy if exists "published posts are viewable" on posts;
create policy "published posts are viewable"
  on posts for select
  using (is_published = true);

drop policy if exists "matches are viewable" on matches;
create policy "matches are viewable"
  on matches for select
  using (true);

-- Registrations: inserts allowed from anon (form), reads restricted to service role
drop policy if exists "anyone can register" on registrations;
create policy "anyone can register"
  on registrations for insert
  with check (true);
