
var readline=require('readline');

var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

//enter the command via console
rl.question('Enter the name of the function you need: "add, list, find, remove"  ', function(answer){
	switch(answer){
		case 'add': rl.close(); var addNote=require('./uniq.js');
			break;
		case 'list':  rl.close(); var list=require('./list.js'); 			
			break;
		case 'find': rl.close(); var read=require('./read.js'); 
			break;
		case 'remove': rl.close(); var removeNote=require('./remove.js');
			break;
		default: console.log('There is no such command!'); break;
	}
	
});



