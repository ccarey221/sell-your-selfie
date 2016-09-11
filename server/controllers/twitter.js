module.exports = () => {
  const Twitter = require('twitter');
  const Haven = require('./haven');
   
  const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });
  const stream = client.stream('statuses/filter', {track: 'sellyourselfie'});

  stream.on('data', function(event) {
    const user = {
      id: event.user.id_str,
      name: event.user.name,
      screen_name: event.user.screen_name,
      location: event.user.location,
      followers_count: event.user.followers_count
    }

    const tweet = {
      message: event.text
    }

    if(event.entities && event.entities.media){
      event.entities.media.forEach(media => {
        if (media.type === 'photo') {
          Haven(user, media.media_url, tweet);
        }
      })
    }
  });

  stream.on('error', function(error) {
    throw new Error(error);
  });
};
