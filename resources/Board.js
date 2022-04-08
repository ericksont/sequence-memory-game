class Board{

    memoryGame;

    card = new Card();

    constructor(memoryGame){
        this.memoryGame = memoryGame;
    }

    downloadTimer;
    seconds;
    pausedTime = true;

    score = 0;

    loadBoard(){
        $("#start-page").hide();
        $("#board-page").show();

        this.startTime();
        this.startScore();
        this.loadCards();
    }

    loadCards(){        
        this.fillBoard(levels[this.memoryGame.level].totalCards);
        this.card.events();
    }

    fillBoard(totalCards){
        if(totalCards === 4) {
            let cards = this.memoryGame.cards.filter((obj,key)=>key <= 3);
            this.positionCards(cards, [1], 4);
        } else {
            this.positionCards(this.memoryGame.cards,[2,5], 3);
        }
    }

    positionCards(list,breakPositions,size) {
        let html = '';
        list.forEach((data,key)=>{
            html += `<div class="col-${size} p-1 h-50"><label id="${data}" class="shadow-sm card h-100"></label></div>`;
            if(breakPositions.includes(key))
                html += `<div class="w-100"></div>`;
        });
        $("#board-colors").html(html);
    }

    startTime() {

        this.seconds = levels[this.memoryGame.level].minTime;
        
        let milliseconds = 1000;
        let startMilliseconds =  Math.floor(Math.random() * 50);

        $("#time h3").text(`Time  ${this.seconds}:00`);

        this.downloadTimer = setInterval(() => {
            if(this.memoryGame.board.pausedTime === false) {
                milliseconds = this.processTime(milliseconds, startMilliseconds);
            }
        }, startMilliseconds);
    }

    processTime(milliseconds, startMilliseconds){
        if(milliseconds <= 0){
            milliseconds = 1000 +( milliseconds);
            this.processSeconds(milliseconds);
        } else {
            $("#time h3").text(`Time  ${this.seconds-1}:${milliseconds.toString().substring(0, 2)}`);
            milliseconds -= startMilliseconds
        }
        return milliseconds;
    }

    processSeconds(milliseconds){
        if((this.seconds-1) <= 0){
            clearInterval(this.downloadTimer); // game over 
            $("#time h3").text(`Time  00:00`);
        } else {
            this.seconds--;
            $("#time h3").text(`Time  ${this.seconds-1}:${milliseconds.toString().substring(0, 2)}`);
        }
    }

    startScore() {
        $("#score h3").text(`Score: 0 pts`);
    }
}