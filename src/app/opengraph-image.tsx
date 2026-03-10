import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Destinos Express — Transporte Especial y Ejecutivo en Colombia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    const stats = [
        { value: "16+", label: "Ciudades" },
        { value: "24/7", label: "Disponibilidad" },
        { value: "+500", label: "Empresas" },
        { value: "10+", label: "Años" },
    ];

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0D0D0D",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    overflow: "hidden",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Left golden accent bar */}
                <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: 8, background: "#FCA311", display: "flex",
                }} />

                {/* Top diagonal accent line */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, #FCA311 0%, transparent 60%)",
                    display: "flex",
                }} />

                {/* Background geometric circles (right side) */}
                <div style={{
                    position: "absolute", right: 60, top: 60,
                    width: 340, height: 340,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(252,163,17,0.12)",
                    display: "flex",
                }} />
                <div style={{
                    position: "absolute", right: 110, top: 110,
                    width: 240, height: 240,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(252,163,17,0.2)",
                    display: "flex",
                }} />
                <div style={{
                    position: "absolute", right: 160, top: 160,
                    width: 140, height: 140,
                    borderRadius: "50%",
                    background: "rgba(252,163,17,0.06)",
                    border: "1.5px solid rgba(252,163,17,0.35)",
                    display: "flex",
                }} />

                {/* Dot grid pattern */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "radial-gradient(rgba(252,163,17,0.08) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    display: "flex",
                }} />

                {/* Bottom glow */}
                <div style={{
                    position: "absolute", bottom: -60, left: 80,
                    width: 500, height: 200,
                    background: "rgba(252,163,17,0.06)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    display: "flex",
                }} />

                {/* Content */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "64px 80px",
                    flex: 1,
                }}>

                    {/* Badge */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 32,
                    }}>
                        <div style={{
                            width: 8, height: 8,
                            borderRadius: "50%",
                            background: "#FCA311",
                            display: "flex",
                        }} />
                        <div style={{
                            background: "rgba(252,163,17,0.12)",
                            border: "1px solid rgba(252,163,17,0.35)",
                            color: "#FCA311",
                            fontSize: 15,
                            fontWeight: 700,
                            padding: "6px 18px",
                            borderRadius: 100,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            display: "flex",
                        }}>
                            Transporte Especial · Colombia
                        </div>
                    </div>

                    {/* Title */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 20,
                    }}>
                        <span style={{
                            color: "#FFFFFF",
                            fontSize: 78,
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                        }}>
                            Destinos
                        </span>
                        <span style={{
                            color: "#FCA311",
                            fontSize: 78,
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                        }}>
                            Express
                        </span>
                    </div>

                    {/* Subtitle */}
                    <div style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 26,
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                        marginBottom: 52,
                        display: "flex",
                    }}>
                        Ejecutivo · Empresarial · Turístico · Aeropuerto
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: "flex",
                        gap: 0,
                    }}>
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingRight: 40,
                                    marginRight: 40,
                                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                                }}
                            >
                                <span style={{
                                    color: "#FCA311",
                                    fontSize: 38,
                                    fontWeight: 800,
                                    lineHeight: 1,
                                }}>
                                    {stat.value}
                                </span>
                                <span style={{
                                    color: "rgba(255,255,255,0.35)",
                                    fontSize: 15,
                                    marginTop: 6,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                }}>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Domain URL — bottom right */}
                <div style={{
                    position: "absolute",
                    bottom: 44,
                    right: 80,
                    color: "rgba(255,255,255,0.25)",
                    fontSize: 18,
                    letterSpacing: "0.04em",
                    display: "flex",
                }}>
                    destinosexpress.com
                </div>
            </div>
        ),
        { ...size }
    );
}
