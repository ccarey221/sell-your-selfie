var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(token, tokenSecret, profile, done) {
    // look up user in postgres to confirm user's id
  }
));