import { test } from "@playwright/test";

test("Demo mouse over", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("button", { name: "Node.js" }).hover();
  await page.locator("css=a[href='/python/']").click();
});

test("Demo radio, dropdown and checkbox", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");

  // Dropdwon
  await page.getByRole("combobox").selectOption("TH");
  await page.getByRole("combobox").selectOption({ label: "Hongkong" });

  // Radio
  await page.getByText("Male", { exact: true }).click(); // secondary
  await page.getByText("Female", { exact: true }).check(); // main

  // Checkbox
  await page.getByRole("checkbox").uncheck();
  await page.getByRole("checkbox").check();
});

/*
test("Demo handle tab", async ({ page, context }) => {
  await page.goto("https://web-demo.qahive.com");
  const [newPage2] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("link", { name: "ทำแบบสอบถาม คลิก" }).click(),
  ]);
  await newPage2.getByRole("radio", { name: "แน่น๊อนน" }).check();
  const [newPage3] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("link", { name: "ทำแบบสอบถาม คลิก" }).click(),
  ]);
});
*/

test("Demo iframe", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  const todoListFrame = await page
    .locator("iframe[src='/todo-list']")
    .contentFrame();
  await todoListFrame.getByTestId("inputTodo").fill("Test iframe");
});

test("Demo alert", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss();
  });
  await page.getByTestId("alert-1").click();
});

test("Demo download file", async ({ page }) => {
  await page.goto("https://qahive-demo.w3spaces.com/index.html");
  await page.getByRole("link", { name: "Continue" }).click();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Click for download" }).click(),
  ]);
  await download.saveAs("downloads/demo.txt");
});

test("Demo upload file", async ({ page }) => {
  await page.goto("https://qahive-demo.w3spaces.com/index.html");
  await page.getByRole("link", { name: "Continue" }).click();
  await page.setInputFiles("id=myfile", "./downloads/demo.txt");
  await page.getByRole("button", { name: "Submit" }).click();
});

test("Demo upload file event", async ({ page }) => {
  await page.goto("https://qahive-demo.w3spaces.com/index.html");
  await page.getByRole("link", { name: "Continue" }).click();
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByRole("button", { name: "Select a file:" }).click(),
  ]);
  await fileChooser.setFiles("./downloads/demo.txt");
  await page.getByRole("button", { name: "Submit" }).click();
});
