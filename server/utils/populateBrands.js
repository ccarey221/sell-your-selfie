//Converter Class
const db = require('../db');
const logger = require('./logger');

const Converter = require("csvtojson").Converter;
const path = require('path');
const converter = new Converter({noheader: true});

converter.fromFile(path.join(`${__dirname}/../data/brands.csv`), (err, result) => {
  if (err) {
    throw new Error(`Unable to populate: ${err}`);
  }
  result.forEach(brands => {
    for (key in brands) {
      const brand = brands[key];

      db.query('INSERT INTO brands (name) VALUES ($1)', [brand], (err, result) => {
        if (err) {
          logger.error('error making new brand', err);
        } else {
          logger.info('new brand', brand);
        }
      });

    }
    
  })
});