import { test, expect } from '@playwright/test';




const movies = [
  'The_Big_Lebowski',
  'Fight_Club',
  'Raiders_of_the_Lost_Ark',
  'Indiana_Jones_and_the_Temple_of_Doom',
  'Indiana_Jones_and_the_Last_Crusade',
  'Pulp_Fiction',
  'The_Bourne_Identity',
  'The Bourne_Supremacy',
  'The_Bourne_Ultimatum',
  'The_Terminator',
  'Back_to_the_Future',
  'Blade_Runner',
];



for (const movie of movies) {

  test(`${movie} article loads`, async ({
    page,
  }) => {

    await page.goto(
      `https://en.wikipedia.org/wiki/${movie}`
    );

const heading =
  page.locator('#firstHeading');

await expect(heading)
  .toBeVisible();

console.log(`Movie: ${movie}`);

console.log(
  `Heading: ${await heading.textContent()}`
);

console.log(
  `Title: ${await page.title()}`
);



  });


}