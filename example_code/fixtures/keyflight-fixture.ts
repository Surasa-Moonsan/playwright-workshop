import { test as base, expect } from "@playwright/test";
import { SearchFlightPage } from "../pages/search-flight-page";
import { FlightListPage } from "../pages/flight-list-page";

interface TestFixtures {
  searchFlightPage: SearchFlightPage;
  flightListPage: FlightListPage;
}

const test = base.extend<TestFixtures>({
  searchFlightPage: async ({ page }, use) => {
    const searchFlightPage = new SearchFlightPage(page);
    await use(searchFlightPage);
  },
  flightListPage: async ({ page }, use) => {
    const flightListPage = new FlightListPage(page);
    await use(flightListPage);
  },
});
export { test, expect };
