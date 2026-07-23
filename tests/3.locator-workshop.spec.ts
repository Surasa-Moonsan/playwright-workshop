import { test, expect } from '@playwright/test';

test('@hover access sub menu', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // await page.hover('css=div.navbar__item.dropdown--hoverable >> nth=1');
    // await page.click('css=div.navbar__item.dropdown--hoverable >> nth=1 >> css=a[href*="/python/"]');

    await page.locator('//div[contains(@class,"dropdown--hoverable")]').hover();
    await page.locator('//a[@data-language-prefix="/python/"]').click();

    //await page.waitForSelector('text=Playwright for Python');

    
    // test.setTimeout(0);
    // await page.pause();
});

test('@dropdown', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/form-demo');
  await page.getByRole('combobox').selectOption('Thailand');
  await page.getByRole('combobox').selectOption({ value : 'PH'});
});
