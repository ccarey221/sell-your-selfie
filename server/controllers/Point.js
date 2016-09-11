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