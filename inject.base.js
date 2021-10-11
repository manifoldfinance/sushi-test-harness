"use strict";

const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("http://app.sushi.com");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();