import { test, expect } from '@playwright/test';

const BASE_URL =
  'https://jsonplaceholder.typicode.com';

test('@api @negative Invalid post returns empty response', async ({
  request,
}) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  expect(response.status()).toBe(404);

  const body = await response.json();

  expect(body).toEqual({});

});

test('@api @negative Invalid user returns empty response', async ({
  request,
}) => {

  const response = await request.get(
    `${BASE_URL}/users/999999`
  );

  expect(response.status()).toBe(404);

  const body = await response.json();

  expect(body).toEqual({});

});

test('@api @negative Invalid todo returns empty response', async ({
  request,
}) => {

  const response = await request.get(
    `${BASE_URL}/todos/999999`
  );

  expect(response.status()).toBe(404);

  const body = await response.json();

  expect(body).toEqual({});

});

test('@api @negative Invalid endpoint returns 404', async ({
  request,
}) => {
``

  const response = await request.get(
    `${BASE_URL}/not-a-real-endpoint`
  );

  expect(response.status()).toBe(404);

});

test('@api @negative Invalid post has no title', async ({
  request,
}) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  const body = await response.json();

  expect(body.title).toBeUndefined();

});

test('@api @negative Invalid post has no user ID', async ({
  request,
}) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  const body = await response.json();

  expect(body.userId).toBeUndefined();

});

test('@api @negative Invalid post returns empty object', async ({
  request,
}) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  const body = await response.json();

  expect(Object.keys(body).length).toBe(0);

});