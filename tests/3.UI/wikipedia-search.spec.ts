import { test } from '../../fixtures/wiki-fixtures';

test.beforeEach(async ({
  wikiPage,
}) => {
  await wikiPage.goto();
});

test('@smoke @ui @wiki Search Carlos Alcaraz', async ({
  wikiPage,
}) => {

  await wikiPage.searchFor(
    'Carlos Alcaraz'
  );

  await wikiPage.expectHeading(
    'Carlos Alcaraz'
  );
});

test('@ui @wiki @regression Search Emma Raducanu', async ({
  wikiPage,
}) => {

  await wikiPage.searchFor(
    'Emma Raducanu'
  );

  await wikiPage.expectHeading(
    'Emma Raducanu'
  );
});