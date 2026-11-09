import { test, expect } from '@playwright/test';
import { urls } from '../../config/urls';

test(
  '@hybrid @regression Get user via API then display in browser',
  async ({
    page,
    request,
  }) => {

  const response = await request.get(
    `${urls.jsonPlaceholder.users}/1`
  );

  const user = await response.json();

  console.log(user.name);

  await page.goto(
    `${urls.jsonPlaceholder.users}/1`
  );

  await expect(page.locator('body'))
    .toContainText(user.name);

});