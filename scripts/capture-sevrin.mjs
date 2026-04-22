import { chromium } from 'playwright';

const targets = process.argv.slice(2);
const pages = targets.length
  ? targets.map((slug) => ({ slug, url: `http://localhost:3000/work/${slug}` }))
  : [
      { slug: 'sevrin', url: 'http://localhost:3000/work/sevrin' },
      { slug: 'lumen', url: 'http://localhost:3000/work/lumen' },
    ];

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  for (const p of pages) {
    console.log(`Capturing ${p.slug}...`);
    const tab = await context.newPage();
    await tab.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
    await tab.waitForTimeout(2500);
    await tab.screenshot({
      path: `public/showcase/${p.slug}-hero.png`,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    await tab.close();
    console.log(`  ✓ ${p.slug}-hero.png`);
  }

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
