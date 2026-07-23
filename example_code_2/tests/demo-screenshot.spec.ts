import { test } from '@playwright/test';

test('screenshot invalid login', async ({ page }) => {
    test.setTimeout(0);
    await page.pause();

    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'demoqa');
    await page.fill('css=input[type="password"]', 'Welcome2');
    await page.click('id=userForm >> button.btn-primary >> nth=0');
    await page.waitForSelector('text=Invalid username or password!');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.locator('text=Invalid username or password!').screenshot({ path: 'screenshot-element.png'});
});