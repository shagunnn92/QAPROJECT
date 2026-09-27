import { test, expect } from '@playwright/test';

test.setTimeout(90_000);

test.describe('AutomationExercise smoke/regression suite', () => {

  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(60_000);
    page.setDefaultNavigationTimeout(60_000);
  });

  test('TC-24: invalid login is rejected', async ({ page }) => {
    await page.goto('/login', { waitUntil: 'domcontentloaded' });

    const loginEmail = page.locator('input[data-qa="login-email"]');
    const loginPassword = page.locator('input[data-qa="login-password"]');

    await expect(
      page.getByText('Login to your account', { exact: true })
    ).toBeVisible();

    await expect(loginEmail).toBeVisible();

    await loginEmail.fill(`invalid_${Date.now()}@example.com`);
    await loginPassword.fill('WrongPassword123!');

    await page.locator('button[data-qa="login-button"]').click();

    await expect(
      page.getByText('Your email or password is incorrect!', { exact: true })
    ).toBeVisible();
  });


  test('TC-26: products page displays products', async ({ page }) => {
    await page.goto('/products', { waitUntil: 'domcontentloaded' });

    await expect(
      page.getByText('All Products', { exact: true })
    ).toBeVisible();

    await expect(
      page.locator('.features_items .product-image-wrapper').first()
    ).toBeVisible();
  });


  test('TC-28: product search returns relevant results', async ({ page }) => {
    await page.goto('/products', { waitUntil: 'domcontentloaded' });

    await page.locator('#search_product').fill('top');
    await page.locator('#submit_search').click();

    await expect(
      page.getByText('Searched Products', { exact: true })
    ).toBeVisible();

    await expect(
      page.locator('.features_items .product-image-wrapper').first()
    ).toBeVisible();
  });


  test('TC-32: user can add a product to cart', async ({ page }) => {
    await page.goto('/products', { waitUntil: 'domcontentloaded' });

    const firstProduct = page.locator('.product-image-wrapper').first();

    await firstProduct.locator('a.add-to-cart').first().click();

    await expect(
      page.getByText('Added!', { exact: true })
    ).toBeVisible();

    await page.getByText('View Cart', { exact: true }).click();

    await expect(page).toHaveURL(/view_cart/);

    await expect(
      page.locator('#cart_info_table')
    ).toBeVisible();
  });


  test('TC-34: user can remove an item from cart', async ({ page }) => {
    await page.goto('/products', { waitUntil: 'domcontentloaded' });

    const firstProduct = page.locator('.product-image-wrapper').first();

    // Add product to cart
    await firstProduct.locator('a.add-to-cart').first().click();

    // Confirm that the product was added
    await expect(
      page.getByText('Added!', { exact: true })
    ).toBeVisible({ timeout: 10_000 });

    // Allow the cart request to finish
    await page.waitForTimeout(1_500);

    // Navigate directly to the cart.
    // This avoids the site's ad overlay intercepting the "View Cart" click.
    await page.goto('/view_cart', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveURL(/view_cart/);

    const rows = page.locator('#cart_info_table tbody tr');

    // Confirm that the product exists in the cart
    await expect(
      rows.first()
    ).toBeVisible({ timeout: 15_000 });

    const beforeCount = await rows.count();

    // Remove the first product
    await page.locator('.cart_quantity_delete').first().click();

    // Confirm that the product was removed
    await expect.poll(
      async () => rows.count(),
      { timeout: 15_000 }
    ).toBe(beforeCount - 1);
  });


  test('TC-27: product detail exposes core product information', async ({ page }) => {
    await page.goto('/products', { waitUntil: 'domcontentloaded' });

    await page.locator('a[href^="/product_details/"]').first().click();

    const info = page.locator('.product-information');

    await expect(info).toBeVisible();

    await expect(info.locator('h2')).toBeVisible();

    await expect(
      info.getByText('Category:')
    ).toBeVisible();

    await expect(
      info.getByText('Availability:')
    ).toBeVisible();

    await expect(
      info.getByText('Condition:')
    ).toBeVisible();

    await expect(
      info.getByText('Brand:')
    ).toBeVisible();
  });

});