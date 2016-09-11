module.exports = (user, img) => {
  const havenondemand = require('havenondemand');
  const client = new havenondemand.HODClient(process.env.HAVEN);

  client.post('detectfaces', {url: img}, (err, resp, body) => {
    if (err) {
      console.log('Error occured during facial detection', err);
    }
    console.log('Haven body', body);
  });
}