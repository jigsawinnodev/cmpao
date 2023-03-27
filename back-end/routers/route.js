const express = require('express');
const router = express.Router();
const RootController = require('../controllers/root')
const Admin = require('../controllers/GetMenuAdmin');


router.get('/', RootController.getTest);
router.get('/GetMenu', Admin.GetMenuAdmin);
router.get('/GetType_position', Admin.GetType_position);

module.exports = router;
