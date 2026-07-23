import { test } from '@playwright/test';

test('basic playwright locator', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'demoqa');
    await page.fill('css=input[type="password"]', 'Welcome1!');
    await page.click('xpath=(//form//button)[1]');
    await page.waitForNavigation();
    const e = await page.waitForSelector('css=div.main-header');
    const headerText = await e.textContent();
    console.log(`Header Text = ${headerText}`);
});

test('invalid login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'demoqa');
    await page.fill('css=input[type="password"]', 'Welcome2');
    await page.click('id=userForm >> button.btn-primary >> nth=0');
    await page.waitForSelector('text=Invalid username or password!');
});

test('chain locator', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    
    test.setTimeout(0);
    await page.pause();
});
