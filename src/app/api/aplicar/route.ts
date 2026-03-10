import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { tipo, ...fields } = data;

    const isConductor = tipo === "conductor";

    const html = isConductor
        ? buildConductorHtml(fields)
        : buildPropietarioHtml(fields);

    const subject = isConductor
        ? `Aplicación Conductor — ${fields.nombres} ${fields.apellidos}`
        : `Afiliación Vehículo — ${fields.nombre} | ${fields.marca_linea}`;

    const replyTo = fields.email || undefined;

    const { error } = await resend.emails.send({
        from: "Destinos Express Web <noreply@destinosexpress.com>",
        to: ["ventas@destinosexpress.com"],
        ...(replyTo ? { replyTo } : {}),
        subject,
        html,
    });

    if (error) {
        console.error("[aplicar] Resend error:", error);
        return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}

function buildConductorHtml(f: Record<string, string>) {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
    .header { background: #0D0D0D; padding: 28px 32px; }
    .header h1 { color: #FCA311; font-size: 22px; margin: 0; }
    .header p { color: rgba(255,255,255,0.55); font-size: 13px; margin: 6px 0 0; }
    .body { padding: 28px 32px; }
    .badge { display: inline-block; background: #FCA311; color: #0D0D0D; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
    .section-title { font-size: 13px; font-weight: 700; color: #0D0D0D; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 2px solid #FCA311; padding-bottom: 6px; margin: 24px 0 14px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .field { background: #f9f9f9; border-radius: 8px; padding: 12px 14px; }
    .field label { display: block; font-size: 11px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
    .field span { font-size: 14px; color: #0D0D0D; font-weight: 500; }
    .footer { background: #f5f5f5; padding: 18px 32px; font-size: 12px; color: #aaa; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Aplicación de Conductor</h1>
      <p>Destinos Express — Trabaja con Nosotros</p>
    </div>
    <div class="body">
      <span class="badge">Conductor</span>
      <div class="section-title">Datos Personales</div>
      <div class="grid">
        <div class="field"><label>Nombres</label><span>${f.nombres || "—"}</span></div>
        <div class="field"><label>Apellidos</label><span>${f.apellidos || "—"}</span></div>
        <div class="field"><label>Correo</label><span>${f.email || "—"}</span></div>
        <div class="field"><label>Celular</label><span>${f.celular || "—"}</span></div>
        <div class="field"><label>Ciudad</label><span>${f.ciudad || "—"}</span></div>
        <div class="field"><label>Licencia</label><span>${f.licencia || "—"}</span></div>
      </div>
    </div>
    <div class="footer">Este correo fue generado automáticamente desde destinosexpress.com</div>
  </div>
</body>
</html>`;
}

function buildPropietarioHtml(f: Record<string, string>) {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
    .header { background: #0D0D0D; padding: 28px 32px; }
    .header h1 { color: #FCA311; font-size: 22px; margin: 0; }
    .header p { color: rgba(255,255,255,0.55); font-size: 13px; margin: 6px 0 0; }
    .body { padding: 28px 32px; }
    .badge { display: inline-block; background: #0D0D0D; color: #FCA311; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid #FCA311; }
    .section-title { font-size: 13px; font-weight: 700; color: #0D0D0D; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 2px solid #FCA311; padding-bottom: 6px; margin: 24px 0 14px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .field { background: #f9f9f9; border-radius: 8px; padding: 12px 14px; }
    .field label { display: block; font-size: 11px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
    .field span { font-size: 14px; color: #0D0D0D; font-weight: 500; }
    .footer { background: #f5f5f5; padding: 18px 32px; font-size: 12px; color: #aaa; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Solicitud de Afiliación de Vehículo</h1>
      <p>Destinos Express — Trabaja con Nosotros</p>
    </div>
    <div class="body">
      <span class="badge">Propietario</span>
      <div class="section-title">Datos del Propietario</div>
      <div class="grid">
        <div class="field"><label>Nombre</label><span>${f.nombre || "—"}</span></div>
        <div class="field"><label>Celular</label><span>${f.celular || "—"}</span></div>
      </div>
      <div class="section-title">Datos del Vehículo</div>
      <div class="grid">
        <div class="field"><label>Marca / Línea</label><span>${f.marca_linea || "—"}</span></div>
        <div class="field"><label>Modelo (Año)</label><span>${f.modelo || "—"}</span></div>
        <div class="field"><label>Capacidad</label><span>${f.capacidad || "—"} pax</span></div>
        <div class="field"><label>¿Tiene conductor?</label><span>${f.tiene_conductor === "si" ? "Sí" : "No"}</span></div>
      </div>
    </div>
    <div class="footer">Este correo fue generado automáticamente desde destinosexpress.com</div>
  </div>
</body>
</html>`;
}
