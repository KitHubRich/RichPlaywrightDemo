import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('GET post returns correct data', async ({ request }) => {
  const response = await request.get(
    `${BASE_URL}/posts/1`
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
});

test('POST creates a new post', async ({ request }) => {
  const response = await request.post(
    `${BASE_URL}/posts`,
    {
      data: {
        title: 'Playwright API Test',
        body: 'Learning CRUD',
        userId: 99
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright API Test');
  expect(body.userId).toBe(99);
});

test('PUT updates an existing post', async ({ request }) => {
  const response = await request.put(
    `${BASE_URL}/posts/1`,
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Updated Title');
});

test('DELETE removes a post', async ({ request }) => {
  const response = await request.delete(
    `${BASE_URL}/posts/1`
  );

  expect(response.status()).toBe(200);
});