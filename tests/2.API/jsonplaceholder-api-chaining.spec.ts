import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Get post then retrieve its user', async ({
  request,
}) => {

  const postResponse = await request.get(
    `${BASE_URL}/posts/1`
  );

  expect (postResponse.status()).toBe (200);


  const postBody = await postResponse.json();

  const userId = postBody.userId;

  const userResponse = await request.get(
    `${BASE_URL}/users/${userId}`
  );

  const userBody = await userResponse.json();

  expect(userResponse.status()).toBe(200);

  expect(userBody.id).toBe(userId);
  expect(userBody.name.length).toBeGreaterThan(0);
  expect(userBody.email).toContain('@');

  const todosResponse = await request.get(
  `${BASE_URL}/users/${userId}/todos`
);

expect(todosResponse.status()).toBe(200);

const todosBody = await todosResponse.json();

console.log(`Todo count: ${todosBody.length}`);

expect(Array.isArray(todosBody)).toBe(true);

expect(todosBody.length).toBeGreaterThan(0);
expect(todosBody[0]).toHaveProperty('userId');
expect(todosBody[0]).toHaveProperty('id');
expect(todosBody[0]).toHaveProperty('title');
expect(todosBody[0]).toHaveProperty('completed');

expect(todosBody[0].userId).toBe(userId);

for (const todo of todosBody) {

  expect(todo.userId).toBe(userId);

}

});