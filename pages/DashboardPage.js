import {BasePage} from "./BasePage";

export class DashboardPage extends BasePage {
    logoName = this.page.locator(".app_logo");
    titleProduct = this.page.locator(".title");
    sideMenu = this.page.locator("#react-burger-menu-btn");
    btnLogout = this.page.locator("#logout_sidebar_link");
}
