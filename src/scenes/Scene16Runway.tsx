import { MistGlow } from "../visuals/MistGlow";
import { Product } from "../visuals/Product";
import { Title, At } from "../visuals/Elements";
import { DrawPath, DataPulse } from "../motion/Paths";
export default function Scene16Runway() {
  return (
    <>
      <Title n={16} section="15 / PREVIEW READINESS" />
      <svg className="runway-svg" viewBox="0 0 1920 1080" aria-hidden="true">
        <path d="M250 930L1490 350L1720 930Z" fill="#0d343533" />
        <DrawPath d="M250 930L1490 350L1720 930" accent soft={false} />
        <DataPulse d="M350 930L1490 350" />
        <DataPulse d="M1550 930L1490 350" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path
            key={i}
            d={`M${310 + i * 132} ${900 - i * 65}L${1680 - i * 20} ${900 - i * 65}`}
            stroke="#37e6d12b"
          />
        ))}
      </svg>
      <At x={1490} y={360}>
        <Product name="fabric" size={130} />
      </At>
      {["TENANT", "CAPACITY", "WORKSPACE", "TOOLS", "DATA ACCESS"].map(
        (s, i) => (
          <At key={s} x={530 + i * 230} y={880 - i * 100} width={350}>
            <div
              className="checkpoint"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <MistGlow />
              <span>0{i + 1}</span>
              <strong>{s}</strong>
            </div>
          </At>
        ),
      )}
      <p className="bottom-statement">
        Check supported region and item permissions before a POC.
      </p>
    </>
  );
}

