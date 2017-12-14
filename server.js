const express = require('express')
const app = express()

const whatToMine = require('./apis/whatToMine.js');

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/miningdata', (req, res)=>{
  whatToMine.getAllCoins().then(data => {
    res.send(data);
  }).catch(err => {
    res.send("fail");
  })
})

app.listen(3000)