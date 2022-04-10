const express = require('express');
const path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(bodyParser.json())

app.post('/updatescore', (req, res) => {
    
    const level = req.body.level;
    const name = req.body.name;
    const playesScore = req.body.score;

    const rawdata = fs.readFileSync('data/score.json');
    const scoreData = JSON.parse(rawdata);

    let levelList = scoreData[level].sort((a,b)=>b.score-a.score);
    levelList.forEach(element => {
        if(playesScore > element.score) {
            levelList.pop();
            levelList.push({ "name": name, "score": parseInt(playesScore)});
            return;
        }
    });
    scoreData[level] = levelList;

    fs.writeFileSync('data/score.json', JSON.stringify(scoreData));
    
    res.send('UPDATE JSON FILE');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);