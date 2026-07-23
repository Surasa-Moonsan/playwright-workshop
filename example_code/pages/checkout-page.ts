import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  page: Page;

  removeProductButton: Locator;

  cardHolderNameInput: Locator;
  cardNumberInput: Locator;
  expiryDateInput: Locator;
  cvvInput: Locator;
  submitButton: Locator;
  totalPriceValue: Locator;

  constructor(page: Page) {
    this.page = page;

    this.removeProductButton = this.page.locator("css=div.card.mb-3 a");

    this.cardHolderNameInput = this.page.getByRole("textbox", {
      name: "Cardholder's Name",
    });
    this.cardNumberInput = this.page.getByRole("textbox", {
      name: "1234567890123457",
    });
    this.expiryDateInput = this.page.getByRole("textbox", { name: "MM/YYYY" });
    this.cvvInput = this.page.locator("css=input[name='cvv']");
    this.submitButton = this.page.getByRole("button", { name: "Payment" });
    this.totalPriceValue = this.page.locator("div.d-flex.justify-content-between:has-text('Total') >> p").nth(1);
  }

  async removeProductByIndex(index: number) {
    await this.removeProductButton.nth(index).click();
  }

  async getTotalPrice(): Promise<string> {
    return (await this.totalPriceValue.textContent())?.trim() || "";
  }

  async submitCCPayment(
    cardHolderName: string,
    cardNumber: string,
    expiryDate: string,
    cvv: string
  ) {
    await this.cardHolderNameInput.fill(cardHolderName);
    await this.cardNumberInput.fill(cardNumber);
    await this.expiryDateInput.fill(expiryDate);
    await this.cvvInput.fill(cvv);
    await this.submitButton.click();
  }
}
