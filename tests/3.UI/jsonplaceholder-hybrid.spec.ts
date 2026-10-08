import { test, expect } from '@playwright/test';

test('Get user via API then display in browser', async ({
  page,
  request,
}) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  const user = await response.json();

  console.log(user.name);

  await page.goto(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  await expect(page.locator('body'))
    .toContainText(user.name);

});