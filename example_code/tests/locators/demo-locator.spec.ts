import { test } from "@playwright/test";

test("Demo id locator", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  await page.locator("id=username").fill("admin");
});

test("Demo data-testid locator", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  await page.getByTestId("email").fill("demo@demo.com");
});

test("Demo css locator", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  await page.locator("css=input[name='firstname']").fill("Qa");
  await page.locator("css=input.lastname").fill("Test");
});

test("Demo xpath locator", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  await page.locator("xpath=(//input)[2]").fill("Qa");
  await page.locator("xpath=(//input)[3]").fill("Test");
});

test("Demo todo app", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.locator("css=input.new-todo").fill("Learn Playwright");
  await page.locator("css=input.new-todo").press("Enter");
  await page.getByRole("checkbox", { name: "Toggle Todo" }).click();
});
