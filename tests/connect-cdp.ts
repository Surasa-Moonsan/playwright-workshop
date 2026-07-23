import { chromium } from '@playwright/test';

(async () => {
  console.log('1. connecting...');

  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  console.log('2. connected');

  console.log(browser.contexts().length);

  const context = browser.contexts()[0];
  console.log('3. got context');

  const page = context.pages()[0];
  console.log('4. got page');

  await page.goto('https://playwright.dev');
  console.log('5. goto success');

  await page.waitForTimeout(10000);
})();