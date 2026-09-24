import { Product } from "../visuals/Product";
import { Title, At } from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene14Copilot() {
  return (
    <>
      <Title n={14} section="13 / DEVELOPER ACCELERATION" />
      <p className="substatement">
        Describe intent. <em>Let the agent handle more of the plumbing.</em>
      </p>
      <div className="copilot-prompt">
        <Product name="githubCopilot" />
        <div className="eyebrow">DESCRIBE INTENT</div>
        <blockquote>
          Read Fabric data.
          <br />
          Create cases. Add notes.
          <br />
          Escalate and close.
        </blockquote>
        <div className="agent-status">
          <i className="status-dot" /> Agent working in a Rayfin project
        </div>
      </div>
      <Paths
        paths={[
          "M830 630L1090 455L1510 400",
          "M1090 455L1570 570",
          "M1090 455L1180 710L1510 840",
        ]}
      />
      {["Entities", "React UI", "Queries", "Validation", "Build fixes"].map(
        (s, i) => (
          <At
            key={s}
            x={[1090, 1510, 1570, 1180, 1510][i]}
            y={[455, 400, 570, 710, 840][i]}
            width={320}
          >
            <div className="project-file">
              <span>
                {["model.ts", "App.tsx", "data.ts", "rules.ts", "terminal"][i]}
              </span>
              <h3>{s}</h3>
              <div className="file-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </At>
        ),
      )}
    </>
  );
}
