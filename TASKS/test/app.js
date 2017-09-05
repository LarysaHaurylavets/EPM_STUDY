var webdriver = require("selenium-webdriver");
var chai = require('chai');


function createDriver() {
    var driver = new webdriver.Builder()
    //.usingServer('http://localhost:4444/wd/hub')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().implicitlyWait(30000);
    return driver;
}


var browser = createDriver();
var assert = chai.assert;
var until = webdriver.until;

var login = 'glar4ik@gmail.com';
var password = 'real82';

browser.manage().window().maximize();


function getTitle() {
    browser.getTitle().then(function (title) {
        console.log('Current Page Title: ' + title);
    });
}


function checkTextOnThePersonalPage() {
    browser.wait(until.elementLocated(webdriver.By.css("div.cabinet-left-menu__top-menu__text.ng-binding")));
    browser.findElement(webdriver.By.css("div.cabinet-left-menu__top-menu__text")).then(function (el) {
        el.getText().then(function (text) {
            if (text === 'Дмитрий Г.') {
                console.log('Text on the page is found: ' + text);
            }
            else console.log('There is no such text!');
        });
    });
}


function checkTextAboutSaving() {    
    browser.findElement(webdriver.By.css("div.multi-settings-control__text-is-saved")).then(function (el) {
        el.getText().then(function (text) {
            var expected = 'Изменения сохранены!';
            assert(text, expected, 'Both string are equal');
        });
    });
}


function clickWhenClickable(locator, timeout) {
    browser.wait(function () {
        return browser.findElement(locator).then(function (element) {
            return element.click().then(function () {
                return true;
            }, function (err) {
                return false;
            })
        }, function (err) {
            return false;
        });
    }, timeout, 'Timeout waiting for ' + locator.value);
    ;
}


browser.get('https://logic.by/').then(() => {
    return getTitle();
})
    .then(() => {
        return clickWhenClickable(webdriver.By.css("a.top-header__action--login"), 20000);
    })
    .then(() => {
        return browser.findElement(webdriver.By.id("login")).clear();
    })
    .then(() => {
        return browser.findElement(webdriver.By.id("login")).sendKeys(login);
    })
    .then(() => {
        return browser.findElement(webdriver.By.id("pass")).clear();
    })
    .then(() => {
        return browser.findElement(webdriver.By.id("pass")).sendKeys(password);
    })
    .then(() => {
        return browser.wait(until.elementLocated(webdriver.By.css("button.c-modal__btn")));
    })
    .then(() => {
        return clickWhenClickable(webdriver.By.css("button.c-modal__btn"), 20000);

    })
    .then(() => {
        return checkTextOnThePersonalPage();
    })
    .then(() => {
        return clickWhenClickable(webdriver.By.xpath("//ul[3]/li[3]/a/span[2]"), 20000);
    })
    .then(() => {
        return clickWhenClickable(webdriver.By.css("img.multi-settings-form__avatar.ng-scope"), 20000);
    })
    .then(()=>{
        return browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    })
    .then(() => {
        return browser.wait(until.elementLocated(webdriver.By.linkText("Сохранить")));
    })
    .then(() => {
        return clickWhenClickable(webdriver.By.linkText("Сохранить"), 20000);
    })    
    // .then(()=>{
    //     return checkTextAboutSaving();
    // })
    .then(()=>{       
        return clickWhenClickable(webdriver.By.css("div.cabinet-left-menu__container"),20000);
    })
    
    .then(() => {
        browser.quit();

    });



// function checkPersonalNameOnPage() {
//     browser.wait(until.elementLocated(webdriver.By.css(".personal-block__account_name")));
//     browser.findElement(webdriver.By.css(".personal-block__account_name")).then(function (el) {
//         el.getText().then(function (text) {
//             var expected = 'Гавриловец Дмитрий';
//             assert(text, expected, 'Both string are equal');
//         });
//     });
// }


