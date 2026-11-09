import { test } from '../../fixtures/wiki-fixtures';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

test.describe('Wikipedia Category Regression', () => {

  const categories = [
    'movies',
    'actors',
    'directors',
    'places',
    'tennisPlayers',
    'houseplants',
  ] as const;

  for (const category of categories) {

    const articles =
      getArticlesByCategory(category);

    test.describe(category, () => {

      for (const article of articles) {

        test(
          `@regression @ui ${article} loads successfully`,
          async ({ articlePage }) => {

            await articlePage.gotoArticle(article);

            await articlePage.expectHeadingVisible();

            console.log(
              `Category: ${category}`
            );

            console.log(
              `Article: ${article}`
            );

            const heading =
              await articlePage.getHeadingText();

            console.log(
              `Heading: ${heading}`
            );
          }
        );
      }
    });
  }
});