const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = mongoose.Schema({
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
    }
});

adminSchema.plugin(uniqueValidator);

adminSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
adminSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports.getAdminbyUsername = function(name,callback){
    const query = {
        name: name
    }
    Admin.findOne(query, callback);
}
module.exports = mongoose.model("admin_profile", adminSchema);