import { Page } from '@playwright/test';

import { urls } from '../config/urls';

export class WikipediaHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
  urls.wikipedia.home
);
  }

  async searchFor(article: string) {
    await this.page
      .getByRole('searchbox')
      .fill(article);

    await this.page.keyboard.press('Enter');
  }
}