import {test, expect} from '@playwright/test'
test('Multiselect dropdown', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

await page.selectOption('#colors', ['Blue', 'Green']);

//To check no. of options in dropdown//

const options = await page.locator('#colors option');
await expect(options).toHaveCount(7);

//To check no. of options in dropdown using JS Array//

const Totaloptions = await page.$$('#colors option');
console.log('No of options', Totaloptions.length);
await expect(Totaloptions.length).toBe(7);

// check presence of value in the dropdown

const Content = await page.locator('#colors').textContent();
await expect(Content.includes('Yellow')).toBeTruthy();

// check presence of value in the dropdown using JS Array

const Toption = await page.$$('#colors option');
for(const option of Toption)
{
let value = option.textContent()
if(['Yellow', 'Green'].includes(value))
{
await page.selectOption('#colors', value);
break;
}
}

await page.waitForTimeout(5000);
});