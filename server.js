const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const postNewLocationRouter = require('./API/PostNewLocation.js');
const getSecretLocationsRouter = require('./API/GetSecretLocations.js');

const app = express();
const PORT = 3001;

app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', postNewLocationRouter);
app.use('/', getSecretLocationsRouter);

const url = 'mongodb://localhost/MVP';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('open', () => {
  console.log('Connection to MVP database has been established!')
})

app.get('/', (req, res) => {
  res.send('Serving HideAway v0.00');
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}...Happy Hacking!`)
})