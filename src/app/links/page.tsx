import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivanna Wasiuk do Canto — Links",
  description: "WhatsApp, Instagram, TikTok e Pinterest de Ivanna Wasiuk do Canto.",
};

const LINKS = [
  {
    label: "Falar no WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=5512982970074",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M17.6 6.3A8.9 8.9 0 0 0 3.1 16.9L2 22l5.2-1.4a8.9 8.9 0 0 0 4.3 1.1h0a8.9 8.9 0 0 0 6.1-15.4Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 8.7c0-.3.3-.6.6-.6h.6c.3 0 .5.2.6.5l.4 1.4a.6.6 0 0 1-.1.6l-.5.5c.4.9 1.2 1.7 2.1 2.1l.5-.5a.6.6 0 0 1 .6-.1l1.4.4c.3.1.5.3.5.6v.6c0 .8-.7 1.4-1.5 1.3a7.7 7.7 0 0 1-6.6-6.6C8.6 9.4 9 8.8 9 8.7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ivannawasiuk/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ivawasiuk",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M14 3.5c.4 2 1.9 3.5 4 3.7v2.6c-1.5 0-2.9-.5-4-1.3v5.9a5 5 0 1 1-4.3-4.9v2.7a2.3 2.3 0 1 0 1.7 2.2V3.5H14Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pin.it/7CasYztbk",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10 17.5c.6-1.8 1.2-3.9 1.6-5.5m0 0c-.3-.5-.5-1.1-.3-1.9.3-1.3 1.3-1.6 1.9-1.2.7.5.5 1.5.2 2.5-.3 1 .5 1.9 1.5 1.5 1.6-.6 2.1-3.5.2-4.9-2-1.5-5.4-.5-5.7 2.5-.1.7 0 1.2.4 1.7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-ink text-cream flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-cream/20">
            <Image
              src="/images/ivanna-hero.png"
              alt="Ivanna Wasiuk do Canto"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="font-display text-2xl mt-6">Ivanna Wasiuk do Canto</h1>
          <p className="text-xs uppercase tracking-widest2 text-gold mt-2">
            Personal Stylist
          </p>
          <p className="text-xs uppercase tracking-widest2 text-cream/50 mt-1">
            estilo · imagem · moda
          </p>
        </div>

        <nav className="mt-10 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-cream/25 px-5 py-4 hover:bg-cream hover:text-ink transition-colors focus-ring"
            >
              <span className="shrink-0">{link.icon}</span>
              <span className="text-sm uppercase tracking-widest2">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <Link
          href="/"
          className="link-underline block text-center mt-12 text-xs uppercase tracking-widest2 text-cream/50"
        >
          Visitar site completo →
        </Link>
      </div>
    </div>
  );
}
