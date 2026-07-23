import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { ProductListPage } from "../pages/product-list-page";
import { CheckoutPage } from "../pages/checkout-page";
import { PaymentPage } from "../pages/payment-page";

test('demo page 1',async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  const loginPage = new LoginPage(page);
  await loginPage.login("demo@demo.com", "Welcome1");

  const productListPage = new ProductListPage(page);
  await productListPage.pageShow();
  await productListPage.verifyItem("Travel Bag");
  await productListPage.verifyItem("Apple Watch");
  await productListPage.verifyItem("Hand Bag");

  await productListPage.addProductToCartByIndex('0');
  await productListPage.addProductToCartByIndex('1');
  await productListPage.addProductToCartByName("Hand Bag");

  await productListPage.checkout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkoutInfo("Surasa Moonsan","5555555555554444","12/2026","123");

  const paymentPage = new PaymentPage(page);
  await paymentPage.paymentSuccessVerify();
});
