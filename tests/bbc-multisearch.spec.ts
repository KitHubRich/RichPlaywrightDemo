import { test, expect } from '@playwright/test';

const searchTerms = [
  'Alcaraz',
  'Potapova',
  'Bublik',
  'Boulter',
  'Wimbledon',
];

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/', {
    waitUntil: 'domcontentloaded',
  });

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  await page.goto('https://www.bbc.co.uk/search', {
    waitUntil: 'domcontentloaded',
  });

  const searchBox = page.locator('input');

  await expect(searchBox.first()).toBeVisible({
    timeout: 15000,
  });
});

searchTerms.forEach((searchTerm) => {
  test(`BBC search returns ${searchTerm} results`, async ({ page }) => {
    const searchBox = page.locator('input').first();

    await searchBox.fill(searchTerm);

    await page.getByRole('button', { name: /search/i }).click();

    await expect(page).toHaveURL(/search/i);

    await expect(page.locator('body')).toContainText(searchTerm);
  });
});
