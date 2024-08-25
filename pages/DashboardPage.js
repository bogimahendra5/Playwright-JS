import {BasePage} from "./Base";

export class DashboardPage extends BasePage{
        logoName = this.page.locator(".app_logo")
        titleProduct = this.page.locator(".title");
}
