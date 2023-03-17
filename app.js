require('dotenv').config();
// require('./config/Database').connect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to DB 
const DB = require('./Config/DB')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors('*'));


const router = require('./routers/route');
app.use('/api', router);

module.exports = app;