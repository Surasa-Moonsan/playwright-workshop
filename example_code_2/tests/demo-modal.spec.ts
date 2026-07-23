import { test, expect } from '@playwright/test';

test('modal test', async ({ page }) => {
  await page.goto('https://demoqa.com/modal-dialogs');
  await page.click('id=showSmallModal');
  await page.click('id=closeSmallModal');
  await page.waitForSelector('id=closeSmallModal', { state: 'hidden' });
});

test('modal test#2', async ({ page }) => {
  await page.goto('https://demoqa.com/modal-dialogs');
  await page.click('id=showSmallModal');
  await page.click('id=closeSmallModal');
  await expect(page.locator('id=closeSmallModal')).toBeHidden();
});