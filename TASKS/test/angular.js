//var EC=protractor.ExpectedConditions;
var fs=require('fs');
describe('angularjs homepage', function (){

	browser.manage().timeouts().pageLoadTimeout(40000);

	var search=element(by.model('searchPhrase'));


 	beforeAll(function () {
        browser.get('https://www.udemy.com/');
    });

 	it('should login', function(){
 		element(by.linkText("Login")).click();
 		element(by.id("id_email")).sendKeys('glar4ik@gmail.com');
 		element(by.id("id_password")).sendKeys("real82");
 		element(by.id("submit-id-submit")).click();


 		browser.takeScreenshot().then(function(png){    	
    		var filename = 'login.png';
    		writeScreenshot(png, filename);
		});

 	});

	it('should enter the course for search', function(){
		browser.executeScript("arguments[0].style.backgroundColor='" +"yellow"+"'", search);


		browser.takeScreenshot().then(function(png){    	
    		var filename = 'highlight.png';
    		writeScreenshot(png, filename);
		});


		element(by.model('searchPhrase')).sendKeys('javascript');
		element(by.xpath('//*[@id="searchbox"]/button')).click();
		expect(browser.getCurrentUrl()).toContain("courses");
	});

	it('should be implemented sort by level',function(){
		element(by.css("#label-top-filter-instructional_level")).click();
		element(by.xpath("//body[@id='udemy']/div[2]/div/div/div[3]/top-filter-container/div/top-filter/div/ul/li[2]/a/span")).click();		
		
	});

	it('should be implemented sort by language', function(){
		element(by.css("#label-top-filter-language")).click();
		element(by.xpath("//body[@id='udemy']/div[2]/div/div/div[3]/top-filter-container/div/top-filter[2]/div/ul/li/a/span")).click();
	});

	it('should be implemented sort by price', function(){
		element(by.css("#label-top-filter-price")).click();
		element(by.xpath("//body[@id='udemy']/div[2]/div/div/div[3]/top-filter-container/div/top-filter[4]/div/ul/li[2]/a/span")).click();
	});

	it('should be implemented sort by newest', function(){
		element(by.css("#label-sort-filter")).click();
		element(by.xpath("//*[@id='udemy']/div[2]/div/div/div[3]/top-filter-container/div[1]/sort/div/div/ul/li[3]/a")).click();
	});

	it('should click to open menu categories', function(){
		var categories=element(by.xpath("//*[@id='dropdownButton']/div[1]/span/div"));
		browser.actions().mouseMove(categories).click().perform();
		// element.all(by.css("div.dropdown__menu")). then(function(items){ 
		// 	expect(items.length).toBe(14);		
		// 	expect(items[8].getText()).toBe("Photography");
		// });		

	});
	
	it('should scroll to the end of the page', function(){
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');		
	});

	it('should go to page with mobile app', function(){
		var mobileApp=element(by.css("a.white-text"));
		browser.executeScript("arguments[0].click()", mobileApp);
	});

	function writeScreenshot(data, filename){
		var stream=fs.createWriteStream(filename);
		stream.write(new Buffer(data, 'base64'));
		stream.end();
	};

	

});



