import { useState, useEffect, useRef, useCallback } from "react";

const TRAVEL_YEARS = [1885, 1955, 1985, 2026, 3026];
const RING_COUNT = 5;

/* Detect reduced-motion preference */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function EasterEgg() {
  /* "idle" | "traveling" | "arrived" */
  const [phase, setPhase] = useState("idle");
  const [year, setYear] = useState(null);
  const rafRef   = useRef(null);
  const frameRef = useRef(0);
  const boxRef   = useRef(null);
  const timerRef = useRef([]);

  /* Floating TARDIS idle animation */
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const tick = () => {
      frameRef.current++;
      const f = frameRef.current;
      if (boxRef.current) {
        const y = Math.sin(f * 0.035) * 4;
        const r = Math.sin(f * 0.018) * 5;
        boxRef.current.style.transform = `translateY(${y}px) rotate(${r}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* Clear pending timers on unmount */
  useEffect(() => {
    return () => timerRef.current.forEach(clearTimeout);
  }, []);

  const triggerTimeTravel = useCallback(() => {
    if (phase !== "idle") return;
    const destination = TRAVEL_YEARS[Math.floor(Math.random() * TRAVEL_YEARS.length)];
    setYear(destination);
    setPhase("traveling");

    const reducedMotion = prefersReducedMotion();

    /* Flash the page briefly */
    if (!reducedMotion) {
      document.body.animate(
        [{ filter: "brightness(1)" }, { filter: "brightness(2.2)" }, { filter: "brightness(1)" }],
        { duration: 450, easing: "ease-out" }
      );
    }

    const t1 = setTimeout(() => setPhase("arrived"), reducedMotion ? 600 : 1300);
    const t2 = setTimeout(() => setPhase("idle"), reducedMotion ? 1200 : 2600);
    timerRef.current = [t1, t2];
  }, [phase]);

  /* Keyboard shortcuts: T to trigger, Escape to dismiss */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && phase !== "idle") {
        timerRef.current.forEach(clearTimeout);
        setPhase("idle");
      }
      if (e.key.toLowerCase() === "t" && phase === "idle") {
        triggerTimeTravel();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, triggerTimeTravel]);

  /* Lock body scroll while overlay is visible */
  useEffect(() => {
    document.body.style.overflow = phase !== "idle" ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  const reducedMotion = prefersReducedMotion();
  const overlayVisible = phase !== "idle";

  return (
    <>
      {/* ── TARDIS button ── */}
      <button
        ref={boxRef}
        onClick={triggerTimeTravel}
        aria-label="Time travel easter egg — click to jump through time"
        title="Time travel ✨"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 40,
          background: "none", border: "none", cursor: "pointer", padding: 0,
          filter: "drop-shadow(0 0 12px rgba(100,200,255,0.8))",
          willChange: "transform",
        }}
      >
        <TardisIcon />
      </button>

      {/* ── Warp overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Time travel sequence"
        aria-hidden={!overlayVisible}
        style={{
          position: "fixed", inset: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "radial-gradient(ellipse at center, rgba(5,15,50,0.97) 0%, rgba(2,4,18,0.99) 100%)",
          opacity: overlayVisible ? 1 : 0,
          pointerEvents: overlayVisible ? "auto" : "none",
          transition: reducedMotion ? "none" : "opacity 0.25s ease",
        }}
        onClick={() => {
          if (overlayVisible) {
            timerRef.current.forEach(clearTimeout);
            setPhase("idle");
          }
        }}
      >
        {/* Concentric warp rings */}
        {!reducedMotion && overlayVisible && Array.from({ length: RING_COUNT }, (_, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              borderRadius: "50%",
              border: "2px solid rgba(87,176,255,0.75)",
              animation: `warpPulse 1.4s linear infinite`,
              animationDelay: `${i * 0.22}s`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Center text */}
        <p
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "relative", zIndex: 2,
            fontFamily: "'Fira Code', monospace",
            fontSize: "clamp(22px, 5vw, 56px)",
            fontWeight: 800,
            color: "#d8ebff",
            letterSpacing: "0.06em",
            textAlign: "center",
            textShadow: "0 0 18px rgba(87,176,255,0.85), 0 0 40px rgba(87,176,255,0.4)",
            padding: "0 24px",
            transition: reducedMotion ? "none" : "opacity 0.3s ease",
          }}
        >
          {phase === "traveling" && `Jumping to ${year}…`}
          {phase === "arrived"   && `Arrived: ${year}`}
        </p>
      </div>

      {/* Keyframe styles injected via <style> tag */}
      <style>{`
        @keyframes warpPulse {
          0%   { transform: scale(0.3); opacity: 1; }
          100% { transform: scale(3.8); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes warpPulse { 0%, 100% { opacity: 0; } }
        }
      `}</style>
    </>
  );
}

/* ── TARDIS SVG ── */
function TardisIcon() {
  return (
    <svg width="52" height="56" viewBox="0 0 48 56" fill="none" aria-hidden="true">
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