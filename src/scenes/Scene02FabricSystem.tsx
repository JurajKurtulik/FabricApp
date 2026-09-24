import { Title, At, Node } from "../visuals/Elements";
import { Paths, Orbit, spoke } from "../motion/Paths";
export default function Scene02FabricSystem() {
  return (
    <>
      <Title n={2} section="01 / THE FOUNDATION" />
      <Orbit rx={580} ry={270} />
      <Paths
        paths={[
          [480, 470],
          [1440, 470],
          [590, 800],
          [1330, 800],
          [960, 355],
        ].map(([x, y]) => spoke(960, 620, x, y, 90, 35))}
      />
      <At x={960} y={620}>
        <Node name="fabric" label="Microsoft Fabric" size={170} />
      </At>
      <At x={480} y={470}>
        <Node name="rti" label="Real-Time Intelligence" verb="DETECT" />
      </At>
      <At x={1440} y={470}>
        <Node name="powerBI" label="Power BI" verb="UNDERSTAND" />
      </At>
      <At x={590} y={800}>
        <Node name="oneLake" label="OneLake" verb="UNIFY" />
      </At>
      <At x={1330} y={800}>
        <Node name="copilot" label="AI / Copilot" verb="ENRICH" />
      </At>
      <At x={960} y={355}>
        <Node name="governance" label="Governance" verb="TRUST" />
      </At>
    </>
  );
}
