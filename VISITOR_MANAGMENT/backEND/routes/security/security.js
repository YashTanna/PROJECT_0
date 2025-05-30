const express = require('express');



const router = express.Router('/security');


const auth = require('../../middleware/securityAuth');






router.post('/login', require('../../controllers/security/login'));

router.get('/getData', auth,require('../../controllers/security/verifyUser'));

router.post('/studentEntryExit', auth, require('../../controllers/security/studentEntryExit'));

router.post('/staffEntryExit', auth,require('../../controllers/security/staffEntryExit'));

router.post('/visitorEntry', auth,require('../../controllers/security/visitorEntry'));

router.post('/visitorExit', auth,require('../../controllers/security/visitorExit'));

router.post('/parentEntryExit', auth,require('../../controllers/security/parentEntryExit'));

router.get('/getParentList', auth,require('../../controllers/security/getParentList'));

router.get('/getVisitorList',auth, require('../../controllers/security/getVisitorList'));

router.get('/getCurrentVisitors',auth,require('../../controllers/dataTables/getCurrentVisitors'));

router.get('/getStudentLogs', auth, require('../../controllers/dataTables/getStudentLogs'));

router.get('/getVisitorsLogs', auth,require('../../controllers/dataTables/getVisitorsLogs'));

router.get('/getStaffLogs', auth,require('../../controllers/dataTables/getStaffLogs'));

router.get('/getParentLogs',auth, require('../../controllers/dataTables/getParentLogs'));

// Add new OTP routes
router.post('/visitor/send-otp', auth, require('../../controllers/security/visitorOTP/sendOTP'));
router.post('/visitor/verify-otp', auth, require('../../controllers/security/visitorOTP/verifyOTP'));

// Add these new routes
router.post('/visitor/create', auth, require('../../controllers/security/visitorCreate'));
router.post('/visitor/upload-photo', auth, require('../../controllers/security/visitorPhotoUpload'));










module.exports = router;