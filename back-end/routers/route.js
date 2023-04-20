const express = require('express');
const router = express.Router();
const RootController = require('../controllers/root')
const Admin = require('../controllers/Admin');
const multer = require('multer');

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


router.get('/', RootController.getTest);
router.get('/GetMenu', Admin.GetMenuAdmin);
router.get('/GetBloodType', Admin.BloodType);
router.get('/GetpreName', Admin.GetpreName);
router.get('/GetStatus_relationship', Admin.Status_relationship);
router.get('/GetTbl_country', Admin.GetTbl_country);
router.get('/GetTbl_district', Admin.GetTbl_district);
router.get('/GetTbl_subdistrict', Admin.GetTbl_subdistrict);
router.get('/GetTbl_religion', Admin.GetTbl_religion);




// router TypePosition
router.get('/GetType_position', Admin.GetType_position);
router.post('/Edit_type_position', Admin.Edit_position);
router.post('/Delete_type_position/:id', Admin.DeleteType_position);





// router Apply
router.post('/Apply_Applycheck', Admin.Apply_Applycheck);
router.get('/GetApplyAll', Admin.GetApplyAll);
router.post('/InsertApply', upload.single('file'), Admin.InsertApply);


// router ManagePositions
router.get('/GetAllPosition', Admin.GetAllPosition);
router.post('/Edit_Add_Position', upload.single('file'), Admin.manage_Position);
router.post('/Delete_position/:id', Admin.Delete_positions);

// router User
router.get('/GetUser', Admin.user_all);
router.get('/GetUser_permission', Admin.GetUser_permission);
router.post('/Insert_Edit_User', upload.single('img'), Admin.Insert_Edit_User);
router.get('/FindUserByID/:id', Admin.FindUserByID);


// router Member
router.get('/selectMemberAll', Admin.selectMemberAll);
router.post('/CreateMember', Admin.CreateMember);
router.post('/DeleteMember/:id', Admin.Delete_Member);



// router Permissions
router.get('/permissionsAll', Admin.PermissionsGetAll);
router.get('/CheckAllPermissions', Admin.GetCheckPermissionsAll)


module.exports = router;
