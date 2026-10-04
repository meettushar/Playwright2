import {test, expect} from '@playwright/test';
test('CheckBox',async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const Username = await page.locator("[//input[@id='name']");
    await expect(Username).toBeEnabled;
    await expect(Username).toBeEmpty;
    await expect(Username).toBeEditable;
    const Female =await page.locator('#female');
    await Female.check();
    await expect(Female).toBeChecked();
    await expect(Female.isChecked()).toBeTruthy();
    await expect(await page.locator('#male').isChecked()).toBeFalsy();

   // await page.locator("#sunday").check();
   // await expect(await page.locator("#sunday").isChecked()).toBeTruthy();

    const checkboxloc = ["//input[@id='monday']", "//input[@id='wednesday']", "//input[@id='saturday']"];
    
    await page.waitForTimeout(5000);

    for(const loc of checkboxloc)
    {
        await page.locator(loc).check();
    }

    await page.waitForTimeout(5000);
});