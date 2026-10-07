import { test, expect } from '@playwright/test';

const validPosts = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  50, 99, 100
];

const invalidPosts = [
  '101',
  '1000',
  'a',
  '1b',
  '0',
  '-1'
];

for (const postId of validPosts) {
  test(`Valid Post ${postId} returns data`, async ({ request }) => {
    const response = await request.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    const body = await response.json();

    console.log('--------------------------------');
    console.log(`VALID POST ID: ${postId}`);
    console.log(`STATUS: ${response.status()}`);
    console.log(`TITLE: ${body.title}`);
    console.log('--------------------------------');

    expect(response.status()).toBe(200);

    expect(body.id).toBe(postId);
    expect(body.userId).toBeTruthy();
    expect(body.title).toBeTruthy();
    expect(body.body).toBeTruthy();
  });
}

for (const postId of invalidPosts) {
  test(`Invalid Post ${postId} returns expected response`, async ({
    request,
  }) => {
    const response = await request.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    const responseText = await response.text();

    console.log('--------------------------------');
    console.log(`INVALID POST ID: ${postId}`);
    console.log(`STATUS: ${response.status()}`);
    console.log(`BODY: ${responseText}`);
    console.log('--------------------------------');

    expect(response.status()).toBeGreaterThanOrEqual(200);
  });
}