require("dotenv/config");
const express = require("express");
const app = express();
const session = require('express-session')
const massive = require("massive");
const { port, connection_string, session_secret } = process.env;
const authCtrl = require("./authController");
const cookieParser = require('cookie-parser')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//server

//Middleware
app.use(cookieParser())
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
app.get('/', function(req,res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page" + req.session.page_views + "times")
    }else{
            req.session.page_views = 1
            res.send("Welcome!!")

        }
    }
)
app.post('/auth/register',authCtrl.register)
app.post('/auth/login',authCtrl.login)
app.get('/auth/session',authCtrl.getSession)
app.listen(port, () => {
    console.log(`${port} monkeys in the building`);
  });
massive(connection_string).then(db => {
    app.set("db", db);
   
 });
// Set massive communication with database

