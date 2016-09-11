var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: '1FcM1FOspmD28EQO2qEDTD4He',
    consumerSecret: 'eyA2FhpWWzWmSodJdov0KIAA7ovXWn0u8XehAUEQrqeG3icwpq',
    callbackURL: "http://www.example.com/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));