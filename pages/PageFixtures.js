import {test as base} from "@playwright/test";
import {LoginPage} from "./LoginPage";
import {DashboardPage} from "./DashboardPage";

export const test = base.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({page}, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
});

