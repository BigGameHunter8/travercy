const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router();
const config = require('./config/database');


//Connection to BD
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('db connected ',config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('db error ',err);
});

const app = express();
const users = require('./routes/users');
//Port number
const port = 3000;

//Cors middleware
app.use(cors());


//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//BodyParser
app.use(bodyParser.json());

app.use('/users',users);

//Index route
app.get("/",(req,res)=>{
    res.end();
});


//Start server
app.listen(3000, ()=>{
    console.log('Server started on port '+port);
});
