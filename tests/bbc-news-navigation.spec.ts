import { test, expect } from '@playwright/test';

test('BBC News link navigates correctly', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);
});