const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('./controllers/User');
const logger = require('./utils/logger');

module.exports = () => {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  },
    (token, tokenSecret, profile, done) => {
      const twitter_handle = profile.username;
      User.checkIfUserExists(twitter_handle, (err, result) => {
        if (err) {
          logger.error('error checkIfUserExists', err);
        } else {
          logger.info('successful checkIfUserExists', result[0]);
          if (result[0] === undefined) {
            User.createUser(twitter_handle, (err2, result2) => {
              if (err2) {
                logger.error('cannot create user', err2);
                done(err2, null);
              } else {
                logger.info('new user created via auth', result2);
                done(null, profile);
              }
            });
          } else if (result[0]) {
            done(null, profile);
          } else {
            logger.error('not returning properly from db');
            done(err, null);
          }
        }
      });
    }
  ));
};
