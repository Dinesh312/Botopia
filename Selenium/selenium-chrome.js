const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async() => {

    try {
        let options = new chrome.Options();
        var driver = new webdriver.Builder()
            .setChromeOptions(options)
            .forBrowser('chrome')
            .build();
    
    await driver.get('https://datadome.co/');
    } catch (error) {
        console.log(error);
    }
})();