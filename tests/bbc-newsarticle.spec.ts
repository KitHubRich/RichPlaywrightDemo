import { test, expect } from '@playwright/test';

test('User can navigate from BBC homepage to a news article', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);

  await page.getByRole('link', { name: 'Live .  UK announces' }).click();

  await expect(page).toHaveURL(/news/);

  await expect(page.getByRole('heading').first()).toBeVisible();
});
