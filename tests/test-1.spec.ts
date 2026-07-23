import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('button', { name: 'Java' }).click();
  await page.getByRole('link', { name: 'Python' }).click();
});