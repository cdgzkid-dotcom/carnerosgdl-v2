import { createClient } from "@/lib/supabase/server";
import type { Post } from "@/types";

export async function getPublishedPosts(limit?: number): Promise<Post[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return [];
  try {
    const supabase = createClient();
    let query = supabase
      .from("posts")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });
    if (limit) query = query.limit(limit);
    const { data, error } = await query;
    if (error) {
      console.error("[posts] fetch error:", error.message);
      return [];
    }
    return (data ?? []) as Post[];
  } catch (err) {
    console.error("[posts] unexpected:", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();
    if (error) {
      console.error("[posts] getBySlug error:", error.message);
      return null;
    }
    return (data as Post) ?? null;
  } catch (err) {
    console.error("[posts] getBySlug unexpected:", err);
    return null;
  }
}

export async function getRelatedPosts(
  currentId: string,
  category: string | null,
  limit = 3,
): Promise<Post[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return [];
  try {
    const supabase = createClient();
    let query = supabase
      .from("posts")
      .select("*")
      .eq("is_published", true)
      .neq("id", currentId)
      .order("published_at", { ascending: false })
      .limit(limit);
    if (category) query = query.eq("category", category);
    const { data } = await query;
    return (data ?? []) as Post[];
  } catch {
    return [];
  }
}
