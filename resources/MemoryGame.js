class MemoryGame {

    level = ""; // EASY, MEDIUM, HARD
    status = ""; // STARTED, NOT_STARTED

    constructor(){
        this.level = "EASY";
        this.status = "NOT_STARTED";
        this.readPositions();
    }

    readPositions(lvl = "EASY"){
        $.get("http://localhost:3000/getJson/");
        
    }

    start(){
        
    }



}

const memoryGame = new MemoryGame();