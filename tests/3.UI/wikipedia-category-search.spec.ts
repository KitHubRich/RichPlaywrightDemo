import { test } from '../../fixtures/wiki-fixtures';
import { getRandomArticle } from '../../services/wiki-service';

test('@regression @ui @wiki Random movie article loads successfully', async ({
  wikiPage,
}) => {

  const article = getRandomArticle('movies');

  await wikiPage.gotoArticle(article);
  await wikiPage.expectHeadingVisible();

});