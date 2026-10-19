import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const postIds = [1, 25, 50, 75, 100];

async function getJson(
  request: any,
  endpoint: string
) {
  const response = await request.get(
    `${BASE_URL}${endpoint}`
  );

  expect(response.status()).toBe(200);

  return response.json();
}

async function getUser(
  request: any,
  userId: number
) {
  return getJson(
    request,
    `/users/${userId}`
  );
}

async function getTodos(
  request: any,
  userId: number
) {
  return getJson(
    request,
    `/users/${userId}/todos`
  );
}

async function getPost(
  request: any,
  postId: number
) {
  return getJson(
    request,
    `/posts/${postId}`
  );
}

async function getComments(
  request: any,
  postId: number
) {
  return getJson(
    request,
    `/posts/${postId}/comments`
  );
}

for (const postId of postIds) {
  test(`@api @chaining Chain post ${postId} to user and todos`, async ({
  request,
}) => {

const postBody =
  await getPost(request, postId);

    const userId = postBody.userId;

    const userBody = await getUser(
      request,
      userId
    );

    expect(userBody.id).toBe(userId);
    expect(userBody.name.length)
      .toBeGreaterThan(0);

    expect(userBody.email)
      .toContain('@');

    const todosBody = await getTodos(
      request,
      userId
    );

    console.log(`Todo count: ${todosBody.length}`);

    expect(Array.isArray(todosBody))
      .toBe(true);

    expect(todosBody.length)
      .toBeGreaterThan(0);

    expect(todosBody[0])
      .toHaveProperty('userId');

    expect(todosBody[0])
      .toHaveProperty('id');

    expect(todosBody[0])
      .toHaveProperty('title');

    expect(todosBody[0])
      .toHaveProperty('completed');

    for (const todo of todosBody) {

      expect(todo.userId)
        .toBe(userId);

      expect(todo.id)
        .toBeGreaterThan(0);

      expect(todo.title.length)
        .toBeGreaterThan(0);

      expect(typeof todo.completed)
        .toBe('boolean');

    }

    const todoId = todosBody[0].id;

    const specificTodoResponse =
      await request.get(
        `${BASE_URL}/todos/${todoId}`
      );

    expect(
      specificTodoResponse.status()
    ).toBe(200);

    const specificTodoBody =
      await specificTodoResponse.json();

    expect(specificTodoBody.id)
      .toBe(todoId);

    expect(specificTodoBody.userId)
      .toBe(userId);

    expect(
      specificTodoBody.title.length
    ).toBeGreaterThan(0);

    expect(
      typeof specificTodoBody.completed
    ).toBe('boolean');

const commentsBody =
  await getComments(
    request,
    postId
  );

    expect(Array.isArray(commentsBody))
      .toBe(true);

    expect(commentsBody.length)
      .toBeGreaterThan(0);

    console.log(
      `Comment count: ${commentsBody.length}`
    );

    for (const comment of commentsBody) {

      expect(comment)
        .toHaveProperty('postId');

      expect(comment)
        .toHaveProperty('id');

      expect(comment)
        .toHaveProperty('name');

      expect(comment)
        .toHaveProperty('email');

      expect(comment)
        .toHaveProperty('body');

      expect(comment.postId)
        .toBe(postId);

      expect(comment.email)
        .toContain('@');

      expect(comment.body.length)
        .toBeGreaterThan(0);

    }

    console.log(`User ID: ${userId}`);
    console.log(`Todo ID: ${todoId}`);

    console.log(
      `Todo Title: ${specificTodoBody.title}`
    );

  });
}