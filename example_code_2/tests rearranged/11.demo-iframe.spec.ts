import { test } from '@playwright/test';

test('demo iframe', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');
  const frame1 = page.frameLocator('id=frame1');
  const text = await frame1.locator('id=sampleHeading').textContent();
  console.log(text);
});