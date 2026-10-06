import { test, expect } from '@playwright/test';

const pages = [
  'https://www.bbc.co.uk/',
  'https://www.bbc.co.uk/news',
  'https://www.bbc.co.uk/sport/tennis',
];

for (const url of pages) {
  test(`${url} returns 200`, async ({ request }) => {
    const response = await request.get(url);

    expect(response.status()).toBe(200);
  });
}