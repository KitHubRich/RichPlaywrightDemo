import { test as base, expect } from '@playwright/test';
import { WikiPage } from '../pages/wiki-page';

type WikiFixtures = {
  wikiPage: WikiPage;
};

export const test = base.extend<WikiFixtures>({
  wikiPage: async ({ page }, use) => {
    await use(new WikiPage(page));
  },
});

export { expect };