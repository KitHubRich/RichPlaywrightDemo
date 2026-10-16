import { test, expect } from '@playwright/test';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

const movies =
  getArticlesByCategory('movies');

test.describe('Movie Regression', () => {

  for (const movie of movies) {

    test(`${movie} loads successfully`,
      async ({ page }) => {

        await page.goto(
          `https://en.wikipedia.org/wiki/${movie}`
        );

        await expect(
          page.locator('#firstHeading')
        ).toBeVisible();

      });

  }

});