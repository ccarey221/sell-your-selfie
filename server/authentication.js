const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  },
    (token, tokenSecret, profile, done) => {
      // look up user in postgres to confirm user's id
      console.log('token', token);
    }
  ));
};
