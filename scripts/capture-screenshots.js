#!/usr/bin/env node
/**
 * Capture professional README screenshots from the live site.
 * Usage: SCREENSHOT_BASE=https://mightytrucking.online node scripts/capture-screenshots.js
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = (process.env.SCREENSHOT_BASE || 'https://mightytrucking.online').replace(/\/$/, '');
const OUT = path.join(__dirname, '..', 'docs', 'screenshots');

const pages = [
  { file: 'index.html', name: 'home', height: 920 },
  { file: 'about.html', name: 'about', height: 1000, scroll: 400 },
  { file: 'offer.html', name: 'offer', height: 1000 },
  { file: 'how-it-works.html', name: 'how-it-works', height: 1100, scroll: 500 },
  { file: 'testimonials.html', name: 'testimonials', height: 900 },
  { file: 'join.html', name: 'join', height: 1000 },
];

async function waitForImages(page) {
  await Promise.race([
    page.evaluate(() =>
      Promise.all(
        Array.from(document.images).map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          });
        })
      )
    ),
    page.waitForTimeout(4000),
  ]);
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true, channel: 'msedge' });
  } catch {
    return await chromium.launch({ headless: true });
  }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await launchBrowser();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: 'light',
  });

  for (const pageDef of pages) {
    const pg = await context.newPage();
    const url = `${BASE}/${pageDef.file}`;
    console.log(`Capturing ${url}...`);

    await pg.goto(url, { waitUntil: 'load', timeout: 60000 });
    await waitForImages(pg);
    await pg.waitForTimeout(800);

    if (pageDef.scroll) {
      await pg.evaluate((y) => window.scrollTo(0, y), pageDef.scroll);
      await pg.waitForTimeout(800);
    } else {
      await pg.evaluate(() => window.scrollTo(0, 0));
    }

    const height = pageDef.height || 900;
    await pg.screenshot({
      path: path.join(OUT, `${pageDef.name}.png`),
      clip: { x: 0, y: 0, width: 1440, height: Math.min(height, 1200) },
    });

    await pg.close();
    console.log(`  → docs/screenshots/${pageDef.name}.png`);
  }

  await browser.close();
  console.log('Done — 6 screenshots saved.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
