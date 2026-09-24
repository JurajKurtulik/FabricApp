import { Product } from "../visuals/Product";
import { Title, At } from "../visuals/Elements";
import { Paths, Orbit } from "../motion/Paths";
export default function Scene17FourQuestions() {
  return (
    <>
      <Title n={17} section="16 / IMPLEMENTATION CHOICES" />
      <Orbit rx={540} ry={245} />
      <At x={960} y={630}>
        <div className="application-core">
          <Product name="apps" size={100} />
          <strong>APPLICATION</strong>
        </div>
      </At>
      <Paths
        paths={[
          "M960 630L450 445",
          "M960 630L1470 445",
          "M960 630L450 835",
          "M960 630L1470 835",
        ]}
      />
      {[
        ["SOURCE", "Where does the business data live?"],
        ["STATE", "What must the app itself own?"],
        ["USERS", "Who may do what in the app?"],
        ["LIFECYCLE", "How will we deploy and operate it?"],
      ].map(([l, q], i) => (
        <At
          key={l}
          x={[450, 1470, 450, 1470][i]}
          y={[445, 445, 835, 835][i]}
          width={470}
        >
          <div className="design-question">
            <span>
              0{i + 1} / {l}
            </span>
            <h3>{q}</h3>
          </div>
        </At>
      ))}
    </>
  );
}
