import { test } from '../../fixtures/wiki-fixtures';
import { getRandomArticle } from '../../services/wiki-service';

test('@regression @ui Random movie article loads successfully', async ({
  articlePage,
}) => {

  const article = getRandomArticle('movies');

  await articlePage.gotoArticle(article);
  await articlePage.expectHeadingVisible();

});