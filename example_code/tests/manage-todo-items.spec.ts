import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/todo-list");
  await page.getByTestId("markRemove").click();
});

test.describe("Add todo item", () => {
  test("User able add new todo item", async ({ page }) => {
    await page.getByTestId("inputTodo").fill("Item 1");
    await page.getByTestId("submitTodo").click();

    await expect(page.getByTestId("todoText")).toHaveText("Item 1", {
      timeout: 10 * 1000,
    });
  });

  test("User able add multiple todo item", async ({ page }) => {
    await page.getByTestId("inputTodo").fill("Item 1");
    await page.getByTestId("submitTodo").click();
    await page.getByTestId("inputTodo").fill("Item 2");
    await page.getByTestId("submitTodo").click();
    await page.waitForTimeout(2 * 1000);
    await expect(page.getByText("Item 1")).toBeVisible();
    await expect(page.getByText("Item 2")).toBeVisible();
  });
});

test.describe("Mark todo item status", () => {
  test("User able mark complete todo item", async ({ page }) => {
    await page.getByTestId("inputTodo").fill("New Todo Item");
    await page.getByTestId("submitTodo").click();
    await page.getByTestId("markDone").click();
    await expect(page.getByTestId("todoText")).toHaveCSS(
      "text-decoration-line",
      "line-through",
    );
  });
});
