const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);