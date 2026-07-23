import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/todo-list");
  await page.getByTestId("markRemove").click();
});


test('demo todo list', async ({ page }) => {
  await page.getByTestId("inputTodo").fill("Day 1 - playwright overview");
  await page.getByTestId("submitTodo").click();
  await expect(page.getByTestId("todoText")).toHaveText("Day 1 - playwright overview")
  await page.getByTestId('markDone').nth(0).click();

  await page.getByTestId("inputTodo").fill("Day 2 - playwright POM");
  await page.getByTestId("submitTodo").click();
  await expect(page.locator('.card-body').nth(1))
    .toContainText('Day 2 - playwright POM');
  await page.getByTestId('markDone').nth(1).click();

});

test.afterEach(async ({ page }) => {
  // นับจำนวนปุ่ม Remove หลังจาก Add เสร็จ
  const removeButtons = page.getByTestId('markRemove');
  const count = await removeButtons.count();

  for (let i = 0; i < count; i++) {
    await removeButtons.first().click();
  }
});