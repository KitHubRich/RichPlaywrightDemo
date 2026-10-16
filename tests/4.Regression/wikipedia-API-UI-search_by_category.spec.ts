import { test, expect } from '@playwright/test';
import { getArticlesByCategory } from '../../services/wiki-service';

test('Wikipedia category articles load successfully', async ({ page }) => {
  const category = 'movies';

  const articles = getArticlesByCategory(category);

  console.log(`Testing category: ${category}`);

  for (const article of articles) {
    await page.goto(
      `https://en.wikipedia.org/wiki/${article}`
    );

    await expect(
      page.locator('#firstHeading')
    ).toBeVisible();

    console.log(`Checked ${article}`);
  }
});