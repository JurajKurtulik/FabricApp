import { Title, At } from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene09WorkflowBoundary() {
  return (
    <>
      <Title n={9} section="08 / DECISION POINT" />
      <div className="journey-zone analytics-zone">ANALYTICS</div>
      <div className="journey-zone application-zone">APPLICATION</div>
      <Paths paths={["M210 620L1710 620"]} />
      <div className="hinge" />
      {["OBSERVE", "UNDERSTAND", "DECIDE", "ACT", "TRACK"].map((s, i) => (
        <At key={s} x={240 + i * 360} y={620} width={300}>
          <div className={"journey-step step" + i}>
            <i />
            <strong>{s}</strong>
          </div>
        </At>
      ))}
      <div className="boundary-caption">The workflow begins here</div>
    </>
  );
}
