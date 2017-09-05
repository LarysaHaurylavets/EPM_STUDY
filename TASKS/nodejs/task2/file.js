// var file='input.txt';

// var fs=require('fs-promise');

// fs.writeFile(file, 'My name is Lara')
//     .then (() => return fs.readFile(file, 'utf8'))
//     .then (contents => console.log(contents))
//     .catch(err=> console.log(err));


var fs=require('fs');

var file=function(filename, text){
	return new Promise(function(resolve,reject){
		fs.writeFile(filename, text, function (err,data){
			if (err) return reject(err);
			resolve (data);
		});
	});
};

file('input.txt', 'Hello!')
	.then(function(data){
		console.log('Write to file was successfully');
	}, function(err){
		console.log('Error!');
	});