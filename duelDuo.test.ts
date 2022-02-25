
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()





beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})


test(' draw button displays the div',async () => {
    const button = await driver.findElement(By.id('draw'))
    await button.click()
    const display = await driver.findElement(By.id('choices'))
    const choices = await display.isDisplayed()
    expect(choices).toBe(true)
    
})

test("removed from duo returns to choices", async ()=>{
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const button = await driver.findElement(By.className('bot-btn'))
    await button.click()
    const display = await  driver.findElement(By.id('player-duo'))
    const choices = await display.isDisplayed()
    expect(choices).toBe(true)

    await driver.sleep(1000)
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})