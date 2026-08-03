export const metadata = { title: "Contato — Ivanna Wasiuk do Canto" };

const LINKS = [
  {
    label: "WhatsApp",
    value: "+55 12 98297-0074",
    href: "https://api.whatsapp.com/send/?phone=5512982970074",
  },
  {
    label: "Instagram",
    value: "@ivannawasiuk",
    href: "https://www.instagram.com/ivannawasiuk/",
  },
  {
    label: "TikTok",
    value: "@ivawasiuk",
    href: "https://www.tiktok.com/@ivawasiuk",
  },
  {
    label: "Pinterest",
    value: "Quadro de referências",
    href: "https://pinterest.com",
  },
];

export default function Contato() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
        Contato
      </p>
      <h1 className="font-display text-4xl md:text-5xl mb-6 max-w-lg leading-tight">
        Vamos conversar sobre o seu estilo?
      </h1>
      <p className="text-stone max-w-md mb-16">
        A consultoria é 100% online. Chame no WhatsApp para agendar seu
        diagnóstico de estilo.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-ink/10 p-8 hover:border-gold transition-colors focus-ring"
          >
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
              {link.label}
            </p>
            <p className="font-display text-2xl group-hover:translate-x-1 transition-transform">
              {link.value} →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
