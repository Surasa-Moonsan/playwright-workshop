import { expect, test } from '@playwright/test';

test('basic assert', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    
    const inputUsername = page.locator('id=userName');
    const inputPassword = page.locator('css=input[type="password"]');
    const loginBtn = page.locator('xpath=(//form//button)[1]');
    const loginPageHeader = page.locator('css=div.main-header');
    const usernameLabel = page.locator('id=userName-value');
    
    await inputUsername.fill('demoqa');
    await inputPassword.fill('Welcome1!');
    await Promise.all([
        page.waitForNavigation(),
        loginBtn.click(),
    ]);
    await loginPageHeader.waitFor();
    await expect(loginPageHeader).toHaveText('Profile');
    await expect(usernameLabel).toHaveText('demoqa');
});

