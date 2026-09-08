import { test, expect } from '@playwright/test';

test('User can accept cookies and open England news', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);

  await page
    .getByTestId('navigation')
    .getByRole('link', { name: 'England' })
    .click();

  await expect(page).toHaveURL(/england/i);

  await expect(page.locator('body')).toContainText('England');
});