import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const data = await req.json();

    const {
        nombre, empresa, email, telefono,
        origen, destino, fecha, hora,
        pax, maletas, tipo_vehiculo, tipo_trayecto,
        observaciones, servicio,
    } = data;

    const html = `
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
    .obs { background: #f9f9f9; border-radius: 8px; padding: 12px 14px; font-size: 14px; color: #555; line-height: 1.6; }
    .bot-section { background: #0D0D0D; border-radius: 12px; padding: 20px 24px; margin: 28px 0 0; }
    .bot-section .bot-title { color: #FCA311; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 4px; }
    .bot-section .bot-subtitle { color: rgba(255,255,255,0.4); font-size: 12px; margin: 0 0 14px; }
    .bot-msg { background: #1a1a1a; border: 1px solid #2a2a2a; border-left: 3px solid #FCA311; border-radius: 8px; padding: 14px 16px; font-family: 'Courier New', monospace; font-size: 13px; color: #e0e0e0; line-height: 1.8; white-space: pre-wrap; word-break: break-word; }
    .footer { background: #f5f5f5; padding: 18px 32px; font-size: 12px; color: #aaa; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Nueva Solicitud de Cotización</h1>
      <p>Destinos Express — Sistema de Leads</p>
    </div>
    <div class="body">
      ${servicio ? `<span class="badge">Servicio: ${servicio}</span>` : ""}

      <div class="section-title">Datos de la Ruta</div>
      <div class="grid">
        <div class="field"><label>Origen</label><span>${origen}</span></div>
        <div class="field"><label>Destino</label><span>${destino}</span></div>
        <div class="field"><label>Fecha</label><span>${fecha}</span></div>
        <div class="field"><label>Hora</label><span>${hora || "Por definir"}</span></div>
        <div class="field"><label>Trayecto</label><span>${tipo_trayecto}</span></div>
        <div class="field"><label>Pasajeros</label><span>${pax}</span></div>
        <div class="field"><label>Equipaje</label><span>${maletas ?? 0} piezas</span></div>
        <div class="field"><label>Vehículo Sugerido</label><span>${tipo_vehiculo}</span></div>
      </div>

      <div class="section-title">Datos de Contacto</div>
      <div class="grid">
        <div class="field"><label>Nombre</label><span>${nombre}</span></div>
        <div class="field"><label>Empresa</label><span>${empresa || "—"}</span></div>
        <div class="field"><label>Correo</label><span>${email}</span></div>
        <div class="field"><label>Teléfono</label><span>${telefono}</span></div>
      </div>

      ${observaciones ? `
      <div class="section-title">Observaciones Adicionales</div>
      <div class="obs">${observaciones}</div>
      ` : ""}

      <div class="bot-section">
        <p class="bot-title">Mensaje para Bot-Destinos</p>
        <p class="bot-subtitle">Copia este texto y pégalo en Telegram para cotizar en 15 segundos</p>
        <div class="bot-msg">Origen: ${origen}
Destino: ${destino}
Fecha: ${fecha}
Hora: ${hora || "Por definir"}
Pasajeros: ${pax}
Equipaje: ${maletas ?? 0} piezas
Vehículo: ${tipo_vehiculo}
Trayecto: ${tipo_trayecto}${observaciones ? `\nObservaciones: ${observaciones}` : ""}</div>
      </div>
    </div>
    <div class="footer">Este correo fue generado automáticamente desde el formulario web de destinosexpress.com</div>
  </div>
</body>
</html>`;

    const { error } = await resend.emails.send({
        from: "Destinos Express Web <noreply@destinosexpress.com>",
        to: ["ventas@destinosexpress.com"],
        replyTo: email,
        subject: `Nueva cotización — ${nombre} | ${origen} → ${destino}`,
        html,
    });

    if (error) {
        console.error("[cotizar] Resend error:", error);
        return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
