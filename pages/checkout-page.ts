import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  page: Page;

  cardHolderNameInput: Locator;
  cardNumberInput: Locator;
  expiryDateInput: Locator;
  cvvInput: Locator;
  submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardHolderNameInput = this.page.getByRole('textbox', { name: 'Cardholder\'s Name' })
    this.cardNumberInput = this.page.getByRole('textbox', { name: '1234567890123457' })
    this.expiryDateInput = this.page.getByRole('textbox', { name: 'MM/YYYY' })
    this.cvvInput = this.page.locator("css=input[name='cvv']");
    this.submitButton = this.page.getByRole('button', { name: 'Payment' })
  }

  async checkoutInfo(
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
