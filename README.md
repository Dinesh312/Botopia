# Automation Tools

## How to run bots on various browsers

### 🔻 In Chrome

- The Chrome runs on chromium and the chrome driver is required for the selenium webdirver to "drive" the web UI 
- Get the latest chrome driver installed from [here](https://chromedriver.storage.googleapis.com/index.html)
- Download the selenium-webdriver and make sure the version is compatible with your chrome’s version
- Choose the language you are going to write a script with require the webdriver for the chrome
- Chrome is probably the most easily suited for automation for almost all of the tools

### 🔻 In Firefox

- The Firefox runs on gecko engine and the gecko driver is required for the selenium webdirver to "drive" the web UI 
- Get the latest gecko driver installed from [here](https://github.com/mozilla/geckodriver/releases/)
- Download the zip or taz file
- Extract and include in the path
- For more references visit this [page](https://askubuntu.com/questions/870530/how-to-install-geckodriver-in-ubuntu)

### 🔻 In Brave

- Since the Brave basically runs on Chromium, it has pretty much the same deps as Chrome
- Make sure you give the right executable path (/usr/bin/brave-browser) for the options parameter

[How to run Selenium tests on the Brave web browser?](https://stackoverflow.com/questions/47158434/how-to-run-selenium-tests-on-the-brave-web-browser)

### 🔻 In Safari

- Similar to chrome and firefox, safari is pretty much an available browser for the automation tool to hit on
- Before running a bot script on safari, make sure to run this  `safaridriver --enable` in the terminal
- For testing with linux and windows however, try installing safari in a virtual box

[Is it possible to install Safari on Ubuntu 14.04?](https://askubuntu.com/questions/676496/is-it-possible-to-install-safari-on-ubuntu-14-04)

### 🔻 In Internet Explorer

- Though a minority of people use Internet Explorer that does not mean any bot would try to hit in it
- Hence the IE is also vulnerable to the bot attacks
- However very few automation tools seem to support IE and they are not quite stable in the recent versions

***

# Lists of Automation Tools

## Note:

- Selenium-webdriver will often throw an error saying its chrome webdriver is not compatible with the latest version of chrome browser. So everytime there is a SessionNotCreated Error, we have to manually download the latest chromdriver for the current chrome version and extract it into the right directory. 

- Refer [this](https://medium.com/fusionqa/selenium-webdriver-error-sessionnotcreatederror-session-not-created-this-version-of-7b3a8acd7072) for more instuctions

- In case of firefox browser, we would need the geckodriver to be dowloaded from [here](https://github.com/mozilla/geckodriver/releases/)


## 🔻 **Selenium** - [Docs](https://www.selenium.dev/documentation/webdriver/)

[Selenium Stealth Docs](https://github.com/diprajpatra/selenium-stealth)

## 🔻 **Puppeteer** - [Docs](https://pptr.dev/)

[Puppeteer-extra-plugin-stealth - Docs](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth)

## 🔻 **Playwright** - [Docs](https://playwright.dev/docs/intro)

[Puppeteer-extra/packages/playwright-extra at automation-extra - Docs](https://github.com/berstend/puppeteer-extra/tree/automation-extra/packages/playwright-extra#readme)

## 🔻 **Pyppeteer** - [Docs](https://pyppeteer.github.io/pyppeteer/reference.html)

[Github repo](https://github.com/pyppeteer/pyppeteer)

Essentially puppeteer designed for the python so as to make it manipulate the dynamic web elements as python is just meant for it.

## 🔻 **PhantomJS** - [Docs](https://phantomjs.org/)

- Phantom JS has deprecated and the development has been stopped long ago. 
- It throws a lot of errors even now when tried to automate with ubuntu. 
- Hence can still be checked for its presence in the ua but cannot be used to hit sites.

[Problems directly using PhantomJS in node.js](https://stackoverflow.com/questions/15487321/problems-directly-using-phantomjs-in-node-js)

[phantomjs and simple examples gives TypeError: Attempting to change the setter of an unconfigurable property](https://stackoverflow.com/questions/60593099/phantomjs-and-simple-examples-gives-typeerror-attempting-to-change-the-setter-o)

## 🔻 **Nightmare** - [Docs](https://github.com/segmentio/nightmare)

Nightmare is built on top of electron and cannot be used on any other browsers.

## 🔻 **Geb** - [Docs](https://www.gebish.org/)

Geb is indeed a great automation tool that supports all webdrivers, all browser configurations. It can only be written in Groovy 

## 🔻 **CasperJS** - [Docs](https://www.casperjs.org/)

CasperJS runs on phantomJS.

- [Headless Automation Using CasperJS - Automation Laboratories](https://www.automationlaboratories.com/headless-automation/headless-automation-using-casperjs/)

## 🔻 **SlimerJS** - [Docs](https://docs.slimerjs.org/current/index.html)

SlimerJS runs on top of gecko with and works very similar to casperJS

[Slimerjs command doesn't do anything after install](https://stackoverflow.com/questions/29145538/slimerjs-command-doesnt-do-anything-after-install)

## 🔻 **Appium**

- Appium is a great automation tool but cannot be used to drive web UI
- [Can appium automate desktop web browsers?](https://discuss.appium.io/t/can-appium-automate-desktop-web-browsers/746)
- Appium is used for the OS automation like Android, MacOS, Windows using the webdrivers. But it is not built for automating the Web Applications hence it is of very less use for us.

## 🔻 Katalan Studio - [Docs](https://docs.katalon.com/docs/katalon-studio-enterprise/welcome-to-katalon-studio)

- Katalon is a free Web UI automation tool with a GUI
- Here one can create a recording session where we go to an url
- As we interact with the Web UI, the corresponding CSS selectors and xPaths will be recorded in the background 
- The actions will be written as scripts in rust and the tests can be done several times in multiple browsers and can be debugged at any stage

## 🔻 **TestComplete** - [Docs](https://support.smartbear.com/testcomplete/docs/app-testing/web/general/about.html)

- TestComplete is another GUI automation tool used similar to the Katalan

## **Cypress.io** - [Docs](https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn)

- Cypress is a tool with that can open GUI like interfaces within any chrome, firefox or electron.
- The scripts are written like the specs which are like with the extension .cy.js 
- This runs the test with many browsers and viewports.
- Each requests and responses can also be tracked and console logged into the dev tools

## Other notable automation tools with GUI

### 🔻 **Ranorex Studio** - [Docs](https://www.ranorex.com/help/latest/ranorex-studio-fundamentals/ranorex-studio/introduction/)

### 🔻 **Perfecto** - [Docs](https://help.perfecto.io/perfecto-get-started/content/perfecto/get-started/home-get-started.htm)

<<<<<<< HEAD
### 🔻 **Lambda Test** - [Docs](https://www.lambdatest.com/support/docs/)
=======
### 🔻 **Lambda Test** - [Docs](https://www.lambdatest.com/support/docs/)
>>>>>>> 025f32ae0865039dea2f2143408598e1de6957e0
