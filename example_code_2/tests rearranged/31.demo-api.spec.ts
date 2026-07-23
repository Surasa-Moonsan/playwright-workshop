import { test, expect } from '@playwright/test';

test('api login demo', async ({ playwright }) => {
  const request = await playwright.request.newContext({
    baseURL: 'https://demoqa.com',
  });

  const response = await request.post('/Account/v1/Login', {
    data: {
      userName: 'demoqa',
      password: 'Welcome1!',
    },
  });
  await expect(response).toBeOK();
  expect(await response.json()).toEqual(expect.objectContaining({
    userId: 'eac04b99-3b9f-46ec-9ddc-3c11a87b9683',
    username: 'demoqa',
    isActive: false,
  }));
});

test('api add book demo', async ({ playwright }) => {
  const request = await playwright.request.newContext({
    baseURL: 'https://demoqa.com',
  });

  let response = await request.post('/Account/v1/Login', {
    data: {
      userName: 'demoqa',
      password: 'Welcome1!',
    },
  });
  await expect(response).toBeOK();
  let responseData = await response.json();

  response = await request.post('/BookStore/v1/Books', {
    headers: {
      'Authorization': `Bearer ${responseData.token}`,
    },
    data: {
      "userId": "eac04b99-3b9f-46ec-9ddc-3c11a87b9683",
      "collectionOfIsbns": [
        {
            "isbn": "9781449331818"
        }
      ]
    },
  });
  expect(response.status()).toEqual(400);
  expect(await response.json()).toEqual(expect.objectContaining({
    "code": "1210",
  }));

});