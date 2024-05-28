import { test, expect } from '@playwright/test';

test.describe('Favorites page and button tests -- unauthorized', () => {
  test('should redirect to login page if unauthorized (offer page bookmark btn)', async ({ page }) => {

    await page.goto('./');
    await page.waitForSelector('.cities__card');
    await page.getByTestId('placeTitle').first().click();
    await page.waitForSelector('.offer__gallery');
    await page.locator('.offer__bookmark-button').first().click();
    await page.waitForURL('./login');

    expect(`${page.url()}`).toBe('http://localhost:5173/login');
  });

  test('should redirect to login page if unauthorized (home page bookmark btn)', async ({ page }) => {

    await page.goto('./');
    await page.waitForSelector('.cities__card');
    await page.locator('.place-card__bookmark-button').first().click();

    expect(`${page.url()}`).toBe('http://localhost:5173/login');
  });

  test('should redirect to login page if unauthorized (favorites link)', async ({ page }) => {

    await page.goto('./favorites');
    await page.waitForURL('./login');
    expect(`${page.url()}`).toBe('http://localhost:5173/login');

  });

})


test.describe('Favorites page and button tests -- authorized', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('./login');
  });

  test('should add to favorites if authorized (offer page bookmark btn)', async ({ page }) => {

    await page.fill('input[name=email]', 'test@example.com');
    await page.fill('input[name=password]', 'password123');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.waitForSelector('.cities__card');
    await page.getByTestId('placeTitle').first().click();

    const isFavoriteSelected = async () => {
      const favouriteButtonClassList = await page.locator('.offer__bookmark-button').first().evaluate(
        (el) => [...el.classList]
      );
      return favouriteButtonClassList.includes('offer__bookmark-button--active');
    };

    const getFavoriteCount = async () => parseInt((await page.locator('.header__favorite-count').textContent()) || '0');

    const counter = await getFavoriteCount();
    const wasSelected = await isFavoriteSelected();

    await page.locator('.offer__bookmark-button').click();
    await page.waitForSelector('.offer__gallery');

    const updatedCounter = await getFavoriteCount();
    const isSelected = await isFavoriteSelected();

    if (wasSelected) {
      expect(isSelected).toBeFalsy();
      expect(updatedCounter).toEqual(counter - 1);
    } else {
      expect(isSelected).toBeTruthy();
      expect(updatedCounter).toEqual(counter + 1);
    }
  });

  test('should add to favorites if authorized (home page bookmark btn)', async ({ page }) => {

    await page.fill('input[name=email]', 'whatever@example.com');
    await page.fill('input[name=password]', 'pw123');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.waitForSelector('.place-card__bookmark-button');

    const isFavoriteSelected = async () => {
      const favouriteButtonClassList = await page.locator('.place-card__bookmark-button').first().evaluate(
        (el) => [...el.classList]
      );
      return favouriteButtonClassList.includes('place-card__bookmark-button--active');
    };

    const getFavoriteCount = async () => parseInt((await page.locator('.header__favorite-count').textContent()) || '0');

    const counter = await getFavoriteCount();
    const wasSelected = await isFavoriteSelected();

    await page.locator('.place-card__bookmark-button').first().click();
    await page.waitForSelector('.place-card__bookmark-button');
    await page.waitForSelector('.cities__card');

    const updatedCounter = await getFavoriteCount();
    const isSelected = await isFavoriteSelected();

    console.log(updatedCounter);
    console.log(isSelected)
    if (wasSelected) {
      expect(isSelected).toBeFalsy();
      expect(updatedCounter).toEqual(counter - 1);
    } else {
      expect(isSelected).toBeTruthy();
      expect(updatedCounter).toEqual(counter + 1);
    }
  });

  test('should delete items from favorites page', async ({ page }) => {
  
    await page.fill('input[name=email]', 'yo@example.com');
    await page.fill('input[name=password]', 'p123');
    await page.click('button[type=submit]');
    await page.waitForURL('./');


    await page.waitForSelector('.cities__card');


    const isFavoriteSelected = async () => {
      return await page.locator('.place-card__bookmark-button').first().evaluate(
        (el) => el.classList.contains('place-card__bookmark-button--active')
      );
    };

    const getFavoriteCount = async () => {
      const countText = await page.locator('.header__favorite-count').textContent();
      return parseInt(countText || '0');
    };

    // Click to add or remove favorite
    await page.locator('.place-card__bookmark-button').first().click();


    await page.waitForTimeout(5000);


    const initialCounter = await getFavoriteCount();
    const isSelected = await isFavoriteSelected();

    console.log(`Initial Counter: ${initialCounter}`);
    console.log(`Is Selected: ${isSelected}`);


    await page.goto('./favorites');
    await page.waitForURL('./favorites');

    console.log(`Current URL: ${page.url()}`);

    if (isSelected) {

      await page.locator('.place-card__bookmark-button').first().click();


      await page.waitForTimeout(1000);


      const newCounter = await getFavoriteCount();
      console.log(`New Counter: ${newCounter}`);
      expect(newCounter).toEqual(initialCounter - 1);
    }
  });





  test('should return the nothing-yet-saved message if favorites is empty', async ({ page }) => {
    await page.fill('input[name=email]', 'nothingused@example.com');
    await page.fill('input[name=password]', 'sm05');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.waitForTimeout(1000);

    await page.goto('./favorites');
    await page.waitForURL('./favorites');

    await page.waitForSelector('[data-testid=nothingSaved]', { timeout: 5000 });

    const nothingSavedText = await page.locator('[data-testid=nothingSaved]').textContent();
    console.log(`Nothing Saved Text: ${nothingSavedText}`);
    expect(nothingSavedText).toBe('Nothing yet saved');
  });

})
