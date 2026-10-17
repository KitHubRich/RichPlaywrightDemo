import { expect, Page } from '@playwright/test';

export class WikiPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://en.wikipedia.org');
  }

  async searchFor(article: string) {
    await this.page.getByRole('searchbox').fill(article);
    await this.page.keyboard.press('Enter');
  }

  async expectHeading(expectedTitle: string) {
    await expect(
      this.page.locator('#firstHeading')
    ).toContainText(expectedTitle);
  }

  async gotoArticle(article: string) {
  await this.page.goto(
    `https://en.wikipedia.org/wiki/${article}`
  );
}

async expectHeadingVisible() {
  await expect(
    this.page.locator('#firstHeading')
  ).toBeVisible();
}

async gotoUrl(url: string) {
  await this.page.goto(url);
}

async expectUrl(url: string) {
  await expect(this.page).toHaveURL(url);
}

async getHeadingText() {
  return await this.page
    .locator('#firstHeading')
    .textContent();
}

async expectHeadingText(expectedText: string) {
  await expect(
    this.page.locator('#firstHeading')
  ).toHaveText(expectedText);
}

async expectPageContains(text: string) {
  await expect(
    this.page.locator('#mw-content-text')
  ).toContainText(text);
}
}