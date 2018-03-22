const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('config');
const routes = require('./routes');

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(config.server.port, () => {
	console.log('app started on port ' + config.server.port);
});

