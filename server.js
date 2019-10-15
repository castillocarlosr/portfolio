'use strict';

const express = require('express');

//new line added july 22, 2019.
//Enforce redirect for https
//var sslRedirect = require('heroku-ssl-redirect');

const app = express();
//app.use(sslRedirect());

const PORT = process.env.PORT || 3000 || process.env.VCAP_APP_PORT;

app.enable('trust proxy');

app.use(function(request, response, next){
  if(request.secure){
    next();
  }
  else{
    response.redirect('https://' + request.headers.host + request.url)
  }
});

app.use(express.static('./public'));
/*
app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});
*/
//Below is recommended by host
app.get('/', function(request, response) {
  response.redirect('https://carloscastillo.us/tls');
});

app.get('/tls', function(request, response) {
  console.log('I\'m here over an encrypted channel now!!!!!!');
  console.log('Last checkin on Oct 14, 2019.  Yup.');
  response.render('pages/index');
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.  These are not the droids you are looking for.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
