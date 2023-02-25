const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

console.log("TEST")

app.listen(3000);