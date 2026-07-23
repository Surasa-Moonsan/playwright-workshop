import { test, expect } from '@playwright/test';

test('access sub menu', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.hover('css=div.navbar__item.dropdown--hoverable >> nth=1');
    await page.click('css=div.navbar__item.dropdown--hoverable >> nth=1 >> css=a[href*="/python/"]');
    await page.waitForSelector('text=Playwright for Python');

    test.setTimeout(0);
    await page.pause();
});

test('access sub menu claude ai', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const dropdown = page.locator('div.navbar__item.dropdown--hoverable', { hasText: 'Node.js' });
  await dropdown.hover();
  await dropdown.getByRole('link', { name: 'Python', exact: true }).click();

  await expect(page).toHaveURL(/\/python\//);
});