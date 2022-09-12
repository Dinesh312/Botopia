import asyncio
from pyppeteer import launch

async def main():
    browser = await launch(
        headless = False, 
        autoClose = False)
    page = await browser.newPage()
    await page.goto('https://datadome.co')

asyncio.get_event_loop().run_until_complete(main())