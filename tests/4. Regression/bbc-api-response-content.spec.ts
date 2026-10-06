import { test, expect } from '@playwright/test';

test('BBC homepage returns 200', async ({ request }) => {
  const response = await request.get(
    'https://www.bbc.co.uk/',
    { timeout: 30000 }
  );

  expect(response.status()).toBe(200);
});