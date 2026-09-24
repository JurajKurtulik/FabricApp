import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
export function ParticleField({
  opening = false,
  closing = false,
}: {
  opening?: boolean;
  closing?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const c = canvas.getContext("2d");
    if (!c) return;
    const dpr = Math.min(devicePixelRatio, 2);
    canvas.width = 1920 * dpr;
    canvas.height = 1080 * dpr;
    c.scale(dpr, dpr);
    const palette = ["#37e6d1", "#39c6ff", "#8b6cff"];
    const particles = Array.from({ length: 100 }, (_, i) => ({
      x: (i * 719) % 1920,
      y: (i * 397) % 1080,
      r: 1 + (i % 3),
      a: i * 2.399,
      s: 0.3 + (i % 7) / 12,
    }));
    let raf = 0,
      time = 0,
      last = 0;
    const paint = (now: number) => {
      const delta = last ? Math.min(now - last, 50) : 0;
      last = now;
      time += delta;
      const t = time / 1000;
      c.clearRect(0, 0, 1920, 1080);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let x = p.x,
          y = p.y;
        if (opening && !reduced && t < 3.6) {
          const u = Math.max(0, Math.min(1, (t - 0.4) / 2.25));
          const k = 1 - u * u * u;
          x = 1267 + (p.x - 1267) * k;
          y = 518 + (p.y - 518) * k;
          if (t > 2.8) {
            const v = (t - 2.8) * 450;
            x = 1267 + Math.cos(p.a) * v * p.s;
            y = 518 + Math.sin(p.a) * v * p.s;
          }
        } else if (closing) {
          x = 1267 + ((p.x + t * 45) % 1000);
          y = 518 + Math.sin(p.a) * (x - 1267) * 0.55;
        } else {
          x = (p.x + t * 4 * p.s) % 1920;
          y = p.y + Math.sin(t * 0.15 + p.a) * 15;
        }
        c.globalAlpha = opening && t < 0.4 ? 0 : 0.25 + (i % 4) * 0.12;
        c.fillStyle = palette[i % 3];
        c.beginPath();
        c.arc(x, y, p.r, 0, Math.PI * 2);
        c.fill();
        if (opening && t > 0.9 && t < 2.65) {
          c.strokeStyle = c.fillStyle;
          c.lineWidth = 0.6;
          c.beginPath();
          c.moveTo(x, y);
          c.lineTo(x + (p.x - 1267) * 0.06, y + (p.y - 518) * 0.06);
          c.stroke();
        }
      }
      if (!reduced) raf = requestAnimationFrame(paint);
    };
    const visibility = () => {
      cancelAnimationFrame(raf);
      last = 0;
      if (!document.hidden) raf = requestAnimationFrame(paint);
    };
    document.addEventListener("visibilitychange", visibility);
    paint(0);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [opening, closing, reduced]);
  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
