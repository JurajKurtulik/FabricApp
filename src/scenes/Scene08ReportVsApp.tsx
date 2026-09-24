import {
  Title,
  At,
  BusinessEvent,
  AnalyticsSurface,
  ApplicationSurface,
} from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene08ReportVsApp() {
  return (
    <>
      <Title n={8} section="07 / COMPLEMENTARY ROLES" />
      <div className="experience-label left">
        <span>POWER BI / RTI</span>
        <h3>Why is this happening?</h3>
      </div>
      <div className="experience-label right">
        <span>FABRIC APP</span>
        <h3>What should I do next?</h3>
      </div>
      <Paths paths={["M960 650L800 650", "M960 650L1120 650"]} />
      <div className="experience left">
        <AnalyticsSurface />
      </div>
      <At x={960} y={650} width={220}>
        <BusinessEvent />
      </At>
      <div className="experience right">
        <ApplicationSurface />
      </div>
    </>
  );
}
