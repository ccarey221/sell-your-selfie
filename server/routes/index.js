const logger = require('../utils/logger');
const passport = require('passport');
const userController = require('../controllers/User.js');

module.exports = app => {
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/',
    }),
    (req, res) => {
      logger.info('successful authentication');
      // res.redirect('/dashboard');
      res.json(req.user);
    }
  );

  app.get('/dashboard', (req, res) => {
    res.redirect('/dashboard');
  });
};
