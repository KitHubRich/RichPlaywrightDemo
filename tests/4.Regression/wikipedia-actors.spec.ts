import { test, expect } from '@playwright/test';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

const actors =
  getArticlesByCategory('actors');

test.describe('Actor Regression', () => {

  for (const actor of actors) {

    test(`${actor} loads successfully`,
      async ({ page }) => {

        await page.goto(
          `https://en.wikipedia.org/wiki/${actor}`
        );

        await expect(
          page.locator('#firstHeading')
        ).toBeVisible();

        console.log(`Actor: ${actor}`);
        console.log(
          `Heading: ${
            await page.locator('#firstHeading').textContent()
          }`
        );
      }
    );
  }

});
