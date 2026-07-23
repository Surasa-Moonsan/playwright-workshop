import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameInputLocator: Locator;
    readonly passwordInputLocator: Locator;
    readonly loginBtnLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInputLocator = this.page.locator('id=userName');
        this.passwordInputLocator = this.page.locator('id=password');
        this.loginBtnLocator = this.page.locator('id=login');
    }

    async login(username: string, password: string) {
        await this.usernameInputLocator.fill(username);
        await this.passwordInputLocator.fill(password);
        await Promise.all([
            this.page.waitForNavigation(),
            this.loginBtnLocator.click()
        ]);
    }

}