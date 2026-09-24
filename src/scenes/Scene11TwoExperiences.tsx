import {
  Title,
  At,
  BusinessEvent,
  AnalyticsSurface,
  ApplicationSurface,
} from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene11TwoExperiences() {
  return (
    <>
      <Title n={11} section="10 / SAME EVENT, DIFFERENT JOB" />
      <div className="lens lens-left" />
      <div className="lens lens-right" />
      <Paths
        paths={["M960 575Q760 435 600 565", "M960 575Q1160 435 1320 565"]}
      />
      <At x={960} y={420} width={260}>
        <BusinessEvent />
      </At>
      <div className="experience left lower">
        <AnalyticsSurface />
      </div>
      <div className="experience right lower">
        <ApplicationSurface />
      </div>
      <At x={480} y={930} width={600}>
        <h3>
          Dashboard <em>— ANALYZE</em>
        </h3>
      </At>
      <At x={1440} y={930} width={600}>
        <h3>
          Application <em>— ACT</em>
        </h3>
      </At>
    </>
  );
}
