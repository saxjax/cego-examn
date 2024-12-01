import { test, expect } from '@playwright/test';

test("3 in row wins", async({page})=>{
  await page.goto('http://localhost:5173/');
  await expect(page.locator('body')).toContainText('Next player X');
  await page.locator('.square').first().click();
  await page.locator('div:nth-child(4) > button').first().click();
  await page.locator('div').filter({ hasText: /^X$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^O$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^XX$/ }).getByRole('button').nth(2).click();
  await expect(page.locator('body')).toContainText('X has won!');
}),

test("3 in collumn wins", async({page})=>{
await page.goto('http://localhost:5173/');
await page.locator('.row > button:nth-child(2)').first().click();
await page.locator('div').filter({ hasText: /^X$/ }).getByRole('button').first().click();
await page.locator('div:nth-child(4) > button:nth-child(2)').click();
await page.locator('div').filter({ hasText: /^X$/ }).getByRole('button').nth(2).click();
await page.locator('div:nth-child(5) > button:nth-child(2)').click();
await expect(page.locator('body')).toContainText('X has won!');

}),

test("3 in diagonal wins", async({page})=>{
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.locator('.square').first().click();
  await page.locator('div').filter({ hasText: /^O$/ }).getByRole('button').nth(1).click();
  await page.locator('div:nth-child(4) > button:nth-child(2)').click();
  await page.locator('div').filter({ hasText: /^O$/ }).getByRole('button').nth(2).click();
  await page.locator('div:nth-child(5) > button:nth-child(3)').click();
  await expect(page.locator('body')).toContainText('O has won!');
}),

test("tie", async ({page}) => {
  await page.goto('http://localhost:5173/');
  await page.locator('.square').first().click();
  await page.locator('div:nth-child(4) > button:nth-child(2)').click();
  await page.locator('div').filter({ hasText: /^O$/ }).getByRole('button').nth(2).click();
  await page.locator('div:nth-child(5) > button:nth-child(2)').click();
  await page.locator('div').filter({ hasText: /^X$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^XX$/ }).getByRole('button').nth(2).click();
  await page.locator('div').filter({ hasText: /^O$/ }).getByRole('button').nth(2).click();
  await page.locator('div:nth-child(4) > button').first().click();
  await page.locator('div').filter({ hasText: /^OX$/ }).getByRole('button').first().click();
  await expect(page.locator('body')).toContainText('Tie, end of game, clict reset');
});