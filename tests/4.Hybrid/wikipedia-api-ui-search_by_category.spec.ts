import { test } from '../../fixtures/wiki-fixtures';
import { getArticlesByCategory } from '../../services/wiki-service';

test('@regression @hybrid Wikipedia category articles load successfully', async ({
  articlePage,
}) => {

  const category = 'movies';

  const articles = getArticlesByCategory(category);

  console.log(`Testing category: ${category}`);

  for (const article of articles) {
    await articlePage.gotoArticle(article);
    await articlePage.expectHeadingVisible();

    console.log(`Checked ${article}`);
  }
});