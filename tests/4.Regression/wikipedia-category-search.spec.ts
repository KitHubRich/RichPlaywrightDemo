import { test } from '@playwright/test';
import { getRandomArticle } from '../../services/wiki-service';
import { WikiPage } from '../../pages/wiki-page';

test('Random movie article loads successfully', async ({ page }) => {
  const article = getRandomArticle('movies');

  console.log(`Testing ${article}`);

  const wikiPage = new WikiPage(page);

  await wikiPage.gotoArticle(article);
  await wikiPage.expectHeadingVisible();
});