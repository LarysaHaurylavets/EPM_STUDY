//console.log(process.argv);


// var util=require('util');

// console.log(
// 	util.inspect({
// 		test:1,
// 		key2:3,
// 		arr: [6,7,8]
// 	}, {depth:1})
// );


var argv=require('minimist')(process.argv.slice(2));

console.dir(argv);
