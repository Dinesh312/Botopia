const { chromium, firefox } = require('playwright-extra');

(async () => {
    const browser = await firefox.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://datadome.co/');

    await page.waitForTimeout(10000);

    await browser.close();
})();