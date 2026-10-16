import { test, expect } from '@playwright/test';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

const places =
  getArticlesByCategory('places');

test.describe('Place Regression', () => {

  for (const place of places) {

    test(`${place} loads successfully`,
      async ({ page }) => {

        await page.goto(
          `https://en.wikipedia.org/wiki/${place}`
        );

        await expect(
          page.locator('#firstHeading')
        ).toBeVisible();

        console.log(`Place: ${place}`);
        console.log(
          `Heading: ${
            await page.locator('#firstHeading').textContent()
          }`
        );
      }
    );
  }

});