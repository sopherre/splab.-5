import { test, expect } from "@playwright/test";

test.describe("Top画面", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("[to about page] button click to the About page.", () => {});
});
