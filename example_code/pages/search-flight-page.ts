import { expect, Locator, Page } from "@playwright/test";

export class SearchFlightPage {
  page: Page;

  departingAirportInput: Locator;
  arrivalAirportInput: Locator;
  departingDateInput: Locator;
  searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.departingAirportInput = this.page.getByRole("textbox", {
      name: "Departing Airport",
    });
    this.arrivalAirportInput = this.page.getByRole("textbox", {
      name: "Arrival Airport",
    });
    this.departingDateInput = this.page.getByRole("textbox", {
      name: "Departing Date",
    });
    this.searchButton = this.page.getByRole("button", {
      name: "Search Flights",
    });
  }

  async searchFlight(
    departingAirport: string,
    arrivalAirport: string,
    departingDate: string
  ) {
    await this.departingAirportInput.fill(departingAirport);
    await this.arrivalAirportInput.fill(arrivalAirport);
    await this.departingDateInput.fill(departingDate);
    await this.searchButton.click();
  }
}
