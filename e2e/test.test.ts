import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'to About Page' }).click();
  await page.getByRole('button', { name: 'to Top Page' }).click();
  await page.locator('nextjs-portal > div > div').first().click();
  await page.getByText('Top Pageto About Page Top Pagepreviousnext 1 of 1 unhandled errorUnhandled Runti').press('Escape');
  await page.getByText('Top Pageto About Page Top Page1 error').press('Escape');
  await page.getByText('Top Pageto About Page Top Page1 error').press('Escape');
  await page.getByRole('heading', { name: 'Top Page' }).click();
});