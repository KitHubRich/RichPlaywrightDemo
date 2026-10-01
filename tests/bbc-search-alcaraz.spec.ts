import { test, expect } from '@playwright/test';

test('BBC News search returns Alcaraz results', async ({ page }) => {
  const searchTerm = 'Alcaraz';

  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

await page.getByRole('link', { name: 'News' }).first().click();

await expect(page).toHaveURL(/news/);

  await page.getByRole('link', { name: 'Search BBC' }).click();

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);

  await expect(
    page.getByRole('combobox', { name: 'Input your search term' })
  ).toHaveValue(searchTerm);

  await expect(page.locator('main'))
    .toContainText(searchTerm);
});