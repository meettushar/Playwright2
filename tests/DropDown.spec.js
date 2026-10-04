import{test, expect} from '@playwright/test'
test('DropDown', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

await page.locator('#country').selectOption('India');
await expect(await page.locator('#country').selectOption('India')).toBeTruthy();

const options = await page.locator('#country option');     //Approach1
await expect(options).toHaveCount(10);

const Totoptions = await page.$$('#country option')        //Approach2
console.log('Total options', Totoptions.length)
await expect(Totoptions.length).toBe(10);

const content = await page.locator('#country').textContent(); //Approach1
await expect(content.includes('India')).toBeTruthy();

const Totaloptions = await page.$$('#country option');
for (const option of Totaloptions)
{
let value = await option.textContent();
if (value.includes('Canada'))
{
await page.selectOption('#country',value);
break;
}
}
});