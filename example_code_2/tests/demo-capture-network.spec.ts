import { expect, test } from '@playwright/test';

test('basic network control capture', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'demoqa');
    await page.fill('css=input[type="password"]', 'Welcome1!');

    const [response] = await Promise.all([
        // page.waitForRequest(new RegExp('.*/v1/Login.*')),
        page.waitForResponse(new RegExp('.*/v1/Login.*')),
        page.waitForNavigation(),
        page.click('xpath=(//form//button)[1]'),
    ]);
    expect(response.status()).toEqual(200);
    console.log(await response.json());

    const e = await page.waitForSelector('css=div.main-header');
    const headerText = await e.textContent();
    console.log(`Header Text = ${headerText}`);
});


test('basic mock network', async ({ page }) => {
    Promise.all([
        page.route(new RegExp('.*/v1/Books.*'), route => {
            route.fulfill({
                body: `{
                    "books": []
                  }`
            });
        }),
        page.goto('https://demoqa.com/books'),
    ]);
    await page.pause();
});