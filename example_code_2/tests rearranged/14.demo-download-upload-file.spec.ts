import { test, expect } from '@playwright/test';

test.use({acceptDownloads: true});
test('demo download file', async ({ page }) => {
  await page.goto('https://qahive-demo.w3spaces.com/index.html');
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), 
    page.click('css=a[href="/download-test-file.txt"]')
  ]);
  const path = await download.path();
  console.log(`path = ${path}`);

  test.setTimeout(0);
  await page.pause();
});

test('demo upload file', async ({ page }) => {
    await page.goto('https://qahive-demo.w3spaces.com/index.html');
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('id=myfile')
    ]);
    await fileChooser.setFiles('test-data/helloworld.txt');
    await page.click('css=input[type="submit"]');
    await expect(page).toHaveURL(new RegExp('.*myfile=helloworld.txt.*'));
  
    test.setTimeout(0);
    await page.pause();
  });
  