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

export function getWikiArticles() {
return [
// Articles used by parameterised Wikipedia API/UI validation tests export function getWikiArticles() {
  'Anora', 
  'Carlos_Alcaraz',
  'Carrie',
  'Chepstow',
  'Crystal_Lake',
  'Fight_Club',
  'Indiana_Jones_and_the_Last_Crusade',
  'Indiana_Jones_and_the_Temple_of_Doom',
  'Once_Upon_a_Time_in_Hollywood',
  'Pulp_Fiction',
  'Rafael_Nadal',
  'Raiders_of_the_Lost_Ark',
  'Roger_Federer',
  'Tenby',
  'The_Big_Lebowski',
  'The_Bourne_Ultimatum',
  'True_Romance',
];
}