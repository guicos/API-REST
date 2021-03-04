const express = require('express');
const consign = require('consign');
const app = express();

app.use(express.json());

consign()
    .include('./app/router.js')
    .then('./app/controllers.js')
    .into(app)

module.exports = app;