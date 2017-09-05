//read info from file

var fs=require('fs');

var obj;
var content=fs.readFileSync('notes.json', 'utf8');
	try{
		obj=JSON.parse(content);
		module.exports.list=list();
	}
	catch(e){
		console.log('There is any notes');
	}

//print list of the notes
function list(){
	
	for(var i in obj){
		console.log(i + " note: " + obj[i].title + " " + obj[i].body);
	}

};


	





