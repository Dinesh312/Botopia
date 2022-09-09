const puppeteer = require('puppeteer');
const { ChromiumWebDriver, Options } = require('selenium-webdriver');

(async () => {
    const browser = await puppeteer.launch({
        product : 'firefox',
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://datadome.co/');
}) ();