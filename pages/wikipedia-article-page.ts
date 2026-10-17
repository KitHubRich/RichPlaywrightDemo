import { expect, Page } from '@playwright/test';

export class WikipediaArticlePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoArticle(article: string) {
    await this.page.goto(
      `https://en.wikipedia.org/wiki/${article}`
    );
  }

  async expectHeading(expectedTitle: string) {
    await expect(
      this.page.locator('#firstHeading')
    ).toContainText(expectedTitle);
  }

  async expectHeadingVisible() {
    await expect(
      this.page.locator('#firstHeading')
    ).toBeVisible();
  }

  async getHeadingText() {
    return await this.page
      .locator('#firstHeading')
      .textContent();
  }

  async expectUrl(url: string) {
    await expect(this.page)
      .toHaveURL(url);
  }

  async expectPageContains(text: string) {
    await expect(
      this.page.locator('#mw-content-text')
    ).toContainText(text);
  }
}