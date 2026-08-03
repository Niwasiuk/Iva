-- Rode este script no SQL Editor do seu projeto Supabase.

create extension if not exists "uuid-ossp";

-- POSTS DO BLOG
create table if not exists posts (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null,
  category text,
  cover_url text,
  published boolean default false,
  created_at timestamptz default now()
);

alter table posts enable row level security;

create policy "Posts públicos são visíveis para todos"
  on posts for select
  using (published = true);

create policy "Usuários autenticados podem ver todos os posts"
  on posts for select
  to authenticated
  using (true);

create policy "Usuários autenticados podem inserir posts"
  on posts for insert
  to authenticated
  with check (true);

create policy "Usuários autenticados podem editar posts"
  on posts for update
  to authenticated
  using (true);

create policy "Usuários autenticados podem excluir posts"
  on posts for delete
  to authenticated
  using (true);

-- GALERIA (MOODBOARD)
create table if not exists gallery_images (
  id uuid primary key default uuid_generate_v4(),
  image_url text not null,
  caption text,
  size text default 'md' check (size in ('sm', 'md', 'lg')),
  created_at timestamptz default now()
);

alter table gallery_images enable row level security;

create policy "Galeria é pública"
  on gallery_images for select
  using (true);

create policy "Usuários autenticados podem inserir fotos"
  on gallery_images for insert
  to authenticated
  with check (true);

create policy "Usuários autenticados podem excluir fotos"
  on gallery_images for delete
  to authenticated
  using (true);

-- STORAGE BUCKETS
-- Crie estes dois buckets manualmente em Storage (ou rode via API/painel):
--   1) "blog-covers"  -> público
--   2) "gallery"      -> público
--
-- Depois de criar os buckets, rode as policies abaixo (ajuste o nome do bucket
-- em cada bloco se necessário):

create policy "Leitura pública blog-covers"
  on storage.objects for select
  using (bucket_id = 'blog-covers');

create policy "Upload autenticado blog-covers"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-covers');

create policy "Leitura pública gallery"
  on storage.objects for select
  using (bucket_id = 'gallery');

create policy "Upload autenticado gallery"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'gallery');

create policy "Exclusão autenticada gallery"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'gallery');
