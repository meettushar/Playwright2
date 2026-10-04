export class Login {
constructor(page){
this.page=page;
this.user = '//input[@name="username"]';
this.pass = '//input[@placeholder="Password"]';
this.loginbutton = '//button[@type="submit"]';
}

async gotologinpage(){

    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}
 
 async login(username,password) {

    await this.page.locator(this.user).fill(username);
    await this.page.locator(this.pass).fill(password);
    await this.page.locator(this.loginbutton).click();
 }
}