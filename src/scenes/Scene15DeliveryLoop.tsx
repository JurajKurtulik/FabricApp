import { Product } from "../visuals/Product";
import { Title, At } from "../visuals/Elements";
import { Orbit, DrawPath, DataPulse } from "../motion/Paths";
export default function Scene15DeliveryLoop() {
  return (
    <>
      <Title n={15} section="14 / DELIVERY LOOP" />
      <Orbit cx={780} cy={625} rx={425} ry={270} />
      <svg className="diagram-paths" viewBox="0 0 1920 1080" aria-hidden="true">
        <DrawPath d="M780 355A425 270 0 1 1 779 355" accent />
        <DataPulse d="M780 355A425 270 0 1 1 779 355" />
      </svg>
      {["Describe", "Build", "Test", "Deploy", "Learn"].map((s, i) => (
        <At
          key={s}
          x={[780, 1184, 1030, 530, 376][i]}
          y={[355, 540, 844, 844, 540][i]}
          width={240}
        >
          <div className="loop-label">
            {s === "Deploy" && <Product name="fabric" size={70} />}
            <span>{s}</span>
          </div>
        </At>
      ))}
      <At x={780} y={625}>
        <div className="loop-center">
          ITERATE
          <br />
          <em>↻</em>
        </div>
      </At>
      <div className="terminal">
        <div className="editor-bar">RAYFIN CLI</div>
        <code>
          <span>$</span> npx rayfin up<span className="cursor">▍</span>
        </code>
        <p>
          Application configuration
          <br />
          Database schema
          <br />
          Frontend
        </p>
      </div>
    </>
  );
}
