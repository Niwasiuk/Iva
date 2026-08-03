import Image from "next/image";

export const metadata = { title: "Sobre — Ivanna Wasiuk do Canto" };

export default function Sobre() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[3/4] border border-ink/10 md:sticky md:top-28">
          <Image
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop"
            alt="Ivanna Wasiuk do Canto"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
            Sobre
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Ivanna Wasiuk do Canto
          </h1>

          <div className="space-y-6 text-stone leading-relaxed">
            <p>
              Sou personal stylist e trabalho com consultoria de imagem 100%
              online. Ajudo mulheres a entender sua própria linguagem visual —
              cor, corte, proporção e atitude — para vestir peças que já têm
              ou escolher melhor as próximas.
            </p>
            <p>
              Não acredito em fórmula fechada de estilo. Acredito em processo:
              escutar quem você é, entender sua rotina, e traduzir isso em
              looks que fazem sentido no seu dia a dia — do trabalho ao
              evento, da viagem ao café de domingo.
            </p>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl mb-6">Como funciona</h2>
            <ol className="space-y-5">
              {[
                ["Diagnóstico", "Conversa inicial para entender objetivos, rotina e referências."],
                ["Análise de estilo", "Coloração pessoal, tipo físico e mapeamento do guarda-roupa atual."],
                ["Plano de estilo", "Consultoria com recomendações práticas e curadoria de peças."],
                ["Acompanhamento", "Suporte contínuo para aplicar o que foi construído no dia a dia."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-5">
                  <span className="font-display italic text-2xl text-gold shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-stone mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=5512982970074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 bg-ink text-cream px-8 py-3 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring"
          >
            Iniciar consultoria
          </a>
        </div>
      </div>
    </section>
  );
}
