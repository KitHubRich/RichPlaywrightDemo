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

// Array validation
expect(Array.isArray(body)).toBe(true);
expect(body.length).toBe(100);

// First record
expect(body[0].id).toBe(1);

// Last record
expect(body[99].id).toBe(100);

// Entire collection
for (const post of body) {
  expect(post).toHaveProperty('userId');
  expect(post).toHaveProperty('id');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');
}
});