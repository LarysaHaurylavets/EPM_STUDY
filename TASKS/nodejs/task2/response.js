//get response with module node-fetch

var fetch=require('node-fetch');
var fs=require('fs');

var writerStream=fs.createWriteStream('output.txt');

//response in json format
fetch('http://swapi.co/api/planets')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        console.log(json);
       return writerStream.write(JSON.stringify(json),'utf8');
     })  
    .catch(function(err){
    	console.log('Something went wrong!!!');
    });


//about metadata of response
fetch('http://swapi.co/api/planets')
	.then(function(res){
		console.log('HTTP: '+ res.status);
		console.log('Content-Type: '+ res.headers.get('Content-Type'));
		console.log('Allow: ' + res.headers.get('Allow'));
		console.log('Vary: ' + res.headers.get('Vary'));
        
		
	});