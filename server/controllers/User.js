const db = require('../db');
const logger = require('../utils/logger');

exports.createUser = (twitter_handle, cb) => {
  db.query('INSERT INTO users (twitter_handle, total_points) VALUES ($1, $2)', [twitter_handle, 0], (err, result) => {
    if (err) {
      logger.error('error making new user', err);
      cb(err, null);
    } else {
      logger.info('new user', twitter_handle);
      cb(null, result);
    }
  });
}

exports.checkIfUserExists = (twitter_handle, cb) => {
  db.query('SELECT EXISTS (SELECT 1 FROM users WHERE user_id=(SELECT user_id FROM users WHERE twitter_handle=($1)))', [twitter_handle], (err, result) => {
    if (err) {
      logger.error('error checking if user exists');
      cb(err, null);
    } else {
      logger.info('user exists!', twitter_handle);
      // result will be t or f
      cb(null, result);
    }
  });
};
