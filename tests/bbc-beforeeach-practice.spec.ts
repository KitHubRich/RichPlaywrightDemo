// beforeEach practice exercise
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }
});

test('News link is visible', async ({ page }) => {
  await expect(
    page.getByRole('link', { name: 'News' }).first()
  ).toBeVisible();
});

test('News navigation works', async ({ page }) => {
  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);
});