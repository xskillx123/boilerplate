const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser= require('body-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', require('./api'))


app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});


app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

module.exports = app