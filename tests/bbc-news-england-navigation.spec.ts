import { test, expect } from '@playwright/test';

test('BBC News England navigation works correctly', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await page.getByRole('link', { name: 'News' }).first().click();

  await page.getByRole('navigation')
  .getByRole('link', { name: 'England' })
  .click();

  await expect(page).toHaveURL(/england/);
});