import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProfilePage } from '../pages/profile-page';

type DemoFixture = {
    loginPage: LoginPage;
    profilePage: ProfilePage;
};

const demoFixtureTest = test.extend<DemoFixture>({
    loginPage: async({page}, use) => {
        await page.goto('https://demoqa.com/login');
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    profilePage: async({page}, use) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    }
});

test.describe('Demo fixture', () => {
    demoFixtureTest('demo fixture login and profile', async ({ loginPage,  profilePage}) => {
        await loginPage.login('demoqa', 'Welcome1!');
        await expect(profilePage.usernameLabelLocator).toContainText('demoqa');
        await profilePage.logout();
        await expect(loginPage.loginBtnLocator).toBeVisible();
    });
});

test('demo pom login and profile', async ({ page }) => {
    await page.goto('https://demoqa.com/login');

    const loginPage = new LoginPage(page);
    await loginPage.login('demoqa', 'Welcome1!');
    
    const profilePage = new ProfilePage(page);
    await expect(profilePage.usernameLabelLocator).toContainText('demoqa');
    await profilePage.logout();

    await expect(loginPage.loginBtnLocator).toBeVisible();
});