const puppeteer = require('puppeteer-extra');
// THIS THING WORKS 
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/usr/bin/brave-browser",
    });
    const page = await browser.newPage();
    await page.goto('https://datadome.co/');
})()