const { chromium } = require("playwright");
const fs = require("node:fs");
(async () => {
  const minutes = Number(process.env.SOAK_MINUTES || 45);
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_CHANNEL
      ? { channel: process.env.BROWSER_CHANNEL }
      : {}),
  });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://127.0.0.1:4173/FabricApp/#/19");
  const started = Date.now();
  for (let m = 0; m < minutes; m++) {
    await page.waitForTimeout(60000);
    if ((await page.locator("canvas").count()) !== 1)
      throw Error("Canvas leaked");
    if ((await page.locator(".scene").count()) !== 1)
      throw Error("Inactive scene leaked");
    if (errors.length) throw Error(errors.join("\n"));
    console.log(`Stable: ${m + 1}/${minutes} minutes`);
  }
  await page.keyboard.press("Home");
  await page.waitForTimeout(4500);
  await page.keyboard.press("End");
  await page.waitForTimeout(1500);
  if (errors.length) throw Error(errors.join("\n"));
  fs.mkdirSync(".audit", { recursive: true });
  fs.writeFileSync(
    ".audit/soak-results.json",
    JSON.stringify({ elapsedMs: Date.now() - started, errors }, null, 2),
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
