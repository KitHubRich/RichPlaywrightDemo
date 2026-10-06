import { test, expect } from '@playwright/test';

const pages = [
  {
    name: 'Homepage',
    url: 'https://www.bbc.co.uk/'
  },
  {
    name: 'News',
    url: 'https://www.bbc.co.uk/news'
  },
  {
    name: 'Sport',
    url: 'https://www.bbc.co.uk/sport'
  }
];

for (const page of pages) {
  test(`${page.name} API validation`, async ({ request }) => {
    const startTime = Date.now();

    const response = await request.get(page.url, {
      timeout: 30000
    });

    const duration = Date.now() - startTime;

    const body = await response.text();

    const contentType =
      response.headers()['content-type'];

    console.log('--------------------------------');
    console.log(`PAGE: ${page.name}`);
    console.log(`STATUS: ${response.status()}`);
    console.log(`TIME: ${duration}ms`);
    console.log(`CONTENT TYPE: ${contentType}`);
    console.log('--------------------------------');

    expect(response.status()).toBe(200);

    expect(contentType).toContain('text/html');

    expect(body).toContain('BBC');

    expect(duration).toBeLessThan(5000);
  });
}