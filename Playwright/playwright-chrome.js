const playwright = require('playwright');

(async () => {
    const browser = await playwright['chromium'].launch({
        headless: false,
    });
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto('https://datadome.co/');

    await page.waitForTimeout(8000);

    await browser.close();
})();