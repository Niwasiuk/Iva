"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createPost(formData: FormData) {
  const supabase = await createClient();

  const title = String(formData.get("title") || "");
  const excerpt = String(formData.get("excerpt") || "");
  const content = String(formData.get("content") || "");
  const category = String(formData.get("category") || "");
  const published = formData.get("published") === "on";
  const coverFile = formData.get("cover") as File | null;

  let cover_url: string | null = null;

  if (coverFile && coverFile.size > 0) {
    const fileName = `${Date.now()}-${slugify(coverFile.name)}`;
    const { data, error } = await supabase.storage
      .from("blog-covers")
      .upload(fileName, coverFile);

    if (!error && data) {
      const { data: publicUrl } = supabase.storage
        .from("blog-covers")
        .getPublicUrl(data.path);
      cover_url = publicUrl.publicUrl;
    }
  }

  const slug = slugify(title) + "-" + Date.now().toString(36);

  await supabase.from("posts").insert({
    title,
    slug,
    excerpt,
    content,
    category,
    cover_url,
    published,
  });

  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/dashboard");
}

export async function deletePost(id: string) {
  const supabase = await createClient();
  await supabase.from("posts").delete().eq("id", id);
  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function togglePublish(id: string, published: boolean) {
  const supabase = await createClient();
  await supabase.from("posts").update({ published }).eq("id", id);
  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function createGalleryImage(formData: FormData) {
  const supabase = await createClient();

  const caption = String(formData.get("caption") || "");
  const size = String(formData.get("size") || "md");
  const imageFile = formData.get("image") as File | null;

  if (!imageFile || imageFile.size === 0) {
    redirect("/admin/dashboard/nova-foto?error=no-file");
  }

  const fileName = `${Date.now()}-${slugify(imageFile.name)}`;
  const { data, error } = await supabase.storage
    .from("gallery")
    .upload(fileName, imageFile);

  if (error || !data) {
    console.error("Gallery upload error:", error);
    redirect(
      `/admin/dashboard/nova-foto?error=upload-failed&detail=${encodeURIComponent(
        error?.message || "unknown"
      )}`
    );
  }

  const { data: publicUrl } = supabase.storage
    .from("gallery")
    .getPublicUrl(data.path);

  const { error: insertError } = await supabase.from("gallery_images").insert({
    image_url: publicUrl.publicUrl,
    caption,
    size,
  });

  if (insertError) {
    console.error("Gallery insert error:", insertError);
    redirect(
      `/admin/dashboard/nova-foto?error=insert-failed&detail=${encodeURIComponent(
        insertError.message
      )}`
    );
  }

  revalidatePath("/galeria");
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}

export async function deleteGalleryImage(id: string) {
  const supabase = await createClient();
  await supabase.from("gallery_images").delete().eq("id", id);
  revalidatePath("/galeria");
  revalidatePath("/admin/dashboard");
}

export async function createTestimonial(formData: FormData) {
  const supabase = await createClient();

  const name = String(formData.get("name") || "");
  const city = String(formData.get("city") || "");
  const text = String(formData.get("text") || "");
  const imageFile = formData.get("image") as File | null;

  if (!imageFile || imageFile.size === 0) {
    redirect("/admin/dashboard/novo-depoimento?error=no-file");
  }

  const fileName = `${Date.now()}-${slugify(imageFile.name)}`;
  const { data, error } = await supabase.storage
    .from("testimonials")
    .upload(fileName, imageFile);

  if (error || !data) {
    console.error("Testimonial upload error:", error);
    redirect(
      `/admin/dashboard/novo-depoimento?error=upload-failed&detail=${encodeURIComponent(
        error?.message || "unknown"
      )}`
    );
  }

  const { data: publicUrl } = supabase.storage
    .from("testimonials")
    .getPublicUrl(data.path);

  const { error: insertError } = await supabase.from("testimonials").insert({
    image_url: publicUrl.publicUrl,
    name,
    city,
    text,
  });

  if (insertError) {
    console.error("Testimonial insert error:", insertError);
    redirect(
      `/admin/dashboard/novo-depoimento?error=insert-failed&detail=${encodeURIComponent(
        insertError.message
      )}`
    );
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient();
  await supabase.from("testimonials").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
