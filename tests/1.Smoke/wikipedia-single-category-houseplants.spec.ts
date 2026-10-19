import { test, expect } from '@playwright/test';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

const houseplants =
  getArticlesByCategory('houseplants');

test.describe('@smoke Houseplants', () => {

  for (const plant of houseplants) {

  test(`${plant} loads successfully`,
      async ({ page }) => {

        await page.goto(
          `https://en.wikipedia.org/wiki/${plant}`
        );

        await expect(
          page.locator('#firstHeading')
        ).toBeVisible();

        console.log(`Houseplant: ${plant}`);
        console.log(
          `Heading: ${
            await page.locator('#firstHeading').textContent()
          }`
        );
      }
    );
  }

});