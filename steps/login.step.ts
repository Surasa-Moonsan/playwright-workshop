import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/login-page";
import { ProductListPage } from "../pages/product-list-page";
import { expect } from "@playwright/test";

setDefaultTimeout(30*1000);
Given('the user on the login page', async function (this: CustomWorld) {
    await this.page.goto('https://web-demo.qahive.com/e-commerce/register');  
});

When('the user submit credentials {string} and {string}', async function (this: CustomWorld, emaill: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(emaill, password);
    this.ScenarioContext.email = emaill;
});

Then('the user should be redirect to dashboard', async function (this: CustomWorld) {
    const productListPage = new ProductListPage(this.page);
    await productListPage.pageShow();
});

Then('the user should see error message {string}', async function (this: CustomWorld, errorMessage: string) {
      await expect(this.page!.locator(`text=${errorMessage}`)).toBeVisible();
});


Given('the user in on the login page ITMX internal', async function (this: CustomWorld) {
    await this.page.goto('https://portalua1.nitmx.co.th/ITMXPortal/login');  
});

Given('verify user on the ITMX portal login page', async function (this: CustomWorld) {
    await expect(this.page!.locator(`text=Log In to ITMX Web Portal`)).toBeVisible();
    await this.page.waitForTimeout(5000);
});


