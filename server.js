var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')
var connectionString = 'mongodb://admin:admin123@ds163738.mlab.com:63738/heroku_6zmrbdr9'
//var connectionString = 'mongodb://localhost:27017/hellobooks'

if(process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds163738.mlab.com:63738/heroku_6zmrbdr9';
}

const mongoose = require('mongoose')
mongoose.connect(connectionString,
    //'mongodb://admin:admin123@ds163738.mlab.com:63738/heroku_6zmrbdr9',
    //'mongodb://localhost:27017/hellobooks',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:3000");
      //  "https://intense-tor-95063.herokuapp.com");
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
    cookie: { maxAge: 1800000 }
}));

var bookService = require('./services/book.service.server.js')(app);
var userService = require('./services/user.service.server.js');
var reviewService = require('./services/review.service.server.js')(app);
var threadService = require('./services/thread.service.server.js')(app);
var commentService = require('./services/comment.service.server.js')(app);
userService(app);

console.log("server started")

app.listen(process.env.PORT || 4000)