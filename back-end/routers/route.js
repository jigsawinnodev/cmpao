const express = require('express');
const router = express.Router();
const RootController = require('../controllers/root')
const Admin = require('../controllers/Admin');
const multer = require('multer');
const TypePosition = require('.././controllers/TypePosition/TypePosition');
const User = require("../controllers/User/User");
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
router.get('/GetType_position', TypePosition.GetType_position);
router.post('/Edit_type_position', TypePosition.Edit_position);
router.post('/Delete_type_position/:id', TypePosition.DeleteType_position);





// router Apply
router.post('/Apply_Applycheck', Admin.Apply_Applycheck);
router.get('/GetApplyAll', Admin.GetApplyAll);
// router.post('/InsertApply', upload.single('file'), Admin.InsertApply);
router.post('/insertApply', Admin.Insert_Apply);
router.post('/deleteApply/:id', Admin.Delete_Apply);


// router ManagePositions
router.get('/GetAllPosition', Admin.GetAllPosition);
router.post('/Edit_Add_Position', upload.single('file'), Admin.manage_Position);
router.post('/Delete_position/:id', Admin.Delete_positions);

// router User
router.get('/GetUser', User.user_all);
router.get('/GetUser_permission', User.GetUser_permission);
router.post('/Insert_Edit_User', upload.single('img'), User.Insert_Edit_User);
router.get('/FindUserByID/:id', User.FindUserByID);
router.post('/Delete_user/:id', User.Delete_User);

// router Member
router.get('/selectMemberAll', Admin.selectMemberAll);
router.post('/CreateMember', Admin.CreateMember);
router.post('/DeleteMember/:id', Admin.Delete_Member);



// router Permissions
router.get('/permissionsAll', Admin.PermissionsGetAll);
router.get('/CheckAllPermissions', Admin.GetCheckPermissionsAll)


module.exports = router;
