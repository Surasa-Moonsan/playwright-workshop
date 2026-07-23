import { firefox, test } from "@playwright/test";

test("Demo context browser", async ({ page, browser }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://web-demo.qahive.com/e-commerce/register");

  // const firefoxBrowser = await firefox.launch();
  // const firefoxContext = await firefoxBrowser.newContext();
  // const firefoxPage = await firefoxContext.newPage();
  // await firefoxPage.goto("https://demo.playwright.dev/todomvc/#/");
});

test("Demo handle tab#1", async ({ page, context }) => {
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
  await newPage3.getByRole("radio", { name: "ไม่ได้อ่ะ" }).check()

});

test("Demo handle tab#2", async ({ page, context }) => {
  await page.goto("https://web-demo.qahive.com");

  const pagePromise = context.waitForEvent('page');
  page.getByRole("link", { name: "ทำแบบสอบถาม คลิก" }).click();

  const newPage = await pagePromise;
  await newPage.getByRole("radio", { name: "แน่น๊อนน" }).check();

  const pageEmpty = await context.newPage();
  await pageEmpty.goto("https://www.google.com");

});

test("Demo handle multi context#2", async ({ page, context, browser }) => {
  await page.goto("https://web-demo.qahive.com");

  const newContext = await browser.newContext();
  const newPage= await newContext.newPage();
  await newPage.goto("https://www.google.com");

});