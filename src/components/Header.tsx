"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-ink focus-ring"
        >
          Ivanna Wasiuk
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm uppercase tracking-widest2 text-ink/80 hover:text-ink focus-ring"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://api.whatsapp.com/send/?phone=5512982970074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest2 border border-ink px-5 py-2 hover:bg-ink hover:text-cream transition-colors focus-ring"
          >
            Agendar
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 focus-ring p-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col border-t border-ink/10 bg-cream px-6 py-6 gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest2 text-ink/80"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://api.whatsapp.com/send/?phone=5512982970074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest2 border border-ink px-5 py-2 text-center"
          >
            Agendar
          </a>
        </nav>
      )}
    </header>
  );
}
