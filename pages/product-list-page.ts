import { Locator, Page, expect } from '@playwright/test';

export class ProductListPage {
  page: Page;
  dashboardPage: Page;
  cartCheckout: Page;

  constructor(page: Page) {
    this.page = page;
    this.dashboardPage = this.page.getByRole('heading', { name: 'dashboard' })
    this.cartCheckout = this.page.locator("a[href='/e-commerce/checkout']")
  }

    async pageShow() {
        await expect(this.dashboardPage).toBeVisible();
    }

    async verifyItem(itemName: string) {
        await expect(this.page.locator(".card-title", { hasText: itemName })).toBeVisible();
    }

  async addProductToCartByIndex(index: number) {
    await this.page
      .getByRole("button", { name: "Add to cart" })
      .nth(index)
      .click();
      //<button type="button" class="btn btn-primary">Add to cart</button>
  }

  async addProductToCartByName(name: string) {
    await this.page
      .locator(".card")
      .filter({ hasText: name })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  async checkout() {
    await this.cartCheckout.click();
  }
}
