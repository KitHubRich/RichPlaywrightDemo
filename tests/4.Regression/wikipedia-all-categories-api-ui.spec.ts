import { test } from '../../fixtures/wiki-fixtures';

import {
  getWikiSummary,
  getWikiArticles
} from '../../services/wiki-service';

test.describe('Wikipedia API UI Validation', () => {

  const articles = getWikiArticles();

  for (const article of articles) {

    test(`@hybrid @regression ${article} API matches UI`, async ({
      wikiPage,
      request,
    }) => {

      const body = await getWikiSummary(
        request,
        article
      );

      await wikiPage.gotoUrl(
        body.content_urls.desktop.page
      );

      await wikiPage.expectUrl(
        body.content_urls.desktop.page
      );

      const uiTitle =
        await wikiPage.getHeadingText();

      console.log('Article:', article);
      console.log('Description:', body.description);
      console.log('API Title:', body.title);
      console.log('UI Title:', uiTitle);

      await wikiPage.expectHeadingVisible();

      await wikiPage.expectHeadingText(
        body.title
      );

      console.log(
        'Checking description:',
        body.description
      );

      await wikiPage.expectPageContains(
        body.description
      );

      console.log('Description found!');
    });
  }
});