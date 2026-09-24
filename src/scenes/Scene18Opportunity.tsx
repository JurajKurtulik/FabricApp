import { MistGlow } from "../visuals/MistGlow";
import { Paths } from "../motion/Paths";
export default function Scene18Opportunity() {
  return (
    <>
      <div className="opportunity">
        <div className="eyebrow">17 / OPPORTUNITY FILTER</div>
        <p>Where this fits</p>
        <h1>
          Where do users have insight,
          <br />
          but still leave Fabric
          <br />
          to <em>act?</em>
        </h1>
      </div>
      <Paths
        paths={[
          "M100 870C650 730 920 980 1760 810",
          "M1300 230Q1730 470 1580 710",
          "M100 950Q900 700 1800 960",
        ]}
      />
      <div className="opportunity-actions">
        {["APPROVE", "INVESTIGATE", "ASSIGN", "ESCALATE", "RESOLVE"].map(
          (s) => (
            <span key={s} className="drift">
              <MistGlow />
              {s}
            </span>
          ),
        )}
      </div>
    </>
  );
}
