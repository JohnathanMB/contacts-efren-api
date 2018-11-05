'use strict'
//libs
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const formidable = require('express-form-data');
const fs = require('fs');
const serve   = require('express-static');

const path = require('path');

//routes
const api = require('./routes/routes');

/* app.use('static',express.static('../public')); */
/* app.use(serve(__dirname + '/public')); */
/* app.use(express.static('public')); */
app.use(express.static(path.join(__dirname, '../app'), { maxAge: 86400000 }));

/*-----NNNNNNNNNNNNNN--------*/
/* app.get('/im',(req,res)=>{
    res.sendFile(path.join(__dirname + '/images/carlos-profile-photo.jpg'));
}) */
/*-----NNNNNNNNNNNNNN--------*/

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());
app.use(formidable.parse({keepExtensions: true}));

app.use('/api', api);


 module.exports=app