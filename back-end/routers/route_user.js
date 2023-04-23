const express = require('express');
const router = express.Router();
const login = require('../controllers/Login/ShowData')
const register = require('../controllers/register/register');

const meDetail = require('../controllers/user_me/user_detail');

const verify = require('../middelware/authJwt');

router.get('/person_noSuccess', login.Show_personNotSuccess);
router.get('/person_all', login.Show_personAll);
router.get('/person_noPayment', login.Show_personNotPayment);


// register 
router.post('/register', register.register)

// login
router.post('/login', login.authLogin)
router.get('/me', verify, meDetail.Detail_Me)


module.exports = router;