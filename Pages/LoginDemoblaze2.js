import { expect } from "@playwright/test";

export class Login {
constructor(page){
this.page=page;
this.Log_in = page.locator('#login2');
this.usernameip = page.locator('#loginusername');
this.passwordip = page.locator('#loginpassword');
this.loginclk = page.locator('//button[text()="Log in"]');
}

async gotologinpage() {

    await this.page.goto('https://demoblaze.com/');

}

async loginaction(username, password){

    await this.Log_in.click();
    await this.usernameip.fill(username);
    await this.passwordip.fill(password);
    await this.loginclk.click();
}
};