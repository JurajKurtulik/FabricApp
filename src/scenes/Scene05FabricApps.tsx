import { MistGlow } from "../visuals/MistGlow";
import { Product } from "../visuals/Product";
import { Title } from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene05FabricApps() {
  return (
    <>
      <Title n={5} section="04 / THE SHIFT" />
      <p className="substatement">
        An application becomes a <em>Fabric item.</em>
      </p>
      <div className="workspace">
        <div className="workspace-caption">
          <Product name="fabric" size={52} /> FABRIC WORKSPACE
        </div>
        <div className="workspace-plane plane-back" />
        <div className="workspace-plane" />
        <div className="app-center">
          <MistGlow />
          <strong>YOUR APPLICATION</strong>
          <Product name="apps" size={150} />
        </div>
        <div className="managed-services">
          {["AUTH", "DATA", "API", "HOSTING"].map((s) => (
            <span key={s}><MistGlow />{s}</span>
          ))}
        </div>
      </div>
      <Paths
        paths={["M610 810L960 600L1310 810", "M810 810L960 600L1110 810"]}
      />
    </>
  );
}
