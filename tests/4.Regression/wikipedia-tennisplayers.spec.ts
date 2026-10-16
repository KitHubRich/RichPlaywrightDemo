import { test, expect } from '@playwright/test';

import {
  getArticlesByCategory,
} from '../../services/wiki-service';

const tennisPlayers =
  getArticlesByCategory('tennisPlayers');

test.describe('Tennis Player Regression', () => {

  for (const player of tennisPlayers) {

    test(`${player} loads successfully`,
      async ({ page }) => {

        await page.goto(
          `https://en.wikipedia.org/wiki/${player}`
        );

        await expect(
          page.locator('#firstHeading')
        ).toBeVisible();

        console.log(`Checked ${player}`);

      });

  }

});