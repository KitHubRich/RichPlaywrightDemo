import { test } from '../../fixtures/wiki-fixtures';

import {
  getWikiSummary,
  getWikiArticles,
} from '../../services/wiki-service';

test.describe('Wikipedia API UI Validation', () => {
  const articles = getWikiArticles();

  for (const article of articles) {
    test(
      `@hybrid @regression ${article} API matches UI`,
      async ({
        articlePage,
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

        await articlePage.expectUrl(
          body.content_urls.desktop.page
        );

        const uiTitle =
          await articlePage.getHeadingText();

        console.log('Article:', article);
        console.log('Description:', body.description);
        console.log('API Title:', body.title);
        console.log('UI Title:', uiTitle);

        await articlePage.expectHeadingVisible();

        await articlePage.expectHeading(
          body.title
        );

        console.log(
          'Checking description:',
          body.description
        );

        await articlePage.expectPageContains(
          body.description
        );

        console.log('Description found!');
      }
    );
  }
});
