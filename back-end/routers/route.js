const express = require('express');
const router = express.Router();
const RootController = require('../controllers/root')
const Admin = require('../controllers/Admin');
const multer = require('multer');
const TypePosition = require('.././controllers/TypePosition/TypePosition');
const User = require("../controllers/User/User");
const Member = require("../controllers/Member/Member");
const Dashboard = require("../controllers/Dashboard/Dashboard");
const Apply = require("../controllers/Apply/Apply");
const Permission = require("../controllers/Permission/Permission");
const Organization = require("../controllers/Organization/Organization");
const ManagePositions = require("../controllers/ManagePosition/ManagePosition");
const AuthAdmin = require('../controllers/LoginAdmin/LoginAdmin');
const verify = require('../middelware/authJwt');
const Payment = require('../controllers/payment/Payment');
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



// router Apply
router.post('/Apply_Applycheck', Admin.Apply_Applycheck);
router.get('/GetApplyAll', Admin.GetApplyAll);
router.get('/GetpositionIntype/:id', Admin.GetPositon);

router.post('/UpdateApply_Insert', Admin.UpdateApplyAndInsert)

// router.post('/InsertApply', upload.single('file'), Admin.InsertApply);
router.post('/insertApply', Admin.Insert_Apply);
router.post('/deleteApply/:id', Admin.Delete_Apply);




//test
router.get('/testApi', Admin.testApi);

router.get('/tree', Admin.Tree);



// เสร็จ
// router User
router.get('/GetUser', verify, User.user_all);
router.get('/GetUser_permission', verify, User.GetUser_permission);
router.post('/Insert_Edit_User', verify, upload.single('img'), User.Insert_Edit_User);
router.get('/FindUserByID/:id', verify, User.FindUserByID);
router.post('/Delete_user/:id', verify, User.Delete_User);
// router TypePosition
router.get('/GetType_position', verify, TypePosition.GetType_position);
router.post('/Edit_type_position', verify, TypePosition.Edit_position);
router.post('/Delete_type_position/:id', verify, TypePosition.DeleteType_position);
// router Member
router.get('/selectMemberAll', verify, Member.selectMemberAll);
router.post('/CreateMember', verify, upload.single('img'), Member.CreateMember);
router.get('/selectMember/:id', verify, Member.selectMemberById);
router.post('/DeleteMember/:id', verify, Member.Delete_Member);
// router Permissions
router.get('/permissionsAll', verify, Admin.PermissionsGetAll);
router.get('/CheckAllPermissions', verify, Admin.GetCheckPermissionsAll)
router.post('/UpdatePermissions', verify, Permission.UpdatePermission);
// router ManagePositions
router.get('/GetAllPosition', verify, ManagePositions.GetAllPosition);
router.get('/GetFilePositions/:id', verify, ManagePositions.GetFilePositions);
router.post('/Edit_Add_Position', verify, upload.array('file', 10), ManagePositions.manage_Position);
router.post('/Delete_position/:id', verify, ManagePositions.Delete_positions);

//Dashboard
router.get('/CardDashboard', verify, Dashboard.GetMaxID);


//payment
router.get('/GetAllPayment', verify, Payment.GetAllPayment)
router.get('/GetAllPaymentBy/:id', verify, Payment.GetPayMentCheckByid)
router.get('/GetPositionToexport/:id', verify, Payment.GetPositionToexport);




//Organization
router.get('/GetOrganization', Organization.GetAllOrganization);
// Apply
router.get('/GetApply', Apply.GetAll_Apply);
router.post('/test', upload.any(), Admin.testApi)





//CallAdmin
router.post('/LoginAdmin', AuthAdmin.AdminLogin);
router.get('/getMeAdmin', verify, AuthAdmin.VertifyTokenAdmin);
module.exports = router;
