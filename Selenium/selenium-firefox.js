const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/firefox');
// To run this program, you need to download geckodriver and place it into the same directory as this program
// https://github.com/mozilla/geckodriver/releases/

(async() => {

    try {
        let options = new chrome.Options();
        var driver = new webdriver.Builder()
            .setFirefoxOptions(options)
            .forBrowser('firefox')
            .build();
    
    await driver.get('https://datadome.co/');
    } catch (error) {
        console.log(error);
    }
})();