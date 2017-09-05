// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['onliner.js'],
  multiCapabilities:[
    {
      browserName: 'chrome'
    }//,
    // {
    //   browserName: 'firefox'
    // },
    // {
    // 	browserName: 'internet explorer'
    // }
  ],

  onPrepare: function() {
    browser.driver.manage().window().maximize();  
    
  }
}