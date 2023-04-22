require('dotenv').config();
// require('./config/Database').connect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Connect to DB 
const DB = require('./Config/DB')

const app = express();
app.use('/public', express.static(path.join(__dirname, 'file')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'));



const router = require('./routers/route');
app.use('/api', router);

const routerUser = require('./routers/route_user');
app.use('/api/user', routerUser);


module.exports = app;