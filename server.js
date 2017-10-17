var root = __dirname;
var express = require('express');
var fs = require('fs');
var app = express();
var router = express.Router();
var dotenv = require('dotenv');
dotenv.load();

var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    defaultLayout: 'main',
    extname: 'handlebars',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
        eachData: function(context, options){
          var fn = options.fn, inverse = options.inverse, ctx;
            var ret = "";

            if(context && context.length > 0) {
              for(var i=0, j=context.length; i<j; i++) {
                ctx = Object.create(context[i]);
                ctx.index = i;
                ret = ret + fn(ctx);
              }
            } else {
              ret = inverse(this);
            }
            return ret;
        },
        math: function(lvalue, operator, rvalue, options){
          lvalue = parseFloat(lvalue);
              rvalue = parseFloat(rvalue);

              return {
                  "+": lvalue + rvalue
              }[operator];
        }
    }
});

hbs.getPartials(__dirname + '/views/partials');

// var bcrypt = require('bcrypt');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');

app.set('port', (process.env.PORT || 3000));
// app.listen(app.get('port'), function() {
//     console.log("App running on port : ", app.get('port'));
// });

// app.engine('handlebars', exphbs({
//     defaultLayout: 'main',
//     extname: 'handlebars'
// }));
app.engine('handlebars', hbs.engine);
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'allthethings',
    saveUninitialized: false,
    resave: false
}));

app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

fs.readdirSync('./controllers').forEach(function(file) {
    if (file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        console.log('this is the route', route);
        route.controller(app, session);
    }
});

var http = require('http').Server(app);
http.listen(app.get('port'), function() {
    console.log("app is running at localhost:" + app.get('port'));
});

//ROOT ROUTE
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/home-for-sale', function(req, res) {
    res.render('homeforsale');
});

app.get('/blog', function(req, res) {
    res.render('blog');
});

