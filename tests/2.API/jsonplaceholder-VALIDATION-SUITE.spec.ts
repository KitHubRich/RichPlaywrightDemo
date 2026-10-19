import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('@api @validation GET Post Validation', () => {

  let body: any;

  test.beforeEach(async ({ request }) => {

    const response = await request.get(
      `${BASE_URL}/posts/1`
    );

    expect(response.status()).toBe(200);

    body = await response.json();

    console.log(response.status());
    console.log(body);

  });

  test('Post has an ID', async () => {
    expect(body.id).toBe(1);
  });

  test('Post has correct user ID', async () => {
    expect(body.userId).toBe(1);
  });

  test('Post contains expected title text', async () => {
    expect(body.title).toContain('facere');
  });

  test('Post contains expected properties', async () => {
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('userId');
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('Post has populated title and body', async () => {
    expect(body.title.length).toBeGreaterThan(0);
    expect(body.body.length).toBeGreaterThan(0);
    expect(typeof body.title).toBe('string');
    expect(typeof body.body).toBe('string');
  });

});

test.describe('@api @crud POST Validation', () => {

  let postBody: any;

  test.beforeEach(async ({ request }) => {

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

    postBody = await response.json();

  });

  test('Post returns a new ID', async () => {
    expect(postBody.id).toBeGreaterThan(0);
  });

  test('Post contains expected title', async () => {
    expect(postBody.title).toBe('Playwright API Test');
  });

  test('Post contains expected body text', async () => {
    expect(postBody.body).toBe('Learning CRUD');
  });

  test('Post contains expected user ID', async () => {
    expect(postBody.userId).toBe(99);
  });

  test('Post response contains expected properties', async () => {
    expect(postBody).toHaveProperty('id');
    expect(postBody).toHaveProperty('title');
    expect(postBody).toHaveProperty('body');
    expect(postBody).toHaveProperty('userId');
  });

});

test.describe('@api @crud PUT Validation', () => {

  let putBody: any;

  test.beforeEach(async ({ request }) => {

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

    putBody = await response.json();

  });

  test('Put returns correct ID', async () => {
    expect(putBody.id).toBe(1);
  });

  test('Put contains expected title', async () => {
    expect(putBody.title).toBe('Updated Title');
  });

  test('Put contains expected body text', async () => {
    expect(putBody.body).toBe('Updated Body');
  });

  test('Put contains expected user ID', async () => {
    expect(putBody.userId).toBe(1);
  });

  test('Put response contains expected properties', async () => {
    expect(putBody).toHaveProperty('id');
    expect(putBody).toHaveProperty('title');
    expect(putBody).toHaveProperty('body');
    expect(putBody).toHaveProperty('userId');
  });

});

test.describe('@api @crud DELETE Validation', () => {

  let response: any;

  test.beforeEach(async ({ request }) => {

    response = await request.delete(
      `${BASE_URL}/posts/1`
    );

  });

  test('Delete returns status 200', async () => {
    expect(response.status()).toBe(200);
  });

  test('Delete response is successful', async () => {
    expect(response.ok()).toBeTruthy();
  });

  test('Delete response status text is OK', async () => {
    expect(response.statusText()).toBe('OK');
  });

  test('Delete response has headers', async () => {
    expect(Object.keys(response.headers()).length).toBeGreaterThan(0);
  });

  test('Delete response contains content-type header', async () => {
    expect(response.headers()).toHaveProperty('content-type');
  });

});

test.describe('@api @negative GET Negative Validation', () => {

  test('Invalid post ID returns empty object', async ({
    request,
  }) => {

    const response = await request.get(
      `${BASE_URL}/posts/999999`
    );

    const body = await response.json();

    expect(Object.keys(body).length).toBe(0);

  });

});

test('@api @negative Invalid post has no title property', async ({ request }) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  const body = await response.json();

  expect(body.title).toBeUndefined();

});

test('@api @negative Invalid post has no user ID', async ({ request }) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  const body = await response.json();

  expect(body.userId).toBeUndefined();

});

test('@api @negative Invalid post response is an object', async ({ request }) => {

  const response = await request.get(
    `${BASE_URL}/posts/999999`
  );

  const body = await response.json();

  expect(typeof body).toBe('object');

});

test('@api @negative Invalid endpoint returns 404', async ({ request }) => {

  const response = await request.get(
    `${BASE_URL}/not-a-real-endpoint`
  );

  expect(response.status()).toBe(404);

});

test('@api @negative String ID returns empty response', async ({ request }) => {

  const response = await request.get(
    `${BASE_URL}/posts/abc`
  );

  const body = await response.json();

  expect(Object.keys(body).length).toBe(0);

});


test('@api @negative POST with missing fields', async ({ request }) => {

  const response = await request.post(
    `${BASE_URL}/posts`,
    {
      data: {}
    }
  );

  const body = await response.json();

  expect(body).toHaveProperty('id');

});

test('@api @negative POST with invalid userId type', async ({ request }) => {

  const response = await request.post(
    `${BASE_URL}/posts`,
    {
      data: {
        title: 'Test',
        body: 'Test',
        userId: 'invalid'
      }
    }
  );

  expect(response.ok()).toBeTruthy();

});
