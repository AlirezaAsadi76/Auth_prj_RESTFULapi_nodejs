const autobind=require('auto-bind');
const {body,validationResult}=require('express-validator');
const User=require('../models/user');
module.exports= class{
    constructor(){
        autobind(this);
        this.User=User;
    }
    validationBody(req,res){

        const Result=validationResult(req);
        if(!Result.isEmpty()){
            const errors=Result.array();
            const messages=[];
            errors.forEach((error)=>{messages.push(error.msg)});
            res.status(400).json({message:"validation errors",data:messages});
            return false;
        }

        return true;
    }
    validate(req,res,next){
        if(this.validationBody(req,res)==false){
            return;
        }
        next();
    }
    responce({res,message,code=200,data={}}){
        res.status(code).json({message,data});
    }
}