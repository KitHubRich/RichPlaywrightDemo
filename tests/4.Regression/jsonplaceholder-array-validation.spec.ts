import { test, expect } from '@playwright/test';

test('Posts endpoint returns an array', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(`Status: ${response.status()}`);
  console.log(`Array Length: ${body.length}`);
  console.log(JSON.stringify(body[0], null, 2));

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBe(100);

  expect(body[0].id).toBe(1);
});