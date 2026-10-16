import { test, expect } from '@playwright/test';

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
          `${article} loads successfully`,
          async ({ page }) => {

            await page.goto(
              `https://en.wikipedia.org/wiki/${article}`
            );

            await expect(
              page.locator('#firstHeading')
            ).toBeVisible();

            console.log(
              `Category: ${category}`
            );

            console.log(
              `Article: ${article}`
            );

            const heading =
              await page
                .locator('#firstHeading')
                .textContent();

            console.log(
              `Heading: ${heading}`
            );
          }
        );
      }
    });
  }
});