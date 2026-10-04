import {test, expect} from '@playwright/test';
import {Login} from '../Pages/Login';

test('login', async({page})=>{
const login= new Login(page);
await login.gotologinpage();
await login.login('Admin','admin123');

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});