const pg = require('pg');
const logger = require('../utils/logger');

const client = new pg.Client();

client.connect(function (err) {
  if (err) {
    logger.error('Error connecting to db', err);
  } else {
    logger.info('Connected to db');
  }
});

module.exports = client;
