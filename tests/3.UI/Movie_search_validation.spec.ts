import { test } from '@playwright/test';

import { WikipediaHomePage }
  from '../../pages/wikipedia-home-page';

import { WikipediaArticlePage }
  from '../../pages/wikipedia-article-page';

const movies = [
  'True Romance',
  'One Battle After Another',
  'The Love Witch',
  'Point Break',
  'Superman II',
];

for (const movie of movies) {

  test(`Search for ${movie}`, async ({
    page,
  }) => {

    const homePage =
      new WikipediaHomePage(page);

    const articlePage =
      new WikipediaArticlePage(page);

    await homePage.goto();

    await homePage.searchFor(movie);

    await articlePage.expectHeading(movie);

    const headingText =
      await articlePage.getHeadingText();

    console.log(`Movie: ${movie}`);
    console.log(`Heading: ${headingText}`);
  });
}