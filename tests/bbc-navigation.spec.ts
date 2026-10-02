import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  const acceptButton = page.getByTestId('accept-button');

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }
});

test('BBC homepage displays News, Sport and Weather links', async ({ page }) => {
  await expect(
    page.getByRole('link', { name: 'News' }).first()
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Sport' }).first()
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Weather' }).first()
  ).toBeVisible();
});

test('BBC Sport navigates to Tennis', async ({ page }) => {
  await expect(
    page.getByRole('link', { name: 'Sport' }).first()
  ).toBeVisible();

  await page.getByRole('link', { name: 'Sport' }).first().click();

  await expect(page).toHaveURL(/sport/);

  await page
    .getByTestId('navigation')
    .getByRole('link', { name: 'Tennis' })
    .click();

  await expect(page).toHaveURL(/tennis/);
});