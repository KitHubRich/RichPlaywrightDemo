import { test, expect } from '@playwright/test';
import { getWikiSummary } from '../../services/wiki-service';

test('Wikipedia API title matches UI title', async ({
  page,
  request,
}) => {
const body = await getWikiSummary(
  request,
  'Carrie'
);

  await page.goto(
    body.content_urls.desktop.page
  );

  const heading =
    page.locator('#firstHeading');

  const uiTitle =
    await heading.textContent();

  console.log('API URL:', body.content_urls.desktop.page);
  console.log('Description:', body.description);
  console.log('API Title:', body.title);
  console.log('UI Title:', uiTitle);
  console.log('Extract:', body.extract);

await expect(heading)
  .toBeVisible();

await expect(heading)
  .toHaveText(body.title);

console.log('Checking for 2026 miniseries...');

await expect(
  page.locator('#mw-content-text')
).toContainText('2026 miniseries');

console.log('2026 miniseries found!');

});