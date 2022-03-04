const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('config');
async function isLogin(req, res, next) {

    const token = req.header("x-auth-token");
    if (!token) { res.status(401).send("access denid"); }
    try {

        const decode = jwt.verify(token, config.get("jwt_key"));
        const userIsvalid = await User.findById(decode._id);
        if (!userIsvalid) { res.status(401).send("access denid"); }
        console.log(userIsvalid);
        req.user = userIsvalid;
    } catch (ex) {
        res.status(400).send("invalid token");
    }

    next();
}
async function isAdmin(req, res, next) {
    if (!req.user.isAdmin)
        res.status(403).send("access denied");
    next();
}
module.exports = { isLogin ,isAdmin}