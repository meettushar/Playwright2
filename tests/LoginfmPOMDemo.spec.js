import{test, expect} from '@playwright/test';
import{Login} from '../Pages/LoginDemoblaze';

test('Login', async({page}) =>{
 const login= new Login(page);
    await login.gotologinpage();
    await login.loginaction('test2811','Admin@123');
    await login.VerifyLoginSucess();
})
