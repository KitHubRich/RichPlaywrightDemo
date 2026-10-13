import { test, expect } from '@playwright/test';




const movies = [
  'Once_Upon_a_Time_in_Hollywood',
  'The_Big_Lebowski',
  'The_Odyssey',
  'Fight_Club',
  'Scream',
  'Scream_2',
  'Raiders_of_the_Lost_Ark',
  'Indiana_Jones_and_the_Temple_of_Doom',
  'Indiana_Jones_and_the_Last_Crusade',
  'Pulp_Fiction',
  'True_Romance',
  'Reservoir_Dogs',
  'Inglorious_Basterds',
  'Anora',
  'The_Bourne_Identity',
  'The Bourne_Supremacy',
  'The_Bourne_Ultimatum',
  'John_Wick',
  'John_Wick_2',
  'John_Wick_3',
  'John_Wick_4',
  'Bellarina',
  'One_battle_after_another',
  'The_love_witch',
  'Point_Break',
  'Speed',
  'Rocky',
  'Rocky_II',
  'Rocky_IV',
  'Creed',
  'Superman_2',
  'The_Terminator',
  'Terminator_2_Judgment_Day',
  'The_Lord_of_the_Rings_The_Fellowship_of_the_Ring',
  'The_Lord_of_the_Rings_The_Two_Towers',
  'The_Lord_of_the_Rings_The_Return_of_the_King',
  'Alien',
  'Aliens',
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