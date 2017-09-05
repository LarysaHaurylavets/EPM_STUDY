//var EC=protractor.ExpectedConditions;
var fs=require('fs');
const readFile = require('fs-readfile-promise');
var keypress = require('keypress');

describe('pasta page', function (){

	browser.manage().timeouts().pageLoadTimeout(40000);
	keypress(process.stdin);

	//var search=element(by.model('searchPhrase'));
	var buttonPasties=element.all(by.css('li:nth-child(1) > a > i')).first();
	var contentBox=element(by.id("#cathcer"));
	var linkField=element(by.css('p.url')); 
	var copyButton=element(by.buttonText('Copy'));
	var contentBox=element(by.css('div.images'));
	var descText=element(by.css('input.description'));


 	beforeAll(function () {
        browser.get('https://pasta.lab.epam.com/pasties/xseryuue');
    });

 	it('should 1', function(){
 		
		linkField.getText(). then((text)=>{
			console.log(text);
		});

		

 		//expect(browser.getCurrentUrl()).toContain("page");
 	});

	it('should 2', function(){
 		
		

		descText.getAttribute('value').then((value)=>{
			console.log(value);
		})
		

 		//expect(browser.getCurrentUrl()).toContain("page");
 	});
 	
	// it('should enter the course for search', function(){
	// 	browser.executeScript("arguments[0].style.backgroundColor='" +"yellow"+"'", search);


	// 	browser.takeScreenshot().then(function(png){    	
 //    		var filename = 'highlight.png';
 //    		writeScreenshot(png, filename);
	// 	});


	// 	element(by.model('searchPhrase')).sendKeys('javascript');
	// 	element(by.xpath('//*[@id="searchbox"]/button')).click();
	// 	expect(browser.getCurrentUrl()).toContain("courses");
	// });

	

	// function writeScreenshot(data, filename){
	// 	var stream=fs.createWriteStream(filename);
	// 	stream.write(new Buffer(data, 'base64'));
	// 	stream.end();
	// };

	

});


 



