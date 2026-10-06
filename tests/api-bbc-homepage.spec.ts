import { test, expect } from '@playwright/test';

test('BBC homepage contains BBC', async ({ request }) => {
  const response = await request.get('https://www.bbc.co.uk/');

  const body = await response.text();

  expect(body).toContain('BBC');
});
