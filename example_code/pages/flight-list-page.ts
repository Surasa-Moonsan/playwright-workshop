import { expect, Locator, Page } from "@playwright/test";

export class FlightListPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectFlightByIndex(index: number): Promise<void> {
    this.page
      .locator("css=div.tickets__item")
      .nth(index)
      .getByRole("button")
      .filter({ hasText: "Generate Ticket for Free" })
      .click();
  }
}
