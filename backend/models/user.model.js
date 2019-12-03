const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: 'user'
    },
  lastName: {
    type: String,
    required: false
    default: ''
  },
  firstName: {
    type: String,
    required: false
    default: ''
  }
});

userSchema.plugin(uniqueValidator);

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports.getUserbyUsername = function(name,callback){
  const query = {
    name: name
  }
  User.findOne(query, callback);
}
module.exports = mongoose.model("user_profile", userSchema);