import { expect, test } from './test-with-fixture.ts'

test('Web Table identify and delete row ', async ({ page, ai }) => {
 
  test.setTimeout(80000)
  await page.goto('https://vinothqaacademy.com/webtable/');
  await ai('Select the Check box from first cell of row containing "jane.smith@example.com"') 
  await ai('click on the "Delete Selected Rows" button' )
  const bool = await ai('Confirm that row containing "jane.smith@example.com" is not displaying');
  console.log(bool);
  expect(bool).toEqual(true);
});




