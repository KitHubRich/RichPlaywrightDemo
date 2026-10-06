import { test, expect } from '@playwright/test';

test('BBC homepage responds quickly', async ({ request }) => {
  const startTime = Date.now();

  const response = await request.get('https://www.bbc.co.uk/');

  const duration = Date.now() - startTime;

  expect(response.status()).toBe(200);
  expect(duration).toBeLessThan(2000);
});