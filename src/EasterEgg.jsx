import { useState, useEffect, useRef } from "react";

const VERSIONS = [
  { label: "v1", title: "Portfolio 2020", description: "The very first version — built with plain HTML & CSS.", url: "#", accent: "#f472b6", bg: "rgba(30,10,50,0.75)" },
  { label: "v2", title: "Portfolio 2021", description: "React + styled-components era. Dark mountain hero image.", url: "#", accent: "#a78bfa", bg: "rgba(15,10,55,0.75)" },
  { label: "v3", title: "Portfolio 2022", description: "Minimal redesign. Blue gradient, centered layout.", url: "#", accent: "#38bdf8", bg: "rgba(5,20,50,0.75)" },
  { label: "v4", title: "Portfolio 2023", description: "The Gatsby version — 6k+ stars on GitHub.", url: "#", accent: "#34d399", bg: "rgba(5,30,20,0.75)" },
];

export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const frameRef  = useRef(0);
  const boxRef    = useRef(null);

  useEffect(() => {
    const tick = () => {
      frameRef.current++;
      const f = frameRef.current;

      if (boxRef.current) {
        const y = Math.sin(f * 0.035) * 4;
        const r = Math.sin(f * 0.018) * 5;
        boxRef.current.style.transform = `translateY(${y}px) rotate(${r}deg)`;
      }

      if (open && canvasRef.current) {
        paintAurora(canvasRef.current, f);
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [open]);

  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── TARDIS ── */}
      <button ref={boxRef} onClick={() => setOpen(true)}
        aria-label="Click to time travel" title="Click to time travel ✨"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 40,
          background: "none", border: "none", cursor: "pointer", padding: 0,
          filter: "drop-shadow(0 0 12px rgba(100,200,255,0.8))", willChange: "transform",
        }}>
        <TardisIcon />
      </button>

      {/* ── Portal ── */}
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "rgba(2,4,12,0.92)", backdropFilter: "blur(14px)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Sphere wrapper */}
          <div onClick={(e) => e.stopPropagation()} style={{
            position: "relative",
            width: "min(700px, 92vw)", aspectRatio: "1",
            borderRadius: "50%", overflow: "hidden",
            boxShadow: [
              "0 0 0 1px rgba(255,255,255,0.06)",
              "0 0 60px 10px rgba(236,72,153,0.35)",
              "0 0 120px 30px rgba(99,102,241,0.25)",
              "0 0 200px 60px rgba(6,182,212,0.15)",
            ].join(","),
          }}>
            {/* Full-sphere canvas */}
            <canvas ref={canvasRef} width={700} height={700}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

            {/* Dark center mask so text is readable */}
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at 50% 50%, rgba(3,6,18,0.78) 28%, rgba(3,6,18,0.45) 52%, transparent 72%)",
              pointerEvents: "none",
            }} />

            {/* Content */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "clamp(90px,20%,140px)",
              gap: 12,
            }}>
              <p style={{
                fontFamily: "'Fira Code',monospace", fontSize: "clamp(9px,1.3vw,11px)",
                color: "#64ffda", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4,
              }}>
                Click to time travel
              </p>
              <h3 style={{
                fontFamily: "'Raleway',sans-serif", fontSize: "clamp(14px,2.2vw,20px)",
                fontWeight: 700, color: "#f8fafc", fontStyle: "italic",
                lineHeight: 1.35, textAlign: "center", marginBottom: 10,
              }}>
                Looking for a different site?<br />Go back in time...
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(6px,1.2vw,10px)", width: "100%" }}>
                {VERSIONS.map((v) => (
                  <a key={v.label} href={v.url} target="_blank" rel="noreferrer"
                    style={{
                      background: v.bg, backdropFilter: "blur(8px)",
                      border: `1px solid ${v.accent}55`, borderRadius: 10,
                      padding: "clamp(9px,1.6vw,14px)", textDecoration: "none",
                      transition: "transform 180ms, box-shadow 200ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06) translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 28px ${v.accent}55`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "clamp(8px,1vw,10px)", color: v.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{v.label}</div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: "clamp(11px,1.4vw,13px)", fontWeight: 700, color: "#e2e8f0", marginBottom: 3 }}>{v.title}</div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: "clamp(9px,1vw,11px)", color: "#94a3b8", lineHeight: 1.5 }}>{v.description}</div>
                  </a>
                ))}
              </div>

              <p style={{ fontFamily: "'Fira Code',monospace", fontSize: "clamp(8px,0.9vw,10px)", color: "#1e293b", letterSpacing: "0.1em", marginTop: 4 }}>
                ESC or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════
   Aurora painter — bright Siri-style liquid waves
   Uses layered sine-wave ribbons at full brightness
═══════════════════════════════════════════════════ */
function paintAurora(canvas, frame) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2, cy = H / 2, R = W / 2;
  const t = frame * 0.007;

  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.clip();

  /* 1 ── Deep dark base */
  ctx.fillStyle = "#04071a";
  ctx.fillRect(0, 0, W, H);

  /* 2 ── Big bright orbital blobs */
  const orbs = [
    { spd: 0.7,  phase: 0,   ox: 0.30, oy: 0.28, r: 0.58, rgb: "255,20,150",   a: 0.9  }, // hot pink
    { spd: 0.5,  phase: 2.1, ox: 0.35, oy: 0.30, r: 0.52, rgb: "120,60,255",   a: 0.85 }, // violet
    { spd: 0.6,  phase: 4.2, ox: 0.28, oy: 0.32, r: 0.50, rgb: "0,200,255",    a: 0.80 }, // cyan
    { spd: 0.45, phase: 1.0, ox: 0.25, oy: 0.25, r: 0.45, rgb: "80,200,120",   a: 0.70 }, // green
    { spd: 0.55, phase: 3.3, ox: 0.20, oy: 0.22, r: 0.42, rgb: "255,160,20",   a: 0.65 }, // amber
    { spd: 0.65, phase: 5.1, ox: 0.22, oy: 0.20, r: 0.40, rgb: "255,80,200",   a: 0.70 }, // magenta
  ];

  orbs.forEach(({ spd, phase, ox, oy, r, rgb, a }) => {
    const bx = cx + Math.sin(t * spd + phase) * R * ox;
    const by = cy + Math.cos(t * spd * 0.8 + phase) * R * oy;
    const br = R * r;
    const g  = ctx.createRadialGradient(bx, by, 0, bx, by, br);
    g.addColorStop(0,    `rgba(${rgb},${a})`);
    g.addColorStop(0.45, `rgba(${rgb},${(a * 0.5).toFixed(2)})`);
    g.addColorStop(1,    `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  });

  /* 3 ── Bright sine-wave ribbons */
  const ribbons = [
    { t_mul: 1.2, phase: 0,   rgb: "255,20,150",  alpha: 0.55, thick: 0.22, yBase: 0.42 },
    { t_mul: 0.9, phase: 1.8, rgb: "80,120,255",  alpha: 0.50, thick: 0.20, yBase: 0.50 },
    { t_mul: 1.4, phase: 3.5, rgb: "0,220,255",   alpha: 0.48, thick: 0.18, yBase: 0.58 },
    { t_mul: 0.8, phase: 5.2, rgb: "200,80,255",  alpha: 0.52, thick: 0.19, yBase: 0.35 },
    { t_mul: 1.1, phase: 2.7, rgb: "255,180,0",   alpha: 0.40, thick: 0.16, yBase: 0.66 },
  ];

  ribbons.forEach(({ t_mul, phase, rgb, alpha, thick, yBase }) => {
    const points = [];
    const STEPS  = 120;
    for (let i = 0; i <= STEPS; i++) {
      const nx = i / STEPS;
      const wave =
        Math.sin(nx * Math.PI * 3.5 + t * t_mul + phase) * 0.14 +
        Math.sin(nx * Math.PI * 6   + t * t_mul * 1.6 + phase * 1.3) * 0.07 +
        Math.sin(nx * Math.PI * 1.8 + t * t_mul * 0.7 + phase * 0.7) * 0.05;
      points.push({ x: nx * W, y: H * (yBase + wave) });
    }

    const ribbonH = H * thick;

    // Top fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(W, 0);
    ctx.lineTo(0, 0);
    ctx.closePath();
    const topG = ctx.createLinearGradient(0, 0, 0, H);
    topG.addColorStop(0,   `rgba(${rgb},0)`);
    topG.addColorStop(0.7, `rgba(${rgb},${(alpha * 0.3).toFixed(2)})`);
    topG.addColorStop(1,   `rgba(${rgb},${alpha})`);
    ctx.fillStyle = topG;
    ctx.fill();

    // Bottom fill
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    const botG = ctx.createLinearGradient(0, 0, 0, H);
    botG.addColorStop(0,   `rgba(${rgb},${alpha})`);
    botG.addColorStop(0.4, `rgba(${rgb},${(alpha * 0.4).toFixed(2)})`);
    botG.addColorStop(1,   `rgba(${rgb},0)`);
    ctx.fillStyle = botG;
    ctx.fill();

    // Bright glowing centerline
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = `rgba(${rgb},${Math.min(alpha * 1.8, 1).toFixed(2)})`;
    ctx.lineWidth   = 2.5;
    ctx.shadowColor = `rgba(${rgb},0.9)`;
    ctx.shadowBlur  = 18;
    ctx.stroke();
    ctx.shadowBlur = 0;
  });

  /* 4 ── Edge darkening */
  const edge = ctx.createRadialGradient(cx, cy, R * 0.38, cx, cy, R);
  edge.addColorStop(0,   "rgba(0,0,0,0)");
  edge.addColorStop(0.6, "rgba(0,0,0,0.05)");
  edge.addColorStop(0.85,"rgba(0,0,0,0.45)");
  edge.addColorStop(1,   "rgba(0,0,0,0.80)");
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, W, H);

  /* 5 ── Bright center shimmer */
  const sx = cx + Math.sin(t * 0.5) * R * 0.08;
  const sy = cy + Math.cos(t * 0.4) * R * 0.06;
  const shimmer = ctx.createRadialGradient(sx, sy, 0, sx, sy, R * 0.5);
  shimmer.addColorStop(0,   "rgba(255,255,255,0.32)");
  shimmer.addColorStop(0.25,"rgba(220,200,255,0.14)");
  shimmer.addColorStop(0.6, "rgba(100,150,255,0.05)");
  shimmer.addColorStop(1,   "rgba(0,0,0,0)");
  ctx.fillStyle = shimmer;
  ctx.fillRect(0, 0, W, H);

  ctx.restore();
}

/* ── TARDIS SVG ── */
function TardisIcon() {
  return (
    <svg width="52" height="56" viewBox="0 0 48 56" fill="none">
      <rect x="4"  y="12" width="40" height="40" rx="2" fill="#0d2a4a" stroke="#3b82f6" strokeWidth="1.2"/>
      <rect x="3"  y="8"  width="42" height="6"  rx="1" fill="#0f3460" stroke="#3b82f6" strokeWidth="1"/>
      <rect x="6"  y="5"  width="36" height="4"  rx="1" fill="#1a4a8a" stroke="#60a5fa" strokeWidth="0.8"/>
      <rect x="20" y="1"  width="8"  height="5"  rx="1" fill="#93c5fd"/>
      <rect x="21" y="0"  width="6"  height="2"  rx="1" fill="#bfdbfe"/>
      <ellipse cx="24" cy="3" rx="9" ry="5" fill="rgba(147,197,253,0.3)"/>
      <rect x="6"  y="15" width="15" height="10" rx="1" fill="#051525" stroke="#3b82f6" strokeWidth="0.8"/>
      <rect x="27" y="15" width="15" height="10" rx="1" fill="#051525" stroke="#3b82f6" strokeWidth="0.8"/>
      <line x1="13.5" y1="15" x2="13.5" y2="25" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
      <line x1="6"    y1="20" x2="21"   y2="20" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
      <line x1="34.5" y1="15" x2="34.5" y2="25" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
      <line x1="27"   y1="20" x2="42"   y2="20" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
      <rect x="4"  y="27" width="40" height="4"  rx="0.5" fill="#0f3460" stroke="#3b82f6" strokeWidth="0.5"/>
      <rect x="10" y="33" width="28" height="17" rx="1"   fill="#051525" stroke="#3b82f6" strokeWidth="0.8"/>
      <line x1="24" y1="33"  x2="24" y2="50"   stroke="#3b82f6" strokeWidth="0.7" opacity="0.8"/>
      <line x1="10" y1="41.5" x2="38" y2="41.5" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5"/>
      <circle cx="26.5" cy="42.5" r="1.2" fill="#93c5fd"/>
      <rect x="4" y="12" width="40" height="40" rx="2" fill="url(#sg)" opacity="0.15"/>
      <defs>
        <radialGradient id="sg" cx="35%" cy="25%">
          <stop offset="0%"   stopColor="#93c5fd"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
    </svg>
  );
}