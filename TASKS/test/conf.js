exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
  	'browserName': 'chrome'
  },

  specs: ['pasta.js'],

  onPrepare: function () {
  	browser.driver.manage().window().maximize();
  },

  jasmineNodeOpts: {
	   defaultTimeoutInterval: 100000
  }
};