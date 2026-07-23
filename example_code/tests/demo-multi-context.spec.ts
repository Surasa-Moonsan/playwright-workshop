import { firefox, test } from "@playwright/test";

test("Demo context browser", async ({ page, browser }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://web-demo.qahive.com/e-commerce/register");

  const firefoxBrowser = await firefox.launch();
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();
  await firefoxPage.goto("https://demo.playwright.dev/todomvc/#/");
});
