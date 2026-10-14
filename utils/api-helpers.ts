import {
  APIRequestContext,
  expect,
} from '@playwright/test';

export async function getWikiSummary(
  request: APIRequestContext,
  article: string
) {
  const response = await request.get(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${article}`
  );

  await expect(response).toBeOK();

  return response.json();
}