import { test } from '@playwright/test';

test('basic locator', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://demoqa.com/login');
    
    const inputUsername = page.locator('id=userName');
    const inputPassword = page.locator('css=input[type="password"]');
    const loginBtn = page.locator('xpath=(//form//button)[1]');
    //const loginPageHeader = page.locator('#userName-label');
    const profileTextTest = page.locator('id=userName-label').nth(0);

    await inputUsername.fill('demoqa');
    await inputPassword.fill('Welcome1!');
    await loginBtn.click(),
    await page.waitForURL('**/profile');

    await profileTextTest.waitFor();
    const headerText = await profileTextTest.textContent();
    console.log(`Profile Text Test = ${headerText}`);
});

