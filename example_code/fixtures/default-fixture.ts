import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { ProductListPage } from "../pages/product-list-page";
import { CheckoutPage } from "../pages/checkout-page";
import { ReceiptPage } from "../pages/receipt-page";

interface TestFixtures {
  loginPage: LoginPage;
  productListPage: ProductListPage;
  checkoutPage: CheckoutPage;
  receiptPage: ReceiptPage;
}

const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  productListPage: async ({ page }, use) => {
    const productListPage = new ProductListPage(page);
    await use(productListPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  receiptPage: async ({ page }, use) => {
    const receiptPage = new ReceiptPage(page);
    await use(receiptPage);
  },
});
export { test, expect };
