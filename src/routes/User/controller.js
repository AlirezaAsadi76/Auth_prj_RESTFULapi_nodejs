const controller = require('./../controller');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypy = require('bcrypt');
const config = require('config');
module.exports = new (class extends controller {
    async dashbord(req, res) {
         res.send("user dashbord");
    }
    async me(req, res) {

        this.responce({res,message:"token is valid",data:req.user});
    }
})();