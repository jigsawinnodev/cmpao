const express = require('express');
const router = express.Router();
const RootController = require('../controllers/root')
const Admin = require('../controllers/Admin');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // res.json(req.file)
        // console.log(file);
        if (file.type === 'application/pdf') {
            cb(null, 'file/pdf');
        } else if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, 'file/img');
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });


router.get('/', RootController.getTest);
router.get('/GetMenu', Admin.GetMenuAdmin);
router.get('/GetType_position', Admin.GetType_position);
router.get('/GetBloodType', Admin.BloodType);
router.get('/GetpreName', Admin.GetpreName);
router.get('/GetStatus_relationship', Admin.Status_relationship);
router.get('/GetTbl_country', Admin.GetTbl_country);
router.get('/GetTbl_district', Admin.GetTbl_district);
router.get('/GetTbl_subdistrict', Admin.GetTbl_subdistrict);
router.post('/CreateMember', Admin.CreateMember);
router.get('/GetTbl_religion', Admin.GetTbl_religion);
router.get('/selectMemberAll', Admin.selectMemberAll);
router.post('/DeleteMember', Admin.Delete_Member);
router.get('/GetApplyAll', Admin.GetApplyAll);
router.post('/Apply_Applycheck', Admin.Apply_Applycheck);

// router ManagePosition
router.get('/GetAllPosition', Admin.GetAllPosition);
router.post('/Edit_Add_Position', upload.single('file'), Admin.Edit_Add_Position);
module.exports = router;
