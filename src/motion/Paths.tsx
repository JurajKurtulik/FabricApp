import { motion, useReducedMotion } from "framer-motion";
export function DrawPath({
  d,
  accent = false,
}: {
  d: string;
  accent?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={accent ? "#37e6d1" : "#397980"}
      strokeWidth={accent ? 2.5 : 1.4}
      initial={reduced ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.05 }}
    />
  );
}
export function DataPulse({
  d,
  delay = 0,
  duration = 6,
}: {
  d: string;
  delay?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <g
      className="data-pulse star-pulse"
      style={{
        offsetPath: `path("${d}")`,
        animationDelay: `-${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <circle r="12" fill="#73ffe1" opacity=".1" className="pulse-halo" />
      <circle r="5" fill="#9dffeb" opacity=".35" className="pulse-soft" />
      <circle r="1.8" fill="#effffb" opacity=".95" />
    </g>
  );
}
/** Connect the edges of a source mist and destination icon, never the label. */
export function spoke(
  cx: number,
  cy: number,
  x: number,
  y: number,
  start = 85,
  end = 38,
) {
  const length = Math.hypot(x - cx, y - cy);
  const dx = (x - cx) / length,
    dy = (y - cy) / length;
  return `M${cx + dx * start} ${cy + dy * start}L${x - dx * end} ${y - dy * end}`;
}
export function Paths({ paths }: { paths: string[] }) {
  return (
    <svg className="diagram-paths" viewBox="0 0 1920 1080" aria-hidden="true">
      {paths.map((d, i) => (
        <g key={d}>
          <DrawPath d={d} />
          <DataPulse d={d} delay={i * 0.6} />
        </g>
      ))}
    </svg>
  );
}
export function Orbit({
  cx = 960,
  cy = 610,
  rx = 500,
  ry = 280,
}: {
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
}) {
  return (
    <svg
      className="diagram-paths orbit"
      viewBox="0 0 1920 1080"
      aria-hidden="true"
    >
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx + 35}
        ry={ry + 25}
        className="outer-orbit"
      />
    </svg>
  );
}
