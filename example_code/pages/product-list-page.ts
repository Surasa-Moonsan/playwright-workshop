import { Page } from "@playwright/test";

export class ProductListPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCartByIndex(index: number) {
    await this.page
      .getByRole("button", { name: "Add to cart" })
      .nth(index)
      .click();
  }

  async addProductToCartByName(name: string) {
    await this.page
      .locator(".card")
      .filter({ hasText: name })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  async checkout() {
    await this.page.locator("a[href='/e-commerce/checkout']").click();
  }
}
