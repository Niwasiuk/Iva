import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import type { Post } from "@/lib/types";

export const metadata = { title: "Blog — Ivanna Wasiuk do Canto" };
export const revalidate = 60;

export default async function Blog() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  const allPosts = (posts as Post[]) || [];

  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
        Blog
      </p>
      <h1 className="font-display text-4xl md:text-5xl mb-16">
        Ideias & referências de estilo
      </h1>

      {allPosts.length === 0 ? (
        <p className="text-stone">
          Nenhum artigo publicado ainda. Volte em breve.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
          {allPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[4/5] border border-ink/10 overflow-hidden mb-5 bg-paper">
                {post.cover_url && (
                  <Image
                    src={post.cover_url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              {post.category && (
                <p className="text-xs uppercase tracking-widest2 text-gold mb-2">
                  {post.category}
                </p>
              )}
              <h2 className="font-display text-xl leading-snug group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-sm text-stone mt-2 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
