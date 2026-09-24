import { At } from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene03ActionGap() {
  return (
    <>
      <div className="question-center">
        <div className="eyebrow">02 / THE GAP</div>
        <h1>
          But then <em>what?</em>
        </h1>
        <p>THE USER HAS TO DO SOMETHING.</p>
      </div>
      <Paths
        paths={[
          "M220 455Q320 370 460 440",
          "M650 790Q900 900 1150 760",
          "M1220 395Q1490 320 1620 490",
          "M1640 580Q1740 750 1570 820",
        ]}
      />
      {[
        ["APPROVE", 350, 375],
        ["INVESTIGATE", 580, 810],
        ["ASSIGN", 1480, 360],
        ["ESCALATE", 1600, 640],
        ["RESOLVE", 1380, 840],
        ["TRACK", 260, 670],
      ].map(([s, x, y], i) => (
        <At
          key={s}
          x={Number(x)}
          y={Number(y)}
          className={"action-word drift d" + i}
        >
          <span>{s}</span>
        </At>
      ))}
      <div className="unresolved" />
    </>
  );
}
