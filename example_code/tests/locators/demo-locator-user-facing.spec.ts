import { test } from "@playwright/test";

test("Demo getByRole", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  await page.getByRole("textbox", { name: "username" }).fill("admin");
  await page.getByRole("textbox").nth(1).fill("Qa");
});

/*
test("Demo filter", async ({ page }) => {
  await page.goto("https://demoqa.com/books");
  const text = await page
    .locator("css=div[role='row']")
    .filter({ hasText: "O'Reilly Media" })
    .nth(0)
    .locator("css=div[role='gridcell']")
    .nth(2)
    .textContent();
  console.log(text);
});
*/

test("Demo and", async ({ page }) => {
  await page.goto("https://demoqa.com/books");
  const text = await page
    .locator("css=div[role='row']")
    .filter({ hasText: "O'Reilly Media" })
    .and(
      page
        .locator("css=div[role='row']")
        .filter({ hasText: "Git Pocket Guide" }),
    );
  console.log(text);
});
