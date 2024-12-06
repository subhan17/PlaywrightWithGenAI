import { expect, test } from './test-with-fixture.ts'

test('Register New user - ParaSoft Bank with Zero Step AI', async ({ page,ai }) => {
  test.setTimeout(50000)
  await page.goto('https://parabank.parasoft.com/parabank/index.htm')
  const ssn = "12349876"
  await ai('Click on Register');
  await page.waitForTimeout(5000);
  await ai('Enter "Steve" in input next to First Name label');
  await ai('Enter "Murray ku" in Last Name field');
  await ai('Enter "Down Town" in Address field');
  await ai('Enter "Toronto" in City field');
  await ai('Enter "Ontario" in State field');
  await ai('Enter "K6V3Y3" in Zip Code field');
  await ai('Enter "1987 345 678" in Phone number field');
  await ai(`Enter ${ssn} in SSN number field`);
  await ai('Enter "TestStevve1234" in the second Username field');
  await ai('Enter "Test@1234" in Password field');
  await ai('Enter "Test@1234" in Confirm field');
  await ai('Click on Register button');
  const bool = await ai('Confirm that "Your account was created successfully" text is displaying ');
  expect(bool).toEqual(true)



});





