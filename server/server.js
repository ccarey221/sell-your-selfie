const express = require('express');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger.requestLogger);
require('./middleware')(app);
require('./routes')(app);
app.use('/', express.static(`${__dirname}/../client`));
app.use(logger.errorLogger);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
