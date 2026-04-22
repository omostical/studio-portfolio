import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const tab = await context.newPage();
  await tab.goto('http://localhost:3000/work/sevrin', { waitUntil: 'networkidle', timeout: 30000 });
  await tab.waitForTimeout(2500);
  await tab.screenshot({
    path: 'public/showcase/sevrin-hero.png',
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('✓ sevrin-hero.png');

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
