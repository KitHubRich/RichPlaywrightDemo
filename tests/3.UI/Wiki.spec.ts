import { test, expect } from '@playwright/test';


const movies = [
  'Once_Upon_a_Time_in_Hollywood',
  'The_Big_Lebowski',
  'The_Odyssey',
  'Fight_Club',
  'Weapons',
  'Scream',
  'Scream_2',
  'Scream_3',
  'Scream_4',
  'Scream_5',
  'Scream_6',
  'Scream_7',
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
  'Rocky_Balboa',
  'Creed',
  'Superman_the_Movie',
  'The_Terminator',
  'Terminator_2_Judgment_Day',
  'The_Lord_of_the_Rings_The_Fellowship_of_the_Ring',
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

    await expect(
      page.locator('#firstHeading')
    ).toBeVisible();

    console.log(await page.title());

  });


}