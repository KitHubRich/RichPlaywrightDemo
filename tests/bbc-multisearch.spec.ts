import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  const sportLink = page
    .getByTestId('header-content')
    .getByRole('link', { name: 'Sport' });

  await expect(sportLink).toBeVisible();

  await page.getByRole('link', { name: 'Sport' }).first().click();

  await page.getByRole('link', { name: 'Search BBC' }).click();
});

test('BBC Sport search returns Alcaraz results', async ({ page }) => {
  const searchTerm = 'Alcaraz';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});

test('BBC Sport search returns Wimbledon results', async ({ page }) => {
  const searchTerm = 'Wimbledon';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});

test('BBC Sport search returns Boulter results', async ({ page }) => {
  const searchTerm = 'Boulter';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});

test('BBC Sport search returns Potapova results', async ({ page }) => {
  const searchTerm = 'Potapova';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});

test('BBC Sport search returns Bublik results', async ({ page }) => {
  const searchTerm = 'Bublik';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});

test('BBC Sport search returns Sinner results', async ({ page }) => {
  const searchTerm = 'Sinner';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});

test('BBC Sport search returns Swiatek results', async ({ page }) => {
  const searchTerm = 'Swiatek';

  await page
    .getByRole('combobox', { name: 'Input your search term' })
    .fill(searchTerm);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page).toHaveURL(/search/);
});