const webdriver = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');

(async() => {

    try {
        let options = new safari.Options();
        var driver = new webdriver.Builder()
            .setSafariOptions(options)
            .forBrowser('safari')
            .build();
    
    await driver.get('https://datadome.co/');
    } catch (error) {
        console.log(error);
    }
})();