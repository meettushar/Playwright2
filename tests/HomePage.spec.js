const {test, expect} = require('@playwright/test');
test('Home page', async({page})=>{

await page.goto('https://demoblaze.com/index.html');
await page.click('#login2');
await page.fill('#loginusername','test2811');
await page.fill('#loginpassword','Admin@123');
await page.click('button:has-text("Log in")');
const logout=page.locator('#logout2');
await expect(logout).toBeVisible;
await page.close();


});