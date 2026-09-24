import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

function pathEndpoints(d: string) {
  const values = d.match(/-?\d*\.?\d+/g)?.map(Number) ?? [0, 0, 1, 0];
  return {
    x1: values[0],
    y1: values[1],
    x2: values.at(-2) ?? values[0] + 1,
    y2: values.at(-1) ?? values[1],
  };
}
export function DrawPath({
  d,
  accent = false,
  soft = true,
  nearEnd = false,
}: {
  d: string;
  accent?: boolean;
  soft?: boolean;
  nearEnd?: boolean;
}) {
  const reduced = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const gradientId = `path-gradient-${id}`;
  const glowId = `path-glow-${id}`;
  const { x1, y1, x2, y2 } = pathEndpoints(d);
  const color = accent ? "#67f5dc" : "#63cfc7";
  const animation = {
    initial: reduced ? false : { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 1.05 },
  } as const;
  if (!soft) {
    return (
      <motion.path
        className="connector-solid"
        d={d}
        fill="none"
        stroke={accent ? "#37e6d1" : "#397980"}
        strokeWidth={accent ? 2.5 : 1.4}
        strokeLinecap="round"
        {...animation}
      />
    );
  }
  return (
    <>
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        >
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset=".16" stopColor={color} stopOpacity=".16" />
          <stop offset=".42" stopColor={color} stopOpacity=".62" />
          <stop offset=".56" stopColor="#b8fff0" stopOpacity=".78" />
          <stop
            offset={nearEnd ? ".93" : ".82"}
            stopColor={color}
            stopOpacity={nearEnd ? ".55" : ".16"}
          />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>
      <motion.path
        d={d}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={accent ? 7 : 5}
        strokeLinecap="round"
        filter={`url(#${glowId})`}
        opacity={accent ? 0.28 : 0.2}
        {...animation}
      />
      <motion.path
        d={d}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={accent ? 2.4 : 1.45}
        strokeLinecap="round"
        {...animation}
      />
    </>
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
export function Paths({
  paths,
  nearEnd = false,
}: {
  paths: string[];
  nearEnd?: boolean;
}) {
  return (
    <svg className="diagram-paths" viewBox="0 0 1920 1080" aria-hidden="true">
      {paths.map((d, i) => (
        <g key={d}>
          <DrawPath d={d} nearEnd={nearEnd} />
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

