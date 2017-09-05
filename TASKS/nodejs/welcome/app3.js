var Emitter=require("events");
var emitter=new Emitter();
var eventName="greet";

emitter.on(eventName, function(){
	console.log("Hello all");
});

emitter.on(eventName, function(){
	console.log("Привет");
});

emitter.emit(eventName);