import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await page
    .getByTestId('header-content')
    .getByRole('link', { name: 'Sport' })
    .click();

  await page.getByRole('link', { name: 'Search BBC' }).click();
});

test('BBC Sport search returns Alcaraz results', async ({ page }) => {
  const searchTerm = 'Alcaraz';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);

  await expect(
    page.getByRole('combobox', { name: 'Input your search term' })
  ).toHaveValue(searchTerm);
});

test('BBC Sport search returns Wimbledon results', async ({ page }) => {
  const searchTerm = 'Wimbledon';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);

  await expect(
    page.getByRole('combobox', { name: 'Input your search term' })
  ).toHaveValue(searchTerm);
});