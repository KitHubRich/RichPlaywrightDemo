import { test, expect } from '@playwright/test';

test('BBC homepage responds in under 2 seconds', async ({ request }) => {
  const start = Date.now();

  const response = await request.get('https://www.bbc.co.uk/');

  const duration = Date.now() - start;

  expect(response.status()).toBe(200);
  expect(duration).toBeLessThan(2000);
});