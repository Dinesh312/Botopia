const { chromium, firefox, webkit } = require('playwright-extra');

(async () => {
    const browser = await webkit.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://datadome.co/');

    await page.waitForTimeout(10000);

    await browser.close();
})();