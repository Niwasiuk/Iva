import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import type { GalleryImage } from "@/lib/types";

export const metadata = { title: "Galeria — Ivanna Wasiuk do Canto" };
export const revalidate = 60;

const SIZE_CLASSES: Record<string, string> = {
  sm: "md:row-span-1",
  md: "md:row-span-2",
  lg: "md:row-span-3",
};

export default async function Galeria() {
  const supabase = await createClient();
  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("created_at", { ascending: false });

  const gallery = (images as GalleryImage[]) || [];

  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32">
      <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
        Galeria
      </p>
      <h1 className="font-display text-4xl md:text-5xl mb-4">
        Quadro de referências
      </h1>
      <p className="text-stone max-w-md mb-16">
        Looks, cores e combinações que inspiram o trabalho de consultoria —
        um moodboard vivo, atualizado com frequência.
      </p>

      {gallery.length === 0 ? (
        <p className="text-stone">Galeria em construção.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[110px] gap-4">
          {gallery.map((img) => (
            <div
              key={img.id}
              className={`relative border border-ink/10 overflow-hidden group row-span-2 ${
                SIZE_CLASSES[img.size] || "md:row-span-2"
              }`}
            >
              <Image
                src={img.image_url}
                alt={img.caption || "Referência de estilo"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {img.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-cream text-xs">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
