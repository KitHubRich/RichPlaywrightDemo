import { test, expect } from '@playwright/test';

test('BBC Sport navigates to Tennis', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await page.getByRole('link', { name: 'Sport' }).first().click();

  await expect(page).toHaveURL(/sport/);

  await page
  .getByTestId('navigation')
  .getByRole('link', { name: 'Tennis' })
  .click();

  await expect(page).toHaveURL(/tennis/);
});