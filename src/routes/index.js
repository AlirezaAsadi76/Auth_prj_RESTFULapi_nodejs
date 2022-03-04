const express = require('express');
const router=express.Router();

const authRouter=require('./auth');
const userRouter=require('./User');
const adminRouter=require('./Admin');

const{isLogin,isAdmin}=require('../middlewares/auth');
const error=require('../middlewares/error');

router.use('/auth', authRouter);
router.use('/user',isLogin, userRouter);
router.use('/admin',isLogin,isAdmin, adminRouter);
router.use(error);
module.exports =router;