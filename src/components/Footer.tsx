import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl">Ivanna Wasiuk do Canto</p>
          <p className="mt-3 text-sm text-cream/60 uppercase tracking-widest2">
            estilo · imagem · moda
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-cream/80">
          <Link href="/sobre" className="link-underline w-fit">
            Sobre
          </Link>
          <Link href="/blog" className="link-underline w-fit">
            Blog
          </Link>
          <Link href="/galeria" className="link-underline w-fit">
            Galeria
          </Link>
          <Link href="/contato" className="link-underline w-fit">
            Contato
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://api.whatsapp.com/send/?phone=5512982970074"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit text-cream/80"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/ivannawasiuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit text-cream/80"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@ivawasiuk"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit text-cream/80"
          >
            TikTok
          </a>
          <a
            href="https://pin.it/7CasYztbk"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit text-cream/80"
          >
            Pinterest
          </a>
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 md:px-10 pb-8 text-xs text-cream/40">
        © {new Date().getFullYear()} Ivanna Wasiuk do Canto. Todos os direitos reservados.
      </div>
    </footer>
  );
}
