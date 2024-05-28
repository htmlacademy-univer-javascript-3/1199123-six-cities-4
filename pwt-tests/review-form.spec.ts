import { test, expect, Locator } from '@playwright/test';

test.describe('Review form tests', () => {
  test('should not show review form to an unauthorized user', async ({ page }) => {

    await page.goto('./');

    await page.getByTestId('placeTitle').first().click();
    const isVisible = await page.locator('.reviews__form').isVisible();
    expect(isVisible).toBeFalsy();
  });

  test('should show review form to an authorized user', async ({ page }) => {

    await page.goto('./login');

    await page.fill('input[name=email]', 'test@example.com');
    await page.fill('input[name=password]', 'password123');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.getByTestId('placeTitle').first().click();

    await page.waitForSelector('.offer__gallery');
    const isVisible = await page.locator('.reviews__form').isVisible();
    expect(isVisible).toBeTruthy();
  });

  test('should post review as an authorized user', async ({ page }) => {

    await page.goto('./login');

    await page.fill('input[name=email]', 'test@example.com');
    await page.fill('input[name=password]', 'password123');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.getByTestId('placeTitle').first().click();

    await page.waitForSelector('.offer__gallery');

    const isVisible = await page.locator('.reviews__form').isVisible();
    expect(isVisible).toBeTruthy();

    const reviewText = "Это стольный град, Это лучший клуб, Это наш Зенит, Это Петербург! Будет навсегда Номером один Только Петербург, Только наш Зенит";
    const reviewTitle = "not bad";

    await page.fill('[name="review"]', reviewText);
    await page.getByTitle(reviewTitle).click();
    await Promise.all([
      page.waitForResponse(
        (response) => response.url().includes('/comments') && response.status() === 201
      ),
      page.click('button[type="submit"]'),
    ]);

    await page.waitForSelector('.offer__gallery');

    const reviewTextFetched = await page.locator('.reviews__text').first().textContent();
    const authorName = await page.locator('.reviews__user-name').first().textContent();
    const rating = await page.locator('.reviews__stars>span').first().getAttribute('style');

    expect(reviewTextFetched).toBe(reviewText);
    expect(authorName).toBe('test');
    expect(rating).toBe('width: 60%;');
  });
})
