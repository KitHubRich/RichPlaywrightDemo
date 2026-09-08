import { test, expect } from '@playwright/test';

test('User can accept cookies and open England news', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  // Accept cookies if shown
  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  // Open News
  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);

  // Open England section
  await page
  .getByTestId('navigation')
  .getByRole('link', { name: 'England' })
  .click();

  // Verify we navigated successfully
  await expect(page).toHaveURL(/england/i);

  await expect(
    page.getByRole('heading').first()
  ).toBeVisible();
});