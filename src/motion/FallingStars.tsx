import { randomSequence } from "./random";
const random = randomSequence(9654);
const stars = Array.from({ length: 38 }, () => ({
  x: random() * 100,
  dx: (random() - 0.5) * 46,
  size: 1 + random() * 2,
  duration: 2.8 + random() * 3.8,
  delay: -random() * 9,
}));
export function FallingStars() {
  return (
    <div className="falling-stars" aria-hidden="true">
      {stars.map((s, i) => (
        <i
          key={i}
          style={
            {
              left: `${s.x}%`,
              width: s.size,
              height: s.size,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              "--fall-drift": `${s.dx}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
