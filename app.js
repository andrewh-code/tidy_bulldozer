// bring in our modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// set the routes to variables
const users = require('./routes/users');

// initialize app variable with express
const app = express();

const port = 3000;
app.use(cors());    // use the cors module 
// // allow CORS request using only express
// app.use(function(request, response, next){
//     response.header("Access-Control-Allow-Origin", "*");   // "*" for the list of domains/ports you allow 
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.static(path.join(__dirname, 'public')));    // host public static assets
app.use(bodyParser.json());   // body parser middleware (handle the data coming through)


app.use('/users', users);  

// create basic route for index, '/' 
app.get('/', function(req, res) {
    res.send('invalid endpoint function');
});

app.listen(port, function(){
    console.log("Now serving on port: " + port);
})

