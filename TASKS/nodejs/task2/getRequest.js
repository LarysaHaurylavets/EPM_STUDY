//request with module http
// var http=require('http');

// http.get("http://swapi.co", function(res){
// 	console.log("response:" + res.statusCode);	
// }).on('error', function(e){
// 	console.log('error:' + e.message);
// });


//request with module request
var request = require('request');
request('http://swapi.co', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});
