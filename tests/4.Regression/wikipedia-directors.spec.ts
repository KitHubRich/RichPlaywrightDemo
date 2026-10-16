import { test, expect } from '@playwright/test';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

const directors =
  getArticlesByCategory('directors');

test.describe('Director Regression', () => {

  for (const director of directors) {

    test(`${director} loads successfully`,
      async ({ page }) => {

        await page.goto(
          `https://en.wikipedia.org/wiki/${director}`
        );

        await expect(
          page.locator('#firstHeading')
        ).toBeVisible();

        console.log(`Checked ${director}`);

      });

  }

});