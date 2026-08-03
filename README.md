# Site — Ivanna Wasiuk do Canto (Personal Stylist)

Next.js 14 + Tailwind + Supabase. Multi-page, com painel admin para a Ivanna
publicar posts do blog e fotos da galeria sozinha, sem mexer em codigo.

## Estrutura

- `/` — Home
- `/sobre` — Sobre / metodologia
- `/blog` — Lista de posts (so mostra publicados)
- `/blog/[slug]` — Post individual
- `/galeria` — Moodboard de referencias
- `/contato` — Links de contato
- `/admin/login` — Login do painel
- `/admin/dashboard` — Painel: criar/publicar/excluir posts e fotos

## 1. Criar o projeto no Supabase

1. Crie um projeto em https://supabase.com (gratuito).
2. Vá em **SQL Editor** e rode o conteúdo de `supabase/schema.sql`.
3. Vá em **Storage** e crie dois buckets **públicos**:
   - `blog-covers`
   - `gallery`
   (o schema.sql já cria as policies de leitura/upload para esses buckets —
   só crie os buckets com o nome exato antes de rodar o script, ou rode de
   novo a parte de policies depois de criá-los.)
4. Vá em **Authentication → Users** e crie o usuário da Ivanna manualmente
   (email + senha) — é esse login que ela vai usar em `/admin/login`.
   Não habilite cadastro público; só você cria o usuário dela.
5. Copie a **Project URL** e a **anon public key** em
   **Project Settings → API**.

## 2. Configurar variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
```

## 3. Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## 4. Deploy (Vercel)

1. Suba o projeto pro GitHub (mesmo fluxo que voce ja usa com Pablo/Adriely).
2. Importe o repositorio na Vercel.
3. Em **Environment Variables**, adicione as mesmas duas variaveis do
   `.env.local`.
4. Deploy. O dominio temporario da Vercel ja serve por enquanto
   (ex: `ivanna-site.vercel.app`); quando ela tiver dominio proprio, e so
   apontar o DNS.

## Como a Ivanna atualiza o conteudo

1. Acessa `/admin/login` com o e-mail e senha que voce criou pra ela.
2. No painel:
   - **Novo post**: titulo, categoria, resumo, texto, imagem de capa, e um
     checkbox pra publicar na hora (ou deixar como rascunho).
   - **Nova foto**: upload de imagem + legenda opcional + tamanho no
     moodboard (pequeno/medio/grande — controla o efeito de grid irregular
     da galeria).
   - Pode ocultar/publicar ou excluir qualquer post e excluir fotos, tudo
     pelo proprio painel.

Nenhuma edicao de codigo e necessaria pro uso do dia a dia.

## Identidade visual

- **Paleta**: `#1C1A18` (ink), `#F7F3EC` (cream), `#B08D57` (gold),
  `#8A8578` (stone), `#FFFFFF` (paper)
- **Tipografia**: Fraunces (display/serif) + Inter (corpo) — carregadas via
  Google Fonts no `layout.tsx`
- **Assinatura**: galeria em moodboard com blocos de tamanhos variados,
  remetendo ao jeito que ela organiza referencias no Pinterest

## Imagens de placeholder

As imagens do Unsplash usadas na Home e Sobre sao so placeholder — troque
pelas fotos reais da Ivanna assim que tiver o material (posso ajudar a
substituir quando voce mandar as fotos).
