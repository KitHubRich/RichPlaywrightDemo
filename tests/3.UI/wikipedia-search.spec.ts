import { test } from '../../fixtures/wiki-fixtures';

test.beforeEach(async ({
  wikiPage,
}) => {
  await wikiPage.goto();
});

test('Search Carlos Alcaraz', async ({
  wikiPage,
}) => {

  await wikiPage.searchFor(
    'Carlos Alcaraz'
  );

  await wikiPage.expectHeading(
    'Carlos Alcaraz'
  );
});

test('Search Emma Raducanu', async ({
  wikiPage,
}) => {

  await wikiPage.searchFor(
    'Emma Raducanu'
  );

  await wikiPage.expectHeading(
    'Emma Raducanu'
  );
});