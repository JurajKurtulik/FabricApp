import { Product } from "../visuals/Product";

import { DataPulse } from "../motion/Paths";
export default function Scene19Takeaway() {
  return (
    <>
      <div className="closing-copy">
        <div className="eyebrow">THE TAKEAWAY</div>
        <h1>
          Fabric does not have
          <br />
          to stop at <em>insight.</em>
        </h1>
        <p>
          Fabric Apps + Rayfin
          <br />
          extend the journey into action.
        </p>
        <div className="closing-journey">
          <span>INSIGHT</span>
          <i>→</i>
          <span>DECISION</span>
          <i>→</i>
          <span>ACTION</span>
        </div>
      </div>
      <div className="closing-mark">
        <Product name="fabric" size={190} />
      </div>
      <svg
        className="closing-streams"
        viewBox="0 0 1920 1080"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <g key={i}>
            <path
              d={`M1267 518Q1550 ${300 + i * 40} 2000 ${100 + i * 90}`}
              fill="none"
              stroke={["#37e6d1", "#39c6ff", "#8b6cff"][i % 3]}
              strokeOpacity=".15"
            />
            <DataPulse
              d={`M1267 518Q1550 ${300 + i * 40} 2000 ${100 + i * 90}`}
              delay={i * 0.3}
            />
          </g>
        ))}
      </svg>
      <small className="exit-hint">Esc — exit fullscreen</small>
    </>
  );
}
