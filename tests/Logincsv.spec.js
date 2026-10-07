import { test, expect } from '@playwright/test';
import { SauceLogin } from '../Pages/SauceLogin';
import { readCSV } from '../Utils/csvReader';
const loginData = readCSV('test_data/LoginData.csv');
loginData.forEach((data) => {
    if (data.run !== "true") return;
    test(`Login Test - ${data.username}`, async ({ page }) => {
        const login = new SauceLogin(page);
        await login.gotoLoginPage();
        await login.login(data.username, data.password);
        if (data.expected === 'success') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        }
        else {
            await expect(login.errormessage).toBeVisible();
        }
    });
});