const express = require('express');
const router = express.Router();
const login = require('../controllers/Login/ShowData')
const register = require('../controllers/register/register');
router.get('/person_noSuccess', login.Show_personNotSuccess);
router.get('/person_all', login.Show_personAll);
router.get('/person_noPayment', login.Show_personNotPayment);


// register 
router.post('/register', register.register)

module.exports = router;