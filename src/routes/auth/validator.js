const expressValidator=require('express-validator');
const check=expressValidator.check;


module.exports=new(class{
registerValidator(){
return [
    check("email").isEmail().withMessage("emia is invalid!"),
    check("name").notEmpty().withMessage("name can not empty"),
    check("password").notEmpty().withMessage("password can not empty"),
];
}
loginValidator(){
    return [
        check("email").isEmail().withMessage("emia is invalid!"),
        check("password").notEmpty().withMessage("password can not empty"),
    ];
}
})();