#!/usr/bin/env node
/**
 * Smoke-test live site: pages, email, images, no broken external URLs.
 */
const https = require('https');

const BASE = (process.env.TEST_BASE || 'https://mightytrucking.online').replace(/\/$/, '');
const PAGES = ['', 'about.html', 'offer.html', 'how-it-works.html', 'join.html', 'testimonials.html', 'privacy.html', 'terms.html'];
const IMAGES = [
  'assets/images/hero-trucking.jpg',
  'assets/images/truck-highway.jpg',
  'assets/images/truck-fleet.jpg',
  'assets/logos/mighty-trucking.svg',
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function main() {
  let failed = 0;

  for (const page of PAGES) {
    const url = page ? `${BASE}/${page}` : `${BASE}/`;
    const { status, body } = await get(url);
    const ok = status === 200;
    const email = body.includes('usamightytrucking@gmail.com');
    const bad = /pexels|pixabay|faiqtariq|USA Truck Connect/i.test(body);
    if (!ok || !email || bad) failed++;
    console.log(`${ok ? '✓' : '✗'} ${url} | email=${email} clean=${!bad}`);
  }

  for (const img of IMAGES) {
    const url = `${BASE}/${img}`;
    const { status } = await get(url);
    const ok = status === 200;
    if (!ok) failed++;
    console.log(`${ok ? '✓' : '✗'} ${url}`);
  }

  if (failed) {
    console.error(`\n${failed} check(s) failed.`);
    process.exit(1);
  }
  console.log('\nAll checks passed.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
