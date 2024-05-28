import { test, expect } from '@playwright/test';

test.describe('Offers rendering', () => {
  test('should load cards on the home page', async ({ page }) => {


    page.waitForResponse(
      (resp) => resp.url().includes('/offers') && resp.status() === 200
    );

    await page.goto('./');

    await page.waitForSelector('.places__list');
    const offerCards = await page.$$('.place-card');
    expect(offerCards.length).toEqual(20);

  });
})
