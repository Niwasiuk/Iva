import Link from "next/link";
import { createPost } from "../../actions";

export default function NovoPost() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 md:py-20">
      <Link
        href="/admin/dashboard"
        className="link-underline text-xs uppercase tracking-widest2 text-stone"
      >
        ← Voltar
      </Link>
      <h1 className="font-display text-3xl mt-8 mb-10">Novo post</h1>

      <form action={createPost} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Título
          </label>
          <input
            name="title"
            required
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Categoria
          </label>
          <input
            name="category"
            placeholder="Ex: Cápsula de guarda-roupa, Cores, Ocasiões"
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Resumo curto (aparece na listagem)
          </label>
          <textarea
            name="excerpt"
            rows={2}
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Conteúdo
          </label>
          <textarea
            name="content"
            required
            rows={12}
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Imagem de capa
          </label>
          <input
            type="file"
            name="cover"
            accept="image/*"
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <label className="flex items-center gap-3">
          <input type="checkbox" name="published" className="w-4 h-4" />
          <span className="text-sm">Publicar imediatamente</span>
        </label>

        <button
          type="submit"
          className="bg-ink text-cream px-8 py-3 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
        >
          Salvar post
        </button>
      </form>
    </section>
  );
}
