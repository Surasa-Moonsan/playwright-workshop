import { test, expect } from "../fixtures/default-fixture";

test("User able not payment using invalid mock credit card", async ({
  page,
  loginPage,
  productListPage,
  checkoutPage,
  receiptPage,
}) => {
  // 1. loggin
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  await loginPage.login("demo01@demo.com", "Welcome1");

  // 2. Add Apple Watch to cart
  await productListPage.addProductToCartByName("Apple Watch");

  // 3. Checkout
  await productListPage.checkout();

  // 4. Verify Total is 12500
  const totalPrice = await checkoutPage.getTotalPrice();
  expect(totalPrice).toBe("12500");

  // 5. Submit CC mock 4242424242424141 with any random info
  await checkoutPage.submitCCPayment(
    "Jane Doe",
    "4242424242424141",
    "12/2028",
    "999"
  );

  // 6. Verify payment fail
  await receiptPage.verifyPaymentFailed();
});
