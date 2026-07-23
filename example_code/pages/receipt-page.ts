import { expect, Locator, Page } from "@playwright/test";

export class ReceiptPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPaymentSuccess() {
    const successMessage = this.page.getByText("Payment Successful");
    await expect(successMessage).toBeVisible();
  }

  async verifyPaymentFailed() {
    const failedMessage = this.page.getByText("Payment Failed");
    await expect(failedMessage).toBeVisible();
  }
}
