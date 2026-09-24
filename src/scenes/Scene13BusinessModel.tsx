import { Title, At, CodeSurface } from "../visuals/Elements";
import { Paths } from "../motion/Paths";
export default function Scene13BusinessModel() {
  return (
    <>
      <Title n={13} section="12 / DEVELOPMENT MODEL" />
      <div className="model-code">
        <CodeSurface />
      </div>
      <Paths paths={["M1080 540L1320 420L1640 550L1330 760"]} />
      <At x={1320} y={420}>
        <div className="artifact">
          <span>01 / GENERATED</span>
          <h3>SQL schema</h3>
          <div className="schema-lines">id · eventId · owner · status</div>
        </div>
      </At>
      <At x={1610} y={580}>
        <div className="artifact">
          <span>02 / EXPOSED</span>
          <h3>GraphQL API</h3>
          <code>query {"{ cases { id } }"}</code>
        </div>
      </At>
      <At x={1320} y={770}>
        <div className="artifact">
          <span>03 / CONNECTED</span>
          <h3>typed client</h3>
          <code>app.cases</code>
        </div>
      </At>
      <div className="pipeline-label">
        TypeScript <em>→</em> SQL schema <em>→</em> GraphQL API <em>→</em> typed
        client
      </div>
      <p className="bottom-statement">
        The app model is code. <em>The backend follows.</em>
      </p>
    </>
  );
}
