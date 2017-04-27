var express = require('express');

//create our app
var app = express();

//folder want to server
app.use(express.static('public'));

//start the server
app.listen(3000, function(){
    console.log('Express server is up on port 3000');
});