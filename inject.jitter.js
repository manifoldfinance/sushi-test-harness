"use strict";

const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("http://app.sushi.com");
    // Converting a 'drag' step has to be done manually at this time
    await page.click("#web3-status-connected > div.mr-2");
    await page.click("[class^='p'], [class*=' p']");
    await page.click("[width='24']");
    // defaults to eth
    await page.click("#token-amount-input");
    // picks USDC
    await page.type("#token-amount-input", '0.1');
    await page.click("[class^='mt'], [class*=' mt']");
    await page.click("[alt='USDC']");
    // @action click swap
    await page.click("#swap-button");
    await page.click("#confirm-swap-or-send");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
