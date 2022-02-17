const express = require('express')
const path = require('path')
const volleyball = require('volleyball');

const app = express()


app.use(volleyball);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//urlencoded() function is a built-in middleware function in Express. 
//It parses incoming requests with urlencoded payloads and is based on body-parser.


// static middleWare

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

//ChangeME, for default and error page? 
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})


//errors 
app.use((err, req, res, next) => {
 
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;