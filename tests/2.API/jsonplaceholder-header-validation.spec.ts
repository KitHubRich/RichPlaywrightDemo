import { test, expect } from '@playwright/test';
import { urls } from '../../config/urls';

test('@api @regression Request contains bearer token header', async ({
  request,
}) => {

  const response = await request.get(
    `${urls.jsonPlaceholder.posts}/1`,
    {
      headers: {
  'Rich-Test-Header': 'RichPlaywright',
  'Rich-Environment': 'RichTest',
  Authorization: 'Bearer RichPlaywrightToken'
}
    }
  );

  expect(response.status()).toBe(200);

});

test('@api @regression Response contains expected headers', async ({
  request,
}) => {

  const response = await request.get(
    `${urls.jsonPlaceholder.posts}/1`
    
  );

  const headers = response.headers();

  console.log(headers);

  expect(headers).toHaveProperty('content-type');

});