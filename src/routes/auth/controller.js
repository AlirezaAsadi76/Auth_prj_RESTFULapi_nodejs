const controller = require('./../controller');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypy = require('bcrypt');
const config = require('config');
module.exports = new (class extends controller {
    async register(req, res) {

        const user = await this.User.findOne({ email: req.body.email });
        if (user) {
            this.responce({
                res: res,
                code: 400,
                message: "user already register",
            });
            return;
        }
        // const {email,name,password}=req.body;
        // const newUser=new this.User(email,name,passwords);
        const newUser = new this.User(_.pick(req.body, ["name", "email", "password"]));
        const salt = await bcrypy.genSalt(10);
        newUser.password = await bcrypy.hash(newUser.password, salt);
        await newUser.save();

        this.responce({ res: res, message: "the user successfuly registred", code: 200, data: _.pick(newUser, ["_id", "name", "email"]) });

    }
    async login(req, res) {
        // throw new Error("login faild");
        const user = await this.User.findOne({ email: req.body.email });
        if (!user) {
            this.responce({ res: res, message: "invalid email or password", code: 400 });
            return;
        }
        const isValid = await bcrypy.compare(req.body.password, user.password);
        if (!isValid) {
            this.responce({ res: res, message: "invalid email or password", code: 400 });
            return;
        }
        const token = jwt.sign({ _id: user._id }, config.get("jwt_key"));
        this.responce({ res: res, message: "loggin successfuly", data: { token } })

    }
})();