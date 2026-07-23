import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://playwright.dev');

  await page.waitForTimeout(10000);
})();