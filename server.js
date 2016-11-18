var express = require('express');
var app = express();
app.use(express.static(__dirname)); // не задаємо шлях до статичного контенту!
//app.use(express.static(__dirname + "/images"));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT;
app.listen(port || 8080);
console.log('Server is raning...');