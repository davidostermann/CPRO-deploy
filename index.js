require('dotenv').config()
const express = require('express')
const app = express()
const api = require('./server/app')

app.use('/api', api);
app.use('/', express.static(__dirname + '/front/dist'));
app.use('/*', (req, res) => res.sendFile(__dirname + '/front/dist/index.html'));

const port = process.env.PORT || 3000

app
  .listen(port, () => {
    console.log(`Connected server on port ${port} ( http://localhost:${port} )`)
  })
  .on('error', err => console.log('erreur de connexion : ', err))