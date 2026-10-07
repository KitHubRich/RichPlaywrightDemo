import { test, expect } from '@playwright/test';

const endpoints = [
  { name: 'Homepage', url: 'https://www.bbc.co.uk/' },
  { name: 'News', url: 'https://www.bbc.co.uk/news' },
  { name: 'Sport', url: 'https://www.bbc.co.uk/sport' },
];

for (const endpoint of endpoints) {
  test(`${endpoint.name} responds within 2 seconds`, async ({ request }) => {
    const start = Date.now();

    const response = await request.get(endpoint.url);

    const duration = Date.now() - start;

    expect(response.status()).toBe(200);
    expect(duration).toBeLessThan(90000);

    console.log(
      `${endpoint.name}: ${response.status()} - ${duration}ms`
    );
  });
}