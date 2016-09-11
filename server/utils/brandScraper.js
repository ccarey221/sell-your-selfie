const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://dev.havenondemand.com/docs/CorporateLogoSet.html')
  .then(response => {
    const html = response.data;
    $ = cheerio.load(html);
    const data = $('#container')
      .children()
      .find('li')
      .map((i, el) => $(el).text())
      .get()
      .join(',');
    fs.writeFile(`${__dirname}/../data/brands.csv`, data, 'utf-8', (err) => {
      if (err) {
        console.error('error!', err);
      } else {
        console.log('success!');
      }
    })
  })
  .catch(error => console.log('errr!', error));
