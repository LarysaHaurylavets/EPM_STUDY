
var fs=require('fs');
var content=fs.readFileSync('notes.json','utf-8');
var obj=JSON.parse(content);

var readline=require('readline');

var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});		

//enter the title for search via console
function readOneNote(){			
	rl.question('Enter the name of the title:', function(answer){
		findElement(obj,answer);
	});
		
};

//function find of element
function findElement(arr,element){
	var flag=false;
	for(var i=0; i<arr.length; i++){
		if (arr[i].title===element){
			console.log("Th note:"+ arr[i].title+" " + arr[i].body);
			flag=true;
		}
	}
	if(flag===false){
		console.log('There is no such elements');
	}

};

module.exports.read=readOneNote();
