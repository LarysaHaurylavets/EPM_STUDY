//получаем модуль express
var express=require("express");

//создаем приложение
var app=express();

//устанавливаем обработчик для маршрута '/'
app.get("/", function(request, response){
	response.end("hello from Express!");
});

//начинаем прослушивание подключений на 3000 порту
app.listen(3000);