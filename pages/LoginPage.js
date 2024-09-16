import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    username = this.page.locator("#user-name");
    password = this.page.locator("#password");
    btnLogin = this.page.locator("#login-button");
    errorMessage = this.page.locator(".error-message-container.error");

    async fillUsername(username) {
        await this.username.fill(username);
    }

    async fillPassword(password) {
        await this.password.fill(password);
    }

    async submitLogin() {
        await this.btnLogin.click()
    }

    async LoginStep(user, pass) {
        await this.page.goto("/");
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.btnLogin.click();
    }
}

