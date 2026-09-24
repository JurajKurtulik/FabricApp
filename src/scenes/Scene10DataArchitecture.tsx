import { MistGlow } from "../visuals/MistGlow";
import { Title, At, Node } from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene10DataArchitecture() {
  return (
    <>
      <Title n={10} section="09 / DATA ARCHITECTURE" />
      <At x={490} y={340} width={600}>
        <h3>
          WHAT <em>HAPPENED</em>
        </h3>
      </At>
      <At x={1410} y={340} width={600}>
        <h3>
          WHAT <em>WE DID</em>
        </h3>
      </At>
      <Paths
        paths={[
          "M350 490L570 630L350 805",
          "M720 490L570 630L720 805",
          "M570 630L1280 630",
          "M1280 630L1450 480",
          "M1280 630L1650 580",
          "M1280 630L1530 790",
          "M1280 630L1240 870",
        ]}
      />
      {[
        ["lakehouse", "Lakehouse", 350, 490],
        ["warehouse", "Warehouse", 720, 490],
        ["eventhouse", "Eventhouse", 350, 805],
        ["semantic", "Semantic model", 720, 805],
      ].map(([n, l, x, y]) => (
        <At key={n} x={Number(x)} y={Number(y)}>
          <Node name={n as "lakehouse"} label={String(l)} size={80} />
        </At>
      ))}
      <At x={570} y={630}>
        <div className="record-anchor">
          <MistGlow />
          Business record
        </div>
      </At>
      <At x={950} y={570} width={350}>
        <div className="correlation-label">
          REFERENCE
          <br />
          <small>do not duplicate</small>
        </div>
      </At>
      {[
        ["Case", 1280, 630],
        ["Owner", 1450, 480],
        ["Status", 1650, 580],
        ["Notes", 1530, 790],
        ["Decision", 1240, 870],
      ].map(([l, x, y]) => (
        <At key={l} x={Number(x)} y={Number(y)} width={220}>
          <div className={"state-node " + (l === "Case" ? "primary" : "")}>
            <MistGlow />
            {l}
          </div>
        </At>
      ))}
      <div className="data-footer">
        <span>Fabric data</span>
        <span>App-owned state</span>
      </div>
    </>
  );
}
