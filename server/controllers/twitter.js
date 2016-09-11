module.exports = () => {
  const Twitter = require('twitter');
   
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  const stream = client.stream('statuses/filter', {track: 'HP142134'});
  stream.on('data', function(event) {
    const user = {
      id: event.user.id_str,
      name: event.user.name,
      screen_name: event.user.screen_name,
      location: event.user.location,
      followers_count: event.user.followers_count
    }
    console.log('Tweet Text:', event.text);
    console.log('Tweet User Info:', event.entities.media);
    event.entities.media.forEach(media => {
      if (media.type === 'photo') {
        console.log('Tweet Image URL:', media.media_url);
      }
    })
  });
   
  stream.on('error', function(error) {
    throw new Error(error);
  });
}