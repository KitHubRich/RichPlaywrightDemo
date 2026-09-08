import { test, expect } from '@playwright/test';

test('BBC homepage opens News successfully', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk');

  // await page.getByTestId('accept-button').click();

  await expect(page).toHaveTitle(/BBC/);

  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);

  await expect(
    page.getByRole('heading', { name: 'BBC News', exact: true })
  ).toBeVisible();
});
