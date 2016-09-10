const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

require('./middleware')(app);
require('./routes')(app);

app.use('/', express.static(`${__dirname}/../client`));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
