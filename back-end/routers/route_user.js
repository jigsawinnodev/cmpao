const express = require('express');
const router = express.Router();
const login = require('../controllers/Login/ShowData')
const register = require('../controllers/register/register');
const multer = require('multer');
const meDetail = require('../controllers/user_me/user_detail');
const work = require('../controllers/work/work');
const verify = require('../middelware/authJwt');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, 'file/pdf');
        } else if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, 'file/img');
        }
    },
    filename: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, Date.now() + '.pdf');
        } else if (file.mimetype == "image/png") {
            cb(null, Date.now() + '.png');
        } else if (file.mimetype == "image/jpg") {
            cb(null, Date.now() + '.jpg');
        } else {
            cb(null, Date.now() + '.jpeg');
        }
    }
})

const upload = multer({ storage: storage });





router.get('/person_noSuccess', login.Show_personNotSuccess);
router.get('/person_all', login.Show_personAll);
router.get('/person_noPayment', login.Show_personNotPayment);


// register 
router.post('/register', register.register)

// login
router.post('/login', login.authLogin);
router.get('/me', verify, meDetail.Detail_Me);
router.post('/is_Accept/:id', verify, meDetail.User_is_Accept);
router.post('/editDetails/:id', verify, upload.single('img'), meDetail.UpdateDataDetail);
router.get('/getWork/:limit', verify, work.GetjobForUserRegister);
router.get('/getListJob_position/:id', verify, work.GetpositionInJob);
router.get('/getfileJob/:id', verify, work.GetJobFile);
router.get('/getDetailJob/:id', verify, work.GetdetailJob);
router.get('/ShowDetailDataUserLast', login.ShowDetailDataUser);
router.get('/ShowDetailPositions', login.ShowDetailPositions);

module.exports = router;