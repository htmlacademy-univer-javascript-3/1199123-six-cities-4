import { test, expect } from '@playwright/test';

test.describe('Offer transition test', () => {
  test('should correctly transit to page of an offer', async ({ page }) => {

    page.waitForResponse(
      (resp) => resp.url().includes('/offers') && resp.status() === 200
    );

    await page.goto('./');

    const firstCardTitle = await page.getByTestId('placeTitle').first().textContent();
    console.log(firstCardTitle);
    const firstCardPrice = await page.locator('.place-card__price-value').first().textContent();
    console.log(firstCardPrice);


    await page.getByTestId('placeTitle').first().click()
    const response = await page.evaluate(async () => {
      const res = await fetch('https://14.design.htmlacademy.pro/six-cities/offers'); // Replace with your actual API endpoint
      return res.json();
    });

    const firstId = response[0].id;
    expect(`${page.url()}`).toContain(`http://localhost:5173/offer/${firstId}`);

    const clickedCardTitle = await page.locator('.offer__name').textContent();
    const clickedCardPrice = await page.locator('.offer__price-value').textContent();

    expect(firstCardTitle).toBe(clickedCardTitle);
    expect(firstCardPrice).toBe(clickedCardPrice);

  });
})
