import { expect, test } from "@playwright/test";

test.use({
  viewport: {
    height: 844,
    width: 390,
  },
});

test.describe("TopPage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("transition to 404 page", async ({ page }) => {
    await page.getByRole("link", { name: "test" }).click();
    await expect(page).toHaveTitle("Not Found Page");
    await expect(page.getByText("Not Found Page.")).toBeVisible();
  });

  test.only("test", async ({ page }) => {
    await expect(page).toHaveTitle("Top Page");
    await expect(page.getByRole("heading", { name: "Top Page" })).toBeVisible();
    await page.getByRole("button", { name: "to Sample Page" }).click();

    await expect(page).toHaveTitle("Not Found Page");
    await expect(
      page.getByRole("heading", { name: "Top Page" })
    ).not.toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Not Found Page" })
    ).toBeVisible();
    await page.getByRole("button", { name: "return to Top Page" }).click();

    await expect(page).toHaveTitle("Top Page");
  });

  // test("test", async ({ page }) => {
  //   await page.goto("http://localhost:3001/");
  //   await page.getByRole("heading", { name: "Top Page" }).click();
  //   await page.getByRole("heading", { name: "Top Page" }).dblclick();
  //   await page.getByRole("button", { name: "to Sample Page" }).click();
  //   await page.getByRole("heading", { name: "Not Found Page" }).dblclick();
  //   await page.getByRole("button", { name: "return to Top Page" }).click();
  //   await page.getByRole("heading", { name: "Top Page" }).dblclick();
  // });
});
