import {expect} from "@playwright/test";
import {test} from "../pages/PageFixtures";

test.beforeEach(async ({loginPage}) => {
    await loginPage.LoginStep("standard_user", "secret_sauce");
})

test('Logout Success', async ({loginPage, dashboardPage}) => {
    await dashboardPage.sideMenu.click();
    await dashboardPage.btnLogout.click();
    await expect(loginPage.btnLogin).toBeVisible();
});