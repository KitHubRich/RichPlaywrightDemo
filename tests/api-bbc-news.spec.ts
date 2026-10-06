import { test, expect } from '@playwright/test';

test('BBC News page returns 200', async ({ request }) => {
  const response = await request.get('https://www.bbc.co.uk/news');

  expect(response.status()).toBe(200);
});