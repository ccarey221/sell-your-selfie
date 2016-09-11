const express = require('express');
const logger = require('./utils/logger');
const dotenv = require('dotenv');


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(logger.requestLogger);
require('./middleware')(app);
require('./routes')(app);
require('./authentication')();

app.use('/', express.static(`${__dirname}/../client`));
app.use(logger.errorLogger);

// Load twitter service
require('./controllers/twitter')();

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
