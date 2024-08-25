import { BasePage } from "./Base";

export class LoginPage extends BasePage{
        username = this.page.locator("#user-name");
        password = this.page.locator("#password");
        btnLogin = this.page.locator("#login-button");

    async LoginStep(user, pass){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.btnLogin.click();
    }

}
