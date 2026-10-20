import {
  APIRequestContext,
  expect,
} from '@playwright/test';

export async function getWikiSummary(
  request: APIRequestContext,
  article: string
) {
  const url =
    `https://en.wikipedia.org/api/rest_v1/page/summary/${article}`;

  let response;

  for (let attempt = 1; attempt <= 3; attempt++) {

    response = await request.get(url);

    if (response.ok()) {
      return response.json();
    }

    if (response.status() === 429) {

      console.log(
        `Attempt ${attempt}: Rate limited for ${article}`
      );

      await new Promise(resolve =>
        setTimeout(resolve, 10000)
      );

      continue;
    }

    break;
  }

  await expect(response!).toBeOK();

  return response!.json();
}

export function getTennisPlayers() {
  return [
    'Carlos_Alcaraz',
    'Rafael_Nadal',
    'Emma_Raducanu',
  ];
}

export function getPlaces() {
  return [
    'Chepstow',
    'Tenby',
  ];
}

export function getDirectors() {
  return [
    'Quentin_Tarantino',
    'Steven_Spielberg',
    'Zach_Cregger',
  ];
}

export function getActors() {
  return [
    'Brad_Pitt',
    'Sandra_Bullock',
    'Keanu_Reeves',
  ];
}

export function getMovies() {
  return [
    'Fight_Club',
    'Pulp_Fiction',
    'Raiders_of_the_Lost_Ark',
    'The_Bourne_Ultimatum',
    'The_Terminator',
  ];
}

export function getAuthors() {
  return [
    'Philip_Pullman',
    'Joseph_Heller',
    'Stieg_Larsson',
  ];
}

export function getHouseplants() {
  return [
    'Aloe_vera',
    'Lavandula',
  ];
}

export const wikiCategories = {
  tennisPlayers: getTennisPlayers(),
  places: getPlaces(),
  actors: getActors(),
  movies: getMovies(),
  directors: getDirectors(),
  authors: getAuthors(),
  houseplants: getHouseplants(),
};

export function getArticlesByCategory(
  category: keyof typeof wikiCategories
) {
  return wikiCategories[category];
}

export function getRandomArticle(
  category: keyof typeof wikiCategories
) {
  const articles = wikiCategories[category];

  return articles[
    Math.floor(Math.random() * articles.length)
  ];
}

export function getWikiArticles() {
  return [
    ...getTennisPlayers(),
    ...getPlaces(),
    ...getActors(),
    ...getMovies(),
    ...getDirectors(),
    ...getAuthors(),
    ...getHouseplants(),
  ];
}