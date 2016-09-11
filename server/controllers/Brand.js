const db = require('../db');
const logger = require('../utils/logger');

exports.getBrandId = (brand, cb) => {
  db.query('SELECT brand_id FROM brands WHERE name=$1', [brand], (err, result) => {
    if (err) {
      logger.error('error getting brand ID', err);
      cb(err, null);
    } else {
      logger.info('Retrieved brand ID: ', brand);
      cb(null, result);
    }
  });
};