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
    'Margaret_Qualley',
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



export const wikiCategories = {
  tennisPlayers: getTennisPlayers(),
  places: getPlaces(),
  actors: getActors(),
  movies: getMovies(),
  directors: getDirectors(),
};

export function getArticlesByCategory(
  category: keyof typeof wikiCategories
) {
  return wikiCategories[category];
}

export function getWikiArticles() {
  return Object.values(wikiCategories).flat();
}
``

export function getRandomArticle(
  category: keyof typeof wikiCategories
) {
  const articles = wikiCategories[category];

  return articles[
    Math.floor(Math.random() * articles.length)
  ];
}