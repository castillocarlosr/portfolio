'use strict';

const express = require('express');

//new line added july 22, 2019.
//Enforce redirect for https
var sslRedirect = require('heroku-ssl-redirect');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.  These are not the droids you are looking for.'));

//This is where it is called.  These are my comments because I don't know if this will work-Carlos
app.use(sslRedirect());

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
