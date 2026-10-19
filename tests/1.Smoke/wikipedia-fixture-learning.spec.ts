import { test } from '../../fixtures/wiki-fixtures';

test('@smoke Fixture learning', async ({
  homePage,
  articlePage,
}) => {

  await homePage.goto();

  await homePage.searchFor('Carlos_Alcaraz');

  await articlePage.expectHeading(
    'Carlos Alcaraz'
  );

});