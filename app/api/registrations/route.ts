import { NextResponse } from "next/server";
import { Resend } from "resend";
import { registrationSchema } from "@/lib/validation";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  const parsed = registrationSchema.safeParse(payload);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Datos inválidos";
    return NextResponse.json({ error: firstIssue }, { status: 400 });
  }

  const data = {
    ...parsed.data,
    birth_date: parsed.data.birth_date || null,
    school: parsed.data.school || null,
    medical_notes: parsed.data.medical_notes || null,
  };

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.warn("[registrations] Supabase not configured, logging only:", data);
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const supabase = createAdminClient();
    const { data: inserted, error } = await supabase
      .from("registrations")
      .insert(data)
      .select()
      .single();
    if (error) {
      console.error("[registrations] insert error:", error.message);
      return NextResponse.json({ error: "No pudimos guardar tu inscripción" }, { status: 500 });
    }

    await Promise.allSettled([sendEmails(data), notifyAdmin(data)]);

    return NextResponse.json({ ok: true, id: inserted?.id });
  } catch (err) {
    console.error("[registrations] unexpected:", err);
    return NextResponse.json(
      { error: "Error inesperado al procesar la inscripción" },
      { status: 500 },
    );
  }
}

async function sendEmails(data: {
  player_name: string;
  parent_name: string;
  parent_email: string;
  category: string;
}) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM_EMAIL ?? "Carneros <noreply@carnerosgdl.com>";

  await resend.emails.send({
    from,
    to: data.parent_email,
    subject: "Inscripción recibida — Carneros Football Club",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h1 style="color: #0b55ad;">¡Bienvenido a Carneros!</h1>
        <p>Hola ${data.parent_name},</p>
        <p>Recibimos la inscripción de <strong>${data.player_name}</strong> para la categoría <strong>${data.category}</strong>.</p>
        <p>Un coordinador te contactará dentro de las próximas 48 horas para confirmar detalles y darte la bienvenida al club.</p>
        <p style="margin-top: 30px; color: #666;">— Carneros Football Club Guadalajara<br>Desde 1985</p>
      </div>
    `,
  });

  const notify = process.env.RESEND_NOTIFY_EMAIL;
  if (notify) {
    await resend.emails.send({
      from,
      to: notify,
      subject: `Nueva inscripción: ${data.player_name} — ${data.category}`,
      html: `
        <h2>Nueva inscripción</h2>
        <ul>
          <li><strong>Jugador:</strong> ${data.player_name}</li>
          <li><strong>Categoría:</strong> ${data.category}</li>
          <li><strong>Tutor:</strong> ${data.parent_name}</li>
          <li><strong>Email:</strong> ${data.parent_email}</li>
        </ul>
      `,
    });
  }
}

async function notifyAdmin(data: unknown) {
  const url = process.env.ADMIN_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "new_registration", data }),
    });
  } catch (err) {
    console.warn("[registrations] webhook failed:", err);
  }
}
