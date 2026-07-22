const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const proj = { name: 'shri-hit-seva', url: 'https://shri-hit-seva-67190923601.asia-southeast1.run.app' };
const outDir = path.join(__dirname, 'public', 'projects');

async function takeScreenshots() {
  const browser = await puppeteer.launch({ headless: 'new' });
  console.log(`Navigating to ${proj.url}...`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto(proj.url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));
    const outPath = path.join(outDir, `${proj.name}.png`);
    await page.screenshot({ path: outPath });
    console.log(`Saved screenshot to ${outPath}`);
  } catch (e) {
    console.error(`Failed to snapshot ${proj.name}: ${e.message}`);
  }
  await page.close();
  await browser.close();
}

takeScreenshots();
