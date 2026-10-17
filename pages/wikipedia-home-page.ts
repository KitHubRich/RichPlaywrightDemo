import { Page } from '@playwright/test';

export class WikipediaHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      'https://en.wikipedia.org'
    );
  }

  async searchFor(article: string) {
    await this.page
      .getByRole('searchbox')
      .fill(article);

    await this.page.keyboard.press('Enter');
  }
}