import { test, expect } from '@playwright/test';

test('BBC API and UI homepage validation', async ({
  page,
  request,
}) => {

  const start = Date.now();

  const response = await request.get(
    'https://www.bbc.co.uk/'
  );

  const duration = Date.now() - start;

  expect(response.status()).toBe(200);
  expect(duration).toBeLessThan(2000);

  const html = await response.text();

  expect(html).toContain('BBC');

  await page.goto(
    'https://www.bbc.co.uk/'
  );

  await expect(page).toHaveTitle(/BBC/);

});