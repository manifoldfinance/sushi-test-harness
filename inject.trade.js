"use strict";

const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("http://app.sushi.com");
    await page.click("#web3-status-connected > div.mr-2");
    await page.click("[class^='p'], [class*=' p']");
    await page.click("[width='24']");
    await page.click("#token-amount-input");
    await page.type("#token-amount-input", '0.1');
    await page.click("[class^='mt'], [class*=' mt']");
    await page.click("[alt='USDC']");
    await page.click("#swap-button");
    await page.click("#confirm-swap-or-send");
    await page.click("[x1='6']");
    await page.click("#token-amount-input");
    await page.type("#token-amount-input", '0.1');
    await page.click("#swap-button");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
