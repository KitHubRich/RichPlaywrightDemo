import { test, expect } from '@playwright/test';

const movies = [
  'Once Upon a Time in Hollywood',
  'The Big Lebowski',
  'The Odyssey',
  'Fight Club',
  'Scream',
  'Scream 2',
  'Raiders of the Lost Ark',
  'Indiana Jones and the Temple of Doom',
  'Indiana Jones and the Last Crusade',
  'Pulp Fiction',
  'True Romance',
  'Reservoir Dogs',
  'Inglourious Basterds',
  'Anora',
  'The Bourne Identity',
  'The Bourne Supremacy',
  'The Bourne Ultimatum',
  'John Wick',
  'John Wick: Chapter 2',
  'John Wick: Chapter 3',
  'John Wick: Chapter 4',
  'Ballerina',
  'One Battle After Another',
  'The Love Witch',
  'Point Break',
  'Speed',
  'Rocky',
  'Rocky II',
  'Rocky IV',
  'Creed',
  'Superman II',
  'The Terminator',
  'Terminator 2: Judgment Day',
  'The Lord of the Rings: The Fellowship of the Ring',
  'The Lord of the Rings: The Two Towers',
  'The Lord of the Rings: The Return of the King',
  'Alien',
  'Aliens',
  'Back to the Future',
  'Blade Runner',
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