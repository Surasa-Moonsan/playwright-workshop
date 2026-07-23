import { test, expect } from "@playwright/test";

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
 
test("Demo iframe use", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  // const todoListFrame = await page
  //   .locator("iframe[src='/todo-list']")
  //   .contentFrame();
  // await todoListFrame.getByTestId("inputTodo").fill("Test iframe");
});

test("Demo alert", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.getByTestId("alert-1").click();

    page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss();
  });
  await page.getByTestId("alert-2").click();
  
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

test("Demo download file use", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  const downloadPromise = page.waitForEvent('download');
  page.getByRole("link", { name: "Click for download" }).click();
  const download = await downloadPromise;
  await download.saveAs('./download/file.txt');
});

 
test("Demo upload file", async ({ page }) => {
  await page.goto("https://qahive-demo.w3spaces.com/index.html");
  await page.getByRole("link", { name: "Continue" }).click();
  await page.setInputFiles("id=myfile", "./screenshot.png");
  await page.getByRole("button", { name: "Submit" }).click();
});

test("Demo upload file event", async ({ page }) => {
  await page.goto("https://qahive-demo.w3spaces.com/index.html");
  await page.getByRole("link", { name: "Continue" }).click();

  const fileChooserEvent = page.waitForEvent('filechooser');
  await page.getByRole("button", { name: "Select a file:" }).click();
  const fileChooser = await fileChooserEvent;
  await fileChooser.setFiles("./package.json");

});

test("wait for", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");

  const inputUsername = page.locator('id=username');
  const inputFirstname = page.locator('input[name="firstname"]')
  const inputLastname = page.getByRole('textbox').nth(2)


  await inputUsername.fill('surasa.moo');
  await inputFirstname.fill('Surasa');
  await inputLastname.fill('Moonsan');
  
  // Dropdwon
  await page.getByRole("combobox").selectOption("TH");

  // Radio
  await page.getByText("Female", { exact: true }).check(); // main

  // Checkbox
  await page.getByRole("checkbox").check();

  const loginBtn = page.getByTestId('submit');
  await loginBtn.click();


  const verifyText = page.locator('css=div.alert-success');
  await verifyText.waitFor({ timeout: 10000 });

  console.log('Alert text: ', await verifyText.innerText());
  await expect(verifyText).toContainText('username: surasa.moo');
  await expect(verifyText).toContainText('firstname: Surasa');
  await expect(verifyText).toContainText('lastname: Moonsan');
  await expect(verifyText).toContainText('gender: Female');
  await expect(verifyText).toContainText('country: TH');
});
