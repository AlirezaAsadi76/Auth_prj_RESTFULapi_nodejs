const mongoose = require('mongoose');
const TimeStamp = require('mongoose-timestamp');

const UserSchema=new mongoose.Schema({
    email: {type: String, required: true,unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},

});
UserSchema.plugin(TimeStamp);
const User=mongoose.model('user',UserSchema);

module.exports = User;
