var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure CORS
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin",
       "https://intense-tor-95063.herokuapp.com/");
   res.header("Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods",
       "GET, POST, PUT, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   next();
});

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'aaaabbbb',
    rolling: true,
    cookie: { maxAge : 1800000 }
}));

var bookService = require('./services/book.service.server.js')(app);
var userService = require('./services/user.service.server.js');
userService(app);

console.log("server started")

app.listen(process.env.PORT || 4000)