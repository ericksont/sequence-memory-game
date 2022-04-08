class Score {
    readPositions(){
        $.getJSON('/data/score.json', result => {
            let levelList = result[memoryGame.level].sort((a,b)=>b.score-a.score);
            let html = '';
            let position = 1;
            levelList.forEach(data=>{
                html += this.builScore(data, position);
                position++;
            });
            $(`#score`).html(html);
         });
    }

    builScore(data, position){
        return `<div class="list-group-item list-group-item-action py-3 lh-tight">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">${data.name}</strong>
                        <label>${position}º</label>
                    </div>
                    <div class="col-10 mb-1 small">Score: <b> ${data.score} Pts</b> </div>
                </div>`;
    }
}

const objScore = new Score();