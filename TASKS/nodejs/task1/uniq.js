var fs=require('fs');
var prompt=require('prompt');

var content=fs.readFileSync('notes.json','utf-8');
var obj=JSON.parse(content);

//add title and body via console
function addNewNote(){	

	prompt.start();

	prompt.get(['title', 'body'], function (error, result){
		if (error) throw error;

		try{
			add(obj,result.title,result.body);
			console.log('File write completed succesfully!');
		}
		catch(e){
			console.log(e.name,e.message);
		}
		
		var newObj=JSON.stringify(obj);
		fs.writeFileSync('notes.json',newObj,'utf-8');
		
	})	

};

//function add of element
function add(arr,title,body){
	var flag=false;
		for(var key in arr){
			if ((arr[key].title===title)&&(arr[key].body===body)){
				throw new UserException("There is such note already exists");
			}
			else flag=true;
		}

		if(flag===true){
			arr.push({title: title, body: body});
		}
};


function UserException(message) {
   this.message = message; 
   this.name = "User-defined exception:";  
}

module.exports.addNote=addNewNote();



