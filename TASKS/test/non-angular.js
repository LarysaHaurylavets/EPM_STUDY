describe('nonangular page', function(){

	beforeEach(function(){
		browser.ignoreSynchronization = true;
		browser.driver.get('http://www.velcom.by/');
		//browser.waitForAngularEnabled(false);
		
	});


	it('to open link internet shop', function(){
		//browser.driver.findElement(by.linkText('Интернет-магазин')).click();
		browser.driver.wait(function() {
     		return browser.driver.findElement(by.linkText('Интернет-магазин'))
              .then(function(elem) {
                elem.click();
                return true;
              });
  		}, 20000);

	});

	it('to open link tablets', function(){
		browser.driver.findElement(by.xpath('')).click();
	});

	afterAll(()=>{
		browser.driver.quit();
	});



});

