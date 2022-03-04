const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {isLogin}=require('../../middlewares/auth');


router.get('/',isLogin,controller.dashbord);
router.get('/me',isLogin,controller.me);





module.exports = router;