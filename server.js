'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.  I am currently working on this hope to get this up and running.  Last update worked on Nov. 28, 2018.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
