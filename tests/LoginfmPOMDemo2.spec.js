import{test, expect} from '@playwright/test';
import{Login} from '../Pages/LoginDemoblaze2';
import loginData from '../test_data/loginData.json';

test('Valid_Login', async({page}) =>{
 const login= new Login(page);
    await login.gotologinpage();
    await login.loginaction(loginData.Valid_Data.username,loginData.Valid_Data.password );
    await expect(await page.locator('//a[text()="Welcome test2811"]')).toHaveText('Welcome test2811');
});

test('Invalid_Login', async({page}) =>{
   const login= new Login(page);
    await login.gotologinpage();
    await login.loginaction(loginData.Invalid_Data.username,loginData.Invalid_Data.password );
    page.on('dialog', async dialog =>{
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Wrong password.');
        await dialog.accept();
    
    })
    await page.waitForTimeout(3000);
});
