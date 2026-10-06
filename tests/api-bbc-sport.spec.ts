import { test, expect } from '@playwright/test';

test('BBC Sport page returns 200', async ({ request }) => {
  const response = await request.get('https://www.bbc.co.uk/sport');

  expect(response.status()).toBe(200);
});