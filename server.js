const express = require('express');

const app = express();
const PORT = 3015;

app.get('/', (req, res) => {
  res.send('Serving HideAway v0.00');
});

app.get('/', (req, res) => {
  // this is for goodlemapsAPI
});



app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}...Happy Hacking!`)
})