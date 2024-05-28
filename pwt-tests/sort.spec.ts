import { test, expect } from '@playwright/test';

test.describe('Price sort test', () => {

  test('should sort offers by price: higher to lower', async ({ page }) => {

    await page.goto('./');

    await page.click('.places__sorting-type');
    await page.click('text="Price: high to low"');

    await page.waitForSelector('.cities__card', {
      state: 'attached',
      timeout: 5000,
    });

    const prices = await page.locator('.place-card__price-value').allTextContents();
    const pricesTrimmed = [];
    for (let i = 0; i < prices.length; i++) {
      pricesTrimmed.push(Number(prices[i].slice(1,)));
    }

    for (let i = 0; i < pricesTrimmed.length - 1; i++) {
      expect(pricesTrimmed[i + 1]).toBeLessThanOrEqual(pricesTrimmed[i]);
    }
  });

  test('should sort offers by price: lower to higher', async ({ page }) => {

    await page.goto('./');

    await page.click('.places__sorting-type');
    await page.click('text="Price: low to high"');

    await page.waitForSelector('.cities__card', {
      state: 'attached',
      timeout: 5000,
    });

    const prices = await page.locator('.place-card__price-value').allTextContents();
    const pricesTrimmed = [];
    for (let i = 0; i < prices.length; i++) {
      pricesTrimmed.push(Number(prices[i].slice(1,)));
    }

    for (let i = 0; i < pricesTrimmed.length - 1; i++) {
      expect(pricesTrimmed[i + 1]).toBeGreaterThanOrEqual(pricesTrimmed[i]);
    }
  });
});
