import { test } from '@playwright/test';
import { getArticlesByCategory } from '../../services/wiki-service';
import { WikiPage } from '../../pages/wiki-page';

test('Wikipedia category articles load successfully', async ({ page }) => {
  const category = 'movies';

  const articles = getArticlesByCategory(category);

  console.log(`Testing category: ${category}`);

  const wikiPage = new WikiPage(page);

  for (const article of articles) {
    await wikiPage.gotoArticle(article);
    await wikiPage.expectHeadingVisible();

    console.log(`Checked ${article}`);
  }
});