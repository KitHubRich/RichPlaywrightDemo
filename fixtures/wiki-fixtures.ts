import { test as base, expect } from '@playwright/test';

import { WikipediaHomePage }
  from '../pages/wikipedia-home-page';

import { WikipediaArticlePage }
  from '../pages/wikipedia-article-page';

type WikiFixtures = {
  homePage: WikipediaHomePage;
  articlePage: WikipediaArticlePage;
};

export const test = base.extend<WikiFixtures>({

  homePage: async ({ page }, use) => {
    await use(new WikipediaHomePage(page));
  },

  articlePage: async ({ page }, use) => {
    await use(new WikipediaArticlePage(page));
  },
});

export { expect };