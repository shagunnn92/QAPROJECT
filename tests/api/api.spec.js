import { test, expect } from '@playwright/test';

const API = 'https://automationexercise.com';

test.describe('AutomationExercise API smoke suite', () => {

  test('TC-13: GET productsList returns product data', async ({ request }) => {
    const response = await request.get(`${API}/api/productsList`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.products).toBeInstanceOf(Array);
    expect(body.products.length).toBeGreaterThan(0);
  });


  test('TC-42: POST productsList is rejected', async ({ request }) => {
    const response = await request.post(`${API}/api/productsList`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
    expect(body.message).toContain('This request method is not supported');
  });


  test('TC-43: PUT brandsList is rejected', async ({ request }) => {
    const response = await request.put(`${API}/api/brandsList`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
    expect(body.message).toContain('This request method is not supported');
  });


  test('TC-44: searchProduct returns results', async ({ request }) => {
    const response = await request.post(`${API}/api/searchProduct`, {
      form: {
        search_product: 'tshirt'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.products).toBeInstanceOf(Array);
  });


  test('TC-45: searchProduct rejects missing parameter', async ({ request }) => {
    const response = await request.post(`${API}/api/searchProduct`, {
      form: {}
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(400);
    expect(body.message).toContain('search_product parameter is missing');
  });


  test('TC-47: verifyLogin rejects invalid credentials', async ({ request }) => {
    const response = await request.post(`${API}/api/verifyLogin`, {
      form: {
        email: `invalid_${Date.now()}@example.com`,
        password: 'WrongPassword123!'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(404);
    expect(body.message).toContain('User not found');
  });

});