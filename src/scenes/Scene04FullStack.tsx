import { MistGlow } from "../visuals/MistGlow";
import { Title, At } from "../visuals/Elements";
import { Paths, Orbit, spoke } from "../motion/Paths";
export default function Scene04FullStack() {
  return (
    <>
      <Title n={4} section="03 / THE OLD APPROACH" />
      <Orbit rx={615} ry={280} />
      <Orbit rx={470} ry={195} />
      <At x={960} y={610} width={440}>
        <div className="workflow-core">
          <MistGlow />
          Investigate
          <br />
          <em>an exception</em>
        </div>
      </At>
      <Paths
        paths={[
          [420, 420],
          [750, 345],
          [1190, 345],
          [1510, 440],
          [1510, 780],
          [1180, 900],
          [700, 895],
          [360, 730],
        ].map(([x, y]) => spoke(960, 610, x, y - 26, 165, 31))}
      />
      {[
        "Database",
        "API",
        "Authentication",
        "Hosting",
        "Permissions",
        "Deployment",
        "Frontend",
        "Monitoring",
      ].map((s, i) => (
        <At
          key={s}
          x={[420, 750, 1190, 1510, 1510, 1180, 700, 360][i]}
          y={[420, 345, 345, 440, 780, 900, 895, 730][i]}
        >
          <div className="infra-node">
            <MistGlow />
            <span className="technical-symbol">
              {["◉", "{ }", "⌘", "◇", "⊙", "↑", "〈 〉", "∿"][i]}
            </span>
            <strong>{s}</strong>
          </div>
        </At>
      ))}
    </>
  );
}
