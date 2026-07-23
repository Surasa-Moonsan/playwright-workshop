import { test, expect } from '@playwright/test';

test('login with valid username and password should redirect to profile page', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.fill('id=userName', 'demoqa');
  await page.fill('id=password', 'Welcome1!');
  await page.click('id=login');

  await page.waitForSelector('id=submit');
  const userName = await page.textContent('id=userName-value');
  await expect(userName).toEqual('demoqa');
});