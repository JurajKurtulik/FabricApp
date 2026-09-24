import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
const manifest = JSON.parse(
  readFileSync("public/assets/manifest.json", "utf8"),
);
for (const [name, asset] of Object.entries(manifest)) {
  if (!asset.path) continue;
  assert(!asset.path.startsWith("/"), `${name}: use a base-relative path`);
  assert(existsSync(`public/${asset.path}`), `${name}: missing source asset`);
  assert(existsSync(`dist/${asset.path}`), `${name}: missing built asset`);
}
const html = readFileSync("dist/index.html", "utf8");
assert(html.includes("/FabricApp/assets/"), "Build must target /FabricApp/");
assert.equal(
  readdirSync("src/scenes").filter((n) => /^Scene\d{2}.*\.tsx$/.test(n)).length,
  19,
);
const spec = readFileSync(
  "fabric_apps_rayfin_live_web_presentation_spec.md",
  "utf8",
);
const { default: ts } = await import("typescript");
const compiled = ts.transpileModule(
  readFileSync("src/content/speakerNotes.ts", "utf8"),
  { compilerOptions: { module: ts.ModuleKind.ESNext } },
).outputText;
const { speakerNotes: notes } = await import(
  "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
);

const sceneSections = [...spec.matchAll(
  /## Scene (\d+) \u2014 ([\s\S]*?)(?=\n## Scene |\n# 10\. Navigation UI)/g,
)];
assert.equal(sceneSections.length, 19, "All specification note sections must be checked");
for (const match of sceneSections) {
  const expected = match[2]
    .split("### Speaker notes\n\n")[1]
    .split("\n\n---")[0]
    .trimEnd();
  assert.equal(
    notes[Number(match[1])],
    expected,
    `Scene ${match[1]} notes changed`,
  );
}
assert.equal(Object.keys(notes).length, 19);
console.log(
  "PASS: 19 scenes, verbatim notes, all local manifest assets and /FabricApp/ build paths",
);
