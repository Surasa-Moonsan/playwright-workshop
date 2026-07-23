import { test } from "../fixtures/default-fixture";

test.beforeEach(async ({ page, loginPage }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  await loginPage.login("demo@demo.com", "Welcome1");
});

test("User able to payment with valid CC should show payment success", async ({
  productListPage,
  checkoutPage,
  receiptPage,
}) => {
  // Product list
  await productListPage.addProductToCartByIndex(0);
  await productListPage.addProductToCartByIndex(2);
  await productListPage.checkout();

  // Checkout
  await checkoutPage.removeProductByIndex(0);
  await checkoutPage.submitCCPayment(
    "John Doe",
    "4242424242424242",
    "12/2026",
    "123",
  );

  // Receipt
  await receiptPage.verifyPaymentSuccess();
});

test("User able to payment with invalid CC should show payment failed", async ({
  productListPage,
  checkoutPage,
  receiptPage,
}) => {
  // Product list
  await productListPage.addProductToCartByIndex(0);
  await productListPage.addProductToCartByIndex(2);
  await productListPage.checkout();

  // Checkout
  await checkoutPage.removeProductByIndex(0);
  await checkoutPage.submitCCPayment(
    "John Doe",
    "4242424242424241",
    "12/2026",
    "123",
  );

  // Receipt
  await receiptPage.verifyPaymentFailed();
});
