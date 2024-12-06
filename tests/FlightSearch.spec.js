// @ts-check
const { test, expect } = require('@playwright/test');
import {ai} from "@zerostep/playwright"

test('Flight search - zerostep ', async ({ page }) => {
  test.setTimeout(80000)
  await page.goto('https://www.spicejet.com/')
  const aiArgs = { page, test };
  await ai('Enter "Hyderabad" in From input field', aiArgs);
  await ai('Enter "Delhi" in To input field', aiArgs);
  //await page.waitForTimeout(5000);
  //await ai('Select five days plus todays date from caledar', aiArgs);
  const date =  await ai("What is today's date plus five days", aiArgs);
  console.log("date is : "+date)
  await ai("Select a date from current month that is 5 days later from today's date", aiArgs);
  await ai('Click on Passengers label', aiArgs);
  await ai('Click on plus sign next to Adult label', aiArgs);
  await ai('Click on Passengers label', aiArgs);
  await ai('Click on INR label', aiArgs);
  await ai('Click on USD option from list', aiArgs);
  await ai('Force click on Search Flight button', aiArgs);
  await page.waitForLoadState('networkidle');
  await ai('Select Depart date with least fare value', aiArgs);
  

});





