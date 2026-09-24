import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { randomSequence } from "./random";

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
    const random = randomSequence(481913);
    const palette = ["#a4fff0", "#37e6d1", "#39c6ff", "#8b6cff"];
    // Build once, never allocate particle records in the animation loop.
    const particles = Array.from({ length: opening ? 260 : 110 }, () => ({
      x: random() * 1920,
      y: random() * 1080,
      r: 0.65 + random() * 1.75,
      angle: random() * Math.PI * 2,
      distance: 1050 + random() * 1050,
      speed: 0.2 + random() * 0.9,
      phase: random() * Math.PI * 2,
      start: 0.35 + random() * 2.7,
      arrival: 5.85 + random() * 0.6,
      alpha: 0.15 + random() * 0.45,
      color: palette[Math.floor(random() * palette.length)],
      bend: (random() - 0.5) * 0.8,
    }));
    const core = c.createRadialGradient(1267, 518, 0, 1267, 518, 420);
    core.addColorStop(0, "#f2fffa");
    core.addColorStop(0.035, "#c1fff2");
    core.addColorStop(0.16, "#57efd3aa");
    core.addColorStop(0.46, "#37e6d12a");
    core.addColorStop(1, "#37e6d100");
    let raf = 0,
      time = 0,
      last = 0;
    const paint = (now: number) => {
      time += last ? Math.min(now - last, 50) : 0;
      last = now;
      const t = time / 1000;
      c.clearRect(0, 0, 1920, 1080);
      if (opening && !reduced && t < 8) {
        c.globalAlpha =
          t < 6.5
            ? Math.pow(Math.max(0, (t - 1.5) / 5), 2) * 0.8
            : Math.max(0, 1 - (t - 6.5) / 1.5);
        c.fillStyle = core;
        c.fillRect(800, 40, 950, 950);
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let x = p.x,
          y = p.y,
          alpha = p.alpha,
          radius = p.r;
        if (opening && !reduced && t < 8) {
          if (t < p.start) continue;
          if (t < 6.55) {
            const u = Math.min(1, (t - p.start) / (p.arrival - p.start));
            const distance = p.distance * (1 - u * u * u);
            const a = p.angle + p.bend * Math.sin(u * Math.PI);
            x = 1267 + Math.cos(a) * distance;
            y = 518 + Math.sin(a) * distance;
            alpha *= Math.min(1, (t - p.start) * 2);
            radius *= 0.5 + u;
            if (u > 0.3 && u < 0.97) {
              c.globalAlpha = alpha * 0.24;
              c.strokeStyle = p.color;
              c.lineWidth = radius * 0.65;
              c.lineCap = "round";
              c.beginPath();
              c.moveTo(x, y);
              c.lineTo(
                x + Math.cos(a) * (8 + u * 32),
                y + Math.sin(a) * (8 + u * 32),
              );
              c.stroke();
            }
          } else {
            const u = (t - 6.55) / 1.45;
            // Accelerate outward at different rates so the burst reads as
            // irregular radiating light rather than a circular particle rim.
            const distance =
              u * u * (300 + p.distance * 0.65) * (0.55 + p.speed * 0.65);
            x = 1267 + Math.cos(p.angle) * distance;
            y = 518 + Math.sin(p.angle) * distance;
            alpha *= 1 - u;
          }
        } else if (closing) {
          x = 1267 + ((p.x + t * 45 * p.speed) % 1100);
          y = 518 + Math.sin(p.angle) * (x - 1267) * 0.55;
        } else {
          if (i >= 110) continue;
          x =
            (p.x + t * 3 * p.speed + Math.sin(t * 0.08 + p.phase) * 9 + 1920) %
            1920;
          y = (p.y + Math.sin(t * 0.12 + p.phase) * 17 + 1080) % 1080;
          alpha *= 0.8 + 0.2 * Math.sin(t * 0.45 + p.phase);
        }
        c.fillStyle = p.color;
        c.globalAlpha = alpha * 0.1;
        c.beginPath();
        c.arc(x, y, radius * 3.5, 0, Math.PI * 2);
        c.fill();
        c.globalAlpha = alpha;
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2);
        c.fill();
      }
      if (!reduced && !document.hidden) raf = requestAnimationFrame(paint);
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

