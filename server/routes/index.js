const logger = require('../utils/logger');
const passport = require('passport');
const pointController = require('../controllers/Point.js');

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

  app.get('/getpoints/:screen_name', (req, res) => {
    const screen_name = req.params.screen_name;
    pointController.retrieveUserPoints(screen_name, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    })
  });
};
