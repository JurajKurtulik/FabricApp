import { Product } from "../visuals/Product";
import { Title } from "../visuals/Elements";
import { FallingStars } from "../motion/FallingStars";
export default function Scene06FabricAppsRayfin() {
  return (
    <>
      <Title n={6} section="05 / TWO NAMES, ONE MODEL" />
      <FallingStars />
      <div className="technical-layer runtime">
        <Product name="apps" size={115} />
        <div>
          <h3>Fabric App</h3>
          <p>What runs in Fabric</p>
        </div>
        <span>DEPLOYED APPLICATION</span>
      </div>
      <div className="technical-layer development">
        <Product name="rayfin" />
        <div>
          <p>How developers build it</p>
        </div>
        <span>SDK / CLI / TYPESCRIPT</span>
      </div>
    </>
  );
}
