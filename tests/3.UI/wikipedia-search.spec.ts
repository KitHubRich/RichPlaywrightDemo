import { test } from '../../fixtures/wiki-fixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
});

test('@regression @ui Search Carlos Alcaraz', async ({
  homePage,
  articlePage,
}) => {
  await homePage.searchFor(
    'Carlos Alcaraz'
  );

  await articlePage.expectHeading(
    'Carlos Alcaraz'
  );
});

test('@regression @ui Search Emma Raducanu', async ({
  homePage,
  articlePage,
}) => {
  await homePage.searchFor(
    'Emma Raducanu'
  );

  await articlePage.expectHeading(
    'Emma Raducanu'
  );
});