import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }
});

test('Sport navigation works', async ({ page }) => {
  await page.getByRole('link', { name: 'Sport' }).first().click();

  await expect(page).toHaveURL(/sport/);
});