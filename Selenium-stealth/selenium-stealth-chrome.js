const webdriver = require('selenium-webdriver');
const SeleniumStealth = require("selenium-stealth");

(async ()=> { 

    // let options = new SeleniumStealth.Options();
    // options.addArguments('start-maximized')

    const driver = new webdriver.Builder()
    .withCapabilities({
        'goog:chromeOptions': {
            excludeSwitches: [
                'enable-automation',
                'useAutomationExtension',
            ],
        }
    })
    .forBrowser('chrome')
    .build();

    const seleniumStealth = new SeleniumStealth(driver)

    await seleniumStealth.stealth({
        languages: ["en-US", "en"],
        vendor: "Google Inc.",
        platform: "Win32",
        webglVendor: "Intel Inc.",
        renderer: "Intel Iris OpenGL Engine",
        fixHairline: true,

    })
    driver.get("https://datadome.co/");
}) ();
