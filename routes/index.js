const express = require('express');
const router = express();
require('../models')
const upload = require('../middlewares/uploadImages');
const {registerUser, login} = require('../conntroller/createUser');
const {verifyToken} = require('../middlewares/authenticate')
router.get('/',(req,res) => {
    res.send("Heyy");
})

router.post('/api/upload',upload, (req,res) => {
    res.send(req.file);
    res.send("Uploaded Successfully");
})

router.post('/createUser/registerUser',upload,registerUser)
router.post('/createUser/login',verifyToken,login)

module.exports = router;