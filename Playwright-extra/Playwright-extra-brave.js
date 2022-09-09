const { chromium } = require('playwright-extra');

(async () => {
    const browser = await chromium.launch({
        headless: false,
        executablePath: '/usr/bin/brave-browser'
    });
    const page = await browser.newPage();
    await page.goto('https://datadome.co/');

    await page.waitForTimeout(10000);

    await browser.close();
})();