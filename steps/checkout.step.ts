import { Given } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { ProductListPage } from "../pages/product-list-page";

Given('the user adds product name {string}', async function (this: CustomWorld, productName: string) {
  const productListPage = new ProductListPage(this.page);
  await productListPage.addProductToCartByName(productName);
});

Given('the user process to checkout', async function (this: CustomWorld) {
  const productListPage = new ProductListPage(this.page);
  await productListPage.checkout();
});
