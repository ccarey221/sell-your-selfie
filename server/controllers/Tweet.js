const db = require('../db');
const logger = require('../utils/logger');

exports.addTweet = (data, cb) => {
  const { user_id, brand_id, message, image_url } = data;
  db.query('INSERT INTO tweets (user_id, brand_id, message, image_url) values ($1, $2, $3, $4)', [user_id, brand_id, message, image_url], (err, result) => {
    if (err) {
      logger.error('error adding tweet', err);
      cb(err, null);
    } else {
      logger.info('new tweet added!', result);
      cb(null, err);
    }
  });
};

exports.getAllTweetsByUser = (twitter_handle, cb) => {
  db.query('SELECT brand_id, message, image_url FROM tweets WHERE user_id=(SELECT user_id FROM users WHERE twitter_handle=$1)', [twitter_handle], (err, result) => {
    if (err) {
      logger.error('error getting all tweets', err);
      cb(err, null);
    } else {
      logger.info('got all tweets for: ', twitter_handle);
      cb(null, result);
    }
  });
}
