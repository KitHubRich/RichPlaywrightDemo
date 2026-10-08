import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const postIds = [1, 25, 50, 75, 100];

for (const postId of postIds) {

  test(`Chain post ${postId} to user and todos`, async ({
    request,
  }) => {

  const postResponse = await request.get(
    `${BASE_URL}/posts/${postId}`
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

  expect(todo.id).toBeGreaterThan(0);

  expect(todo.title.length)
    .toBeGreaterThan(0);

  expect(typeof todo.completed)
    .toBe('boolean');

}

const todoId = todosBody[0].id;

const specificTodoResponse = await request.get(
  `${BASE_URL}/todos/${todoId}`
);

expect(specificTodoResponse.status()).toBe(200);

const specificTodoBody =
  await specificTodoResponse.json();

  expect(specificTodoBody.id).toBe(todoId);

expect(specificTodoBody.userId).toBe(userId);

expect(specificTodoBody.title.length)
  .toBeGreaterThan(0);

expect(typeof specificTodoBody.completed)
  .toBe('boolean');

  console.log(`User ID: ${userId}`);
console.log(`Todo ID: ${todoId}`);
console.log(
  `Todo Title: ${specificTodoBody.title}`
);

});

}