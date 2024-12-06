import { expect, test } from './test-with-fixture.ts'

test('Login and Logout with ZeroStep AI', async ({ page, ai }) => {
  test.setTimeout(50000)
  await page.goto('https://www.saucedemo.com/')
 
  const userName = "standard_user"
  const password = "secret_sauce"

  await ai(`Enter ${userName} as the username`);
  await ai(`Enter ${password} as the password`);
  await ai('Click Login')
  await ai('Click the menu button')
  await ai('Click the logout link')
});
test('Login and checkout with ZeroStep AI', async ({ page, ai }) => {
  await page.goto('https://www.saucedemo.com/')
  const username = await ai('Get the first accepted username')
  const password = "secret_sauce"
  await ai([
    `Enter ${username} as the username`,
    `Enter ${password} as the password`
  ])
  await ai('Click Login')
  await ai('Sort by price high to low')
  const [priceOne, priceTwo] = await ai([
    'Get the plain number price of the first item',
    'Get the plain number price of the second item',
  ])
  console.log("price of first item: "+priceOne)
  console.log("price of second item: "+priceTwo)

  await ai('Add the first 2 items you can to the cart')
  await ai('Go to the cart')
  await ai('Go to the checkout page')
  await ai('Fill out the form with realistic values')
  const [tax, total] = await ai([
    'Get the plain number cost of tax',
    'Get the plain number total cost',
  ])
  console.log(`total=${total}, tax=${tax}`)
  
})





