import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (secret !== process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    path?: string;
    tag?: string;
  };

  if (body.path) revalidatePath(body.path);
  if (body.tag) revalidateTag(body.tag);

  return NextResponse.json({ revalidated: true, at: Date.now() });
}
