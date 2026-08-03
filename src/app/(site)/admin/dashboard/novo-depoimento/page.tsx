import Link from "next/link";
import { createTestimonial } from "../../actions";

const ERROR_MESSAGES: Record<string, string> = {
  "no-file": "Selecione uma foto antes de enviar.",
  "upload-failed":
    "Falha ao enviar a foto. Confira se o bucket 'testimonials' existe no Supabase Storage e se as policies de upload foram criadas (veja supabase/schema.sql).",
  "insert-failed":
    "A foto foi enviada, mas não foi possível salvar o depoimento. Confira se a tabela testimonials e as policies foram criadas.",
};

export default async function NovoDepoimento({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; detail?: string }>;
}) {
  const { error, detail } = await searchParams;

  return (
    <section className="max-w-2xl mx-auto px-6 py-16 md:py-20">
      <Link
        href="/admin/dashboard"
        className="link-underline text-xs uppercase tracking-widest2 text-stone"
      >
        ← Voltar
      </Link>
      <h1 className="font-display text-3xl mt-8 mb-10">Novo depoimento</h1>

      {error && (
        <div className="mb-8 border border-red-700/40 bg-red-50 text-red-800 px-5 py-4 text-sm space-y-1">
          <p>{ERROR_MESSAGES[error] || "Ocorreu um erro ao enviar o depoimento."}</p>
          {detail && (
            <p className="text-xs text-red-700/70 font-mono break-all">
              Detalhe técnico: {detail}
            </p>
          )}
        </div>
      )}

      <form action={createTestimonial} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Foto (Ivanna com a cliente)
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
            Nome da cliente
          </label>
          <input
            name="name"
            required
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Cidade
          </label>
          <input
            name="city"
            required
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Depoimento
          </label>
          <textarea
            name="text"
            required
            rows={5}
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-ink text-cream px-8 py-3 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
        >
          Salvar depoimento
        </button>
      </form>
    </section>
  );
}
