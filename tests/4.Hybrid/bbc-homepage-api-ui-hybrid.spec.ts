import { test, expect } from '@playwright/test';
import { urls } from '../../config/urls';

test('@regression @hybrid @bbc BBC API and UI homepage validation', async ({
  page,
  request,
}) => {

  const start = Date.now();

  const response = await request.get(
    urls.bbc.home

  );

  const duration = Date.now() - start;

  expect(response.status()).toBe(200);
  expect(duration).toBeLessThan(10000);

  const html = await response.text();

  expect(html).toContain('BBC');

  await page.goto(
    urls.bbc.home
  );

  await expect(page).toHaveTitle(/BBC/);

});