import { Locator, Page, expect } from "@playwright/test";

export class PaymentPage {
  page: Page;
  textMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textMessage = this.page.getByRole('heading', { name: 'Payment Successful' })
  }

  async paymentSuccessVerify() {
    await expect(this.textMessage).toBeVisible();
  }
}
