//Webdriver driver = new Chrome();
// WebDriver driver = new FirefoxDriver();

// driver.get('https://yandex.by');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
	.forBrowser('firefox')
	.build();

driver.get('https://www.tut.by/');



driver.getTitle().then((title)=>{
	console.log("Title: " + title);
});

driver.findElement(webdriver.By.xpath('//div[./div[@class="hold"]]')).sendKeys('автомобиль');


//testing pagr for yandex.ru
// driver.findElement(webdriver.By.linkText('Сделать стартовой')).click();
// driver.navigate().back();
// driver.findElement(webdriver.By.css('a[href="//yandex.ru"]')).click();
// driver.navigate().back();

// driver.findElement(webdriver.By.css('div[class="search2__input"]')).sendKeys('автомобиль');
// driver.findElement(webdriver.By.css('div[class="search2__button"]')).click();
// driver.findElement(webdriver.By.linkText('Картинки')).click().then(()=>{
	
// });

driver.close();

////div[./div[@class='MyClassName1' and text()='MyText']]