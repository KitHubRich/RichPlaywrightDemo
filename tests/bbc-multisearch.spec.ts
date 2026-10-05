import { test, expect } from '@playwright/test';

const searchTerms = [
  'Alcaraz',
  'Potapova',
];

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/', {
    waitUntil: 'domcontentloaded',
  });

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  const sportLink = page
    .getByRole('link', { name: 'Sport' })
    .first();

  await expect(sportLink).toBeVisible();

  await sportLink.click();

  await Promise.all([
    page.waitForLoadState('domcontentloaded'),
    page.getByRole('link', { name: 'Search BBC' }).click(),
  ]);

  console.log('Current URL:', page.url());

  const searchBox = page.getByRole('combobox');

  await expect(searchBox).toBeVisible({
    timeout: 15000,
  });
});

searchTerms.forEach((searchTerm) => {
  test(`BBC Sport search returns ${searchTerm} results`, async ({ page }) => {
    const searchBox = page.getByRole('combobox');

    await searchBox.fill(searchTerm);

    await page.getByRole('button', { name: 'Search' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/search/);

    await expect(searchBox).toHaveValue(searchTerm);
  });
});