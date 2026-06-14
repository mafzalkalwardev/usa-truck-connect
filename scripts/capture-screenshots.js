#!/usr/bin/env node
/**
 * Capture website screenshots for README documentation.
 * Usage: node scripts/capture-screenshots.js
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = process.env.SCREENSHOT_BASE || 'https://mafzalkalwardev.github.io/usa-truck-connect';
const OUT = path.join(__dirname, '..', 'docs', 'screenshots');

const pages = [
  { file: 'index.html', name: 'home', label: 'Home Page' },
  { file: 'about.html', name: 'about', label: 'About Page' },
  { file: 'offer.html', name: 'offer', label: 'Offer Page' },
  { file: 'how-it-works.html', name: 'how-it-works', label: 'How It Works' },
  { file: 'testimonials.html', name: 'testimonials', label: 'Testimonials' },
  { file: 'join.html', name: 'join', label: 'Join Form' },
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  for (const page of pages) {
    const pg = await context.newPage();
    const url = `${BASE}/${page.file}`;
    console.log(`Capturing ${url}...`);
    await pg.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await pg.waitForTimeout(1500);
    await pg.screenshot({
      path: path.join(OUT, `${page.name}.png`),
      fullPage: true,
    });
    await pg.close();
    console.log(`  → docs/screenshots/${page.name}.png`);
  }

  await browser.close();
  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
