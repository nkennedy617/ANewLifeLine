const express = require("express");
//const bcrypt = require("bcryptjs"); //TODO: Removed this now takes place within the model
const passport = require("passport");
const db = require("../config/database");

const router = express.Router();

//Admin model
const Admin = require("../models/admin.model");

//Verify - this is for the frontend
router.get("/verify", (req, res) => {
    console.log(
        "This is res.locals.session from /verify" +
        JSON.stringify(res.locals.session)
    );
    console.log("This is req.session from /verify" + JSON.stringify(req.session));
    console.log(
        "This is res.locals.user from /verify" + JSON.stringify(res.locals.user)
    );
    console.log("This is req.user from /verify" + JSON.stringify(req.user));
    if (req.isAuthenticated()) {
        const admin = {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            loggedIn: true
        };
        return res.send({
            success: true,
            message: "Valid session",
            user: admin
        });
    } else {
        emptyAdmin = {
            username: "",
            email: "",
            loggedIn: false
        };
        return res.send({
            success: false,
            message: "Couldn't find session",
            user: emptyAdmin
        });
    }
});

//Register Handle
router.post("/register", (req, res) => {
    const { name, password, password2 } = req.body;

    //ensures email isn't case sensitive
    let { email } = req.body;
    email = email.toLowerCase();

    //Do server-side form validation here: password length
    //is the email an actual email etc.
    let errors = [];

    //Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" });
    }

    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }

    if (password.length < 6) {
        errors.push({ msg: "Password should be at least 6 characters" });
    }

    if (errors.length > 0) {
        return res.send({
            success: false,
            message: errors
        });
    }

    //Validation passed
    Admin.findOne({ email }).then(user => {
        if (user) {
            //Flash the error
            errors.push({ msg: "Email is already registered" });
            return res.send({
                success: false,
                messsage: errors
            });
        }
        //Create a new database entry
        const newAdmin = new User({
            name,
            email,
            password
        });

        console.log(newAdmin);
        newAdmin.password = newAdmin.generateHash(password);
        newAdmin.save((error, admin) => {
            console.log("This is req.session from /register: " + req.session);
            if (error) {
                if(error.errors.name) {
                    return res.send({
                        success: false,
                        message:  "Username is already taken."
                    })
                }
                else {
                    errors.push("Server error: registering new user to database");
                    return res.send({
                        success: false,
                        message: errors
                    });
                }
            } else {
                return res.send({
                    success: true,
                    message: "Succcessful registration!"
                });
            }
        });
    });
});

//Login handle
router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("This is req.user from /login: " + JSON.stringify(req.user));
    console.log(
        "This is req.session from /login: " + JSON.stringify(req.session)
    );
    //console.log("This is req.body from /login: " + req.body);

    req.session.adminId = req.user._id;
    res.locals.admin = req.admin;
    res.locals.session = req.session;
    const client = {
        id: req.admin._id,
        name: req.admin.name,
        email: req.admin.email,
        loggedIn: true
    };

    return res.send({
        success: true,
        message: "successful login",
        user: req.admin
    });
    //Our function defined in passport takes care of ths route
});

//Logout handle
router.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send({
                success: false,
                message: "Server error: couldn't destroy session (log user out)"
            });
        }
        req.logout();
        res.clearCookie("sid").send({
            success: true,
            message: "Successfully logged out"
        });
    });
});

module.exports = router;