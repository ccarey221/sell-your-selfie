const logger = require('../utils/logger');
const User = require('./User');
const Tweet = require('./Tweet');
const Brand = require('./Brand');
const Point = require('./Point');

module.exports = (user, img, tweet) => {
  const havenondemand = require('havenondemand');
  const client = new havenondemand.HODClient(process.env.HAVEN);

  client.post('detectfaces', {url: img}, (err1, resp1, body1) => {
    if (err1) {
      logger.error(`Error occured during facial detection: ${err}`);
    }
    logger.info(`Face Detected for ${user.name}'s photo`);
    // Check if there was a face found
    if(body1.face.length){
      client.post('recognizeimages', {url: img}, (err, resp, body) => {
        body.object.forEach(logo => {
          logger.info(`${logo.name} Logo Detected for ${user.name}'s photo`);
          // Find the brand id in the database 
          Brand.getBrandId(logo.name, (err, result) =>{
            // Now we need to check if the user exists
            const brand_id = result.rows[0].brand_id;
            User.checkIfUserExists(user.screen_name, (err, result) => {
              if (result[0]) {
                let user_id = result[0].user_id;
                // User exists
                Tweet.addTweet({ 
                  user_id, 
                  brand_id, 
                  message: tweet.message, 
                  image_url: img
                }, (err, result) => {
                  // Tweet created
                  Point.createPoint({
                    user_id,
                    brand_id,
                    points: 10
                  }, (err, result) => {
                    console.log(result);
                  })
                });
              } else if (!result[0] && !err) {
                // Create User
                User.createUser(user.screen_name, (err, result) => {
                  User.checkIfUserExists(user.screen_name, (err, result) => {
                    let user_id = result[0].user_id;
                    Tweet.addTweet({ 
                      user_id,
                      brand_id, 
                      message: tweet.message, 
                      image_url: img
                    }, (err, result) => {
                      // Tweet created
                      Point.createPoint({
                        user_id,
                        brand_id,
                        points: 10
                      }, (err, result) => {
                        console.log(result.rows[0]);
                      })
                    });
                  });
                });
              }
            });
          });
        })
      });
    } else {
      logger.error('Haven: No face found.');
    }
  });
}