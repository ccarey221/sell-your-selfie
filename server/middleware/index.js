const session = require('express-session');
const passport = require('passport');

module.exports = app => {
  // use middleware here
  app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};
