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
export function DataPulse({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <path
      className="data-pulse"
      d={d}
      fill="none"
      stroke="#7dffed"
      strokeWidth="3"
      pathLength="100"
      strokeDasharray="2 98"
      style={{ animationDelay: `${delay}s` }}
    />
  );
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
