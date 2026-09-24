import { Title, At, Node } from "../visuals/Elements";
import { Paths, Orbit, spoke } from "../motion/Paths";
export default function Scene07Focus() {
  return (
    <>
      <Title n={7} section="06 / FOCUS" />
      <div className="developer-focus">
        <div className="eyebrow">YOU FOCUS ON</div>
        <h3>Business model</h3>
        <h3>Business logic</h3>
        <h3>User experience</h3>
      </div>
      <Orbit cx={1320} cy={645} rx={360} ry={235} />
      <At x={1320} y={625}>
        <Node name="fabric" label="MANAGED CAPABILITIES" size={135} />
      </At>
      <Paths
        nearEnd
        paths={[
          [1050, 425],
          [1570, 440],
          [1630, 700],
          [1320, 890],
          [1020, 750],
        ].map(([x, y], i) =>
          spoke(1320, 625, x, y, 110, [0, 0, 95, 0, 95][i]),
        )}
      />
      {["Database", "APIs", "Authentication", "Hosting", "Deployment"].map(
        (s, i) => (
          <At
            key={s}
            x={[1050, 1570, 1630, 1320, 1020][i]}
            y={[425, 440, 700, 890, 750][i]}
          >
            <span className="service-label">{s}</span>
          </At>
        ),
      )}
    </>
  );
}

