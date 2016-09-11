const db = require('../db');
const logger = require('../utils/logger');

exports.createPoint = (data, cb) => {
  const { user_id, brand_id, points } = data;
  db.query('INSERT INTO points (user_id, brand_id, points) VALUES ($1, $2, $3)', [user_id, brand_id, points], (err, result) => {
    if (err) {
      logger.error('error making new points', err);
      cb(err, null);
    } else {
      logger.info('new points', data);
      cb(null, result);
    }
  });
}

exports.retrieveUserPoints = (twitter_handle, cb) => {
  logger.info('checking twitter handle', twitter_handle);
  db.query('SELECT * FROM points WHERE user_id=(SELECT user_id FROM users WHERE twitter_handle=$1)', [twitter_handle], (err, result) => {
    if (err) {
      logger.error('error checking if user exists', err);
      cb(err, null);
    } else {
      logger.info('no lookup error!', result.rows);
      cb(null, result.rows);
    }
  });
};