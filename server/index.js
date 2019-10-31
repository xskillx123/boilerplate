const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser= require9'body-parser');
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')))


app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });