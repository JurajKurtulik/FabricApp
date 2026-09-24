import { Title, At, Node } from "../visuals/Elements";
import { Paths, Orbit, spoke } from "../motion/Paths";
export default function Scene12Patterns() {
  return (
    <>
      <Title n={12} section="11 / REPEATABLE PATTERN" />
      <Orbit rx={605} ry={270} />
      <At x={960} y={625}>
        <Node name="fabric" label="FABRIC DATA" size={145} />
      </At>
      <Paths
        paths={[
          [400, 415],
          [960, 365],
          [1520, 415],
          [1520, 825],
          [960, 865],
          [400, 825],
        ].map(([x, y]) =>
          spoke(960, 625, x, y, x === 960 && y > 625 ? 150 : 100, x === 960 && y < 625 ? 145 : 34),
        )}
      />
      {[
        ["fraud", "FRAUD", "Investigate"],
        ["manufacturing", "MANUFACTURING", "Resolve exception"],
        ["retail", "RETAIL", "Approve change"],
        ["logistics", "LOGISTICS", "Handle delay"],
        ["quality", "DATA PLATFORM", "Triage quality"],
        ["service", "FIELD SERVICE", "Dispatch technician"],
      ].map(([n, l, v], i) => (
        <At
          key={n}
          x={[400, 960, 1520, 1520, 960, 400][i]}
          y={[415, 365, 415, 825, 865, 825][i]}
          width={430}
        >
          <Node name={n as "fraud"} label={l} verb={v} size={65} />
        </At>
      ))}
    </>
  );
}
