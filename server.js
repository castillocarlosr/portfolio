'use strict';

const express = require('express');

//new line added july 22, 2019.
//Enforce redirect for https
var sslRedirect = require('heroku-ssl-redirect');

const app = express();
app.use(sslRedirect());

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.  These are not the droids you are looking for.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
