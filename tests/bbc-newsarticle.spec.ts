import { test, expect } from '@playwright/test';

test('BBC homepage displays News and Sport links', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await expect(
    page.getByRole('link', { name: 'News' }).first()
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Sport' }).first()
  ).toBeVisible();
});