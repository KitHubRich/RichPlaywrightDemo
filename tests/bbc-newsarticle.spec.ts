import { test, expect } from '@playwright/test';

test('User can navigate to England news', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptCookies = page.getByRole('button', {
    name: /Accept additional cookies/i
  });

  if (await acceptCookies.isVisible().catch(() => false)) {
    await acceptCookies.click();
  }

  await page.getByRole('link', { name: 'News' }).first().click();

  await expect(page).toHaveURL(/news/);

  await page
    .getByTestId('navigation')
    .getByRole('link', { name: 'England' })
    .click();

  await expect(page).toHaveURL(/england/i);
});