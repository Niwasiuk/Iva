import Link from "next/link";
import { createGalleryImage } from "../../actions";

export default function NovaFoto() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 md:py-20">
      <Link
        href="/admin/dashboard"
        className="link-underline text-xs uppercase tracking-widest2 text-stone"
      >
        ← Voltar
      </Link>
      <h1 className="font-display text-3xl mt-8 mb-10">Nova foto na galeria</h1>

      <form action={createGalleryImage} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Foto
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Legenda (opcional)
          </label>
          <input
            name="caption"
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Tamanho no moodboard
          </label>
          <select
            name="size"
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
            defaultValue="md"
          >
            <option value="sm">Pequeno</option>
            <option value="md">Médio</option>
            <option value="lg">Grande</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-ink text-cream px-8 py-3 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
        >
          Adicionar foto
        </button>
      </form>
    </section>
  );
}
