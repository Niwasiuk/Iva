import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import type { Post, GalleryImage } from "@/lib/types";
import { signOut, deletePost, togglePublish, deleteGalleryImage } from "../actions";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("created_at", { ascending: false });

  const allPosts = (posts as Post[]) || [];
  const allImages = (images as GalleryImage[]) || [];

  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="flex items-center justify-between mb-16">
        <div>
          <p className="text-xs uppercase tracking-widest2 text-gold mb-2">
            Painel administrativo
          </p>
          <h1 className="font-display text-3xl">Olá, Ivanna</h1>
        </div>
        <form action={signOut}>
          <button className="text-sm uppercase tracking-widest2 text-stone hover:text-ink link-underline focus-ring">
            Sair
          </button>
        </form>
      </div>

      {/* POSTS */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl">Posts do blog</h2>
          <Link
            href="/admin/dashboard/novo-post"
            className="bg-ink text-cream px-5 py-2.5 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
          >
            + Novo post
          </Link>
        </div>

        {allPosts.length === 0 ? (
          <p className="text-stone">Nenhum post ainda.</p>
        ) : (
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {allPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center gap-5 py-5"
              >
                <div className="relative w-16 h-20 border border-ink/10 shrink-0 bg-paper">
                  {post.cover_url && (
                    <Image
                      src={post.cover_url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{post.title}</p>
                  <p className="text-xs text-stone mt-1">
                    {post.category || "Sem categoria"} ·{" "}
                    {post.published ? "Publicado" : "Rascunho"}
                  </p>
                </div>
                <form action={togglePublish.bind(null, post.id, !post.published)}>
                  <button className="text-xs uppercase tracking-widest2 border border-ink/20 px-3 py-2 hover:border-gold focus-ring">
                    {post.published ? "Ocultar" : "Publicar"}
                  </button>
                </form>
                <form action={deletePost.bind(null, post.id)}>
                  <button className="text-xs uppercase tracking-widest2 text-red-700/80 hover:text-red-700 px-3 py-2 focus-ring">
                    Excluir
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* GALERIA */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl">Galeria</h2>
          <Link
            href="/admin/dashboard/nova-foto"
            className="bg-ink text-cream px-5 py-2.5 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
          >
            + Nova foto
          </Link>
        </div>

        {allImages.length === 0 ? (
          <p className="text-stone">Nenhuma foto ainda.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {allImages.map((img) => (
              <div key={img.id} className="relative aspect-square border border-ink/10 group">
                <Image
                  src={img.image_url}
                  alt={img.caption || ""}
                  fill
                  className="object-cover"
                />
                <form
                  action={deleteGalleryImage.bind(null, img.id)}
                  className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <button className="text-cream text-xs uppercase tracking-widest2 focus-ring">
                    Excluir
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
