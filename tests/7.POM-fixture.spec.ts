import { test, expect } from "../fixtures/e2e-fixture";

test('demo page 1',async ({ page, loginPage, productListPage, checkoutPage, paymentPage }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");

  await loginPage.login("demo@demo.com", "Welcome1");

  await productListPage.pageShow();
  await productListPage.verifyItem("Travel Bag");
  await productListPage.verifyItem("Apple Watch");
  await productListPage.verifyItem("Hand Bag");

  await productListPage.addProductToCartByIndex(0);
  await productListPage.addProductToCartByIndex(1);
  await productListPage.addProductToCartByName("Hand Bag");

  await productListPage.checkout();

  await checkoutPage.checkoutInfo("Surasa Moonsan","5555555555554444","12/2026","123");

  await paymentPage.paymentSuccessVerify();
});
