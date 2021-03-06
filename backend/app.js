const express = require("express");
const mongooseSetup = require("./config/database");
const bodyParser = require("body-parser");
const passport = require("passport");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const index = require("./routes/index");
const users = require("./routes/users");


//pdf builder
const cors = require("cors");
const pdf = require("html-pdf");
const pdfTemplate = require("./documents");
//pdf

mongooseSetup.start(); //starts the database

//Passport Config
require("./config/passport")(passport);

const app = express();
app.set("trust proxy", true);

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //alows us to deal with form data and json data

//app.use(cors());

const PORT = process.env.PORT || 3001;

//Express session middleware
app.use(
    session({
        name: "sid",
        resave: false,
        saveUninitialized: false,
        secret: "secret",
        store: new MongoStore({ mongooseConnection: mongooseSetup.connection }),
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 1 // 1 day
        }
    })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Globals
app.use((req, res, next) => {
    if (req.session) {
        res.locals.session = req.session;
    }
    next();
});

//Routes
app.use("/", index);
app.use("/users", users);

//post pdf generator
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err){
            res.send(Promise.reject())
        }
        return Promise.resolve();
    });
});

// get pdf
app.get('fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname/result.pdf}`);
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
