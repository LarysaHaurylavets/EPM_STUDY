var webdriver = require("selenium-webdriver");


function createDriver() {
    var driver = new webdriver.Builder()
    //.usingServer('http://localhost:4444/wd/hub')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().implicitlyWait(30000);
    return driver;
}


var browser = createDriver();





function getTitle() {
    browser.getTitle().then(function (title) {
        console.log('Current Page Title: ' + title);
    });
}



browser.get('https://logic.by/');

