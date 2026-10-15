import { test, expect } from '@playwright/test';

const movies = [
  'True Romance',
  'One Battle After Another',
  'The Love Witch',
  'Point Break',
  'Superman II',
];

for (const movie of movies) {
  test(`Search for ${movie}`, async ({ page }) => {
    await page.goto(
      'https://en.wikipedia.org/wiki/Main_Page'
    );

    await page
      .getByRole('searchbox', {
        name: 'Search Wikipedia',
      })
      .fill(movie);

    await page.keyboard.press('Enter');

    const heading =
      page.locator('#firstHeading');

    await expect(heading)
      .toBeVisible();

    const headingText =
      await heading.textContent();

    console.log(`Movie: ${movie}`);
    console.log(`Heading: ${headingText}`);
    console.log(`Title: ${await page.title()}`);
  });
}