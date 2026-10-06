import { test, expect } from '@playwright/test';

test('BBC homepage has content type header', async ({ request }) => {
  const response = await request.get('https://www.bbc.co.uk/');

  const contentType = response.headers()['content-type'];

  expect(contentType).toContain('text/html');
});