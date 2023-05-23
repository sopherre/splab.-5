import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "../e2e",
  fullyParallel: true,
  webServer: {
    command: "pnpm dev --port=3100",
    url: "http://127.0.0.1:3100",
  },
  use: {
    baseURL: "http://localhost:3100",
    trace: "on",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  outputDir: "../e2e/out/results/",
});
