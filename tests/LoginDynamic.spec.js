import{test, expect} from '@playwright/test';
import{Login} from '../Pages/LoginDemoblaze2';
import loginData from '../test_data/DynamicData.json';

loginData.forEach((data)=> {
    if(!data.run) return;

  test(`Login Test - ${data.username}`, async({page})=> {
    const login= new Login(page);
    await login.gotologinpage();
    await login.loginaction(data.username,data.password);

    if(data.expected === 'success')
    {
     await expect(await page.locator('//a[@id="logout2"]')).toContainText('Log out');
    } else
    {
    page.on('dialog', async dialog =>{
    await expect(dialog.type()).toContain('alert');
    })
  }
  });
});
