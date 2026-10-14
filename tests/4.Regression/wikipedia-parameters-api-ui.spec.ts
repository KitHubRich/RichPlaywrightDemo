import { test, expect } from '@playwright/test';
import { getWikiSummary } from '../../utils/api-helpers';

const articles = [
  'Carlos_Alcaraz',
  'Roger_Federer',
  'Chepstow',
  'Carrie',
  'Crystal_lake',
];

for (const article of articles) {
  test(`${article} API matches UI`, async ({
    page,
    request,
  }) => {
    const body = await getWikiSummary(
      request,
      article
    );

    await page.goto(
      body.content_urls.desktop.page
    );

    const heading =
      page.locator('#firstHeading');

    const uiTitle =
      await heading.textContent();

    console.log('Article:', article);
    console.log('Description:', body.description);
    console.log('API Title:', body.title);
    console.log('UI Title:', uiTitle);

    await expect(heading)
      .toBeVisible();

    await expect(heading)
      .toHaveText(body.title);

    console.log(
      'Checking description:',
      body.description
    );

    await expect(
      page.locator('#mw-content-text')
    ).toContainText(
      body.description
    );

    console.log('Description found!');
  });
}