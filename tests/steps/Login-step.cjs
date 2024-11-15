import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import { DashboardPage } from "../../pages/DashboardPage.js";

const And = When;
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given("I visit a login page", async function ({ page }) {
    await page.goto("/");
});

When("I enter username {string} and password {string}", async function ({ page }, username, password) {
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
});

And("I click submit button", async ({ page }) => {
    await loginPage.submitLogin();
});

Then("I should be logged in", async function ({ page }) {
    await expect(dashboardPage.titleProduct).toBeVisible();
    await expect(dashboardPage.logoName).toHaveText("Swag Labs");
});
Then("I cant login and appear error {string}", async function ({ page }, message) {
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(message);
});
