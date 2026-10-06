import { test, expect } from '@playwright/test';

const pages = [
  'https://www.bbc.co.uk/',
  'https://www.bbc.co.uk/news',
  'https://www.bbc.co.uk/news/england',
  'https://www.bbc.co.uk/news/wales',
  'https://www.bbc.co.uk/news/scotland',
  'https://www.bbc.co.uk/news/uk',
  'https://www.bbc.co.uk/news/world',
  'https://www.bbc.co.uk/sport',
  'https://www.bbc.co.uk/sport/tennis',
];

for (const url of pages) {
  test(`${url} returns 200`, async ({ request }) => {
    const response = await request.get(url);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
}