var fs=require('fs');
var content=fs.readFileSync('notes.json','utf-8');
var obj=JSON.parse(content);

var readline=require('readline');

var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

//enter title for removing via console
function remove(){
	
	rl.question('Enter the name of the title for removing:', function(answer){
		deleteElement(obj,answer);
		var newObj=JSON.stringify(obj);
		fs.writeFile('notes.json',newObj,'utf-8');
	})
};

//function delete element from array of objects
function deleteElement(arr,element){
	var flag=false;
	for(var i=0; i<arr.length; i++){
		if (arr[i].title===element){
			arr.splice(i,1); 
			console.log('The note was deleted succesfully!'); 
			flag=true;
		}
	}
	if(flag==false){
		console.log('There is no such elements');
	}
};


module.exports.removeNote=remove();

