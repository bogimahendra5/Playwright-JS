import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test('Login Test', async ({page}) => {
    const Login = new LoginPage(page)
    const Home = new DashboardPage(page)

    await page.goto("https://www.saucedemo.com/")
    await Login.LoginStep("standard_user", "secret_sauce")

    await expect(Home.titleProduct).toBeVisible()
    await expect(Home.logoName).toHaveText("Swag Labs")
})