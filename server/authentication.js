var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: 'YJLtF4aucHBS2iognF0YRQEos',
    consumerSecret: ' zTej9rKSEczYw2zOTZTvWZtybeF6fGkcYijPhC3L70iefummOc',
    callbackURL: "http://www.sellyourselfie.herokuapp.com/dashboard"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));