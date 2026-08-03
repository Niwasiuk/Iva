"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("E-mail ou senha incorretos.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <section className="max-w-md mx-auto px-6 py-32">
      <p className="text-xs uppercase tracking-widest2 text-gold mb-4 text-center">
        Painel administrativo
      </p>
      <h1 className="font-display text-3xl mb-10 text-center">Entrar</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            E-mail
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest2 text-stone mb-2">
            Senha
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-ink/20 bg-paper px-4 py-3 focus-ring focus:outline-none"
          />
        </div>

        {error && <p className="text-sm text-red-700">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-ink text-cream py-3 text-sm uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors focus-ring disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}
