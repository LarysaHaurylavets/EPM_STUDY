// var argv=require('minimist')(process.argv.slice(2));

// 	console.dir(argv);

// 	console.log(
// 		"Hello, "
// 		+ ((process.env['NODE_ENV']=='dev')?"developer":"user")
// 		+ process.platform
// 		+ (argv['debug']?". режим отладки включен.": "")

// 	);

// var os=require("os");
// var greeting=require("./greeting.js");


// var userName=os.userInfo().username;

// console.log("Today: " + greeting.date);
// console.log(greeting.getMessage(userName));

// var User=require("./user");
// var lara=new User("Lara", 30);
// lara.sayHi();


var welcome=require("./welcome");

welcome.getMorningMessage();
welcome.getEveningMessage();