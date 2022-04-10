class MemoryGame {

    currentLevel = "EASY"; // EASY, MEDIUM, HARD
    currentStatus = "NOT_STARTED"; // STARTED, NOT_STARTED
    
    menu = new Menu(this);
    score = new Score(this);
    player = new Player();
    startPage = new StartPage(this);
    board = new Board(this);

    playGame(){
        if(this.player.name === '' && $("#name").val() === '') 
            Message.alert("Warning!", "Fill out player name", "fa fa-warning")
        else {

            this.cleanGame();

            this.currentStatus = "STARTED";
            
            if($("#name").val() !== '')
                this.player.name = $("#name").val();

            this.board.load();
            
        }
    }

    gameOver() {
        this.board.time.stopTime();
        fetch('');
        Message.alert("Finished!", `Your score is <b>${this.player.score}</b>.`, "fa-solid fa-hands-clapping", this.cleanGame)
    }

    cleanGame(){
        memoryGame.currentStatus = "NOT_STARTED";
        memoryGame.player.score = 0;
        memoryGame.board.sequence = [];
        memoryGame.startPage.load()
    }

}

const memoryGame = new MemoryGame();