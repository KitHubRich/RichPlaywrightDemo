import { test, expect } from '@playwright/test';

const searchTerms = [
  'Alcaraz',
  'Wimbledon',
  'Boulter',
  'Potapova',
  'Bublik',
  'Sinner',
  'Swiatek',
  'Raducanu'
];

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

const sportLink = page
  .getByRole('link', { name: 'Sport' })
  .first();

await expect(sportLink).toBeVisible();

await sportLink.click();

  await page.getByRole('link', { name: 'Search BBC' }).click();
});

searchTerms.forEach((searchTerm) => {
  test(`BBC Sport search returns ${searchTerm} results`, async ({ page }) => {
    await page
      .getByRole('combobox', { name: 'Input your search term' })
      .fill(searchTerm);

    await page.getByRole('button', { name: 'Search' }).click();

    await expect(page.locator('main'))
  .toContainText(searchTerm);
  });
});