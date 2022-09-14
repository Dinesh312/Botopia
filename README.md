# Automation Tools

## How to run bots on various browsers

### In Chrome

- The Chrome runs on chromium and the chrome driver is required for the selenium webdirver to "drive" the web UI 
- Get the latest chrome driver installed from this [here](https://chromedriver.storage.googleapis.com/index.html)
- Download the selenium-webdriver and make sure the version is compatible with your chrome’s version
- Choose the language you are going to write a script with require the webdriver for the chrome
- Chrome is probably the most easily suited for automation for almost all of the tools

### In Firefox

- The Firefox runs on gecko engine and the gecko driver is required for the selenium webdirver to "drive" the web UI 
- Get the latest gecko driver installed from this [here](https://github.com/mozilla/geckodriver/releases/)
- Download the zip or taz file
- Extract and include in the path
- For more references visit this [page](https://askubuntu.com/questions/870530/how-to-install-geckodriver-in-ubuntu)

### In Brave

- Since the Brave basically runs on Chromium, it has pretty much the same deps as Chrome
- Make sure you give the right executable path (/usr/bin/brave-browser) for the options parameter

[How to run Selenium tests on the Brave web browser?](https://stackoverflow.com/questions/47158434/how-to-run-selenium-tests-on-the-brave-web-browser)

### In Safari

- Similar to chrome and firefox, safari is pretty much an available browser for the automation tool to hit on
- Before running a bot script on safari, make sure to run this  `safaridriver --enable` in the terminal
- For testing with linux and windows however, try installing safari in a virtual box

[Is it possible to install Safari on Ubuntu 14.04?](https://askubuntu.com/questions/676496/is-it-possible-to-install-safari-on-ubuntu-14-04)

### In Internet Explorer

- Though a minority of people use Internet Explorer that does not mean any bot would try to hit in it
- Hence the IE is also vulnerable to the bot attacks
- However very few automation tools seem to support IE and they are not quite stable in the recent versions

## [**Selenium**](https://www.notion.so/Selenium-e88c60f39d1e4a18b78d0952439b8e86)

[https://github.com/SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium)

<aside>
💡 Selenium-webdriver will often throw an error saying its chrome webdriver is not compatible with the latest version of chrome browser. So everytime there is a SessionNotCreated Error, we have to manually download the latest chromdriver for the current chrome version and extract it into the right directory. Refer [this](https://medium.com/fusionqa/selenium-webdriver-error-sessionnotcreatederror-session-not-created-this-version-of-7b3a8acd7072) for more instuctions.

</aside>

<aside>
💡 In case of firefox browser, we would need the geckodriver to be dowloaded from [here](https://github.com/mozilla/geckodriver/releases/)

</aside>

Selenium Stealth is showing up with this issue !

```
An error occurred when executing cdp command from undefined
```

## [**Puppeteer**](https://www.notion.so/Puppeteer-66f19d257b8b4809aa4bebf4f49877bb)

[Puppeteer | Puppeteer](https://pptr.dev/)

[puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth)

## [**Playwright**](https://www.notion.so/Playwright-23b7f23d12bd4d348851b7398b81596a)

[playwright](https://www.npmjs.com/package/playwright)

[puppeteer-extra/packages/playwright-extra at automation-extra · berstend/puppeteer-extra](https://github.com/berstend/puppeteer-extra/tree/automation-extra/packages/playwright-extra#readme)

## [Pyppeteer](https://www.scrapingbee.com/blog/pyppeteer/)

[https://github.com/pyppeteer/pyppeteer](https://github.com/pyppeteer/pyppeteer)

[Pyppeteer](https://pyppeteer.github.io/pyppeteer/reference.html)

Essentially puppeteer designed for the python so as to make it manipulate the dynamic web elements as python is just meant for it.

## [PhantomJS](https://www.npmjs.com/package/nightmare)

Phantom JS has deprecated and the development has been stopped long ago. 

It throws a lot of errors even now when tried to automate with ubuntu. 

Hence can still be checked for its presence in the ua but cannot be used to hit sites.

[Problems directly using PhantomJS in node.js](https://stackoverflow.com/questions/15487321/problems-directly-using-phantomjs-in-node-js)

[phantomjs and simple examples gives TypeError: Attempting to change the setter of an unconfigurable property](https://stackoverflow.com/questions/60593099/phantomjs-and-simple-examples-gives-typeerror-attempting-to-change-the-setter-o)

## [Nightmare](https://github.com/segmentio/nightmare)

Nightmare is built on top of electron and cannot be used on any other browsers except chromium.

## [Geb](https://www.gebish.org/)

Geb is indeed a great automation tool that supports all webdrivers, all browser configurations with ONE caveat. It can only be written in Groovy 😟

## [Casperjs](https://gorillalogic.com/blog/software-automation-frameworks-series-part-casperjs-phantomjs/)

[Headless Automation Using CasperJS - Automation Laboratories](https://www.automationlaboratories.com/headless-automation/headless-automation-using-casperjs/)

## [Slimerjs](https://docs.slimerjs.org/current/index.html)

[slimerjs command doesn't do anything after install](https://stackoverflow.com/questions/29145538/slimerjs-command-doesnt-do-anything-after-install)

## Appium

[Can appium automate desktop web browsers?](https://discuss.appium.io/t/can-appium-automate-desktop-web-browsers/746)

Appium is used for the OS automation like Android, MacOS, Windows using the webdrivers. But it is not built for automating the Web Applications hence it is of very less use for us.

## Katalan Studio

## TestComplete

## Cypress.io

## Ranorex Studio

## Perfecto

## Lambda Test

## SoapUI

## Eggplant
