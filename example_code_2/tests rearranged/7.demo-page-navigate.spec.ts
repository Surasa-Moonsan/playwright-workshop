import { test, expect } from '@playwright/test';

test('demo page navigate', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Elements')
    ]);
    
    test.setTimeout(0);
    await page.pause();
});

test('demo page navigate test#1', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.click('text=Elements');
  await page.waitForURL('**/elements');

  test.setTimeout(0);
  await page.pause();
});

test('demo page navigate test#2', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.click('text=Elements');
  await expect(page).toHaveURL(/elements/);

  test.setTimeout(0);
  await page.pause();
});