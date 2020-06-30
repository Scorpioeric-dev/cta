//Dependencies installed being required
require("dotenv/config");
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");
// Requiring dotenv secured file
const { port, connection_string, session_secret } = process.env;
// Authentication controller
const authCtrl = require("./authController");
const adminCtrl = require('./adminController')
//Admin controller
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//Middleware
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: session_secret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10,
    },
  })
);

//Endpoints

//Tracks how many times a user visited a site ---
app.get("/", function (req, res) {
  if (req.session.page_views) {
    console.log(req.session.page_views, "hit4");
    req.session.page_views++;
    res.send("You visited this page" + req.session.page_views + "times");
  } else {
    req.session.page_views = 1;
    res.send("Welcome!!");
  }
});
//admin api
app.get('/admin/getUserData/:id',adminCtrl.getAllEvents)
app.post('/admin/tracker',adminCtrl.tracker)
//register,login,& session api endpoints
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/auth/session", authCtrl.getSession);
app.get('/auth/getEvent',authCtrl.getCount)
app.listen(port, () => {
  console.log(`${port} monkeys in the building`);
});
// Set massive --  communication with postgreSQL database
massive(connection_string).then((db) => {
  app.set("db", db);
});
