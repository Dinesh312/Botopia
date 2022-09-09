const puppeteer = require('puppeteer');
const { ChromiumWebDriver, Options } = require('selenium-webdriver');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/usr/bin/brave-browser",
    });

    const page = await browser.newPage();

    await page.goto('https://datadome.co/');
}) ();