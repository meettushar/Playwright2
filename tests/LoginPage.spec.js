import {test, expect} from '@playwright/test';
test ('Login', async({page})=> {

    await page.goto('https://demoblaze.com/index.html');
    let Pagetitle = await page.title();

    console.log('The title of page is', Pagetitle);

    await expect(page).toHaveTitle('STORE');

    

    let PageURL=page.url();
    console.log('URL of page is', PageURL);
    await expect(page).toHaveURL("https://demoblaze.com/index.html");

    await page.close();

});