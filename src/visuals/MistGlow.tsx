import { randomSequence } from "../motion/random";
const random = randomSequence(7359);
const stars = Array.from({ length: 22 }, () => ({
  left: `${8 + random() * 84}%`,
  top: `${10 + random() * 80}%`,
  size: 0.8 + random() * 1.5,
  delay: -random() * 12,
}));
/** Soft light and sparse dust; no geometric panel or visible perimeter. */
export function MistGlow() {
  return (
    <span className="mist-glow" aria-hidden="true">
      <span className="mist-light" />
      {stars.map((s, i) => (
        <i
          key={i}
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </span>
  );
}
