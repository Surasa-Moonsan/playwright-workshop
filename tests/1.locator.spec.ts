import { test, expect } from '@playwright/test';

test('id locator', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/form-demo');

  const inputUsername = page.locator('id=username');
  // const inputFirstname = page.locator('name=firstname');  
  // const inputLastname = page.locator('input.form-input.lastname');

  await inputUsername.fill('surasa.moo');
  // await inputFirstname.fill('surasa');
  // await inputLastname.fill('moonsan');
  //await loginBtn.click(),

});


test('data-testid locator', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.locator('data-testid=email').fill('demo01@demo.com');
  await page.locator('data-testid=password').fill('Welcome1');
  await page.locator('data-testid=submit').click();
  //await page.locator('css=button.btn-primary').click();
  await expect(page.getByText('Login Successful! Redirecting...')).toBeVisible();

});

test('xpath locator', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.locator('xpath=(//input)[1]').fill('demo01@demo.com');
  await page.locator('xpath=(//input)[2]').fill('Welcome1');
  await page.locator('xpath=(//button)[2]').click();
  
});

test('chain locator', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.locator('xpath=(//input)[1]').fill('demo01@demo.com');
  await page.locator('xpath=(//input)[2]').fill('Welcome1');
  await page.locator("form").locator("button").nth(0).click();

});

test('filter add to card', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.locator('xpath=(//input)[1]').fill('demo01@demo.com');
  await page.locator('xpath=(//input)[2]').fill('Welcome1');
  await page.locator("form").locator("button").nth(0).click();

  await page.locator('css=div.card-body')
    .filter({ hasText: 'Travel Bag' })
    .locator('button')
    .click();

});