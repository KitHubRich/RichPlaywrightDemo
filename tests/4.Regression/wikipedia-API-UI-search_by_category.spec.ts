import { test } from '../../fixtures/wiki-fixtures';
import { getArticlesByCategory } from '../../services/wiki-service';

test('@regression @ui @wiki Wikipedia category articles load successfully', async ({
  wikiPage,
}) => {

  const category = 'movies';

  const articles = getArticlesByCategory(category);

  console.log(`Testing category: ${category}`);

  for (const article of articles) {
    await wikiPage.gotoArticle(article);
    await wikiPage.expectHeadingVisible();

    console.log(`Checked ${article}`);
  }
});