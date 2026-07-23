import { test, expect } from "@playwright/test";

test.describe("Todo List Application – Manage Todo Item Operations", () => {
  test("Add a New Todo Item", async ({ page }) => {
    await page.goto("https://web-demo.qahive.com/todo-list");

    // Step 1: Locate the "Add new todo" input field. Step 2: Enter "Buy groceries".
    await page.getByTestId("inputTodo").fill("Buy groceries");

    // Step 3: Click the "Submit" button.
    await page.getByTestId("submitTodo").click();

    // Verify that "Buy groceries" appears in the todo list.
    await expect(page.getByText("Buy groceries")).toBeVisible();

    // Verify the input field is cleared after submission.
    await expect(page.getByTestId("inputTodo")).toHaveValue("");

    // Verify the new todo has a complete button (specifically for 'Buy groceries').
    await expect(page.getByTestId("markDone").nth(1)).toBeVisible();

    // Verify the new todo has a delete button (specifically for 'Buy groceries').
    await expect(page.getByTestId("markRemove").nth(1)).toBeVisible();
  });
});
