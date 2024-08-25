import {expect} from "@playwright/test";
import {test} from "../pages/PageFixtures";

test("Login Test Success", async ({loginPage, dashboardPage}) => {
    await loginPage.LoginStep("standard_user", "secret_sauce");
    await expect(dashboardPage.titleProduct).toBeVisible();
    await expect(dashboardPage.logoName).toHaveText("Swag Labs");
});

test("Login Test Locked User", async ({loginPage}) => {
    await loginPage.LoginStep("locked_out_user", "secret_sauce");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Epic sadface: Sorry, this user has been locked out.");
});

test("Login Test Failed Username", async ({loginPage}) => {
    await loginPage.LoginStep("standard_user@", "secret_sauce");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Epic sadface: Username and password do not match any user in this service");
});

test("Login Test Failed Password", async ({loginPage}) => {
    await loginPage.LoginStep("standard_user", "secret_s");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Epic sadface: sername and password do not match any user in this service");
});
