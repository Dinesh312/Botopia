const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({
        product : 'firefox',
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://datadome.co/');
})()