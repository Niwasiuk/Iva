import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Post } from "@/lib/types";

export const revalidate = 60;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  const typedPost = post as Post;

  return (
    <article className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="link-underline text-xs uppercase tracking-widest2 text-stone"
        >
          ← Voltar ao blog
        </Link>

        {typedPost.category && (
          <p className="text-xs uppercase tracking-widest2 text-gold mt-8 mb-4">
            {typedPost.category}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          {typedPost.title}
        </h1>
        <p className="text-sm text-stone mt-4">
          {new Date(typedPost.created_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        {typedPost.cover_url && (
          <div className="relative aspect-[16/9] border border-ink/10 my-12">
            <Image
              src={typedPost.cover_url}
              alt={typedPost.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose-custom whitespace-pre-line leading-relaxed text-ink/90">
          {typedPost.content}
        </div>

        <div className="mt-16 pt-10 border-t border-ink/10 text-center">
          <p className="font-display text-2xl mb-6">
            Quer aplicar isso no seu guarda-roupa?
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5512982970074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-cream px-8 py-3 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
          >
            Agendar consultoria
          </a>
        </div>
      </div>
    </article>
  );
}
