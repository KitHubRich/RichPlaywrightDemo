import { test as base, expect } from '@playwright/test';

import { WikiPage } from '../pages/wiki-page';

import { WikipediaHomePage }
  from '../pages/wikipedia-home-page';

import { WikipediaArticlePage }
  from '../pages/wikipedia-article-page';

type WikiFixtures = {
  wikiPage: WikiPage;
  homePage: WikipediaHomePage;
  articlePage: WikipediaArticlePage;
};

export const test = base.extend<WikiFixtures>({
  wikiPage: async ({ page }, use) => {
    await use(new WikiPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new WikipediaHomePage(page));
  },

  articlePage: async ({ page }, use) => {
    await use(new WikipediaArticlePage(page));
  },
});

export { expect };