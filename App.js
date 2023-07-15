const express = require('express');
var db = require('./db');
const Sequelize = require ('sequelize')
require('dotenv').config()

//Router
var router = require('./routes.js');
const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use(express.json());


app.use('/',router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});