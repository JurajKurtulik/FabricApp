const { chromium } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
(async () => {
  const b = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_CHANNEL
      ? { channel: process.env.BROWSER_CHANNEL }
      : {}),
  });
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  fs.mkdirSync(".audit", { recursive: true });
  const errors = [],
    failed = [];
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("response", (r) => {
    if (r.status() >= 400) failed.push(r.url());
  });
  await p.goto("http://127.0.0.1:4173/FabricApp/#/10");
  await p.waitForTimeout(1400);
  assert.equal(await p.locator(".scene").count(), 1);
  assert(
    await p
      .locator(".scene")
      .innerText()
      .then((t) => t.includes("WHAT HAPPENED")),
  );
  await p.reload();
  assert(p.url().endsWith("#/10"));
  assert.equal(await p.locator(".notes-text").count(), 0);
  for (const [key, expected] of [
    ["ArrowRight", 11],
    ["ArrowLeft", 10],
    ["ArrowDown", 11],
    ["ArrowUp", 10],
    ["PageDown", 11],
    ["PageUp", 10],
    ["Space", 11],
    ["Home", 1],
    ["End", 19],
    ["ArrowRight", 19],
  ]) {
    await p.keyboard.press(key);
    await p.waitForTimeout(60);
    assert(p.url().endsWith("#/" + expected), key);
  }
  await p.keyboard.press("n");
  assert.equal(await p.getByRole("dialog").count(), 1);
  assert(
    await p
      .locator(".notes-text")
      .innerText()
      .then((t) => t.includes("If there is one thing")),
  );
  await p.keyboard.press("Escape");
  assert.equal(await p.getByRole("dialog").count(), 0);
  assert.equal(await p.locator(".notes-text").count(), 0);
  await p.keyboard.press("o");
  assert.equal(await p.locator(".overview-list button").count(), 19);
  await p.locator(".overview-list button").nth(9).click();
  assert(p.url().endsWith("#/10"));
  await p.keyboard.press("f");
  await p.waitForTimeout(200);
  assert(await p.evaluate(() => !!document.fullscreenElement));
  await p.keyboard.press("Escape");
  await p.waitForTimeout(200);
  assert(!(await p.evaluate(() => !!document.fullscreenElement)));
  for (const size of [
    [1366, 768],
    [1920, 1080],
    [2560, 1440],
    [390, 844],
  ]) {
    await p.setViewportSize({ width: size[0], height: size[1] });
    for (let i = 1; i <= 19; i++) {
      await p.goto("http://127.0.0.1:4173/FabricApp/#/" + i);
      await p.waitForTimeout(i === 1 ? 4500 : 1800);
      assert.equal(await p.locator(".scene").count(), 1);
      const bad = await p
        .locator(".scene img")
        .evaluateAll((imgs) =>
          imgs
            .filter((i) => !i.complete || i.naturalWidth === 0)
            .map((i) => i.src),
        );
      assert.deepEqual(bad, []);
      const clipped = await p
        .locator(".scene h1,.scene h2,.scene .product")
        .evaluateAll((els) =>
          els
            .filter((e) => {
              const r = e.getBoundingClientRect();
              return (
                r.left < -0.5 ||
                r.top < -0.5 ||
                r.right > innerWidth + 0.5 ||
                r.bottom > innerHeight + 0.5
              );
            })
            .map((e) => e.textContent || e.getAttribute("alt")),
        );
      assert.deepEqual(clipped, [], `Clipped scene ${i} at ${size}`);
    }
    console.log("PASS all scenes at", size);
  }
  await p.emulateMedia({ reducedMotion: "reduce" });
  await p.goto("http://127.0.0.1:4173/FabricApp/#/1");
  await p.waitForTimeout(100);
  assert.equal(
    await p
      .locator(".opening-copy")
      .evaluate((e) => getComputedStyle(e).opacity),
    "1",
  );
  assert.equal(
    await p.locator(".burst").evaluate((e) => getComputedStyle(e).display),
    "none",
  );
  for (const hash of ["#/0", "#/100", "#/nope"]) {
    await p.goto("http://127.0.0.1:4173/FabricApp/" + hash);
    await p.waitForTimeout(100);
    assert(["#/1", "#/19"].includes(new URL(p.url()).hash));
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(failed, []);
  fs.writeFileSync(
    ".audit/browser-results.json",
    JSON.stringify(
      {
        errors,
        failed,
        viewports: 4,
        scenes: 19,
        keyboard: true,
        fullscreen: true,
        notes: true,
        overview: true,
        reducedMotion: true,
      },
      null,
      2,
    ),
  );
  console.log(
    "PASS keyboard, deep link refresh, fullscreen, overlays, reduced motion, invalid hashes, no console errors or failed requests",
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

