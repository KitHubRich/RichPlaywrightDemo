import { test, expect } from '@playwright/test';
import { getRandomArticle } from '../../services/wiki-service';

test('Random movie article loads successfully', async ({ page }) => {
  const article = getRandomArticle('movies');

  console.log(`Testing ${article}`);

  await page.goto(
    `https://en.wikipedia.org/wiki/${article}`
  );

  await expect(
    page.locator('#firstHeading')
  ).toBeVisible();
});