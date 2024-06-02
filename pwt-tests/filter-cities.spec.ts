import { test, expect, Locator } from '@playwright/test';

test.describe('Filters test', () => {
  test('should filter offers by city', async ({ page }) => {
    await page.goto('./');

    const isActive = async (locator: Locator) => {
      const classList = await locator.evaluate((el) => [...el.classList]);
      return classList.includes('tabs__item--active');
    };

    await page.waitForSelector('.locations__item-link');

    const cities = await page.locator('.locations__item-link').all();
    for (const city of cities) {
      await city.click();

      const currentCity = await city.textContent();

      await page.waitForSelector('.cities__card', {
        state: 'attached',
        timeout: 5000,
      });

      const hasActiveClass = await isActive(city);
      expect(hasActiveClass).toBeTruthy();

      const placesFoundText = await page.locator('.places__found').textContent();

      expect(currentCity).toBe(placesFoundText?.split(' ').pop());
    }
  });
})
