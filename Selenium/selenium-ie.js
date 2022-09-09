const webdriver = require('selenium-webdriver');
const ie = require('selenium-webdriver/ie');

(async() => {

    try {
        let options = new ie.Options();
        var driver = new webdriver.Builder()
            .setIeOptions(options)
            .forBrowser('internetexplorer')
            .build();
    
    await driver.get('https://datadome.co/');
    } catch (error) {
        console.log(error);
    }
})();