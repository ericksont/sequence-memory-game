const express = require('express');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/updatescore/:lvl/:name/:score', function(req, res) {
    const level = req.params.lvl;
    const name = req.params.name;
    const playesScore = req.params.score;

    const newScore = [];

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

    console.log(scoreData);
    
    res.send('Reading JSON FILE');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);