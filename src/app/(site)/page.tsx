import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import type { Post, Testimonial } from "@/lib/types";

export default async function Home() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(3);

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  const latestPosts = (posts as Post[]) || [];
  const allTestimonials = (testimonials as Testimonial[]) || [];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold mb-6">
              Personal Stylist · Consultoria online
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Estilo é a forma
              <br />
              <span className="italic font-normal">como você é lembrada.</span>
            </h1>
            <p className="mt-8 text-cream/70 max-w-md text-base leading-relaxed">
              Consultoria de imagem, cor e guarda-roupa para mulheres que
              querem se vestir com intenção — onde quer que estejam.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5512982970074"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-ink px-7 py-3 text-sm uppercase tracking-widest2 hover:bg-cream transition-colors focus-ring"
              >
                Agendar consultoria
              </a>
              <Link
                href="/blog"
                className="border border-cream/40 px-7 py-3 text-sm uppercase tracking-widest2 hover:border-cream transition-colors focus-ring"
              >
                Ler o blog
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:ml-auto border border-cream/20">
            <Image
              src="/images/ivanna-hero.png"
              alt="Ivanna Wasiuk do Canto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* TRIPÉ DE POSICIONAMENTO */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 grid grid-cols-3 gap-6 md:gap-12 text-center border-b border-ink/10">
        {["Estilo", "Imagem", "Moda"].map((word, i) => (
          <div key={word} className="flex flex-col items-center">
            <span className="font-display italic text-3xl md:text-4xl">
              {word}
            </span>
            <span className="mt-3 text-xs uppercase tracking-widest2 text-stone">
              {i === 0
                ? "identidade"
                : i === 1
                ? "presença"
                : "linguagem"}
            </span>
          </div>
        ))}
      </section>

      {/* SOBRE — TEASER */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] border border-ink/10 order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
            alt="Consultoria de estilo"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
            Sobre a consultoria
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Moda a serviço de quem você é
          </h2>
          <p className="mt-6 text-stone leading-relaxed">
            Cada consultoria começa com uma pergunta simples: o que você quer
            que suas roupas digam por você? A partir daí, construímos um
            guarda-roupa funcional, com identidade e sem desperdício — 100%
            online, no seu ritmo.
          </p>
          <Link
            href="/sobre"
            className="link-underline inline-block mt-6 text-sm uppercase tracking-widest2"
          >
            Conhecer a metodologia →
          </Link>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-paper border-y border-ink/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
                No blog
              </p>
              <h2 className="font-display text-4xl">Ideias & referências</h2>
            </div>
            <Link
              href="/blog"
              className="link-underline text-sm uppercase tracking-widest2 hidden md:block"
            >
              Ver tudo →
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-10">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <div className="relative aspect-[4/5] border border-ink/10 overflow-hidden mb-5">
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
                  <h3 className="font-display text-xl leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-stone">
              Os primeiros artigos estão a caminho — volte em breve.
            </p>
          )}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      {allTestimonials.length > 0 && (
        <section className="max-w-content mx-auto px-6 md:px-10 py-24">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4 text-center">
            O que dizem
          </p>
          <h2 className="font-display text-4xl mb-16 text-center">
            Depoimentos
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {allTestimonials.map((t) => (
              <div key={t.id} className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-ink/10 mb-5">
                  <Image
                    src={t.image_url}
                    alt={`${t.name} com Ivanna Wasiuk`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-display italic text-lg leading-relaxed text-ink/90">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-5 text-sm uppercase tracking-widest2 text-stone">
                  {t.name} · {t.city}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-28 text-center">
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
          Vamos construir o seu <span className="italic">estilo</span>?
        </h2>
        <a
          href="https://api.whatsapp.com/send/?phone=5512982970074"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-ink text-cream px-9 py-4 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
        >
          Falar no WhatsApp
        </a>
      </section>
    </>
  );
}
