import {
  APIRequestContext,
  expect,
} from '@playwright/test';

export async function getWikiSummary(
  request: APIRequestContext,
  article: string
) {
  const response = await request.get(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${article}`
  );

  await expect(response).toBeOK();

  return response.json();
}

export function getTennisPlayers() {
  return [
    'Carlos_Alcaraz',
    'Rafael_Nadal',
    'Roger_Federer',
    'Emma_Raducanu',
  ];
}

export function getPlaces() {
  return [
    'Chepstow',
    'Japan',
    'Tenby',
  ];
}

export function getDirectors() {
  return [
  'Quentin_Tarantino',
  'Ridley_Scott',
  'Steven_Spielberg',
  'Zach_Cregger',
  ];
}

export function getActors() {
  return [
    'Brad_Pitt',
    'Margaret_Qualley',
    'Margot_Robbie',
    'Keanu_Reeves',
  ];
}

export function getMovies() {
  return [
    'Fight_Club',
    'Once_Upon_a_Time_in_Hollywood',
    'Pulp_Fiction',
    'Raiders_of_the_Lost_Ark',
    'The_Big_Lebowski',
    'The_Bourne_Ultimatum',
    'The_Terminator',
    'True_Romance',
  ];
}

export function getWikiArticles() {
  return [
    ...getTennisPlayers(),
    ...getPlaces(),
    ...getActors(),
    ...getMovies(),
    ...getDirectors(),
  ];
}